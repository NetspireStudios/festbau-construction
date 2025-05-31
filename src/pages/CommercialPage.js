import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaTools, FaUsers, FaClock, FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { commercialProjects, getProjectWithImage } from '../utils/imageHelper';
import ProjectModal from '../components/ProjectModal';
import './PageStyles.css';

const CommercialPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const serviceIcons = [
    { icon: FaBuilding, title: "Office Build-Outs", mobileTitle: "Offices" },
    { icon: FaTools, title: "Retail Renovations", mobileTitle: "Retail" },
    { icon: FaUsers, title: "Restaurant Construction", mobileTitle: "Restaurants" },
    { icon: FaClock, title: "Municipal Projects", mobileTitle: "Municipal" },
    { icon: FaMapMarkerAlt, title: "Mixed-Use Developments", mobileTitle: "Mixed-Use" }
  ];

  // Get projects with images from the helper
  const featuredProjects = commercialProjects.map(project => 
    getProjectWithImage(project, "Commercial Construction")
  );

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="page-container commercial-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="page-hero commercial-hero">
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
            <FaBuilding className="page-icon" />
            <h1 className="page-title">Commercial <span className="gold-text">Construction</span></h1>
            <p className="page-subtitle">
              Expert commercial construction services delivering exceptional results for businesses across Ontario. From restaurants to retail spaces, we build your success.
            </p>
            
            {/* Service Icons */}
            <div className="service-icons-grid">
              {serviceIcons.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-icon-item"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <service.icon className="service-icon" />
                  <span className="service-title desktop-title">{service.title}</span>
                  <span className="service-title mobile-title">{service.mobileTitle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Professional Commercial <span className="gold-text">Construction Services</span>
            </h2>
            <p className="section-description">
              We specialize in commercial construction projects that transform business visions into reality. 
              Our experienced team delivers high-quality construction services for restaurants, retail spaces, 
              offices, and industrial facilities across Ontario.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Featured Commercial <span className="gold-text">Projects</span>
            </h2>
            <p className="section-description">
              Explore our portfolio of successful commercial construction projects across Ontario, 
              showcasing our expertise in diverse industries and construction types.
            </p>
          </motion.div>

          <motion.div
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card featured-project"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <FaEye />
                      <span className="btn-text">View Project</span>
                    </motion.button>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-location">
                      <FaMapMarkerAlt />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="project-category">
                    <span className="category-badge">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              Ready to Start Your <span className="gold-text">Commercial Project</span>?
            </h2>
            <p className="cta-description">
              Let our experienced team bring your commercial construction vision to life with professional results and timely delivery.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/quote"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Project Quote
              </motion.a>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const footer = document.getElementById('contact');
                  if (footer) footer.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category="Commercial Construction"
      />
    </motion.div>
  );
};

export default CommercialPage; 