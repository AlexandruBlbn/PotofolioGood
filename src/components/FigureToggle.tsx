"use client";
import { useState } from "react";

// Two views of one project image (e.g. result and architecture), switchable by click, tap or keyboard.
export default function FigureToggle({ views }: { views: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="relative h-full w-full">
      {views.map((v, i) => (
        <div key={v.label} hidden={i !== active} className="absolute inset-0">{v.content}</div>
      ))}
      <div role="group" aria-label="Choose image" className="absolute right-3 top-3 z-10 flex border border-ink bg-black/80 backdrop-blur-sm">
        {views.map((v, i) => (
          <button key={v.label} type="button" aria-pressed={i === active} onClick={() => setActive(i)}
            className={`mono cursor-pointer px-2.5 py-1.5 text-[10px] transition-colors ${i === active ? "bg-white text-ink" : "text-white/80 hover:text-white"}`}>
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
