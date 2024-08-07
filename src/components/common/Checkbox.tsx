import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label }) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center text-light-text dark:text-light-text cursor-pointer"
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="form-checkbox appearance-none h-6 w-6 border-2 border-light-border dark:border-dark-border bg-light-background dark:bg-dark-background rounded-md checked:bg-accent checked:border-transparent focus:outline-none focus:ring-2 focus:ring-accent transition duration-200"
        />
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            checked ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-200`}
        >
          <svg
            className="w-5 h-5 text-light-background dark:text-light-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="ml-3 text-sm">{label}</span>
    </label>
  );
};

export default Checkbox;
