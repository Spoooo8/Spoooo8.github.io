import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import gswcp from '../../public/images/nptel_gswcp.png';
import jocp from '../../public/images/nptel_jocp.png';
import nlp from '../../public/images/nptel_nlp.png';
import microservce from '../../public/images/udemy_microservice.jpg'
import ds from '../../public/images/nasscom_ds.png'

function Certificates() {
  const certificates = [
    {
      title: 'Data Science for Beginners',
      image: ds,
    },
    {
      title: 'The Joy of Computing using Python',
      image: jocp,
    },
    {
      title: 'Getting Started with Competitive Programming',
      image: gswcp,
    },
  
    {
      title: 'Natural Language Processing',
      image: nlp,
    },
    {
      title: 'Master Microservice with SpringBoot, Docker, Kubernetes',
      image: microservce,
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
