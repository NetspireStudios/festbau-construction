import React from 'react';
import { motion } from 'framer-motion';
import './ModernTimeline.css';

const ModernTimeline = ({ steps, title, subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="section-padding modern-timeline-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            {title}
          </h2>
          {subtitle && (
            <p className="section-description">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          className="modern-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="timeline-line"
            variants={lineVariants}
          />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="step-icon"
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <step.icon />
                <div className="step-number">{step.step}</div>
              </motion.div>
              
              <div className="step-content">
                <motion.h3 
                  className="step-title"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="step-description"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </div>
              
              <div className="step-connector"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTimeline; 