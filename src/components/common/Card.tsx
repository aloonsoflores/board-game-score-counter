import React from 'react';

interface CardProps {
  imageSrc?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, actions }) => {
  return (
    <div className="bg-light-cardBg dark:bg-dark-cardBg border border-light-border dark:border-dark-border rounded-lg shadow-lg overflow-hidden">
      {imageSrc && <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{title}</h3>
        {description && <p className="mt-2 text-light-text dark:text-dark-secondaryText">{description}</p>}
        {actions && <div className="mt-4">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
