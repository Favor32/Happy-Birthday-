"use client";

import Wishes from "./components/Wishes";
import Confetti from "./components/Confetti";
import Appreciation from "./components/Appreciation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    // First image appears after 1s
    setTimeout(() => setShowFirst(true), 1000);
    // Second image appears after 2s
    setTimeout(() => setShowSecond(true), 2000);
  }, []);

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 py-16 relative">
      <Confetti />

      {/* Top-left photo */}
      <div
      className="fixed top-20 right-4 md:top-6 md:left-64 w-20 h-20 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-gold z-10"
        
        style={{
           opacity: showFirst ? 1 : 0,
                  transform: showFirst ? "translateX(0)" : "translateX(-150px)",
         transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
      >
        <Image
          src="/images/pic4.jpg"
          alt="Coach Salem"
          width={144}
          height={144}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom-right photo */}
      <div
        className="fixed bottom-6 left-4 md:bottom-6 md:left-auto md:right-10 w-20 h-20 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-brown z-10"
       style={{
         opacity: showSecond ? 1 : 0,
         transform: showSecond ? "translateX(0)" : "translateX(150px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Image
          src="/images/pic8.jpg"
          alt="Coach Salem"
          width={144}
          height={144}
          className="w-full h-full object-cover"
        />
      </div>

      <Wishes />
      <Appreciation />
    </main>
  );
}
  







