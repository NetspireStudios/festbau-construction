import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaHammer, FaPaintBrush, FaCouch, FaMapMarkerAlt, FaEye } from 'react-icons/fa';
import { residentialProjects, getProjectWithImage } from '../utils/imageHelper';
import ProjectModal from '../components/ProjectModal';
import './PageStyles.css';

const ResidentialPage = () => {
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
    { icon: FaHome, title: "Home Renovations", mobileTitle: "Homes" },
    { icon: FaHammer, title: "Kitchen Remodeling", mobileTitle: "Kitchens" },
    { icon: FaPaintBrush, title: "Bathroom Renovation", mobileTitle: "Bathrooms" },
    { icon: FaCouch, title: "Basement Finishing", mobileTitle: "Basements" },
    { icon: FaHome, title: "Interior Design", mobileTitle: "Interiors" }
  ];

  // Get projects with images from the helper
  const featuredProjects = residentialProjects.map(project => 
    getProjectWithImage(project, "Residential Projects")
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
      className="page-container residential-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="page-hero residential-hero">
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
            <FaHome className="page-icon" />
            <h1 className="page-title">Residential <span className="gold-text">Construction</span></h1>
            <p className="page-subtitle">
              Creating dream homes and transforming living spaces across Ontario with personalized design and exceptional craftsmanship.
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
              Expert Residential <span className="gold-text">Construction Services</span>
            </h2>
            <p className="section-description">
              From custom home building to comprehensive renovations, we specialize in creating beautiful, 
              functional living spaces that reflect your unique style and meet your family's needs. 
              Our experienced team brings your vision to life with quality craftsmanship and attention to detail.
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
              Featured Residential <span className="gold-text">Projects</span>
            </h2>
            <p className="section-description">
              Explore our portfolio of residential construction and renovation projects, 
              showcasing our commitment to quality and innovation in home building.
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
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

      {/* Process Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our Construction <span className="gold-text">Process</span>
            </h2>
            <p className="section-description">
              From initial consultation to final walkthrough, we ensure a smooth and transparent construction experience.
            </p>
          </motion.div>

          <motion.div
            className="process-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaHome />
              </div>
              <div className="timeline-content">
                <h3>Design & Planning</h3>
                <p>Collaborative design process to bring your vision to life</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaHammer />
              </div>
              <div className="timeline-content">
                <h3>Construction Phase</h3>
                <p>Expert craftsmanship with regular progress updates</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaPaintBrush />
              </div>
              <div className="timeline-content">
                <h3>Finishing Touches</h3>
                <p>Attention to detail in every finishing element</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaCouch />
              </div>
              <div className="timeline-content">
                <h3>Final Walkthrough</h3>
                <p>Quality inspection and handover of your dream space</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              Ready to Build Your <span className="gold-text">Dream Home</span>?
            </h2>
            <p className="cta-description">
              Contact us today to discuss your residential construction or renovation project and take the first step toward your dream home.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/quote"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
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
                Schedule Consultation
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
        category="Residential Projects"
      />
    </motion.div>
  );
};

export default ResidentialPage; 