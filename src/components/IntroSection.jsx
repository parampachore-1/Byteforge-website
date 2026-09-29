import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Cpu, ArrowUpRight, Lightbulb, Compass, Code2 } from 'lucide-react';

const IntroSection = () => {
  const featureCards = [
    {
      title: 'Innovation',
      icon: Zap,
      accentColor: 'from-sky-500/20 to-indigo-500/10',
      iconColor: 'text-sky-400',
      borderColor: 'group-hover:border-sky-500/40',
      glowColor: 'group-hover:shadow-sky-500/20',
      description:
        'Pioneering breakthrough software architectures and autonomous intelligent systems to redefine modern technology standards.',
      badge: '01 / CORE STRATEGY'
    },
    {
      title: 'Creativity',
      icon: Sparkles,
      accentColor: 'from-indigo-500/20 to-purple-500/10',
      iconColor: 'text-indigo-400',
      borderColor: 'group-hover:border-indigo-500/40',
      glowColor: 'group-hover:shadow-indigo-500/20',
      description:
        'Blending design thinking with advanced digital art to craft immersive user experiences that engage and inspire.',
      badge: '02 / USER EXPERIENCE'
    },
    {
      title: 'Technology',
      icon: Cpu,
      accentColor: 'from-purple-500/20 to-sky-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/40',
      glowColor: 'group-hover:shadow-purple-500/20',
      description:
        'Deploying resilient, cloud-native infrastructure engineered for speed, high scalability, and robust security.',
      badge: '03 / INFRASTRUCTURE'
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#080B16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-widest"
          >
            <span>Company Overview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Innovation That Moves Us Forward
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
          >
            We are a technology startup focused on transforming ideas into impactful
            digital experiences. Our goal is to explore emerging technologies and
            create solutions for real-world challenges.
          </motion.p>
        </div>

        {/* 3 Minimal Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl p-8 glass-panel border border-white/10 ${card.borderColor} ${card.glowColor} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg`}
              >
                {/* Background Hover Accent Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-[#101729] border border-white/10 flex items-center justify-center group-hover:border-white/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-zinc-500 tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-200 transition-colors flex items-center justify-between">
                      <span>{card.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-sky-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Card Bottom Indicator Line */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300">
                  <span>Explore Architecture</span>
                  <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-sky-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IntroSection;
