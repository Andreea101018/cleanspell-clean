"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: readonly string[];
  interval?: number;
};

export default function AutoCarousel({
  images,
  interval = 3500,
}: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    // 🔹 IMMEDIATE first transition (no waiting)
    const immediate = setTimeout(() => {
      setIndex(1 % images.length);
    }, 0);

    // 🔹 Continuous interval afterwards
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => {
      clearTimeout(immediate);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images, interval]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-200">
      {/* IMAGES */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === index}
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* BOTTOM GRADIENT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
