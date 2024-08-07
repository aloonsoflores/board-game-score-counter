import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface TextInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  ariaLabel?: string;
  disabled?: boolean;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  id,
  name,
  ariaLabel,
  disabled = false,
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="relative">
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={disabled ? undefined : onChange}
        id={id}
        name={name}
        aria-label={ariaLabel}
        required={required}
        className={`border border-light-border dark:border-dark-border bg-light-cardBg dark:bg-dark-cardBg text-light-text dark:text-dark-text p-2 rounded w-full focus:outline-none focus:border-accent ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={disabled}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        >
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </button>
      )}
    </div>
  );
};

export default TextInput;