"use client";

import { useState, useEffect } from "react";

const wishes = [
  {
    emoji: "🎂",
    front: "A Wish For You",
    back: "May this birthday mark the beginning of a year filled with joy, laughter, and every blessing you deserve, Coach Salem!",
  },
  {
    emoji: "🙏",
    front: "A Prayer For You",
    back: "May God's grace surround you today and always. You are a gift to everyone whose life you touch. Happy Birthday!",
  },
  {
    emoji: "💪",
    front: "For The Coach",
    back: "Your dedication and passion inspire us every single day. Thank you for pushing us to be better. Happy Birthday Coach Salem!",
  },
  {
    emoji: "🌟",
    front: "You Are A Star",
    back: "The world is brighter because you are in it. Keep shining, Coach Salem. Wishing you an extraordinary year ahead!",
  },
  {
    emoji: "💛",
    front: "From The Heart",
    back: "Words can't fully express how much you mean to us. Thank you for everything. Today we celebrate YOU!",
  },
  {
    emoji: "🎉",
    front: "Celebrate Today",
    back: "Today is your day Coach Salem! Forget everything else and just enjoy every single moment of your special day!",
  },
];

const balloons = [
  { emoji: "🎈", left: "5%", delay: "0s", duration: "6s" },
  { emoji: "🎊", left: "15%", delay: "1s", duration: "8s" },
  { emoji: "🎈", left: "25%", delay: "2s", duration: "7s" },
  { emoji: "🎊", left: "40%", delay: "0.5s", duration: "9s" },
  { emoji: "🎈", left: "55%", delay: "1.5s", duration: "6.5s" },
  { emoji: "🎊", left: "65%", delay: "3s", duration: "8s" },
  { emoji: "🎈", left: "75%", delay: "0.8s", duration: "7.5s" },
  { emoji: "🎊", left: "88%", delay: "2.5s", duration: "6s" },
];
function WishCard({
  emoji,
  front,
  back,
  index,
  visible,
}: {
  emoji: string;
  front: string;
  back: string;
  index: number;
  visible: boolean;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer w-full h-48"
      style={{
        perspective: "1000px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(60px)",
        transition: `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`,
        animation: visible ? `float 3s ease-in-out ${index * 0.3}s infinite` : "none",
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          transition: "transform 0.7s ease",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-brown rounded-2xl flex flex-col items-center justify-center gap-3 shadow-md"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-4xl">{emoji}</span>
          <p className="font-heading text-cream text-lg font-bold text-center px-4">
            {front}
          </p>
          <p className="font-body text-gold text-xs tracking-widest uppercase">
            Tap to reveal
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-gold rounded-2xl flex items-center justify-center shadow-md px-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="font-body text-brown text-center leading-relaxed">
            {back}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WishesPage() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(wishes.length).fill(false)
  );

  useEffect(() => {
    wishes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 1000);
    });
  }, []);

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center py-16 px-8 relative overflow-hidden">

      {/* Balloons */}
      {balloons.map((balloon, i) => (
        <div
          key={i}
          className="fixed text-5xl pointer-events-none"
          style={{
            left: balloon.left,
            bottom: "-10%",
            animation: `riseUp ${balloon.duration} ${balloon.delay} ease-in infinite`,
          }}
        >
          {balloon.emoji}
        </div>
      ))}

      <h1 className="font-heading text-4xl font-bold text-brown text-center relative z-10">
        Wishes & Prayers 🙏
      </h1>
      <p className="font-body text-brown-light text-center mt-3 max-w-md relative z-10">
        Tap each card to reveal a special wish for Coach Salem!
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
        {wishes.map((wish, index) => (
          <WishCard
            key={index}
            {...wish}
            index={index}
            visible={visibleCards[index]}
          />
        ))}
      </div>
    </main>
  );
}