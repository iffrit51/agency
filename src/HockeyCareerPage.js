import React from 'react';
import './index.css';
import Footer from './pages/Footer';
import Header from './pages/Header';

const HockeyCareerPage = () => {
    return (
        <div className="container">
            <Header />
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

            <section class="carousel">
                <div class="carousel-track">
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
                                <div class="player-info">
                                    <h3>Ludovic Guitton</h3>
                                    <p>Pitcher / 3ème base / DH</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Stats</h3>
                                <p>ERA: 2.45</p>
                                <p>Strikeouts: 150</p>
                                <p>Matches Played: 20</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
                                <div class="player-info">
                                    <h3>Ludovic Guitton</h3>
                                    <p>Pitcher / 3ème base / DH</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Stats</h3>
                                <p>ERA: 2.45</p>
                                <p>Strikeouts: 150</p>
                                <p>Matches Played: 20</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
                                <div class="player-info">
                                    <h3>Ludovic Guitton</h3>
                                    <p>Pitcher / 3ème base / DH</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Stats</h3>
                                <p>ERA: 2.45</p>
                                <p>Strikeouts: 150</p>
                                <p>Matches Played: 20</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
                                <div class="player-info">
                                    <h3>Ludovic Guitton</h3>
                                    <p>Pitcher / 3ème base / DH</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Stats</h3>
                                <p>ERA: 2.45</p>
                                <p>Strikeouts: 150</p>
                                <p>Matches Played: 20</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div class="card-front">
                                <img src="/images/nikoSuoraniemiJpg.jpg" alt="Player Photo" />
                                <div class="player-info">
                                    <h3>Ludovic Guitton</h3>
                                    <p>Pitcher / 3ème base / DH</p>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Stats</h3>
                                <p>ERA: 2.45</p>
                                <p>Strikeouts: 150</p>
                                <p>Matches Played: 20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="footer-banner">
                <img src="/images/dallE20250205141532ASetOfIceHockeyEquipmentPlacedOnTheGroundIncludingAPairOfIceHockeySkatesAHockeyStickAndAHelmetTheSkatesAreSlightlyWornJpeg.jpg" alt="Hockey Skates" />
            </section>
            <Footer />

        </div>
    );
};

export default HockeyCareerPage;