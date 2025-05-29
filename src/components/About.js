import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaUsers, FaTools, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const slideInLeft = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8, rotateZ: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const features = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Award-winning quality in every project we deliver'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of experience'
    },
    {
      icon: <FaTools />,
      title: 'Quality Materials',
      description: 'Only the finest materials and cutting-edge techniques'
    },
    {
      icon: <FaHandshake />,
      title: 'Client Focus',
      description: 'Dedicated to exceeding client expectations'
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="about-background">
        <div className="about-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div ref={ref}>
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">Who We <span className="gold-text">Are</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="about-content">
            <motion.div variants={slideInLeft} className="about-text">
              <div className="about-intro">
                <h3>Building Excellence Since 2021</h3>
                <p>
                  Founded by CEO Vugar Ismayilov, FESTBAU has quickly evolved from a local renovation company 
                  in Waterloo into a leading commercial general contracting firm. With expertise gained as an Engineering 
                  Project Manager at Ferrero Canada, Vugar has built a reputation for excellence in project management.
                </p>
                <p>
                  Specializing in turnkey construction solutions, we ensure that every project, from large-scale commercial 
                  builds to detailed renovations, is meticulously planned, executed, and delivered on time and within budget, 
                  meeting each client's unique needs.
                </p>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="about-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop&q=80" 
                  alt="Construction team at work"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>Professional Team</h4>
                    <p>Experienced craftsmen dedicated to quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-features">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={scaleUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="about-gallery">
            <div className="gallery-grid">
              {[
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&q=80",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&q=80",
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&q=80"
              ].map((src, index) => (
                <motion.div 
                  key={index}
                  className="gallery-item"
                  variants={scaleUp}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateZ: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img 
                    src={src}
                    alt={`Construction ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 