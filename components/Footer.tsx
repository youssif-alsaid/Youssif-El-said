
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 text-center border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-dark">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
        &copy; {currentYear} <span className="text-slate-900 dark:text-white font-bold">Youssif El-said</span>. Crafted with passion & React.
      </p>
    </footer>
  );
};

export default Footer;
