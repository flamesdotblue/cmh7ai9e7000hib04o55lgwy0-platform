import React from 'react';
import { QrCode, Lock, Palette, Type, Image, Code, Star } from 'lucide-react';

const tools = [
  {
    name: 'QR Code Generator',
    icon: QrCode,
    description: 'Create QR codes for URLs, WiFi, contact, geo, and more.',
    cta: 'Generate QR',
  },
  {
    name: 'Secure Passwords',
    icon: Lock,
    description: 'Generate strong, custom passwords with a live strength meter.',
    cta: 'Create Password',
  },
  {
    name: 'Color Palette Studio',
    icon: Palette,
    description: 'Harmonize palettes, check contrast, and export swatches.',
    cta: 'Make Palette',
  },
  {
    name: 'Markdown Editor',
    icon: Type,
    description: 'Write with live preview, syntax highlighting, and export.',
    cta: 'Open Editor',
  },
  {
    name: 'Image Optimizer',
    icon: Image,
    description: 'Compress images locally with drag and drop and quality controls.',
    cta: 'Optimize Images',
  },
  {
    name: 'Code Snippet Manager',
    icon: Code,
    description: 'Tag, search, and share snippets with smart categorization.',
    cta: 'Manage Snippets',
  },
];

function ToolCard({ icon: Icon, name, description, cta }) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-tr from-orange-500 via-amber-400 to-fuchsia-500 text-white shadow-md">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{description}</p>
          </div>
        </div>
        <Star className="opacity-0 group-hover:opacity-100 text-amber-400 transition-opacity" size={18} aria-hidden="true" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button
          className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-semibold hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-slate-400/30"
          onClick={() => alert(`${name} launching soon in this preview!`)}
          aria-label={cta}
        >
          {cta}
        </button>
        <button
          className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-transparent text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400/20"
          onClick={() => alert(`Previewing ${name}`)}
          aria-label={`Preview ${name}`}
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default function ToolsPreview() {
  return (
    <section id="tools" className="py-14 sm:py-20 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Featured Tools</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
              Quick access to the essentials. Explore powerful utilities tailored for designers, developers, and creators.
            </p>
          </div>
          <a href="#sitemap" className="hidden sm:inline-block text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3">
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">WCAG 2.1 AA</div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">PWA-ready</div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">AI-assisted</div>
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300">No ads</div>
        </div>
      </div>
    </section>
  );
}
