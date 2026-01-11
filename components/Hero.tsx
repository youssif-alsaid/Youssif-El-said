
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 flex flex-col items-center text-center transition-colors">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6">
          Youssif El-said
        </h1>
        <p className="text-amber-600 dark:text-amber-400 text-xl md:text-2xl font-black mb-8">
          Front-End Developer & Designer
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10 font-bold leading-relaxed">
          Building modern web interfaces with React, Tailwind, and Bootstrap. 
          Focusing on crafting interactive, accessible, and high-performance digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a 
            href="#portfolio" 
            className="orange-gradient text-white dark:text-slate-950 font-black px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-amber-500/30"
          >
            View My Work <ChevronRight className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="border-2 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white font-black px-8 py-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Let's Talk
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">10+</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">2+</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">9+</div>
            <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
