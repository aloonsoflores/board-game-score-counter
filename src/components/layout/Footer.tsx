import React from 'react';
import Link from 'next/link';  // Importa el componente Link de Next.js

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-navbarBg dark:bg-dark-navbarBg text-light-text dark:text-dark-text p-6 mt-auto flex flex-col items-center border-t border-light-border dark:border-dark-border">
      {/* Footer Top Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Footer Navigation */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center md:items-start">
          <Link href="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-accent">
            Terms of Service
          </Link>
        </nav>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Board Game Score Counter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
