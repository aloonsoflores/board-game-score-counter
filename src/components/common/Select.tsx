import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      value={selectedValue}
      onChange={onChange}
      className="bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border text-light-text dark:text-dark-text rounded-lg p-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition duration-200"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
