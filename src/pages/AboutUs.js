import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <p>Bienvenue sur notre site dédié au baseball en France. Nous nous engageons à promouvoir le sport et les joueurs locaux.</p>
            <Footer />
        </div>
    );
};

export default AboutUs;
