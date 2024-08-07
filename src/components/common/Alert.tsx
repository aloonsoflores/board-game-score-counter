import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const getClassNames = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      default:
        return '';
    }
  };

  return (
    <div className={`p-4 mb-4 border rounded-lg ${getClassNames()}`}>
      <div className="flex items-center justify-between">
        <p>{message}</p>
        {onClose && (
          <button onClick={onClose} className="text-gray-500 dark:text-gray-300">
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
