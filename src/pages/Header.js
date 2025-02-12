import React from 'react';
import { Link } from 'react-router-dom';
import './../index.css';

const Header = () => {
    return (    
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="logo">
                        <img src="/images/bcAgencyLogoJpg.jpg" alt="BC Agency Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/about">ABOUT US</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/players">PLAYERS</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>
            </nav>
        )}

export default Header;