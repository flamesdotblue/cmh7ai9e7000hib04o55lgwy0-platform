import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[72vh] min-h-[540px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Ignite your ideas with LUMORANGE
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                An innovative hub of professional, friendly digital tools designed to accelerate your creative work—QRs, palettes, markdown, images, code, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
                >
                  Start Project
                </a>
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur text-slate-800 dark:text-slate-100 font-semibold hover:bg-white dark:hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-400/30"
                >
                  Explore Tools
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Built for accessibility, performance, and flow. Light and dark themes included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
