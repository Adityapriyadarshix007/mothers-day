'use client';

import { useRef, useEffect, useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
  className?: string;
  buttonBaseClassName?: string;
  buttonActiveClassName?: string;
  buttonInactiveClassName?: string;
  showArrows?: boolean;
}

export default function CategoryFilter({
  categories = [],
  selectedCategory,
  onSelect,
  className = '',
  buttonBaseClassName = 'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200',
  buttonActiveClassName = 'bg-rose-600 text-white shadow-md',
  buttonInactiveClassName = 'bg-white text-rose-800 border border-rose-200 hover:bg-rose-50',
  showArrows = true
}: CategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [needsArrows, setNeedsArrows] = useState(false);

  // Check if scrolling is needed
  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setNeedsArrows(
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [categories]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Categories Container */}
      <div
        ref={containerRef}
        className="flex flex-nowrap gap-2 px-2 py-2 overflow-x-auto scrollbar-hide"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`${buttonBaseClassName} ${
              selectedCategory === category
                ? buttonActiveClassName
                : buttonInactiveClassName
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && needsArrows && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-5 h-5 text-rose-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-5 h-5 text-rose-600" />
          </button>
        </>
      )}
    </div>
  );
}

// Simple arrow icons (could also import from Lucide or other library)
function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}