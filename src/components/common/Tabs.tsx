import React, { useState } from 'react';

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tabs: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div>
      <div className="flex border-b border-light-border dark:border-dark-border">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 border-b-2 ${activeTab === index ? 'border-accent text-accent' : 'border-transparent text-light-secondaryText dark:text-dark-secondaryText'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
