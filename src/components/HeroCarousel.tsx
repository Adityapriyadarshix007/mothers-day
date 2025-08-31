"use client";

import { useState, useEffect } from "react";
import type { Article } from "@/types/article";
import articles from "@/data/articles.json";

interface HeroCarouselProps {
  className?: string;
}

export default function HeroCarousel({ className = "" }: HeroCarouselProps) {
  const featured: Article[] = articles.slice(0, 3);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setIndex((prev) => (prev - 1 + featured.length) % featured.length);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => next(), 8000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-xl ${className}`}>
      {/* Image */}
      <img
        src={featured[index].imageUrl}
        alt={featured[index].title}
        className="w-full h-72 sm:h-96 object-cover transition-all duration-500"
      />

      {/* Text overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end px-6 py-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
          {featured[index].title}
        </h2>
        <p className="text-base sm:text-lg max-w-xl drop-shadow">
          {featured[index].excerpt}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md transition"
      >
        →
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featured.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}