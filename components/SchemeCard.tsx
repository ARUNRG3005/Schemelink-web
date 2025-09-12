
import React from 'react';
import type { Scheme, Translations } from '../types';

interface SchemeCardProps {
  scheme: Scheme;
  t: Translations;
}

const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, t }) => {
  const handleApplyClick = () => {
    alert(`${t.apply} — ${scheme.title} (demo)`);
  };
  
  const handleDetailsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="bg-white p-5 rounded-lg border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 h-full">
      <div className="flex items-center gap-4 mb-3">
        <div className="text-4xl">{scheme.emoji}</div>
        <h3 className="text-lg font-bold text-blue-900">{scheme.title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{scheme.desc}</p>
      <p className="font-semibold text-yellow-700 my-2 text-sm">
        <strong className="text-gray-700">💰 {t.fundLabel}:</strong> {scheme.fund}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {scheme.tags.map((tag) => (
          <span key={tag} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4">
        <button
          className="bg-red-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-800 transition-all duration-200 transform hover:scale-105"
          onClick={handleApplyClick}
        >
          {t.apply}
        </button>
        <a
          className="text-sm text-blue-800 hover:underline"
          href="#about"
          onClick={handleDetailsClick}
        >
          Details
        </a>
      </div>
    </article>
  );
};

export default SchemeCard;
