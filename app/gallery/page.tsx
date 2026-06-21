"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/images/pic4.jpg", alt: "Coach Salem - Photo 1" },
  { src: "/images/pic5.jpg", alt: "Coach Salem - Photo 2" },
  { src: "/images/pic6.jpg", alt: "Coach Salem - Photo 3" },
  { src: "/images/pic7.jpg", alt: "Coach Salem - Photo 4" },
  { src: "/images/pic8.jpg", alt: "Coach Salem - Photo 5" },
  { src: "/images/pic10.jpg", alt: "Coach Salem - Photo 6" },
];

export default function GalleryPage() {
  const [visiblePhotos, setVisiblePhotos] = useState<boolean[]>(
    new Array(photos.length).fill(false)
  );

  useEffect(() => {
    photos.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePhotos((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 700);
    });
  }, []);

  return (
    <main className="min-h-screen bg-cream flex flex-col items-center py-16 px-8">
      <h1 className="font-heading text-4xl font-bold text-brown text-center">
        Gallery 📸
      </h1>
      <p className="font-body text-brown-light text-center mt-3 max-w-md">
        A few moments with the one and only Coach Salem!
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {photos.map((photo, index) => {
          const fromLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{
                opacity: visiblePhotos[index] ? 1 : 0,
                transform: visiblePhotos[index]
                  ? "translateX(0)"
                  : fromLeft
                    ? "translateX(-150px)"
                    : "translateX(150px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white px-6 py-4">
                <p className="font-heading text-brown text-lg font-bold">
                  Coach Salem 🎂
                </p>
                <p className="font-body text-brown-light text-sm mt-1">
                  A special moment worth remembering 💛
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}