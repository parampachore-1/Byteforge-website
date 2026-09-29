import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowUp, Globe, MessageSquare } from 'lucide-react';

const Footer = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080B16] border-t border-white/10 z-10 pt-16 pb-12 overflow-hidden">
      
      {/* Background glow spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 p-[1px]">
                <div className="w-full h-full bg-[#080B16] rounded-[11px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wider">
                NEX<span className="gradient-text">ORA</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Transforming ambitious ideas into intelligent digital solutions. Building the future through creativity, innovation, and cutting-edge technology.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg glass-panel border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg glass-panel border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass-panel border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                className="w-9 h-9 rounded-lg glass-panel border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">Products & Solutions</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Services</a></li>
              <li>
                <button onClick={onOpenContact} className="hover:text-sky-400 transition-colors focus:outline-none">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Technology & Status */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Technology Vision</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Built with Next-Gen Distributed Architecture, AI-Optimized Core, and zero-trust high speed framework.
            </p>
            <div className="p-3.5 rounded-xl glass-panel border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">SYSTEM STATUS</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                100% OPERATIONAL
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} NEXORA Inc. All rights reserved. Phase 1 Prototype.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-panel border border-white/10 hover:border-sky-400 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
