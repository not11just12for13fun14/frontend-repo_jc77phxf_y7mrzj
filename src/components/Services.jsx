import React from 'react';
import { Scissors, PenSquare, Cpu, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Video Editing',
    desc: 'Clean cuts, dynamic pacing, color, sound, captions, and finishing touches for all platforms.'
  },
  {
    icon: Cpu,
    title: 'AI Content Creation',
    desc: 'Idea generation, repurposing, and automated production pipelines with AI assistance.'
  },
  {
    icon: PenSquare,
    title: 'Scripting',
    desc: 'Hooks, outlines, and scripts that keep attention and drive action across channels.'
  },
  {
    icon: Sparkles,
    title: 'AI Editing',
    desc: 'Smart edits, auto-subtitles, cleanup, and enhancements to speed up delivery without losing quality.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to plan, produce, and scale video.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-100 bg-gray-50/50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-lg bg-black p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
