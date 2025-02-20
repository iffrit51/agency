import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './AboutUs.css'; // Assurez-vous d'importer le fichier CSS correspondant

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="about-section">
                <div className="content">
                    <img src="team2Jpg3.jpg" alt="Votre description" className="image-left" />
                    <div className="text-right">
                        <h2>À propos de moi</h2>
                        <p>Je suis l'agent principal des joueurs, dédié à la promotion du baseball en France ainsi qu'au développement du hockey sur glace français et australien, ainsi que d'autres nationalités.</p>
                    </div>
                </div>
                <div className="content">
                    <img src="team3Jpg3" alt="Walter Tesonne" className="image-right" />
                    <div className="text-left">
                        <h2>À propos de mon assistant</h2>
                        <p>Mon assistant, joue un rôle crucial en aidant nos joueurs à atteindre leur plein potentiel grâce à son expertise et son dévouement.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
