import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane, FaUser, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Get In <span className="gold-text">Touch</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Ready to bring your construction vision to life? Contact FESTBAU for a free consultation and quote.
            </p>
          </motion.div>

          <div className="contact-content">
            {/* Contact Information - Left Side */}
            <motion.div variants={itemVariants} className="contact-info">
              <div className="contact-card">
                <h3 className="contact-info-title">Let's Build Something Amazing Together</h3>
                <p className="contact-info-description">
                  From commercial construction to residential projects, FESTBAU delivers excellence with every build.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Phone</span>
                      <a href="tel:548-333-1419" className="contact-value">(548) 333-1419</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Email</span>
                      <a href="mailto:info@festbau.com" className="contact-value">info@festbau.com</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <div className="contact-text">
                      <span className="contact-label">Location</span>
                      <span className="contact-value">Cambridge, ON</span>
                    </div>
                  </div>
                </div>

                <div className="social-links">
                  <span className="social-label">Follow Us:</span>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100085899534543" target="_blank" rel="noopener noreferrer" className="social-link">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.linkedin.com/company/vugar-construction-inc/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/vugarconstruction/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div variants={itemVariants} className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <div className="input-container">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <div className="input-container">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <div className="input-container">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <div className="input-container">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceRequired">Service Required *</label>
                  <div className="input-container">
                    <FaBuilding className="input-icon" />
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="commercial-construction">Commercial Construction</option>
                      <option value="residential-construction">Residential Construction</option>
                      <option value="renovations">Renovations & Remodeling</option>
                      <option value="project-management">Project Management</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 