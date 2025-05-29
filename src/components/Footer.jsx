import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container mx-auto flex justify-center space-x-6 text-gray-600">
        <a
          href="https://github.com/Spoooo8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/spoorthi-s-971a4b201/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:sspoorthi328@gmail.com"
          className="hover:text-gray-900 transition"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
