import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { FaFileInvoiceDollar, FaPhone, FaUsers, FaTools } from 'react-icons/fa';
import './Hero.css';

// Animated Counter Component with rolling effect
const AnimatedCounter = ({ target, suffix = "", duration = 2000, inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(target * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, inView]);
  
  return (
    <motion.span 
      className="stat-number animated-counter"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {count}{suffix}
    </motion.span>
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

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-background-slider">
          <div className="hero-background-slide"></div>
          <div className="hero-background-slide"></div>
          <div className="hero-background-slide"></div>
          <div className="hero-background-slide"></div>
          <div className="hero-background-slide"></div>
        </div>
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
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              Professional construction and design solutions for commercial and residential projects. 
              Quality craftsmanship with reliable project management.
            </motion.p>

            <motion.div className="hero-highlights" variants={itemVariants}>
              <div className="highlight-item">
                <FaUsers className="highlight-icon" />
                <span>Expert Team</span>
              </div>
              <div className="highlight-item">
                <FaTools className="highlight-icon" />
                <span>Quality Materials</span>
              </div>
              <div className="highlight-item">
                <FaFileInvoiceDollar className="highlight-icon" />
                <span>Fair Pricing</span>
              </div>
            </motion.div>
            
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
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter target={23} suffix="+" duration={2500} inView={inView} />
                <span className="stat-label">Projects</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter target={16} suffix="+" duration={2000} inView={inView} />
                <span className="stat-label">Years</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedCounter target={100} suffix="%" duration={2200} inView={inView} />
                <span className="stat-label">Satisfaction</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 