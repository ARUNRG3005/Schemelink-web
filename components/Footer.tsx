
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-red-900 text-white border-t-4 border-yellow-500">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} SchemeLink — Prototype</p>
        <p>Built with ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
