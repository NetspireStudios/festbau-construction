import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHome, FaCog, FaProjectDiagram, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    id: 'commercial',
    title: 'Commercial Construction',
    icon: <FaBuilding />,
    subtitle: 'Large-scale commercial projects with precision and expertise',
    route: '/commercial',
    services: [
      'Office/Retail Stores Build Outs',
      'Retail Space Renovations',
      'Educational Institutions Renovations',
      'Public & Municipal Projects',
      'Mixed Use Developments',
      'Project Management & Consulting'
    ],
    description: 'From concept to completion, we deliver commercial construction projects that exceed expectations. With expertise gained as an Engineering Project Manager at Ferrero Canada, we specialize in turnkey solutions for offices, retail stores, educational institutions, and municipal projects. Our proven track record with clients like Dairy Queen, BarBurrito, Tim Hortons, and Quesada demonstrates our ability to handle diverse commercial construction needs.',
    highlights: ['Turnkey Solutions', 'Licensed & Insured', 'On-Time Delivery'],
    clientLogos: ['Dairy Queen', 'Tim Hortons', 'BarBurrito', 'Quesada', 'Fresh Prep']
  },
  {
    id: 'residential',
    title: 'Residential Services & Renovations',
    icon: <FaHome />,
    subtitle: 'Transform your home with expert craftsmanship and attention to detail',
    route: '/residential',
    services: [
      'Complete Home Renovations',
      'Kitchen & Bathroom Remodeling',
      'Interior Design & Build',
      'Custom Carpentry',
      'Flooring Installation',
      'Electrical & Plumbing Services'
    ],
    description: 'We bring your vision to life with meticulous attention to detail and superior craftsmanship. Every residential project is treated with the care and precision it deserves. From complete home renovations to specialized interior services, we handle all aspects of residential construction and renovation with project management expertise that ensures quality results within budget and timeline.',
    highlights: ['Custom Design', 'Quality Materials', 'Expert Craftsmen'],
    specialties: ['Home Renovations', 'Interior Services', 'Project Management & Estimating']
  },
  {
    id: 'custom-homes',
    title: 'Custom Homes',
    icon: <FaHome />,
    subtitle: 'Luxury custom homes designed to reflect your vision and lifestyle',
    route: '/custom-homes',
    services: [
      'Custom Home Design',
      'Luxury Home Construction',
      'Architectural Planning',
      'Interior Design Coordination',
      'Premium Materials Selection',
      'Smart Home Integration'
    ],
    description: 'From concept to completion, we create luxury custom homes that reflect your unique vision and exceed your expectations. Our comprehensive approach combines architectural excellence, superior craftsmanship, and personalized service to deliver homes that stand the test of time. Every detail is carefully planned and executed to create your dream home.',
    highlights: ['Custom Architecture', 'Luxury Finishes', 'Turnkey Solution'],
    homeFeatures: ['Custom Design', 'Premium Materials', 'Smart Technology', 'Energy Efficient']
  },
  {
    id: 'project',
    title: 'Project Management',
    icon: <FaProjectDiagram />,
    subtitle: 'Expert oversight from start to finish with engineering precision',
    route: '/project-management',
    services: [
      'Project Planning & Scheduling',
      'Budget Management & Cost Control',
      'Quality Control & Assurance',
      'Permit Coordination',
      'Subcontractor Management',
      'Progress Reporting & Communication'
    ],
    description: 'Our project management expertise, honed through experience as an Engineering Project Manager at Ferrero Canada, ensures every project runs smoothly, on time, and within budget. We provide comprehensive oversight from initial planning through final completion, ensuring clear communication and meticulous attention to detail throughout the entire construction process.',
    highlights: ['Engineering Background', 'Proven Track Record', 'Clear Communication'],
    expertise: ['Ferrero Canada Experience', 'Engineering Project Management', 'Turnkey Solutions']
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('commercial');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const tabButtonVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      x: -30,
      scale: 0.95,
      transition: {
        duration: 0.4
      }
    }
  };

  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <motion.section 
      id="services" 
      className="services-section"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          ref={ref}
          className="services-container"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              What We <span className="gold-text">Do</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="services-tabs">
            <div className="tab-buttons">
              {servicesData.map((service, index) => (
                <motion.button
                  key={service.id}
                  className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                  variants={tabButtonVariants}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -3,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="tab-icon">{service.icon}</span>
                  <span className="tab-text">{service.title}</span>
                </motion.button>
              ))}
            </div>

            <div className="tab-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="service-details"
                >
                  <motion.div 
                    className="service-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="service-icon-large">
                      {activeService.icon}
                    </div>
                    <div className="service-title-section">
                      <h3 className="service-title">{activeService.title}</h3>
                      <p className="service-subtitle">{activeService.subtitle}</p>
                    </div>
                  </motion.div>

                  <div className="service-content">
                    <motion.div 
                      className="service-description"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p>{activeService.description}</p>
                      
                      <div className="service-highlights">
                        {activeService.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            className="highlight-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: index * 0.15 + 0.4,
                              duration: 0.6,
                              ease: "easeOut"
                            }}
                          >
                            <FaCog className="highlight-icon" />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="service-list"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4>Our Services Include:</h4>
                      <ul>
                        {activeService.services.map((service, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              delay: index * 0.1 + 0.5,
                              duration: 0.5,
                              ease: 'easeOut'
                            }}
                          >
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div
                    className="service-cta"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.8,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <Link
                      to={activeService.route}
                      className="btn btn-learn-more"
                    >
                      <motion.div
                      whileHover={{ 
                        scale: 1.08, 
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <FaArrowRight />
                      Learn More About {activeService.title}
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services; 