
import React from 'react';
import type { Lang, Translations } from '../types';

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as Lang);
  };

  const navLinks = [
    { href: "#home", text: t.home },
    { href: "#how", text: t.how },
    { href: "#schemes", text: t.schemes },
    { href: "#about", text: t.about },
  ];

  return (
    <header className="bg-red-900 text-white border-b-4 border-yellow-500 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
            SL
          </div>
          <div>
            <h1 className="text-xl font-bold">{t.siteName}</h1>
            <p className="text-xs opacity-80">{t.tagline}</p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-4">
          <nav className="flex items-center gap-2 flex-wrap">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="px-3 py-2 rounded-md hover:bg-red-800 transition-colors duration-200 text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
            <a 
              href="#upload" 
              className="px-4 py-2 rounded-md bg-yellow-500 text-red-900 font-bold hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105"
            >
              {t.uploadDocs}
            </a>
          </nav>
          <select
            aria-label="Language"
            className="bg-blue-900 text-white border-none rounded-md px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-yellow-400"
            value={lang}
            onChange={changeLang}
          >
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
