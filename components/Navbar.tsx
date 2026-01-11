
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="max-w-5xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-slate-200/50 dark:border-white/5">
        <a href="#home" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
          Youssif <span className="text-amber-500">El-said</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all hover:text-amber-500 ${
                activeSection === link.href.substring(1) 
                ? 'text-amber-500' 
                : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:scale-110 transition-transform border border-slate-300 dark:border-slate-700"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-300 dark:border-slate-700"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-slate-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-slate-200 dark:border-white/10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold transition-colors ${
                activeSection === link.href.substring(1) ? 'text-amber-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
