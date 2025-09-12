
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SchemeList from './components/SchemeList';
import UploadSection from './components/UploadSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { TRANSLATIONS, SAMPLE_SCHEMES } from './constants';
import type { Lang, Scheme } from './types';

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [query, setQuery] = useState<string>('');
  const [region, setRegion] = useState<string>('All');
  
  const t = TRANSLATIONS[lang];
  const schemes: Scheme[] = SAMPLE_SCHEMES;

  const filteredSchemes = useMemo(() => {
    return schemes.filter((s) => {
      const lowerCaseQuery = query.toLowerCase();
      const matchesQuery =
        !query ||
        s.title.toLowerCase().includes(lowerCaseQuery) ||
        s.tags.join(' ').toLowerCase().includes(lowerCaseQuery);
      const matchesRegion = region === 'All' || region === t.allRegions || s.region === region;
      return matchesQuery && matchesRegion;
    });
  }, [schemes, query, region, t.allRegions]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero 
          query={query} 
          setQuery={setQuery} 
          region={region} 
          setRegion={setRegion} 
          t={t} 
        />
        <div className="container mx-auto px-4 space-y-8 md:space-y-12">
          <HowItWorks t={t} />
          <SchemeList schemes={filteredSchemes} t={t} />
          <UploadSection schemes={schemes} t={t} />
          <AboutSection t={t} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
