
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const orbitItems = [
    { name: 'React', icon: '⚛️', angle: 0 },
    { name: 'HTML / CSS', icon: '</>', angle: 72 },
    { name: 'UI / UX', icon: '🎨', angle: 144 },
    { name: 'Tailwind', icon: '🌊', angle: 216 },
    { name: 'Bootstrap', icon: 'B', angle: 288 },
    { name: 'JavaScript', icon: 'JS', angle: 324 },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Turning creative ideas into functional, modern web experiences</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skill Orbit */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <div className="absolute w-[300px] h-[300px] border border-slate-200 dark:border-slate-800 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute w-[200px] h-[200px] border border-slate-100 dark:border-slate-700 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            
            <div className="z-10 w-24 h-24 orange-gradient rounded-full flex items-center justify-center shadow-xl shadow-amber-500/30">
              <span className="text-3xl">⚡</span>
            </div>

            {orbitItems.map((item, i) => {
              const radius = 150;
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={item.name}
                  className="absolute p-4 glass rounded-2xl flex flex-col items-center justify-center group hover:scale-110 transition-transform shadow-lg border border-slate-200 dark:border-white/5"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{item.name}</span>
                </div>
              );
            })}
          </div>

          {/* Skill Details */}
          <div className="space-y-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="glass p-6 rounded-3xl group border border-slate-200 dark:border-white/5 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-amber-400/10 rounded-xl text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-slate-900 dark:text-white">{skill.name}</h4>
                      <span className="text-amber-600 dark:text-amber-400 text-sm font-bold">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full orange-gradient transition-all duration-1000 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
