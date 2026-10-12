import { Link } from 'react-router-dom';
import kauLogo from '../assets/kau-logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <div className="brand-logo">
              <img src={kauLogo} alt="Kerala Agricultural University" className="brand-logo-img" />
            </div>
            <span className="brand-text">Kerala Agricultural University</span>
          </Link>
          <p className="footer-description">
            A premium cultural streaming experience curated by the Kerala Agricultural University. Discover traditional art forms, music, festivals, and the rich agricultural heritage of Kerala.
          </p>
        </div>

        <div className="footer-links-section">
          <div className="footer-column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/search">Search</Link>
          </div>
          
          <div className="footer-column">
            <h4>Categories</h4>
            <Link to="/categories/theyyam">Theyyam</Link>
            <Link to="/categories/kathakali">Kathakali</Link>
            <Link to="/categories/agricultural-heritage">Agricultural Heritage</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Kerala Agricultural University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
