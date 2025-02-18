import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './Services.css'; // Assurez-vous d'importer le fichier CSS correspondant

const servicesData = [
    {
        icon: 'fa-handshake',
        title: 'Négociation de contrats',
        description: 'Nous assurons la négociation des contrats avec les clubs et les sponsors pour garantir les meilleures conditions pour nos joueurs.'
    },
    {
        icon: 'fa-chart-line',
        title: 'Gestion de carrière',
        description: 'Nous conseillons nos clients sur les choix stratégiques pour optimiser leur parcours professionnel.'
    },
    {
        icon: 'fa-bullhorn',
        title: 'Gestion de l\'image et des relations publiques',
        description: 'Nous aidons à construire et maintenir une image publique positive en gérant les interactions médiatiques.'
    },
    {
        icon: 'fa-gavel',
        title: 'Conseil juridique et financier',
        description: 'Nous offrons une assistance juridique et des conseils financiers pour assurer la stabilité à long terme de nos clients.'
    },
    {
        icon: 'fa-dumbbell',
        title: 'Préparation physique et mentale',
        description: 'Nous mettons en relation nos clients avec des experts pour optimiser leurs performances sur le terrain.'
    }
];

const Services = () => {
    return (
        <div>
            <Navbar />
            <div className="services-section">
                <h1>Nos Services</h1>
                <p className="intro">
                    En tant qu'agents de joueurs spécialisés dans le baseball, nous offrons une gamme complète de services pour accompagner nos clients vers le succès.
                </p>
                <div className="services-container">
                    {servicesData.map((service, index) => (
                        <div className="service-photo" key={index}>
                            <i className={`fas ${service.icons} service-icons`}></i>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
