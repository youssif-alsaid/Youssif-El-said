
import React from 'react';
import { Mail, Github, Linkedin, Facebook, MapPin, Briefcase, MessageCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Let's Build Something Great</h2>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Have a project in mind or need a modern web experience? Let's talk!</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
                I'm always open to new collaborations and exciting challenges. Whether you need a landing page, a full web app, or UI/UX design — I can help you bring your idea to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-600 dark:text-amber-500 shadow-sm border border-amber-500/20">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest">Available For:</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-bold">Freelance, Front-End Dev, React Apps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-500 shadow-sm border border-blue-500/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white mb-1 uppercase tracking-widest">Location:</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-bold">Ismailia, Egypt (Available Worldwide)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* WhatsApp Call to Action */}
              <a 
                href="https://wa.me/201211756586" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-500/5 dark:hover:bg-emerald-500/10 border border-emerald-500/30 rounded-3xl transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500 rounded-2xl text-white shadow-lg shadow-emerald-500/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">WhatsApp</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">+20 1211756586</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="p-6 glass border border-slate-200 dark:border-white/5 rounded-3xl">
                <h4 className="text-sm font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Email Me</h4>
                <a href="mailto:yossefalsaid216@gmail.com" className="text-lg font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors break-all">
                  yossefalsaid216@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Social Links</h4>
                <div className="flex gap-4">
                  <a href="https://github.com" className="p-4 glass rounded-2xl text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all border border-slate-200 dark:border-white/10 shadow-md">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" className="p-4 glass rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all border border-slate-200 dark:border-white/10 shadow-md">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" className="p-4 glass rounded-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all border border-slate-200 dark:border-white/10 shadow-md">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
