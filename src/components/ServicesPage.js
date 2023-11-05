import React from 'react';
import ServiceSection from './ServiceSection';
import Navbar from './Navigation';
import Footer from './Footer';



const ServicesPage = () => {
  const servicesData = [
    {
      title: 'Mobile Development',
      description: 'Explore our mobile development services and create amazing mobile apps that users love.',
      subSections: [
        {
          title: 'App Development',
          description: 'Create stunning mobile applications with our experienced team.',
        },
        {
          title: 'UI/UX Design',
          description: 'Design intuitive and user-friendly interfaces for your apps.',
        },
        {
          title: 'Performance Optimization',
          description: 'Optimize your mobile apps for speed and efficiency.',
        },
        // Add more sub-sections as needed
      ],
    },
    {
      title: 'Web Development',
      description: 'Discover our web development services and build responsive websites for your business.',
      subSections: [
        {
          title: 'Front-End Development',
          description: 'Design and develop user-friendly front-end interfaces for web applications.',
        },
        {
          title: 'Back-End Development',
          description: 'Build robust and scalable back-end systems to support your web applications.',
        },
        // Add more sub-sections as needed
      ],
    },
    {
      title: 'Database Design',
      description: 'Optimize your data management with our expert database design services.',
      subSections: [
        {
          title: 'Database Architecture',
          description: 'Design efficient and organized database structures for your applications.',
        },
        {
          title: 'Data Security',
          description: 'Implement strong data security measures to protect your sensitive information.',
        },
        // Add more sub-sections as needed
      ],
    },
    {
      title: 'Machine Learning or AI Solutions',
      description: 'Leverage the power of AI and machine learning for your business solutions.',
      subSections: [
        {
          title: 'Algorithm Development',
          description: 'Develop custom algorithms to solve complex problems with AI.',
        },
        {
          title: 'Data Analytics',
          description: 'Analyze and gain insights from your data using machine learning techniques.',
        },
        // Add more sub-sections as needed
      ],
    },
    {
      title: 'System Design',
      description: 'Design and architect reliable and scalable systems for your business needs.',
      subSections: [
        {
          title: 'Architectural Planning',
          description: 'Plan the structure and components of your systems.',
        },
        {
          title: 'Scalability',
          description: 'Ensure your systems can grow with your business demands.',
        },
        // Add more sub-sections as needed
      ],
    },
    {
      title: 'Software Requirements Specification (SRS)',
      description: 'Define clear and detailed specifications for your software projects.',
      subSections: [
        {
          title: 'Functional Requirements',
          description: 'Specify the functional aspects of your software in detail.',
        },
        {
          title: 'Non-Functional Requirements',
          description: 'Define performance, security, and other non-functional requirements.',
        },
        // Add more sub-sections as needed
      ],
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-gray-900">
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-3">
      {servicesData.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          description={service.description}
          subSections={service.subSections}
        />
      ))}
    </div>
    <Footer/>
  </div>
  );
};

export default ServicesPage;
