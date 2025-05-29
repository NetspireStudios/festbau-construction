import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import ProjectModal from '../components/ProjectModal';
import './PageStyles.css';

const CommercialPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // Real projects extracted from https://www.vugarconstruction.com/commercial-construction-company
  const actualProjects = [
    {
      id: 'dairy-queen-niagara-falls',
      name: 'Dairy Queen in Niagara Falls',
      type: 'Turnkey Project',
      location: 'Niagara Falls, ON',
      description: 'Complete franchise construction with brand compliance and fast-track delivery. Full restaurant build-out including kitchen equipment, dining area, and drive-thru operations.',
      scope: [
        'Complete restaurant build-out',
        'Kitchen equipment installation',
        'Drive-thru construction', 
        'Brand-compliant interior design',
        'HVAC and electrical systems',
        'Permit coordination and inspections'
      ],
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/Dairy+Queen+Niagara+Falls+ON',
      projectLink: '#dairy-queen-project'
    },
    {
      id: 'tokyo-smoke-port-elgin',
      name: 'Tokyo Smoke in Port Elgin',
      type: 'Turnkey Project',
      location: 'Port Elgin, ON',
      description: 'Modern cannabis retail location with sophisticated design and security features. Complete build-out following provincial regulations and brand standards.',
      scope: [
        'Retail space design and construction',
        'Security system installation',
        'Regulatory compliance setup',
        'Custom display fixtures',
        'Advanced HVAC systems',
        'Specialized lighting design'
      ],
      images: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/Tokyo+Smoke+Port+Elgin+ON',
      projectLink: '#tokyo-smoke-project'
    },
    {
      id: 'barburrito-belleville',
      name: 'BarBurrito in Belleville',
      type: 'Turnkey Project',
      location: 'Belleville, ON',
      description: 'Modern quick-service restaurant with optimized kitchen workflow and vibrant dining atmosphere. Complete franchise build-out with corporate brand standards.',
      scope: [
        'Quick-service restaurant construction',
        'Kitchen workflow optimization',
        'Franchise brand compliance',
        'Food preparation equipment',
        'Point-of-sale system setup',
        'Customer seating area design'
      ],
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/BarBurrito+Belleville+ON',
      projectLink: '#barburrito-belleville-project'
    },
    {
      id: 'eggmania',
      name: 'Eggmania Restaurant',
      type: 'Turnkey Project',
      location: 'Ontario',
      description: 'Complete restaurant construction featuring breakfast and brunch specialties. Modern kitchen design with specialized egg preparation stations and comfortable dining areas.',
      scope: [
        'Full restaurant build-out',
        'Specialized breakfast kitchen equipment',
        'Dining area construction',
        'Ventilation system installation',
        'Interior design and finishes',
        'Permit acquisition and inspections'
      ],
      images: [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/Eggmania+Restaurant+Ontario',
      projectLink: '#eggmania-project'
    },
    {
      id: 'barburrito-fort-erie',
      name: 'BarBurrito in Fort Erie',
      type: 'Turnkey Project',
      location: 'Fort Erie, ON',
      description: 'Strategic franchise location with optimized layout for high-volume service. Complete construction with modern design elements and efficient operational flow.',
      scope: [
        'Franchise restaurant construction',
        'High-volume service optimization',
        'Brand-standard implementation',
        'Kitchen equipment installation',
        'Customer flow design',
        'Quality assurance systems'
      ],
      images: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/BarBurrito+Fort+Erie+ON',
      projectLink: '#barburrito-fort-erie-project'
    },
    {
      id: 'barburrito-shelburn',
      name: 'BarBurrito in Shelburn',
      type: 'Turnkey Project',
      location: 'Shelburn, ON',
      description: 'Complete franchise development in growing community market. Modern design with focus on community engagement and efficient service delivery.',
      scope: [
        'Community-focused restaurant design',
        'Modern franchise construction',
        'Efficient service systems',
        'Local building compliance',
        'Brand implementation',
        'Community integration features'
      ],
      images: [
        'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/BarBurrito+Shelburn+ON',
      projectLink: '#barburrito-shelburn-project'
    },
    {
      id: 'barburrito-stoufville',
      name: 'BarBurrito in Stoufville',
      type: 'Turnkey Project',
      location: 'Stoufville, ON',
      description: 'Premium franchise location with enhanced design features and expanded seating capacity. Focus on family-friendly atmosphere and operational efficiency.',
      scope: [
        'Premium franchise construction',
        'Expanded seating capacity',
        'Family-friendly design',
        'Advanced kitchen systems',
        'Enhanced brand features',
        'Operational efficiency optimization'
      ],
      images: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/BarBurrito+Stoufville+ON',
      projectLink: '#barburrito-stoufville-project'
    },
    {
      id: 'brewing-brokers',
      name: 'Brewing Brokers',
      type: 'Turnkey Project',
      location: 'Ontario',
      description: 'Specialized brewery and taproom construction with custom brewing equipment installation. Industrial design with modern taproom atmosphere.',
      scope: [
        'Brewery facility construction',
        'Custom brewing equipment installation',
        'Taproom design and build',
        'Industrial ventilation systems',
        'Specialized plumbing and electrical',
        'Health department compliance'
      ],
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/Brewing+Brokers+Ontario',
      projectLink: '#brewing-brokers-project'
    },
    {
      id: 'fence-project-niagara-region',
      name: 'Fence Project for Niagara Region',
      type: 'Turnkey Project',
      location: 'Niagara Region, ON',
      description: 'Large-scale commercial fencing project for municipal and commercial properties. Custom design with security and aesthetic considerations.',
      scope: [
        'Commercial-grade fencing installation',
        'Municipal property fencing',
        'Security feature integration',
        'Custom gate systems',
        'Site preparation and grading',
        'Long-term maintenance planning'
      ],
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
      ],
      googleMapsLink: 'https://maps.google.com/search/Niagara+Region+Ontario',
      projectLink: '#fence-project-niagara-region'
    }
  ];

  const services = [
    "Office/Retail Stores Build Outs",
    "Retail Space Renovations", 
    "Educational Institutions Renovations",
    "Public & Municipal Projects",
    "Mixed Use Developments",
    "Project Management & Consulting"
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
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
              Large-scale commercial projects with precision engineering and unmatched project management expertise.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Client Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-detail-section">
        <div className="container">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="section-header">
              <h2 className="section-title">Our Commercial <span className="gold-text">Services</span></h2>
              <div className="section-divider"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="services-grid">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle className="service-icon" />
                  <h3>{service}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="projects-section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="section-header">
              <h2 className="section-title">Completed <span className="gold-text">Projects</span></h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Explore our recent commercial construction projects showcasing our expertise in franchise builds, 
                office spaces, and commercial renovations.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="real-projects-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginTop: '3rem'
              }}
            >
              {actualProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card clickable"
                  onClick={() => openProjectModal(project)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(221, 171, 77, 0.3)"
                  }}
                  style={{
                    background: 'var(--primary-black)',
                    borderRadius: 'var(--border-radius)',
                    overflow: 'hidden',
                    border: '1px solid var(--accent-black)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-medium)'
                  }}
                >
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={project.images[0]}
                      alt={project.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                      color: 'var(--primary-black)',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {project.type}
                    </div>
                  </div>
                  
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      color: 'var(--white)', 
                      marginBottom: '0.5rem',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {project.name}
                    </h3>
                    <p style={{
                      color: 'var(--gold)',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}>
                      {project.location}
                    </p>
                    <p style={{
                      color: 'var(--gray-light)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}>
                      {project.description.substring(0, 120)}...
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Commercial Project?</h2>
            <p>Get a free consultation and quote for your next commercial construction project.</p>
            <div className="cta-buttons">
              <a href="tel:548-333-1419" className="btn btn-primary">
                <FaPhone /> Call (548) 333-1419
              </a>
              <a href="mailto:info@festbau.com" className="btn btn-secondary">
                <FaEnvelope /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </motion.div>
  );
};

export default CommercialPage; 