import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm [Spoorthi S]</h2>
        <p className="text-xl mb-6">A passionate [Your Profession] creating impactful solutions</p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          View My Work
        </a>
      </div>
    </section>
  );
}
