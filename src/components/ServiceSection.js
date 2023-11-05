import React from 'react';

const ServiceSection = ({ title, description, subSections }) => {
  return (
    <div className="bg-gray-900 p-8 mb-8 text-indigo-600">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-300 mt-4">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {subSections.map((subSection, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-transform"
          >
            <h2 className="text-xl font-semibold text-white group-hover:text-indigo-500">
              {subSection.title}
            </h2>
            <p className="text-gray-300 mt-2">{subSection.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
