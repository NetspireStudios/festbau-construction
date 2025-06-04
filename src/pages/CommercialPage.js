import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaTools, 
  FaUsers, 
  FaMapMarkerAlt, 
  FaEye,
  FaCheckCircle,
  FaAward,
  FaHardHat,
  FaClipboardCheck,
  FaBullseye,
  FaShieldAlt,
  FaPhone,
  FaStore,
  FaUtensils,
  FaIndustry,
  FaCity
} from 'react-icons/fa';
import { commercialProjects, getProjectWithImage } from '../utils/imageHelper';
import ProjectModal from '../components/ProjectModal';
import ModernTimeline from '../components/ModernTimeline';
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

  // Enhanced services with detailed descriptions
  const commercialServices = [
    {
      icon: FaStore,
      title: "Retail Construction",
      description: "Complete retail space build-outs from concept to completion, including storefront design, interior layouts, and customer experience optimization.",
      features: ["Custom Storefront Design", "Interior Layout Planning", "Display Installation", "Customer Flow Optimization"]
    },
    {
      icon: FaUtensils,
      title: "Restaurant Construction",
      description: "Specialized restaurant construction including commercial kitchen design, dining area optimization, and compliance with health regulations.",
      features: ["Commercial Kitchen Design", "Dining Space Layout", "Health Code Compliance", "Equipment Installation"]
    },
    {
      icon: FaBuilding,
      title: "Office Build-Outs",
      description: "Professional office construction and renovation services creating productive workspaces that enhance business operations and employee satisfaction.",
      features: ["Open Office Concepts", "Meeting Room Design", "Technology Integration", "Ergonomic Workspaces"]
    },
    {
      icon: FaIndustry,
      title: "Industrial Construction",
      description: "Heavy-duty industrial construction for warehouses, manufacturing facilities, and distribution centers with focus on functionality and safety.",
      features: ["Warehouse Construction", "Manufacturing Facilities", "Safety Compliance", "Equipment Integration"]
    },
    {
      icon: FaCity,
      title: "Mixed-Use Development",
      description: "Complex mixed-use projects combining residential, commercial, and office spaces in integrated development solutions.",
      features: ["Multi-Use Design", "Zoning Compliance", "Community Integration", "Sustainable Development"]
    },
    {
      icon: FaHardHat,
      title: "Municipal Projects",
      description: "Public sector construction including government buildings, community centers, and infrastructure projects serving Ontario communities.",
      features: ["Government Buildings", "Community Centers", "Public Infrastructure", "Accessibility Compliance"]
    }
  ];

  // Process steps with detailed explanations
  const constructionProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      mobileTitle: "Consultation",
      description: "We begin with an in-depth consultation to understand your business needs, timeline, and budget requirements.",
      mobileDescription: "In-depth consultation to understand your business needs and requirements.",
      icon: FaUsers
    },
    {
      step: "02", 
      title: "Design & Planning",
      mobileTitle: "Planning",
      description: "Our team creates detailed plans and 3D visualizations, ensuring every aspect meets your specifications and local codes.",
      mobileDescription: "Detailed plans and 3D visualizations meeting your specifications.",
      icon: FaClipboardCheck
    },
    {
      step: "03",
      title: "Permits & Approvals",
      mobileTitle: "Permits",
      description: "We handle all necessary permits, inspections, and regulatory approvals to ensure smooth project progression.",
      mobileDescription: "All permits, inspections, and regulatory approvals handled.",
      icon: FaShieldAlt
    },
    {
      step: "04",
      title: "Construction Phase",
      mobileTitle: "Construction",
      description: "Professional construction with regular updates, quality control, and adherence to timeline and budget.",
      mobileDescription: "Professional construction with quality control and timeline adherence.",
      icon: FaTools
    },
    {
      step: "05",
      title: "Final Inspection",
      mobileTitle: "Inspection",
      description: "Comprehensive final inspection and walkthrough to ensure everything meets our high standards and your expectations.",
      mobileDescription: "Final inspection and walkthrough ensuring high standards.",
      icon: FaBullseye
    },
    {
      step: "06",
      title: "Project Completion",
      mobileTitle: "Completion",
      description: "Handover of completed project with all documentation, warranties, and ongoing support as needed.",
      mobileDescription: "Project handover with documentation and warranties.",
      icon: FaAward
    }
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
            
            <motion.h1 
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Commercial <span className="gold-text">Construction</span>
            </motion.h1>
            
            <motion.p 
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From restaurants to retail spaces, offices to industrial facilities - we transform your commercial vision into reality with expert craftsmanship and innovative solutions.
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding services-detail-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our Commercial <span className="gold-text">Services</span>
            </h2>
            <p className="section-description">
              We offer a complete range of commercial construction services, from initial concept and design through final completion and beyond.
            </p>
          </motion.div>

          <div className="services-grid">
            {commercialServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="service-icon">
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ModernTimeline 
        steps={constructionProcess}
        title={
          <>
            Our Construction <span className="gold-text">Process</span>
          </>
        }
        subtitle="Our proven 6-step process ensures your commercial construction project is completed on time, within budget, and to the highest quality standards."
      />

      {/* Featured Projects */}
      <section className="section-padding projects-section">
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
              Discover our recent commercial construction projects that showcase our commitment to quality, innovation, and client satisfaction.
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
                className="featured-project"
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
                      <span>View Details</span>
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
      <section className="section-padding cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              Ready to Transform Your <span className="gold-text">Business Space</span>?
            </h2>
            <p className="cta-description">
              Let's discuss your commercial construction project and create a space that drives your business success.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
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
                <FaPhone />
                (548) 333-1419
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