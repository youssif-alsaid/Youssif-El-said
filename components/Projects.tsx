
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            A showcase of projects demonstrating creativity, UI design, and front-end development skills across various web applications and interactive platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group glass rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 border border-slate-200 dark:border-white/5 shadow-xl">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.link} className="p-4 bg-amber-500 rounded-full text-white shadow-xl shadow-amber-500/30 transform hover:scale-110 transition-transform">
                    <ExternalLink />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link} className="text-slate-400 hover:text-amber-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black rounded uppercase border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
