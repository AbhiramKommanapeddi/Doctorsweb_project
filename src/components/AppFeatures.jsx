import React from 'react';
import './AppFeatures.css';
import screen1 from '../assets/app_screen_1_consultation.png';
import screen2 from '../assets/app_screen_2_appointments.png';
import screen3 from '../assets/app_screen_3_details.png';

const AppFeatures = () => {
    return (
        <section className="app-features-section">
            {/* Navigation Buttons (Re-added) */}
            <div className="features-nav-container">
                <button className="feature-tab active">Consultations</button>
                <button className="feature-tab">Payment withdrawal</button>
                <button className="feature-tab">Schedule</button>
            </div>

            <div className="features-showcase">
                {/* Feature 1 */}
                <div className="feature-column">
                    <h3 className="feature-title">Value Your Practice</h3>
                    <div className="feature-mockup">
                        <img src={screen1} alt="Consultation Fee Screen" />
                    </div>
                </div>

                {/* Feature 2 (Center) */}
                <div className="feature-column center-column">
                    <div className="feature-mockup main-mockup">
                        <img src={screen2} alt="Appointments Screen" />
                    </div>
                    <h3 className="feature-title main-title">Today's Healing Journey</h3>
                </div>

                {/* Feature 3 */}
                <div className="feature-column">
                    <h3 className="feature-item-title">Consultation Details</h3>
                    {/* Note: I'm using feature-title class usually, keeping consistency. 
               The previous code might have used feature-item-title for separate implementation. 
               Let's standardize on feature-title which is used in CSS now. */}
                    <div className="feature-mockup">
                        <img src={screen3} alt="Appointment Details Screen" />
                    </div>
                </div>
            </div>

            <div className="features-action">
                <button className="join-now-btn">Join Now</button>
            </div>
        </section>
    );
};

export default AppFeatures;
