import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-br from-pink-50/90 to-rose-50/90 shadow-[0_-4px_6px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Link 
            href="mailto:fv@in" 
            className="text-rose-600 font-medium hover:text-rose-800 hover:underline bg-white/70 px-4 py-2 rounded-lg transition-all"
          >
            fv@in
          </Link>
          <p className="text-sm text-rose-700 bg-white/70 px-4 py-2 rounded-lg">
            © 2025 Mother's Day Tribute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}