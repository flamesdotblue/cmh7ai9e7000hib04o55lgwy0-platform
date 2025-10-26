import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-fuchsia-500" />
            <span className="font-extrabold">LUMORANGE</span>
          </div>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Innovative, professional, friendly tools to accelerate your creativity.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
            <li><a href="#tools" className="hover:text-orange-600 dark:hover:text-orange-400">Tools Hub</a></li>
            <li><a href="#roadmap" className="hover:text-orange-600 dark:hover:text-orange-400">Roadmap</a></li>
            <li><a href="#special" className="hover:text-orange-600 dark:hover:text-orange-400">Special Occasions</a></li>
            <li><a href="#sitemap" className="hover:text-orange-600 dark:hover:text-orange-400">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
            <li><a href="#about" className="hover:text-orange-600 dark:hover:text-orange-400">About</a></li>
            <li><a href="#contact" className="hover:text-orange-600 dark:hover:text-orange-400">Contact</a></li>
            <li><a href="#privacy" className="hover:text-orange-600 dark:hover:text-orange-400">Privacy</a></li>
            <li><a href="#terms" className="hover:text-orange-600 dark:hover:text-orange-400">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get in touch</h4>
          <p className="text-slate-600 dark:text-slate-400">hello@lumorange.com</p>
          <p className="text-slate-600 dark:text-slate-400">+1 (555) 010-2025</p>
          <div className="mt-3">
            <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-slate-400/30">Say Hello</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LUMORANGE. All rights reserved.</p>
          <p>Made with care for accessibility, performance, and creativity.</p>
        </div>
      </div>
    </footer>
  );
}
