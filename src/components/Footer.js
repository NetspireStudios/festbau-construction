import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img 
                src="/images/festbau.png" 
                alt="FESTBAU Construction" 
                className="footer-logo-img"
              />
            </div>
            <p className="footer-description">
              Excellence in Construction & Renovation. From commercial builds to residential renovations, 
              we deliver turnkey solutions with precision and quality.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span className="contact-text">(548) 333-1419</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span className="contact-text">info@festbau.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span className="contact-text">Cambridge, ON</span>
            </div>
          </div>
          


          {/* Social Media */}
          <div className="footer-section social-media">
            <h4 className="footer-title">Follow Us</h4>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/profile.php?id=100085899534543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.linkedin.com/company/vugar-construction-inc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.instagram.com/vugarconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 FESTBAU. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 