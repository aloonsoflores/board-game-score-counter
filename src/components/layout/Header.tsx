"use client";
import React, { useState } from 'react';
import Link from 'next/link';  // Importa el componente Link de Next.js
import Button from '@/components/common/Button';  // Importa tu componente Button
import ThemeSwitch from '@/components/common/ThemeSwitch';  // Importa tu componente ThemeSwitch
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="bg-light-navbarBg dark:bg-dark-navbarBg p-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <Link href="/" className="flex items-center text-light-text dark:text-dark-text text-xl font-bold hover:underline">
        <FontAwesomeIcon icon={faDice} className="w-10 h-10 text-accent" />
        <span className="ml-2">Board Game Score Counter</span>
      </Link>
      
      {/* Navigation Menu */}
      <nav className={`fixed inset-0 z-50 bg-light-navbarBg dark:bg-dark-navbarBg md:static md:flex md:space-x-4 md:items-center md:ml-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Menu Button */}
        <Button
          onClick={toggleMenu}
          className="absolute top-4 right-4 md:hidden p-2 text-light-text dark:text-dark-text focus:outline-none"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
        
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link href="/home" className="py-2 px-4 text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border rounded md:hover:underline" aria-label="Home">
            Home
          </Link>
          <Link href="/about" className="py-2 px-4 text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border rounded md:hover:underline" aria-label="About">
            About
          </Link>
          <Link href="/help" className="py-2 px-4 text-light-text dark:text-dark-text hover:bg-light-border dark:hover:bg-dark-border rounded md:hover:underline" aria-label="Help">
            Help
          </Link>
        </div>
      </nav>
      
      {/* Theme Switch */}
      <ThemeSwitch />
      
      {/* Menu Toggle Button for Mobile */}
      <Button
        onClick={toggleMenu}
        className="block md:hidden p-2 text-light-text dark:text-dark-text focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </Button>
    </header>
  );
};

export default Header;
