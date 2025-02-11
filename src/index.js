import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const HockeyCareerPage = () => {
  return (
    <div className="container">
      <header className="header">
      <div className="overlay">
          <h1>Building Careers, Not Just Contracts</h1>
          <h3>As leading hockey agents, we focus on helping players achieve their full potential both on and off the ice. From contract negotiations to career guidance, our team is dedicated to providing tailored solutions for every client. We connect players with top teams worldwide and ensure they stay at the top of their game.</h3>
          <a href="#" className="button">Get in Touch</a>
        </div>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <div className="about-images">
          <img src="../images/office-1.jpg" alt="Office 1" />
          <img src="../images/office-2.jpg" alt="Office 2" />
          <img src="../images/office-3.jpg" alt="Office 3" />
        </div>
      </section>

      <section className="services">
        <div>
          <h3>Analyze</h3>
          <p>We provide detailed analytics to enhance performance and career growth.</p>
        </div>
        <div>
          <h3>Connect</h3>
          <p>Building strong networks to open up opportunities for our clients.</p>
        </div>
        <div>
          <h3>Develop</h3>
          <p>Focusing on continuous development to achieve long-term success.</p>
        </div>
      </section>

      <section className="profile">
        <img src="../images/avatar3Png.jpg" alt="Player Photo" />
      </section>

      <section className="footer-banner">
        <img src="../images/dallE20250205141532ASetOfIceHockeyEquipmentPlacedOnTheGroundIncludingAPairOfIceHockeySkatesAHockeyStickAndAHelmetTheSkatesAreSlightlyWornJpeg.jpg" alt="Hockey Skates" />
      </section>

      <footer className="footer">
        <p>Work with us. <a href="#">Get in Touch</a></p>
        <div>
          <a href="#">About Us</a>
          <a href="#">Your Goals</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HockeyCareerPage />);