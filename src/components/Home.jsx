import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center px-4 max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Hi, I'm Spoorthi S</h2>
         <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm a [Your Profession] with a focus on building clean, user-friendly applications. 
            My skills include [React, JavaScript, UI/UX design, etc.]. 
            I thrive on solving complex problems with elegant solutions and thoughtful design.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition text-lg"
          >
            Explore My Work
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
