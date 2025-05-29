import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mt-10 w-full flex justify-center">
            <iframe
              src="/spoorthi_resume.pdf"
              width="70%"
              height="500px"
              className="border rounded w-[70%] max-w-4xl"
              title="PDF Preview"
            >
              <p>
                PDF preview is not supported.{' '}
                <a href="/spoorthiResume.pdf" download className="underline text-blue-600">
                  Download it here.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Resume;