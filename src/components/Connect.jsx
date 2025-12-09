import React from 'react';
import './Connect.css';
import connectVisual from '../assets/connect_visual.png';

const Connect = () => {
    return (
        <section className="connect-section" id="contact">
            <div className="connect-header">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">
                    We're here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
                </p>
            </div>

            <div className="connect-container">
                <div className="connect-visual">
                    <img src={connectVisual} alt="Ayurvedic Ingredients" />
                </div>

                <div className="connect-form-wrapper">
                    <form className="connect-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Vikas Kumar" />
                            </div>
                            <div className="form-group">
                                <label>Your Contact Number</label>
                                <input type="text" placeholder="8743414476" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="vikass@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Message (Optional)</label>
                            <textarea placeholder="I want to On-board as a Doctor..."></textarea>
                        </div>

                        <button type="submit" className="send-message-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Connect;
