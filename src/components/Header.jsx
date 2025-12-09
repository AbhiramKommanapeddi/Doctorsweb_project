import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            {/* Top Banner */}
            <div className="offer-banner">
                <span>Register Yourself As An Amrutam Doctor</span>
                <button>Join Now</button>
            </div>

            {/* Main Navigation */}
            <nav className="navbar">
                <div className="logo">AMRUTAM</div>
                <ul className="nav-links">
                    <li><Link to="/#about">About Us</Link></li>
                    <li><Link to="/#onboarding">Onboarding</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/#testimonials">Testimonials</Link></li>
                </ul>
                {/* Mobile menu toggle could go here */}
            </nav>
        </header>
    );
};

export default Header;
