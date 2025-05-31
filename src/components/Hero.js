import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaFileInvoiceDollar, FaPhone, FaBuilding, FaAward, FaClock, FaUsers } from 'react-icons/fa';
import './Hero.css';

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", duration = 2000, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, inView]);

  return (
    <span className="animated-counter">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
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

  const stats = [
    {
      icon: FaBuilding,
      number: 16,
      suffix: "",
      label: "Projects Completed",
      description: "Successful builds"
    },
    {
      icon: FaUsers,
      number: 100,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Happy customers"
    },
    {
      icon: FaAward,
      number: 4,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: FaClock,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Always here for you"
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-background-slider"></div>
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              <span className="gold-text">FESTBAU</span>
              <br />
              <span className="subtitle-text">Premium Construction</span>
            </motion.h1>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.a
                href="tel:548-333-1419"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call (548) 333-1419
              </motion.a>
              <motion.component
                as={Link}
                to="/quote"
                className="btn btn-quote"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileInvoiceDollar />
                Get Free Quote
              </motion.component>
            </motion.div>

            <motion.div 
              className="hero-stats" 
              variants={itemVariants}
              ref={ref}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.15) }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="stat-icon-wrapper">
                    <stat.icon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <motion.div 
                      className="stat-number"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                    >
                      <AnimatedCounter 
                        target={stat.number} 
                        suffix={stat.suffix}
                        duration={1500 + (index * 200)}
                        inView={inView}
                      />
                    </motion.div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-description">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 