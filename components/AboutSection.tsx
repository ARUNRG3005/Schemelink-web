
import React from 'react';
import type { Translations } from '../types';

interface AboutSectionProps {
  t: Translations;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section id="about" className="bg-slate-100 border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-4 text-red-900">{t.aboutTitle}</h2>
      <div className="bg-white border-l-4 border-red-800 p-6 rounded-r-lg text-gray-700 space-y-4">
        <p>{t.aboutText}</p>
        <p>
          This prototype includes client-side features: language switching, search & filter,
          upload preview, and a simulated upload flow. To make this production-ready, it would need a
          secure backend (e.g., Node.js/FastAPI), a database (e.g., MongoDB/PostgreSQL), and robust authentication (e.g., JWT or Firebase Auth).
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
