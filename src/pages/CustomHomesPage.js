import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaRuler, 
  FaPalette, 
  FaUsers, 
  FaClipboardCheck, 
  FaKey, 
  FaLightbulb, 
  FaDraftingCompass, 
  FaHammer, 
  FaEye, 
  FaMapMarkerAlt, 
  FaCheckCircle,
  FaAward,
  FaHardHat,
  FaBullseye,
  FaShieldAlt,
  FaCog,
  FaBuilding,
  FaLeaf,
  FaCube,
  FaRoute,
  FaCertificate,
  FaTools,
  FaGem,
  FaCouch,
  FaTree,
  FaBolt,
  FaThermometerHalf,
  FaWifi,
  FaVideo,
  FaMicrophone,
  FaStar,
  FaRecycle,
  FaSolarPanel,
  FaWater,
  FaWind,
  FaCalculator,
  FaMicroscope,
  FaCalendarAlt,
  FaClipboard,
  FaDollarSign,
  FaHandshake
} from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import ModernTimeline from '../components/ModernTimeline';
import CardStackAnimations from '../components/CardStackAnimations';
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

  // Enhanced services with detailed descriptions
  const customHomeServices = [
    {
      icon: FaDraftingCompass,
      title: "Custom Architecture",
      description: "Unique architectural designs tailored to your lifestyle, lot constraints, and personal preferences with cutting-edge design technology.",
      features: [
        { icon: FaCube, text: "3D Design Visualization & Virtual Walkthroughs" },
        { icon: FaRoute, text: "Site-Specific Planning & Lot Optimization" }, 
        { icon: FaLeaf, text: "Energy Efficiency Integration & Green Building" },
        { icon: FaStar, text: "Unique Style Development & Personal Branding" },
        { icon: FaBuilding, text: "Structural Engineering & Foundation Design" },
        { icon: FaCertificate, text: "Building Code Compliance & Municipal Approvals" }
      ]
    },
    {
      icon: FaPalette,
      title: "Luxury Finishes",
      description: "Premium materials and high-end finishes throughout your home, from imported stones to custom millwork and designer fixtures.",
      features: [
        { icon: FaGem, text: "Premium Material Selection & Sourcing" },
        { icon: FaTools, text: "Custom Millwork & Cabinetry Design" },
        { icon: FaLightbulb, text: "Designer Fixtures & Lighting Solutions" },
        { icon: FaGem, text: "Luxury Hardware & Finishing Touches" },
        { icon: FaTree, text: "Natural Stone & Tile Installation" },
        { icon: FaCouch, text: "Hardwood Flooring & Custom Carpentry" }
      ]
    },
    {
      icon: FaCog,
      title: "Smart Home Integration",
      description: "Cutting-edge smart home technology seamlessly integrated throughout, providing convenience, security, and energy efficiency.",
      features: [
        { icon: FaWifi, text: "Home Automation Systems & Voice Control" },
        { icon: FaVideo, text: "Security Integration & Surveillance Systems" },
        { icon: FaBolt, text: "Energy Management & Smart Thermostats" },
        { icon: FaThermometerHalf, text: "Climate Control & HVAC Automation" },
        { icon: FaLightbulb, text: "Smart Lighting & Motorized Window Treatments" },
        { icon: FaMicrophone, text: "Entertainment Systems & Audio/Visual Integration" }
      ]
    },
    {
      icon: FaLeaf,
      title: "Sustainable Building",
      description: "Environmentally conscious construction using sustainable materials and energy-efficient systems for reduced environmental impact.",
      features: [
        { icon: FaStar, text: "Energy Star Certification & LEED Standards" },
        { icon: FaRecycle, text: "Sustainable Materials & Eco-Friendly Options" },
        { icon: FaSolarPanel, text: "Solar Ready Installation & Renewable Energy" },
        { icon: FaWater, text: "Water Conservation Systems & Rainwater Harvesting" },
        { icon: FaWind, text: "High-Performance Insulation & Windows" },
        { icon: FaLeaf, text: "Indoor Air Quality & Ventilation Systems" }
      ]
    },
    {
      icon: FaBuilding,
      title: "Structural Excellence",
      description: "Superior structural engineering and construction techniques ensuring your home stands the test of time with uncompromising quality.",
      features: [
        { icon: FaCalculator, text: "Engineering Precision & Structural Analysis" },
        { icon: FaMicroscope, text: "Quality Assurance & Inspection Protocols" },
        { icon: FaCertificate, text: "Building Code Compliance & Safety Standards" },
        { icon: FaShieldAlt, text: "Structural Warranties & Long-Term Support" },
        { icon: FaBuilding, text: "Foundation Systems & Waterproofing" },
        { icon: FaHardHat, text: "Seismic & Wind Load Engineering" }
      ]
    },
    {
      icon: FaUsers,
      title: "Turnkey Solution",
      description: "Complete build management from initial concept through move-in ready, handling every detail so you don't have to worry about anything.",
      features: [
        { icon: FaCalendarAlt, text: "Project Management & Timeline Coordination" },
        { icon: FaClipboard, text: "Permit Coordination & Regulatory Approvals" },
        { icon: FaUsers, text: "Trade Scheduling & Contractor Management" },
        { icon: FaEye, text: "Quality Control & Progress Monitoring" },
        { icon: FaDollarSign, text: "Budget Management & Cost Control" },
        { icon: FaHandshake, text: "Final Walkthrough & Client Handover" }
      ]
    }
  ];

  // Process steps with detailed explanations
  const constructionProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      mobileTitle: "Consultation",
      description: "Understanding your vision, lifestyle needs, and design preferences to create the foundation of your dream home.",
      mobileDescription: "Understanding your vision and design preferences for your dream home.",
      icon: FaLightbulb
    },
    {
      step: "02", 
      title: "Design & Planning",
      mobileTitle: "Planning",
      description: "Collaborative design process with architects and engineers to develop detailed plans and 3D visualizations.",
      mobileDescription: "Collaborative design process to develop detailed plans and specifications.",
      icon: FaDraftingCompass
    },
    {
      step: "03",
      title: "Permits & Approvals",
      mobileTitle: "Permits",
      description: "Handling all municipal permits, inspections, and regulatory approvals for a seamless construction process.",
      mobileDescription: "Handling permits, inspections, and regulatory approvals.",
      icon: FaClipboardCheck
    },
    {
      step: "04",
      title: "Foundation & Framing",
      mobileTitle: "Foundation",
      description: "Expert foundation work and structural framing using the highest quality materials and construction techniques.",
      mobileDescription: "Expert foundation work and structural framing with quality materials.",
      icon: FaHardHat
    },
    {
      step: "05",
      title: "Construction & Systems",
      mobileTitle: "Construction",
      description: "Complete home construction including electrical, plumbing, HVAC, and all major systems installation.",
      mobileDescription: "Complete construction including all major systems installation.",
      icon: FaHammer
    },
    {
      step: "06",
      title: "Finishing & Inspection",
      mobileTitle: "Finishing",
      description: "Interior and exterior finishing work, final inspections, and quality assurance before handover.",
      mobileDescription: "Finishing work, inspections, and quality assurance.",
      icon: FaBullseye
    },
    {
      step: "07",
      title: "Final Walkthrough",
      mobileTitle: "Completion",
      description: "Comprehensive inspection and handover of your completed custom home, ready for move-in with all warranties.",
      mobileDescription: "Inspection and handover of your completed custom home.",
      icon: FaKey
    }
  ];

  const customHomes = [
    {
      title: "Modern Luxury Estate",
      folderName: "Modern Luxury Estate",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Cambridge, ON",
      category: "Luxury Custom Home",
      description: "Contemporary design with open-concept living spaces, featuring floor-to-ceiling windows, premium finishes, and smart home technology throughout.",
      features: ["Open Concept Design", "Smart Home Technology", "Premium Finishes", "Floor-to-Ceiling Windows", "Modern Kitchen", "Luxury Master Suite"],
      specs: ["4,500 sq ft", "5 Bedrooms", "4.5 Bathrooms", "3-Car Garage"]
    },
    {
      title: "Traditional Family Home", 
      folderName: "Traditional Family Home",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Waterloo, ON",
      category: "Traditional Custom Home",
      description: "Classic architecture with modern amenities, featuring traditional exterior charm combined with contemporary interior comforts and energy-efficient systems.",
      features: ["Traditional Design", "Modern Amenities", "Energy Efficient", "Family-Friendly Layout", "Gourmet Kitchen", "Finished Basement"],
      specs: ["3,800 sq ft", "4 Bedrooms", "3.5 Bathrooms", "2-Car Garage"]
    },
    {
      title: "Contemporary Waterfront",
      folderName: "Contemporary Waterfront",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      location: "Muskoka, ON",
      category: "Waterfront Custom Home",
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

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="page-container custom-homes-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <CardStackAnimations />
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
            
            <motion.h1 
              className="page-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Custom <span className="gold-text">Homes</span>
            </motion.h1>
            
            <motion.p 
              className="page-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From concept to completion—luxury homes designed to reflect your vision and exceed your expectations with uncompromising quality and craftsmanship.
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Custom Homes Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </motion.div>
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
              to making your dream home a reality with attention to every detail.
            </p>
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
              Our Custom Home <span className="gold-text">Services</span>
            </h2>
            <p className="section-description">
              We offer a complete range of custom home construction services, from initial architectural design through final completion and beyond.
            </p>
          </motion.div>

          <div className="services-grid">
            {customHomeServices.map((service, index) => (
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
                      <div className="feature-icon">
                        <feature.icon />
                      </div>
                      <span className="feature-text">{feature.text}</span>
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
            Our Custom Home <span className="gold-text">Process</span>
          </>
        }
        subtitle="We follow a proven methodology that ensures every custom home project is delivered on time, within budget, and to the highest quality standards."
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
              Featured Custom <span className="gold-text">Homes</span>
            </h2>
            <p className="section-description">
              Explore our portfolio of custom home projects, showcasing our commitment to quality and innovation in luxury home construction.
            </p>
          </motion.div>

          <motion.div
            className="projects-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {customHomes.map((project, index) => (
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
                  <div className="project-specs">
                    {project.specs.map((spec, specIndex) => (
                      <span key={specIndex} className="spec-item">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="why-choose-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose FESTBAU for Your <span className="gold-text">Custom Home</span>?
            </h2>
            <p className="section-description">
              With years of experience in luxury home construction and a commitment to excellence, we deliver custom homes 
              that exceed expectations. Our engineering background ensures precision, while our design expertise creates homes 
              that are both beautiful and functional.
            </p>
            
            <div className="features-grid">
              <motion.div
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaAward className="feature-icon" />
                <h3>Award-Winning Design</h3>
                <p>Recognized for excellence in custom home design and construction</p>
              </motion.div>
              <motion.div
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaShieldAlt className="feature-icon" />
                <h3>Quality Guarantee</h3>
                <p>Comprehensive warranties and quality assurance on all work</p>
              </motion.div>
              <motion.div
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaUsers className="feature-icon" />
                <h3>Expert Team</h3>
                <p>Skilled craftsmen and experienced project managers</p>
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
              Ready to Build Your <span className="gold-text">Dream Home</span>?
            </h2>
            <p className="cta-description">
              Contact us today to schedule a consultation and begin the journey to creating your perfect custom home.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/quote"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
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
        category="Custom Homes"
      />
    </motion.div>
  );
};

export default CustomHomesPage;