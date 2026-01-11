
import React from 'react';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Front-End Developer crafting clean, modern, and responsive web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-2 orange-gradient rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src="https://picsum.photos/seed/youssif/800/800" 
                alt="Youssif El-said" 
                className="relative rounded-3xl object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
              />
            </div>
          </div>
          
          <div className="text-left space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              I'm <span className="text-amber-600 dark:text-white font-extrabold">Youssif Elsaid</span>, a passionate Front-End Developer with over 2 years of hands-on experience. I specialize in <span className="text-amber-600 font-bold">React.js, JavaScript, and Tailwind CSS</span>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              My goal is to transform creative ideas into functional, visually appealing digital products with smooth user experiences and clean, maintainable code. 
            </p>
            <div className="flex gap-4 pt-4">
               <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="block text-amber-500 font-bold text-xl">10+</span>
                  <span className="text-xs text-slate-500 font-bold uppercase">Projects</span>
               </div>
               <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="block text-blue-500 font-bold text-xl">9+</span>
                  <span className="text-xs text-slate-500 font-bold uppercase">Clients</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-400/10 rounded-2xl">
                <Target className="text-amber-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Mission</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              To design and develop modern, user-friendly web interfaces that help individuals and businesses grow their online presence efficiently.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-slate-200/50 dark:border-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-400/10 rounded-2xl">
                <Eye className="text-blue-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Vision</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              To build a seamless connection between technology and design, creating digital experiences that are both powerful and enjoyable to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
