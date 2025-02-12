import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HockeyCareerPage from './HockeyCareerPage.js';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Players from './pages/Players';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HockeyCareerPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/players" element={<Players />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default App;
