import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text' : 'bg-accent text-secondary'}`}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-accent text-secondary' : 'bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text' : 'bg-accent text-secondary'}`}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
