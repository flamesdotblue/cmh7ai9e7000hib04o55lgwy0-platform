import React, { useEffect, useState } from 'react';
import { Rocket, Search, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('lumorange-theme');
    const initial = saved ? saved === 'dark' : prefersDark;
    setDark(initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('lumorange-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('lumorange-theme', 'light');
    }
  }, [dark, mounted]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group" aria-label="LUMORANGE Home">
          <div className="relative w-8 h-8 grid place-items-center rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-fuchsia-500 text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="font-extrabold tracking-tight text-lg sm:text-xl">
            LUMORANGE
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#tools" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Tools</a>
          <a href="#about" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Contact</a>
          <a href="#roadmap" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Roadmap</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="search"
              placeholder="Search tools"
              aria-label="Search tools"
              className="hidden sm:block w-44 md:w-64 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-9 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
            <Search size={16} className="hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
          <button
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={() => setDark((d) => !d)}
            className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
