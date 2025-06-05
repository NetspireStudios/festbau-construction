import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkerAlt, FaEye, FaHammer, FaPaintBrush, FaCouch } from 'react-icons/fa';
import { residentialProjects, getProjectWithImage } from '../utils/imageHelper';
import ProjectModal from '../components/ProjectModal';
import ModernTimeline from '../components/ModernTimeline';
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

      {/* Process Section */}
      <ModernTimeline 
        steps={[
          {
            step: "01",
            title: "Design & Planning",
            mobileTitle: "Design",
            description: "Collaborative design process to bring your vision to life with detailed planning and 3D visualizations.",
            mobileDescription: "Collaborative design process with detailed planning and 3D visualizations.",
            icon: FaHome
          },
          {
            step: "02", 
            title: "Construction Phase",
            mobileTitle: "Construction",
            description: "Expert craftsmanship with regular progress updates and quality control throughout the build.",
            mobileDescription: "Expert craftsmanship with quality control throughout the build.",
            icon: FaHammer
          },
          {
            step: "03",
            title: "Finishing Touches",
            mobileTitle: "Finishing",
            description: "Attention to detail in every finishing element, from paint to fixtures to final installations.",
            mobileDescription: "Detailed finishing from paint to fixtures and final installations.",
            icon: FaPaintBrush
          },
          {
            step: "04",
            title: "Final Walkthrough",
            mobileTitle: "Walkthrough",
            description: "Comprehensive quality inspection and handover of your completed dream space.",
            mobileDescription: "Quality inspection and handover of your completed space.",
            icon: FaCouch
          }
        ]}
        title={
          <>
            Our Construction <span className="gold-text">Process</span>
          </>
        }
        subtitle="From initial consultation to final walkthrough, we ensure a smooth and transparent construction experience."
      />

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
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
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
              <motion.a
                href="tel:+15483331419"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                (548) 333-1419
              </motion.a>
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