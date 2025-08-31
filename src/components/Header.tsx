'use client'; // Mark this as a Client Component

import Link from 'next/link';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

// Load fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-playfair'
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-dancing'
});

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-pink-100 to-rose-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Site Title with designer fonts */}
          <div className="text-center">
            <h1 className="text-rose-900 text-4xl md:text-5xl font-bold mb-2">
              A Celebration of
            </h1>
            <Link 
              href="/" 
              className="block group"
            >
              <span className={`text-6xl md:text-8xl font-black ${playfair.variable} font-sans text-rose-800 hover:text-rose-900 transition-colors leading-tight`}>
                Mother's Love
              </span>
              <span className={`text-4xl md:text-5xl ${dancing.variable} font-sans text-rose-600 block mt-2`}>
                Timeless • Pure • Unconditional
              </span>
            </Link>
            <p className="text-lg md:text-xl text-rose-600 mt-4 font-medium tracking-wider max-w-2xl mx-auto">
              Honoring the extraordinary women who shape our lives with their endless love and sacrifice
            </p>
          </div>

          {/* Floral divider */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-rose-200 rounded-full opacity-70"></div>
            <div className="text-3xl text-rose-400">✿</div>
            <div className="w-12 h-12 bg-rose-200 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </header>
  );
}