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
     <p className="text-lg text-gray-700 leading-relaxed mb-6">
  I am a driven <span className="font-semibold text-gray-900">Computer Science student</span> with a strong foundation 
  in programming languages such as <span className="font-medium">Java, Python, SQL, and C++</span>. <br /><br />
  My technical skills include working with frameworks like <span className="font-medium">React</span> and 
  <span className="font-medium"> Spring Boot</span>, and I am proficient in both <span className="font-medium">PostgreSQL</span> 
  and <span className="font-medium">MySQL</span> databases — enabling me to develop efficient, scalable solutions for complex problems.
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
