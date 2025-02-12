import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Si tu as des styles spécifiques

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/bcAgencyLogoJpg.jpg" alt="Logo" />
          </Link>
        </div>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/players">PLAYERS</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
