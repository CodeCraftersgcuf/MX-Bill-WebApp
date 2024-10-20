import React, { useState } from 'react';
import Accordion from './Accordian'; 

// Sample tab data with actual content components
const tabData = [
  { id: 1, label: 'FAQ', content: <Accordion /> }, 
  { id: 2, label: 'Contact', content: '' }, 
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id); 

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" > 
      <div className="flex border-b border-gray-300">
        {tabData.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 text-center text-lg font-semibold transition-colors duration-200 
              ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabData
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div key={tab.id}>{tab.content}</div> 
          ))}
      </div>
    </div>
  );
};

export default Tabs;
