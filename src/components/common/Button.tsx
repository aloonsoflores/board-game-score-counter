import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel
}) => {
  // Construir la clase dinámica manualmente
  const baseClass = 'bg-accent text-light-text dark:text-dark-text px-4 py-2 rounded hover:bg-opacity-75 transition-colors';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const finalClass = `${baseClass} ${disabledClass} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={finalClass}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
