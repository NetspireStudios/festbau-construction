import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/commercial', label: 'COMMERCIAL' },
    { path: '/residential', label: 'RESIDENTIAL' },
    { path: '/project-management', label: 'PROJECT MANAGEMENT' },
    { path: '/additional-services', label: 'ADDITIONAL SERVICES' },
    { path: '/blog', label: 'BLOG' }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(221, 171, 77, 0.1)'
      }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          FEST<span className="gold-text">BAU</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((item, index) => (
            <div key={index} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </div>
          ))}
          
          {/* Contact Button */}
          <div className="navbar-item">
            <button
              onClick={handleContactClick}
              className="navbar-link contact-scroll-btn"
              type="button"
            >
              CONTACT US
            </button>
          </div>
          
          {/* Get Quote Button */}
          <motion.div className="navbar-item quote-button-container">
            <Link
              to="/quote"
              className="btn btn-quote"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET QUOTE
            </Link>
          </motion.div>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
          type="button"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar; 