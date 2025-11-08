import React from 'react';

const items = [
  {
    title: 'Product Launch Ad',
    tag: 'Short-form',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Creator Reel',
    tag: 'Social',
    thumb: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Brand Story',
    tag: 'Long-form',
    thumb: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Event Recap',
    tag: 'Highlights',
    thumb: 'https://images.unsplash.com/photo-1515165562835-c4c1b5720a9b?q=80&w=1200&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work</h2>
            <p className="mt-3 text-gray-600">A glimpse of projects we craft for brands and creators.</p>
          </div>
          <a href="#contact" className="hidden rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 sm:inline-flex">Start a Project</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-xl border border-gray-200 bg-white">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img src={it.thumb} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{it.title}</h3>
                  <p className="text-xs text-gray-500">{it.tag}</p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
