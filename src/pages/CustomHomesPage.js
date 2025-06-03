import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaRuler, FaPalette, FaUsers, FaClipboardCheck, FaKey, FaLightbulb, FaDraftingCompass, FaHammer, FaEye, FaMapMarkerAlt } from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import ModernTimeline from '../components/ModernTimeline';
import './PageStyles.css';

const CustomHomesPage = () => {
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



  const features = [
    { icon: FaRuler, title: "Custom Architecture", description: "Unique designs tailored to your lot and lifestyle" },
    { icon: FaPalette, title: "Luxury Finishes", description: "Premium materials and high-end finishes throughout" },
    { icon: FaUsers, title: "Expert Team", description: "Skilled craftsmen and experienced project managers" },
    { icon: FaHome, title: "Turnkey Solution", description: "Complete build from foundation to move-in ready" }
  ];

  const customHomes = [
    {
      title: "Modern Luxury Estate",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Cambridge, ON",
      description: "Contemporary design with open-concept living spaces, featuring floor-to-ceiling windows, premium finishes, and smart home technology throughout.",
      features: ["Open Concept Design", "Smart Home Technology", "Premium Finishes", "Floor-to-Ceiling Windows", "Modern Kitchen", "Luxury Master Suite"],
      specs: ["4,500 sq ft", "5 Bedrooms", "4.5 Bathrooms", "3-Car Garage"]
    },
    {
      title: "Traditional Family Home", 
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Waterloo, ON",
      description: "Classic architecture with modern amenities, featuring traditional exterior charm combined with contemporary interior comforts and energy-efficient systems.",
      features: ["Traditional Design", "Modern Amenities", "Energy Efficient", "Family-Friendly Layout", "Gourmet Kitchen", "Finished Basement"],
      specs: ["3,800 sq ft", "4 Bedrooms", "3.5 Bathrooms", "2-Car Garage"]
    },
    {
      title: "Contemporary Waterfront",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Muskoka, ON",
      description: "Stunning lakefront property with panoramic views, featuring floor-to-ceiling windows, private dock access, and seamless indoor-outdoor living spaces.",
      features: ["Waterfront Location", "Panoramic Views", "Private Dock", "Indoor-Outdoor Living", "Floor-to-Ceiling Windows", "Entertainment Deck"],
      specs: ["5,200 sq ft", "6 Bedrooms", "5 Bathrooms", "3-Car Garage"]
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      className="page-container custom-homes-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="page-hero custom-homes-hero">
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
            <h1 className="page-title">Custom <span className="gold-text">Homes</span></h1>
            <p className="page-subtitle">
              From concept to completion—luxury homes designed to reflect your vision and exceed your expectations.
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
              Building Your Dream <span className="gold-text">Home</span>
            </h2>
            <p className="section-description">
              At FESTBAU, we specialize in creating custom homes that reflect your unique style and meet your family's needs. 
              Our comprehensive approach combines architectural excellence, superior craftsmanship, and personalized service 
              to deliver homes that stand the test of time. From initial concept through final walkthrough, we're committed 
              to making your dream home a reality.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ModernTimeline 
        steps={[
          {
            step: "01",
            title: "Initial Consultation",
            description: "Understanding your vision, lifestyle needs, and design preferences to create the foundation of your dream home.",
            icon: FaLightbulb
          },
          {
            step: "02",
            title: "Design & Planning",
            description: "Collaborative design process with architects and engineers to develop detailed plans and specifications.",
            icon: FaDraftingCompass
          },
          {
            step: "03",
            title: "Permits & Approvals",
            description: "Handling all municipal permits, inspections, and regulatory approvals for a seamless process.",
            icon: FaClipboardCheck
          },
          {
            step: "04",
            title: "Construction",
            description: "Expert craftsmanship and quality materials brought together with meticulous attention to detail.",
            icon: FaHammer
          },
          {
            step: "05",
            title: "Final Walkthrough",
            description: "Comprehensive inspection and handover of your completed custom home, ready for move-in.",
            icon: FaKey
          }
        ]}
        title={
          <>
            Our Custom Home <span className="gold-text">Process</span>
          </>
        }
        subtitle="We follow a proven methodology that ensures every custom home project is delivered on time, within budget, and to the highest quality standards."
      />

      {/* Portfolio Section */}
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
              Featured Custom <span className="gold-text">Homes</span>
            </h2>
            <p className="section-description">
              Explore some of our recent custom home projects that showcase our commitment to quality and design excellence.
            </p>
          </motion.div>

          <div className="projects-grid">
            {customHomes.map((home, index) => (
              <motion.div
                key={index}
                className="featured-project"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(home)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <img src={home.image} alt={home.title} />
                  <div className="project-overlay">
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(home);
                      }}
                    >
                      <FaEye />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{home.title}</h3>
                    <div className="project-location">
                      <FaMapMarkerAlt />
                      <span>{home.location}</span>
                    </div>
                  </div>
                  <p className="project-description">{home.description}</p>
                  <div className="project-features">
                    {home.features.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Build Your <span className="gold-text">Dream Home</span>?
            </h2>
            <p className="cta-description">
              Let's discuss your vision and start planning your custom home today. Our team is ready to guide you through every step of the process.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/quote"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
              <motion.a
                href="/contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
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
        category="Custom Homes"
      />
    </motion.div>
  );
};

export default CustomHomesPage; 