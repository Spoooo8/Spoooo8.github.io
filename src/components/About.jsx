import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a [Your Profession] with a focus on building clean, user-friendly applications. 
            My skills include [React, JavaScript, UI/UX design, etc.]. 
            I thrive on solving complex problems with elegant solutions and thoughtful design.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
