import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get a Quote</h2>
          <p className="mt-3 text-gray-600">Tell us about your project and goals — we’ll respond quickly.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Name" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          <select name="service" className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black">
            <option>Video Editing</option>
            <option>AI Content Creation</option>
            <option>Scripting</option>
            <option>AI Editing</option>
          </select>
          <textarea required name="message" placeholder="Project details" rows={5} className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90">Send</button>
          {status && <p className="text-sm text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
