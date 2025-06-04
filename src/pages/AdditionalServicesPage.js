import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaHammer, FaLeaf, FaTree, FaSeedling, FaMapMarkerAlt, FaEye, FaPalette, FaWater, FaSun } from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import './PageStyles.css';

const AdditionalServicesPage = () => {
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



  const featuredProjects = [
    {
      title: "Deck in Waterloo",
      folderName: "Deck in Waterloo",
      location: "Waterloo, ON",
      category: "Deck Construction",
      description: "A stunning multi-level deck with integrated lighting and premium composite materials, creating the perfect outdoor entertainment space.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Multi-level design", "Integrated lighting", "Composite materials", "Built-in seating"]
    },
    {
      title: "Deck in Elmira", 
      folderName: "Deck in Elmira",
      location: "Elmira, ON",
      category: "Deck Construction",
      description: "A beautiful cedar deck with custom railings and pergola, providing both privacy and style for this family home.",
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Cedar construction", "Custom railings", "Pergola integration", "Privacy design"]
    }
  ];

  const serviceIcons = [
    { icon: FaHammer, title: "Deck Construction", mobileTitle: "Decks" },
    { icon: FaLeaf, title: "Landscaping", mobileTitle: "Landscape" },
    { icon: FaPalette, title: "Outdoor Design", mobileTitle: "Design" },
    { icon: FaWater, title: "Water Features", mobileTitle: "Water" },
    { icon: FaSun, title: "Outdoor Living", mobileTitle: "Outdoor" }
  ];

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
      className="page-container additional-services-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
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
            <FaTools className="page-icon" />
            <h1 className="page-title">Additional <span className="gold-text">Services</span></h1>
            <p className="page-subtitle">
              Comprehensive outdoor and specialty construction solutions that transform your property into a beautiful, functional space.
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
              Custom Outdoor <span className="gold-text">Construction Services</span>
            </h2>
            <p className="section-description">
              We specialize in building durable and attractive decks, porches, and outdoor living spaces that enhance 
              your property's curb appeal. Our skilled team works closely with clients to design unique structures 
              that are both functional and visually appealing, bringing your outdoor vision to life with styles 
              ranging from classic to contemporary.
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
              Featured <span className="gold-text">Projects</span>
            </h2>
            <p className="section-description">
              Explore our recent deck construction projects that showcase our craftsmanship and attention to detail.
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

      {/* Materials & Quality Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="materials-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Premium <span className="gold-text">Materials & Craftsmanship</span>
            </h2>
            <p className="section-description">
              We utilize only the finest materials to guarantee that our outdoor structures are built to endure. 
              Our skilled team excels in working with wood, composite decking, or a blend of materials to achieve 
              a custom, beautiful finish that withstands the test of time and weather.
            </p>
            
            <div className="materials-grid">
              <motion.div
                className="material-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaTree className="material-icon" />
                <h3>Premium Wood</h3>
                <p>Cedar, pressure-treated lumber, and exotic hardwoods</p>
              </motion.div>
              <motion.div
                className="material-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun className="material-icon" />
                <h3>Composite Decking</h3>
                <p>Low-maintenance, weather-resistant composite materials</p>
              </motion.div>
              <motion.div
                className="material-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaSeedling className="material-icon" />
                <h3>Eco-Friendly Options</h3>
                <p>Sustainable materials that protect the environment</p>
              </motion.div>
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
              Ready to Transform Your <span className="gold-text">Outdoor Space</span>?
            </h2>
            <p className="cta-description">
              Contact us today to schedule a consultation and begin transforming your outdoor living area into the space of your dreams.
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
          category="Additional Services"
        />
    </motion.div>
  );
};

export default AdditionalServicesPage; 