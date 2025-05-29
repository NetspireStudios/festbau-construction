import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';
import './PageStyles.css';

const ProjectManagementPage = () => {
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
            <FaProjectDiagram className="page-icon" />
            <h1 className="page-title">Project <span className="gold-text">Management</span></h1>
            <p className="page-subtitle">
              Expert oversight from start to finish with engineering precision.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectManagementPage; 