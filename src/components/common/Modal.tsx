import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-lg relative">
        {title && (
          <h2 className="text-xl font-semibold mb-4">{title}</h2> // Mostrar el título si existe
        )}
        <button onClick={onClose} className="absolute top-2 right-2 text-light-text dark:text-dark-text">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
