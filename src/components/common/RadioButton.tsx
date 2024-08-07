import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, value, checked, onChange, label }) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center text-light-text dark:text-dark-text cursor-pointer"
    >
      <div className="relative flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="form-radio appearance-none h-6 w-6 border-2 border-light-border dark:border-dark-border bg-light-background dark:bg-dark-background rounded-full checked:bg-accent checked:border-transparent focus:outline-none focus:ring-2 focus:ring-accent transition duration-200"
        />
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-full" />
          </div>
        )}
      </div>
      <span className="ml-3 text-sm">{label}</span>
    </label>
  );
};

export default RadioButton;
