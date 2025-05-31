import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import './SimpleModal.css';

const SimpleModal = ({ project, isOpen, onClose, category }) => {
  if (!isOpen || !project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="simple-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Interested in {project.title}?</h3>
              <button className="close-btn" onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-content">
              <p>Get in touch with us about this project or similar services.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <FaUser className="form-icon" />
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <FaUser className="form-icon" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <FaEnvelope className="form-icon" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <FaPhone className="form-icon" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <FaComment className="form-icon" />
                  <textarea
                    placeholder={`Tell us about your ${category.toLowerCase()} project...`}
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SimpleModal; 