"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4A017", "#FFF8F0", "#7A4F3A", "#F4A261"],
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return null;
}