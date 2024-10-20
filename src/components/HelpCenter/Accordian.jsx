import React, { useState, useRef } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="font-semibold">{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <div className="py-4 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'How do I open a new bank account ?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      title: 'How can I reset my online banking password ?',
      content: 'Yes. It comes with default styles that match the other components’ aesthetic.',
    },
    {
      title: 'What should I do, If I noticed an unauthorized transaction ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'How do I apply for a loan ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'Can I make payment through the app ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'How do I update my contact Information ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'How secure is my information in the app ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
    {
      title: 'How can I view my transaction history ?',
      content: 'Yes. It’s animated by default, but you can disable it if you prefer.',
    },
  ];

  return (
    <div className="w-full mx-auto">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
