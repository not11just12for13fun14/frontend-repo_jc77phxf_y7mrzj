import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-wider text-white/90 backdrop-blur">
          Camera • Creative • Technology • Minimal
        </span>
        <h1 className="font-geist text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Editor Agency
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          We craft scroll-stopping videos, AI-powered content, and scripts that convert.
          Made for creators, brands, and startups who want modern, clean, and fast.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow hover:bg-white/90"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
