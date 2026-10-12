import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search as SearchIcon, Menu, X } from 'lucide-react';
import kauLogo from '../assets/kau-logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    navigate('/search', { state: { backgroundLocation: location } });
    closeMobileMenu();
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <div className="brand-logo">
              <img src={kauLogo} alt="Kerala Agricultural University" className="brand-logo-img" />
            </div>
            <span className="brand-text">Kerala Agricultural University</span>
          </Link>
          
          <nav className="navbar-nav desktop-only">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
          </nav>
        </div>

        <div className="navbar-right desktop-only">
          <button className="icon-button" onClick={handleSearchClick} aria-label="Search">
            <SearchIcon size={20} />
          </button>
        </div>

        <div className="mobile-menu-toggle mobile-only">
          <button className="icon-button" onClick={toggleMobileMenu} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/explore" className="mobile-nav-link" onClick={closeMobileMenu}>Explore</Link>
          <button className="mobile-nav-link search-btn" onClick={handleSearchClick}>
            <SearchIcon size={18} />
            <span>Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
