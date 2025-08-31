'use client';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import type { Article } from '@/types/article';

export default function ArticleCard({ article }: { article: Article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-rose-100 text-rose-800">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">
            {article.readTime} min read
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {article.title}
        </h3>

        <p className={`text-gray-600 text-sm mb-4 ${expanded ? '' : 'line-clamp-3'}`}>
          {expanded ? article.content : article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-rose-200 flex items-center justify-center">
              <Heart className="w-3 h-3 text-rose-600" />
            </div>
            <span className="text-xs text-gray-500">{article.likes} likes</span>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}