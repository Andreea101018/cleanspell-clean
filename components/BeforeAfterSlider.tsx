"use client";

import { useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  title?: string;
};

export default function BeforeAfterSlider({ before, after, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-lg font-medium text-[#1F2E45]">
          {title}
        </h3>
      )}

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl select-none cursor-col-resize"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* AFTER */}
        <img
          src={after}
          alt="Efter rengøring"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* BEFORE */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Før rengøring"
            className="w-full h-full object-cover"
          />
        </div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow"
          style={{ left: `${position}%` }}
        />

        {/* HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                     bg-white shadow flex items-center justify-center"
          style={{ left: `calc(${position}% - 16px)` }}
        >
          <div className="w-1 h-4 bg-[#64748B]" />
        </div>

        {/* LABELS */}
        <span className="absolute top-4 left-4 text-xs font-medium bg-white/90 px-3 py-1 rounded-full">
          Før
        </span>

        <span className="absolute top-4 right-4 text-xs font-medium bg-white/90 px-3 py-1 rounded-full">
          Efter
        </span>
      </div>
    </div>
  );
}
