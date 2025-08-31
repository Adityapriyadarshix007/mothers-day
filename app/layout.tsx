import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';  // Corrected import path
import Footer from '@/components/Footer';  // Corrected import path
import '@/styles/globals.css';  // Corrected import path

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Lifetime of Love - Mother\'s Day Tribute',
  description: 'A tribute to mothers everywhere celebrating their love, wisdom and strength',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
        />
      </head>
      <body className={`${inter.className} bg-cover bg-center bg-fixed`} style={{backgroundImage: "url('/images/bg.jpg')"}}>
        <Header />

        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="text-center py-16 md:py-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mb-16 backdrop-blur-sm bg-white/80">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
                Celebrating Mother's Love
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                A heartfelt tribute to the unconditional love, endless patience, and unwavering strength of mothers everywhere.
              </p>
              <button className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                Share Your Story
              </button>
            </section>

            {/* Page Content */}
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}