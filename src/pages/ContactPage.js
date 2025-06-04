import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaLinkedin, FaInstagram, FaUser, FaCog, FaCommentDots } from 'react-icons/fa';
import './PageStyles.css';
import '../components/ContactPageStyles.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const serviceOptions = [
    "Commercial Construction",
    "Residential Projects", 
    "Custom Homes",
    "Project Management",
    "Renovation",
    "Other"
  ];

  return (
    <motion.div
      className="contact-page-modern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-split-container">
        {/* Left Side - Contact Info */}
        <motion.div
          className="contact-info-side"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info-content">
            <h1 className="contact-main-heading">
              Let's Build Something Amazing Together
            </h1>
            <p className="contact-main-description">
              From commercial construction to residential projects, FESTBAU delivers excellence with every build.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaPhone />
                </div>
                <div className="contact-detail-info">
                  <span className="contact-detail-label">PHONE</span>
                  <span className="contact-detail-value">(548) 333-1419</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail-info">
                  <span className="contact-detail-label">EMAIL</span>
                  <span className="contact-detail-value">info@festbau.com</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-info">
                  <span className="contact-detail-label">LOCATION</span>
                  <span className="contact-detail-value">Cambridge, ON</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <p className="social-heading">FOLLOW US:</p>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="contact-form-side"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">FIRST NAME *</label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">LAST NAME *</label>
                <div className="input-wrapper">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">EMAIL *</label>
                <div className="input-wrapper">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE *</label>
                <div className="input-wrapper">
                  <FaPhone className="input-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="serviceRequired">SERVICE REQUIRED *</label>
              <div className="input-wrapper">
                <FaCog className="input-icon" />
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">HOW CAN WE HELP? *</label>
              <div className="input-wrapper textarea-wrapper">
                <FaCommentDots className="input-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and any specific details..."
                ></textarea>
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
        </div>

      {/* Google Map Section */}
      <motion.section
        className="contact-map-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            className="map-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="map-title">Find Us Here</h2>
            <p className="map-description">
              Visit our office in Cambridge, Ontario for consultations and project discussions.
            </p>
          </motion.div>
          
          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186425.94313600284!2d-80.6424327820078!3d43.39915820701758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x9525e7ee87ea7c52!2sCambridge%2C%20ON%2C%20Canada!5e0!3m2!1sen!2s!4v1697715023456!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FESTBAU Construction Office Location"
              ></iframe>
              <div className="map-overlay">
                <div className="map-info">
                  <div className="map-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="map-info-details">
                    <h3>FESTBAU Construction</h3>
                    <p>Cambridge, ON</p>
                    <a 
                      href="https://maps.google.com/?q=Cambridge,ON,Canada" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="directions-link"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage; 