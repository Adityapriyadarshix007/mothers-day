import { notFound } from 'next/navigation';
import rawArticles from '@/data/articles.json';
import { Heart } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content: string;
  likes: number;
}

const articlesData = rawArticles as Article[];

export default function ArticlePage() {
  // Get the ID from the URL path
  const pathSegments = window.location.pathname.split('/');
  const articleId = pathSegments[pathSegments.length - 1];
  
  const article = articlesData.find((a) => a.id === articleId);
  const relatedArticles = articlesData.filter((a) => a.id !== articleId).slice(0, 2);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen py-8 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Article Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 mb-12 border border-white/30">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>{article.readTime}</span>
              <span className="mx-2">•</span>
              <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm">
                {article.category}
              </span>
              <div className="ml-auto flex items-center">
                <Heart className="w-5 h-5 text-rose-600 mr-1" />
                <span className="text-gray-600">{article.likes} likes</span>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-8">{article.excerpt}</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-6">{article.content}</p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-rose-200/50">
          <h2 className="text-2xl font-bold mb-8 text-rose-800">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="bg-white/70 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={relatedArticle.imageUrl}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-2 py-1 text-xs font-medium bg-rose-100 text-rose-800 rounded-full">
                      {relatedArticle.category}
                    </span>
                    <span className="ml-auto text-sm text-gray-500 flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-rose-500" />
                      {relatedArticle.likes}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-rose-800">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{relatedArticle.excerpt}</p>
                  <div className="text-sm text-gray-500">{relatedArticle.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const dynamicParams = true;
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata() {
  const pathSegments = window.location.pathname.split('/');
  const articleId = pathSegments[pathSegments.length - 1];
  const article = articlesData.find((a) => a.id === articleId);
  
  return {
    title: article?.title || 'Article Not Found',
    description: article?.excerpt || 'Discover more articles',
    openGraph: {
      images: [article?.imageUrl || '/default-og-image.jpg'],
    },
  };
}