import React from 'react';
import './ContactUs.css';
import Footer from './Footer';
import Header from './Header';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <Header />
            <div className="contact-header">
                <h1>Contact us</h1>
                <p>
                    Don't hesitate to contact us for any information about your company or our players.
                </p>
            </div>

            <div className="contact-content">
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                    </div>

                    <div className="form-group">
                        <input type="email" placeholder="Email address" required />
                        <input type="tel" placeholder="Phone number" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="Company" />
                    </div>

                    <div className="form-group">
                        <textarea placeholder="Message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>

                <div className="contact-info">
                    <h2>Address</h2>
                    <p>1234 Lorem Ipsum<br />Lorem Ipsum, GA 30308<br />1234567890<br />xyz@companyname.com</p>

                    <h2>Address 2</h2>
                    <p>1234 Lorem Ipsum<br />Lorem Ipsum, GA 30308<br />1234567890<br />xyz2@companyname.com</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
