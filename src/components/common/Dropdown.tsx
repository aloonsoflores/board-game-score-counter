import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  options: string[];
  selected: string | null;
  onChange: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (option: string) => {
    onChange(option); // Actualiza el estado en el componente padre
    setIsOpen(false); // Cierra el dropdown
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(prev => !prev)}
        className="bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg px-4 py-2 text-light-text dark:text-dark-text flex items-center justify-between w-48"
      >
        <span>{selected || 'Select an option'}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full max-w-xs bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg shadow-lg z-10">
          {options.map(option => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block px-4 py-2 w-full text-left text-light-text dark:text-dark-text hover:bg-light-cardBg dark:hover:bg-dark-cardBg ${selected === option ? 'bg-light-cardBg dark:bg-dark-cardBg' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
