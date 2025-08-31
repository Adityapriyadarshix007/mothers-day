import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-gradient-to-br from-pink-50/90 to-rose-50/90 shadow-[0_-4px_6px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* About Section - Perfectly Centered */}
          <div className="w-full flex flex-col items-center space-y-3">
            <h3 className="text-lg font-semibold text-rose-800">About Us</h3>
            <p className="text-rose-600/90 max-w-md mx-auto">
              A heartfelt tribute to mothers everywhere, celebrating their love, wisdom, and strength.
            </p>
            <Link
              href="https://www.linkedin.com/in/aditya-priyadarshi-026816282"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-800 font-medium hover:underline"
            >
              My LinkedIn Profile
            </Link>
          </div>

          {/* Connect Section - Centered */}
          <div className="w-full space-y-3">
            <h3 className="text-lg font-semibold text-rose-800">Connect</h3>
            <Link 
              href="mailto:adityapriyadarshi02@gmail.com" 
              className="inline-block text-rose-600 font-medium hover:text-rose-800 hover:underline bg-white/70 px-6 py-2 rounded-lg"
            >
              Email Me
            </Link>
          </div>

          {/* Perfectly Centered Copyright */}
          <div className="w-full pt-4 border-t border-rose-200 text-center">
            <p className="text-sm text-rose-700 mx-auto w-fit">
              © {currentYear} Mother's Day Tribute
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}