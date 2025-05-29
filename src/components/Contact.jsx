import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Reach out to me at{' '}
            <a href="mailto:your.email@example.com" className="text-gray-900 hover:underline font-medium">
              your.email@example.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 text-gray-700">
            <a href="https://linkedin.com" className="hover:text-gray-900 transition">LinkedIn</a>
            <a href="https://github.com" className="hover:text-gray-900 transition">GitHub</a>
            <a href="https://twitter.com" className="hover:text-gray-900 transition">Twitter</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
