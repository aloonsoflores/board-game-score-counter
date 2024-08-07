"use client";
import { useState, useEffect } from 'react';

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Obtiene el tema del localStorage al montar el componente
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Aplica el tema en el documento
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guarda la preferencia del tema en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-xl transition-colors duration-300 hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeSwitch;
