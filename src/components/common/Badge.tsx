import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'default' | 'success' | 'warning' | 'error';
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'default' }) => {
  const colorClasses = {
    default: 'bg-light-secondaryText dark:bg-dark-secondaryText text-light-background dark:text-dark-background',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${colorClasses[color]}`}>
      {text}
    </span>
  );
};

export default Badge;
