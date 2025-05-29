import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import './PageStyles.css';

const ContactPage = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="page-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaEnvelope className="page-icon" />
            <h1 className="page-title">Contact <span className="gold-text">Us</span></h1>
            <p className="page-subtitle">
              Get in touch for your next construction project.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage; 