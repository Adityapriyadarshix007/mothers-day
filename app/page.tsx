'use client';

import { useState } from 'react';
import type { Article } from '@/types/article';
import rawArticles from '@/data/articles.json';

// Components
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import HeroCarousel from '@/components/HeroCarousel';
import Sidebar from '@/components/Sidebar';

// Constants
const articlesData: Article[] = rawArticles as Article[];
const uniqueCategories = ['All', ...new Set(articlesData.map((a) => a.category))];

export default function HomePage() {
  // State
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derived state
  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
                        article.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <HeroCarousel className="mb-12" />
        
        <SearchSection 
          search={search} 
          setSearch={setSearch} 
        />

        <CategoryFilterSection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ArticlesGrid articles={filteredArticles} />

        <SidebarSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Sub-components for better organization
function Header() {
  return (
    <header className="relative bg-gradient-to-br from-pink-100 to-rose-100 py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-pink-200 rounded-full h-64 w-64 opacity-20 transform -translate-x-1/4 -translate-y-1/4" />
        <div className="bg-rose-200 rounded-full h-80 w-80 opacity-20 transform translate-x-1/4 translate-y-1/4" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-4 font-serif tracking-tight">
          Mother's Day Celebration
        </h1>
        <div className="w-24 h-1 bg-rose-300 mx-auto mb-6 rounded-full" />
        <p className="text-lg md:text-xl text-rose-600 max-w-2xl mx-auto">
          Discover heartfelt tributes and gift ideas for the special woman in your life
        </p>
      </div>
    </header>
  );
}

interface SearchSectionProps {
  search: string;
  setSearch: (value: string) => void;
}

function SearchSection({ search, setSearch }: SearchSectionProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="w-full max-w-2xl">
        <SearchBar 
          value={search} 
          onChange={setSearch}
          inputClassName="shadow-sm hover:shadow-md transition-shadow"
          placeholder="Search Mother's Day ideas..."
        />
      </div>
    </div>
  );
}

interface CategoryFilterSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

// In your HomePage component file
function CategoryFilterSection({
  selectedCategory,
  setSelectedCategory
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <div className="relative my-12">
      <hr className="border-t border-gray-200" />
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4">
        <CategoryFilter
          categories={uniqueCategories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
          className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]"
          buttonBaseClassName="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
          buttonActiveClassName="bg-rose-600 text-white shadow-md"
          buttonInactiveClassName="bg-white text-rose-800 border border-rose-200 hover:bg-rose-50"
          showArrows={true}
        />
      </div>
    </div>
  );
}

interface ArticlesGridProps {
  articles: Article[];
}

function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <section className="mb-16">
      {articles.length > 0 ? (
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar">
          <div className="flex flex-nowrap gap-6">
            {articles.map((article) => (
              <ArticleCardWrapper key={article.id} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <NoArticlesFound />
      )}
    </section>
  );
}

interface ArticleCardWrapperProps {
  article: Article;
}

function ArticleCardWrapper({ article }: ArticleCardWrapperProps) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <ArticleCard article={article} />
    </div>
  );
}

function NoArticlesFound() {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium text-gray-500 mb-2">No articles found</h3>
      <p className="text-gray-400">Try adjusting your search or filter criteria</p>
    </div>
  );
}

function SidebarSection() {
  return (
    <aside className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <Sidebar />
    </aside>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-50 py-8 border-t border-rose-100">
      <div className="container mx-auto px-4 text-center text-rose-800">
        <p className="font-medium">© {new Date().getFullYear()} Mother's Day Tribute. Made with ❤️</p>
      </div>
    </footer>
  );
}