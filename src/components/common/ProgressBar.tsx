import React from 'react';

interface ProgressBarProps {
  progress: number; // Percentage from 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative w-full bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-full overflow-hidden h-6">
      <div
        className="h-full bg-accent transition-width duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center text-light-text dark:text-dark-text text-sm font-semibold"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default ProgressBar;
