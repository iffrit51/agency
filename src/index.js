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

      <section className="about-us">
        <div className="about-images">
          <img src="/images/austinDistelWD1LRb9OeEoUnsplashJpg.Jpg" alt="Team Meeting" className="img-1" />
          <img src="/images/brookeCagleUHvRvDr7PgUnsplashJpg.jpg" alt="Discussion" className="img-2" />
        </div>

        <div className="about-text">
          <h2>About us</h2>
          <p>We specialize in placing players from less represented nationalities in the world of ice hockey.</p>
          <a href="#" className="button">READ MORE</a>
        </div>
      </section>

      <section className="services">
        <div className="service-card analyse card-sombre">
          <h3>Analyse</h3>
          <p>
            Thoroughly evaluate the player's skills, performance, and potential. This includes analyzing statistics, game footage,
            physical condition, and mental aspects to identify strengths and areas for improvement. The goal is to strategically
            position the player in the market.
          </p>
        </div>

        <div className="service-card connect card-sombre">
          <h3>Connect</h3>
          <p>
            Build and maintain a strong network with coaches, scouts, clubs, and other agents. Creating trusted relationships helps
            uncover contract opportunities, tryouts, and key partnerships to advance the player's career.
          </p>
        </div>

        <div className="service-card develop card-sombre">
          <h3>Develop</h3>
          <p>
            Support the player's overall development, both on and off the ice. This includes career management, mental coaching,
            contract negotiations, and personal branding to maximize opportunities in sports and beyond.
          </p>
          <p>
            This approach ensures comprehensive support, from talent discovery to professional growth.
          </p>
        </div>
      </section>


      <section>
        <img src="../images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
      </section>

      <section className="footer-banner">
        <img src="../images/dallE20250205141532ASetOfIceHockeyEquipmentPlacedOnTheGroundIncludingAPairOfIceHockeySkatesAHockeyStickAndAHelmetTheSkatesAreSlightlyWornJpeg.jpg" alt="Hockey Skates" />
      </section>
      <section className="call-to-action">
        <h2>Work with us.</h2>
        <p>Let's go for the game</p>
        <a href="#" className="cta-button">GET IN TOUCH</a>
      </section>

      <footer className="footer">
        <div className="footer-section">
          <h3>About us</h3>
          <p>© BC Agency. All rights reserved</p>
        </div>

        <div className="footer-section">
          <h3>Nav Links</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Players</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>1234 Lorem Ipsum<br />
            Lorem Ipsum, GA 30308<br />
            <a href="mailto:xyz@company.com">xyz@company.com</a><br />
            1234567890</p>
        </div>
      </footer>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HockeyCareerPage />);