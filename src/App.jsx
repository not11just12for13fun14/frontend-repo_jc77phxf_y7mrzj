import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <a href="#" className="text-lg font-bold">Editor Agency</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#work" className="text-white/80 hover:text-white">Work</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 sm:inline-flex">Get a Quote</a>
        </div>
      </header>

      <main className="flex flex-col">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Editor Agency. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
