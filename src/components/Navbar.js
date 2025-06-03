import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };



  const serviceLinks = [
    { path: '/commercial', label: 'Commercial Construction' },
    { path: '/residential', label: 'Residential Projects' },
    { path: '/custom-homes', label: 'Custom Homes' },
    { path: '/project-management', label: 'Project Management' }
  ];

  const handleLinkClick = () => {
    closeMenu();
  };

  const isServiceActive = serviceLinks.some(service => service.path === location.pathname);

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
          <img 
            src="/images/festbau.png" 
            alt="FESTBAU Construction" 
            className="navbar-logo-img"
          />
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Home Link */}
          <div className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              HOME
            </Link>
          </div>

          {/* Services Dropdown */}
          <div className="navbar-item dropdown">
            <button
              className={`dropdown-trigger ${isServiceActive ? 'active' : ''}`}
              onClick={handleServicesClick}
              type="button"
            >
              SERVICES
              <FaChevronDown className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="dropdown-content show">
                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`dropdown-link ${location.pathname === service.path ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span className="dropdown-link-title">{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Blog Link */}
          <div className="navbar-item">
            <Link
              to="/blog"
              className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              BLOG
            </Link>
          </div>
          
          {/* Get Quote Link */}
          <div className="navbar-item">
            <Link
              to="/quote"
              className={`navbar-link ${location.pathname === '/quote' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              GET QUOTE
            </Link>
          </div>
          
          {/* Contact Button */}
          <motion.div className="navbar-item quote-button-container">
            <Link
              to="/contact"
              className="btn btn-quote"
              onClick={handleLinkClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
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