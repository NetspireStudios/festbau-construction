import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ModernTimeline.css';

const ModernTimeline = ({ steps, title, subtitle }) => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the timeline
      const startOffset = windowHeight * 0.8; // Start animation when element is 80% visible
      const endOffset = -elementHeight + windowHeight * 0.2; // End when element is mostly past

      const scrolled = startOffset - elementTop;
      const totalDistance = startOffset - endOffset;
      const progress = Math.max(0, Math.min(1, scrolled / totalDistance));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ref={timelineRef}
          className="modern-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Straight Timeline SVG connecting through icons */}
          <svg className="timeline-svg" viewBox="0 0 100 800" preserveAspectRatio="none">
            {steps.map((step, index) => {
              if (index === steps.length - 1) return null; // No line after last step
              
              const stepProgress = Math.max(0, Math.min(1, (scrollProgress * steps.length) - index));
              
              // Calculate positions - icons are at the center, lines connect through them
              const yStart = (index / (steps.length - 1)) * 700 + 50;
              const yEnd = ((index + 1) / (steps.length - 1)) * 700 + 50;
              
              // Create straight line that goes directly through the icon centers
              const pathData = `M 50 ${yStart} L 50 ${yEnd}`;
              
              return (
                <motion.path
                  key={`path-${index}`}
                  d={pathData}
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 * (1 - stepProgress)}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(221, 171, 77, 0.5))'
                  }}
                />
              );
            })}
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(221, 171, 77, 0.9)" />
                <stop offset="50%" stopColor="rgba(221, 171, 77, 0.7)" />
                <stop offset="100%" stopColor="rgba(221, 171, 77, 0.9)" />
              </linearGradient>
            </defs>
          </svg>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon positioned ABOVE the content bubble */}
              <motion.div 
                className="step-icon"
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                style={{
                  opacity: scrollProgress * steps.length > index ? 1 : 0.3,
                  transition: 'opacity 0.5s ease'
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
                  <span className="desktop-title">{step.title}</span>
                  <span className="mobile-title">{step.mobileTitle || step.title}</span>
                </motion.h3>
                <motion.p 
                  className="step-description"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="desktop-description">{step.description}</span>
                  <span className="mobile-description">{step.mobileDescription || step.description}</span>
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTimeline; 