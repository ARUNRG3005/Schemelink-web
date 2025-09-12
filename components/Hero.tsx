
import React, { useState, useEffect } from 'react';
import type { Translations } from '../types';

interface HeroProps {
  query: string;
  setQuery: (query: string) => void;
  region: string;
  setRegion: (region: string) => void;
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ query, setQuery, region, setRegion, t }) => {
  const [heroY, setHeroY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY / 2, 120);
      setHeroY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearchClick = () => {
    const el = document.querySelector("#schemes");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-900 to-red-900 text-white py-20 px-4 text-center overflow-hidden"
      style={{
        transform: `translateY(${heroY * -0.15}px)`,
        backgroundPositionY: `${-heroY * 0.3}px`,
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{t.heroTitle}</h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg opacity-90">{t.heroSubtitle}</p>

        <div className="flex flex-wrap gap-2 justify-center items-center bg-white/10 p-4 rounded-xl max-w-2xl mx-auto shadow-lg backdrop-blur-sm">
          <input
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-grow p-3 rounded-lg border-2 border-transparent focus:border-yellow-400 focus:ring-0 text-gray-800 min-w-[200px]"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="p-3 rounded-lg border-2 border-transparent focus:border-yellow-400 focus:ring-0 text-gray-800 min-w-[150px]"
          >
            <option>{t.allRegions}</option>
            <option>Andhra Pradesh</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>
            <option>Central</option>
            <option>State</option>
          </select>
          <button
            className="p-3 px-6 bg-red-800 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            onClick={handleSearchClick}
          >
            {t.search}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
