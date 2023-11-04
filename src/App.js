import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import JobPosting from './components/JobPosting';
import ServicesPage from './components/ServicesPage'; // Import the ServicesPage component
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/job-posting" element={<JobPosting />} />
          <Route path="/services" element={<ServicesPage />} /> {/* Add the new ServicesPage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
