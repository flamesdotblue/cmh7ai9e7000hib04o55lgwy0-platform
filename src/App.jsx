import React from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import ToolsPreview from './components/ToolsPreview';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar />
      <main>
        <HeroSpline />
        <ToolsPreview />
      </main>
      <Footer />
    </div>
  );
}
