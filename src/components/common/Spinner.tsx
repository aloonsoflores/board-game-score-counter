import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-32 w-full">
      <div className="spinner-border"></div>
      <style jsx>{`
        .spinner-border {
          width: 3rem;
          height: 3rem;
          border: 0.4em solid rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          border-top: 0.4em solid var(--spinner-color);
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <style jsx global>{`
        :root {
          --spinner-color: ${process.env.NODE_ENV === 'production' ? '#FE5000' : '#3E3A60'}; /* Change according to your theme */
        }
      `}</style>
    </div>
  );
};

export default Spinner;
