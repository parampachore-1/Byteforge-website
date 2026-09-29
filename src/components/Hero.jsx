import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cpu, Activity, Zap, CheckCircle2, Terminal } from 'lucide-react';

const Hero = ({ onExploreVision, onLetTalk }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
      
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-xs sm:text-sm font-medium text-sky-300 shadow-lg shadow-indigo-950/40"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span className="tracking-wide">NEXT-GENERATION DIGITAL ECOSYSTEM</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Building the{' '}
              <span className="gradient-text font-extrabold inline-block">
                Future
              </span>{' '}
              Through{' '}
              <span className="gradient-text font-extrabold inline-block">
                Technology.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We transform ambitious ideas into intelligent digital solutions.
              Combining creativity, innovation, and technology to build
              meaningful experiences for tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreVision}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-xl shadow-indigo-600/35 border border-indigo-300/30 focus:outline-none group"
              >
                <span>Explore Our Vision</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLetTalk}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white glass-panel glass-panel-hover border border-white/15 shadow-lg focus:outline-none"
              >
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Let's Talk</span>
              </motion.button>
            </div>

            {/* Feature stats micro-bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white tracking-tight">99.9%</div>
                <div className="text-xs text-zinc-400">Reliability Rate</div>
              </div>
              <div className="border-l border-white/10 pl-4 space-y-1">
                <div className="text-2xl font-bold text-sky-400 tracking-tight">10x</div>
                <div className="text-xs text-zinc-400">Velocity</div>
              </div>
              <div className="border-l border-white/10 pl-4 space-y-1">
                <div className="text-2xl font-bold text-indigo-400 tracking-tight">Zero</div>
                <div className="text-xs text-zinc-400">Latency Core</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract 3D-Inspired Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex items-center justify-center perspective-1000"
          >
            {/* Interactive Tilt Container */}
            <motion.div
              style={{
                rotateY: mousePos.x * 20,
                rotateX: -mousePos.y * 20,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative w-full max-w-md lg:max-w-none aspect-square rounded-3xl p-6 glass-panel border border-white/15 shadow-2xl shadow-indigo-950/80 overflow-hidden flex flex-col justify-between"
            >
              {/* Outer Glowing Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[340px] h-[340px] rounded-full border border-sky-500/20 border-dashed animate-spin [animation-duration:35s]" />
                <div className="absolute w-[260px] h-[260px] rounded-full border border-indigo-500/30 animate-spin [animation-duration:20s] [animation-direction:reverse]" />
              </div>

              {/* Card Header Simulator */}
              <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-zinc-400 ml-2">NEXORA_CORE_NODE_v4.2</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Center Abstract 3D Geometric Orb / Lattice Visual */}
              <div className="relative my-8 py-6 flex items-center justify-center z-10">
                {/* Central glowing core sphere */}
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-400 to-purple-600 p-1 shadow-2xl shadow-indigo-500/50 animate-float">
                  <div className="w-full h-full bg-[#080B16] rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-sky-400/20" />
                    <Cpu className="w-16 h-16 text-sky-300 relative z-10 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
                    
                    {/* Animated code stream overlay inside core */}
                    <div className="absolute inset-0 opacity-20 font-mono text-[9px] text-cyan-300 p-2 overflow-hidden leading-tight pointer-events-none">
                      {`import { QuantumMesh } from '@nexora/core';\nconst sys = new QuantumMesh();\nsys.optimize();`}
                    </div>
                  </div>
                </div>

                {/* Floating Holographic Satellite Chips */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 left-2 z-20 px-3.5 py-2 rounded-xl glass-panel border border-sky-400/30 shadow-lg flex items-center gap-2 text-xs font-mono text-white"
                >
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>AI Mesh: Active</span>
                </motion.div>

                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-2 right-2 z-20 px-3.5 py-2 rounded-xl glass-panel border border-indigo-400/30 shadow-lg flex items-center gap-2 text-xs font-mono text-white"
                >
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>Latency: 1.2ms</span>
                </motion.div>

                <motion.div
                  animate={{ x: [-6, 6, -6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-1/2 left-0 translate-y-1/2 -translate-x-4 z-20 p-2.5 rounded-xl glass-panel border border-purple-400/30 shadow-lg flex items-center gap-2 text-xs text-purple-300"
                >
                  <Shield className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Footer Code/Network Status Bar */}
              <div className="z-10 bg-[#080B16]/80 p-3.5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>SYSTEM_NEURAL_BUS</span>
                  <span className="text-sky-400">100% SECURE</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 h-full w-[88%] rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
