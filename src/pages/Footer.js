import React from 'react';
import './../index.css';

const Footer = () => {
    return (
        <div className="container">
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
    )
}

export default Footer;