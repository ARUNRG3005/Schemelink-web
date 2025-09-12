
import React from 'react';
import SchemeCard from './SchemeCard';
import type { Scheme, Translations } from '../types';

interface SchemeListProps {
  schemes: Scheme[];
  t: Translations;
}

const SchemeList: React.FC<SchemeListProps> = ({ schemes, t }) => {
  return (
    <section id="schemes" className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-6 text-red-900">{t.popularSchemes}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} t={t} />
        ))}
      </div>
    </section>
  );
};

export default SchemeList;
