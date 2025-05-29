import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHome, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import ImageSection from '../components/ImageSection';
import './PageStyles.css';

const ResidentialPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const services = [
    "Complete Home Renovations",
    "Kitchen & Bathroom Remodeling", 
    "Interior Design & Build",
    "Custom Carpentry",
    "Flooring Installation",
    "Electrical & Plumbing"
  ];

  const residentialProjects = [
    {
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&q=80',
      title: 'Modern Family Home',
      description: 'Complete home renovation with contemporary design and luxury finishes',
      category: 'Full Renovation',
      alt: 'Modern Family Home Renovation'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80',
      title: 'Luxury Kitchen Remodel',
      description: 'High-end kitchen renovation with custom cabinetry and premium appliances',
      category: 'Kitchen',
      alt: 'Luxury Kitchen Remodel'
    },
    {
      src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop&q=80',
      title: 'Master Bathroom Suite',
      description: 'Spa-like bathroom transformation with modern fixtures and elegant design',
      category: 'Bathroom',
      alt: 'Master Bathroom Suite'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80',
      title: 'Open Concept Living',
      description: 'Living room and dining area renovation with open-concept design',
      category: 'Living Space',
      alt: 'Open Concept Living Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&h=400&fit=crop&q=80',
      title: 'Basement Conversion',
      description: 'Basement transformation into functional living and entertainment space',
      category: 'Basement',
      alt: 'Basement Conversion'
    },
    {
      src: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&h=400&fit=crop&q=80',
      title: 'Custom Home Office',
      description: 'Dedicated home office space with built-in storage and modern design',
      category: 'Home Office',
      alt: 'Custom Home Office'
    }
  ];

  const projects = [
    {
      name: "Condo Renovation in North York",
      type: "Turnkey Project",
      description: "Complete condo transformation with modern finishes",
      features: ["Open Concept Design", "Premium Materials", "Smart Home Integration"]
    },
    {
      name: "Elements Design & Renovation, Cambridge",
      type: "Turnkey Project",
      description: "Full home renovation with custom design elements",
      features: ["Custom Millwork", "Designer Finishes", "Energy Efficient"]
    },
    {
      name: "Basement Renovation in London",
      type: "Turnkey Project",
      description: "Basement transformation into functional living space",
      features: ["Moisture Control", "Proper Insulation", "Modern Lighting"]
    }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
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
            <h1 className="page-title">Residential <span className="gold-text">Services</span></h1>
            <p className="page-subtitle">
              Transform your home with expert craftsmanship and meticulous attention to detail.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Homes Renovated</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Average Rating</span>
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
              <h2 className="section-title">Our Residential <span className="gold-text">Services</span></h2>
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

      {/* Projects Gallery */}
      <ImageSection
        title="Residential <span class='gold-text'>Portfolio</span>"
        subtitle="Explore our recent residential projects showcasing our expertise in home renovations, kitchen remodels, and custom interior design solutions."
        images={residentialProjects}
        columns={3}
        className="residential-projects-section"
      />

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span className="gold-text">Projects</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-type">{project.type}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2>Ready to Transform Your Home?</h2>
            <p>Get a free consultation and quote for your residential renovation project.</p>
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
    </motion.div>
  );
};

export default ResidentialPage; 