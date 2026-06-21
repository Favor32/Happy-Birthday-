"use client";

import { useEffect, useState } from "react";

const lines = [
  "Coach Salem, thank you for everything you do.",
  "Your dedication and patience inspire everyone around you.",
  "Your passion pushes us to be better every single day.",
  "Today we celebrate you —",
  "not just as a coach, but as an amazing person.",
  "Happy Birthday! 🎂",
];

export default function Appreciation() {
  const [visibleLines, setVisibleLines] = useState<boolean[]>(
    new Array(lines.length).fill(false)
  );

  useEffect(() => {
    // Start after the greeting animation finishes (1.5s delay)
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, 1500 + index * 600);
    });
  }, []);

  return (
    <div className="mt-16 max-w-xl mx-auto text-center px-4">
      <h3
        className="font-heading text-3xl font-bold text-brown mb-6"
        style={{
          opacity: visibleLines[0] ? 1 : 0,
          transform: visibleLines[0] ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        A Few Words 💛
      </h3>

      <div className="flex flex-col gap-3">
        {lines.map((line, index) => (
          <p
            key={index}
            className="font-body text-brown-light text-lg leading-relaxed"
            style={{
              opacity: visibleLines[index] ? 1 : 0,
              transform: visibleLines[index] ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}