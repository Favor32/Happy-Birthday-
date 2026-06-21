"use client";

import { useEffect, useState } from "react";

export default function BirthdayGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <h1 className="font-heading text-3xl md:text-7xl font-bold text-brown text-center">
        Happy Birthday,
      </h1>
     <h2 className="font-heading text-2xl md:text-6xl font-bold text-gold text-center mt-2">
        Coach Salem! 🎂
      </h2>
      <p className="font-body mt-6 text-lg text-brown-light text-center max-w-md mx-auto">
        Wishing you a day as wonderful as you are.
      </p>
    </div>
  );
}