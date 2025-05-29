import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaFileInvoiceDollar } from 'react-icons/fa';
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
    { 
      label: 'SERVICES',
      submenu: [
        { path: '/commercial', label: 'Commercial Construction' },
        { path: '/residential', label: 'Residential Services' },
        { path: '/additional-services', label: 'Additional Services' },
        { path: '/project-management', label: 'Project Management' }
      ]
    },
    { path: '/portfolio', label: 'PORTFOLIO' }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
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
              {item.submenu ? (
                <div className="dropdown">
                  <span className="navbar-link dropdown-trigger">
                    {item.label}
                  </span>
                  <div className="dropdown-content">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`dropdown-link ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={closeMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Contact Button */}
          <div className="navbar-item">
            <button
              onClick={handleContactClick}
              className="navbar-link contact-scroll-btn"
            >
              CONTACT
            </button>
          </div>
          
          {/* Get Quote Button */}
          <motion.div className="navbar-item quote-button-container">
            <Link
              to="/quote"
              className="btn btn-quote"
              onClick={closeMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileInvoiceDollar />
              Get Quote
            </Link>
          </motion.div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar; 