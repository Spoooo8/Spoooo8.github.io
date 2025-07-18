import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import gswcp from '../../public/images/nptel_gswcp.png';
import jocp from '../../public/images/nptel_jocp.png';
import nlp from '../../public/images/nptel_nlp.png';
import c from '../../public/images/nptel_c.jpeg';
import c1 from '../../public/images/nptel_c++.jpeg';
import java from '../../public/images/nptel_java.jpeg';
import calculus from '../../public/images/nptel_calculus.jpeg';
import microservce from '../../public/images/udemy_microservice.jpg'
import security from '../../public/images/udemy_spring_security.jpg'
import react from '../../public/images/udemy_react.jpg'
import ds from '../../public/images/nasscom_ds.png'
import ai from '../../public/images/ai.png'
import star from '../../public/images/star.png'

import cybersecurity from '../../public/images/cybersecurity.jpg'
function Certificates() {
  const certificates = [
   
    {
      title: 'Master Microservice with SpringBoot, Docker, Kubernetes',
      image: microservce,
    },
    {
      title: 'Spring Security 6 Zero to Master along with JWT, OAUTH2',
      image: security,
    },
    {
      title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
      image: react,
    },
    {
      title: 'Google Cybersecuriy',
      image: cybersecurity,
    },

    {
      title: 'Data Science for Beginners',
      image: ds,
    },
      {
      title: 'Artificial Intelligence',
      image: ai,
    },
    {
      title: 'NPTEL Discipline Star',
      image: star,
    },
    {
      title: 'Programming in Java',
      image: java,
    },
    {
      title: 'Natural Language Processing',
      image: nlp,
    },
    {
      title: 'Getting Started with Competitive Programming',
      image: gswcp,
    },
      {
      title: 'The Joy of Computing using Python',
      image: jocp,
    },
    {
      title: 'Programming in Modern C++',
      image: c1,
    },
    {
      title: 'Problem Solving Through Programming in C',
      image: c,
    },
    {
      title: 'Advanced Calculus For Engineers',
      image: calculus,
    },
  




  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow py-16 bg-white">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="w-full max-w-2xl flex flex-col items-center"
              >
                <div className="w-full h-[26rem] rounded overflow-hidden shadow-md bg-gray-100">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Certificates;
