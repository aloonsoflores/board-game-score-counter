import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'small' | 'medium' | 'large'; // Defines different sizes for the avatar
  shape?: 'circle' | 'square'; // Defines the shape of the avatar
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, initials, size = 'medium', shape = 'circle' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded';

  return (
    <div
      className={`flex items-center justify-center ${sizeClasses[size]} ${shapeClasses} bg-light-cardBg dark:bg-dark-cardBg text-light-text dark:text-dark-text overflow-hidden`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xl font-medium">
          {initials}
        </span>
      )}
    </div>
  );
};

export default Avatar;
