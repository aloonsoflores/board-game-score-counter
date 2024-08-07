import React, { useState } from 'react';

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="w-full text-left px-4 py-2 border-b border-light-border dark:border-dark-border bg-light-cardBg dark:bg-dark-cardBg hover:bg-accent text-light-text dark:text-dark-text"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="p-4 text-light-text dark:text-dark-text">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
