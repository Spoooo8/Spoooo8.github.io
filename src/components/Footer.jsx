import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
