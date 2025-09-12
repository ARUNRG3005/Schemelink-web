
import React from 'react';
import type { Translations } from '../types';

interface HowItWorksProps {
  t: Translations;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  return (
    <section id="how" className="mt-8 md:mt-12 bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <h3 className="text-xl font-bold text-red-900 mb-3">{t.howItWorks}</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Create a profile (age, category, income).</li>
            <li>Get personalized scheme matches.</li>
            <li>See checklist & apply via official link.</li>
          </ol>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <h3 className="text-xl font-bold text-red-900 mb-3">{t.benefits}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Personalized recommendations</li>
            <li>Document checklist & scanner</li>
            <li>Offline-ready instructions</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <h3 className="text-xl font-bold text-red-900 mb-3">{t.testimonials}</h3>
          <blockquote className="text-gray-600 italic">
            "SchemeLink helped me find 2 scholarships I didn't know I was eligible for!"
            <footer className="mt-2 not-italic text-gray-500">— Poongodi</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
