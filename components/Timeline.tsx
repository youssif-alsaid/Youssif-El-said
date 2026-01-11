
import React, { useState, useEffect, useRef } from 'react';
import { TIMELINE_DATA } from '../constants';
import { TimelineCategory } from '../types';

const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<TimelineCategory>('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredData = TIMELINE_DATA.filter(
    item => filter === 'All' || item.category === filter
  );

  const categories: TimelineCategory[] = ['All', 'Education', 'Work', 'Projects'];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const startTrigger = viewportHeight * 0.8;
      const totalHeight = rect.height;
      const currentScroll = -rect.top + startTrigger;
      
      let progress = (currentScroll / totalHeight) * 100;
      progress = Math.min(Math.max(progress, 0), 100);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filter]);

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/10 transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-slate-600 dark:text-slate-400">A visual story of my professional and educational growth</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'orange-gradient text-white shadow-lg shadow-amber-500/30 scale-105' 
                : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-amber-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={containerRef} className="relative">
          {/* Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-slate-300 dark:bg-slate-800 md:-translate-x-1/2 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full orange-gradient transition-all duration-150 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`glass p-6 rounded-3xl relative group border border-slate-200 dark:border-transparent hover:border-amber-400/30 transition-all ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-600 dark:text-amber-400 text-xs font-black rounded-full mb-3 uppercase tracking-wider border border-amber-500/20">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-amber-500 font-bold text-sm mb-3">{item.subtitle}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded border border-slate-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.bulletPoints.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {item.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-bold">
                            <span className="text-amber-500 mt-1">●</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                  scrollProgress > (index / filteredData.length) * 100 
                  ? 'orange-gradient shadow-lg shadow-amber-500/50 scale-110' 
                  : 'bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-800 shadow-md'
                }`}>
                  <div className={scrollProgress > (index / filteredData.length) * 100 ? 'text-white' : 'text-slate-500 dark:text-slate-400'}>
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
