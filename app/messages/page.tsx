"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Message = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function MessagesPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Load messages from Supabase
  async function loadMessages() {
    setLoading(true);
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading messages:", error);
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  }

  // Delete a message
  async function handleDelete(id: string) {
    const password = prompt("Enter password to delete this message:");
    if (password !== "123456") {
      alert("Wrong password!");
      return;
    }

    const { error } = await supabase
      .from("messages")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting message:", error);
    } else {
      await loadMessages();
    }
  }
  // Submit a new message
  async function handleSubmit() {
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from("messages")
      .insert([{ name, message }]);

    if (error) {
      console.error("Error sending message:", error);
    } else {
      setName("");
      setMessage("");
      await loadMessages();
    }
    setSubmitting(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center py-16 px-8">
      <h1 className="font-heading text-4xl font-bold text-brown text-center">
        Messages for Bro Salem 💌
      </h1>
      <p className="font-body text-brown-light text-center mt-3 max-w-md">
        Leave a birthday message for Bro Salem and let him know how much he means to you!
      </p>

      {/* Message Form */}
      <div className="mt-10 w-full max-w-lg bg-white rounded-2xl shadow-md p-8">
        <h2 className="font-heading text-2xl text-brown font-bold mb-6">
          Leave a Message 🖊️
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-body border border-brown-light rounded-xl px-4 py-3 text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Write your message here..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="font-body border border-brown-light rounded-xl px-4 py-3 text-brown bg-cream focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-gold text-brown font-body font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Send Message 💛"}
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="mt-12 w-full max-w-lg flex flex-col gap-6">
        <h2 className="font-heading text-2xl text-brown font-bold">
          What people are saying 💬
        </h2>

        {loading ? (
          <p className="font-body text-brown-light text-center">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="font-body text-brown-light text-center">
            No messages yet. Be the first! 💛
          </p>
        ) : (
          messages.map((msg) => (
            messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-gold relative"
            >
              <p className="font-body text-brown-light text-sm font-bold uppercase tracking-wide">
                {msg.name}
              </p>
              <p className="font-body text-brown mt-2 leading-relaxed">
                {msg.message}
              </p>
              <button
                onClick={() => handleDelete(msg.id)}
                className="absolute top-4 right-4 text-brown-light hover:text-red-500 transition-colors duration-300 text-lg"
              >
                🗑️
              </button>
            </div>
          ))
          ))
        )}
      </div>
    </main>
  );
}