import React from 'react';
import { motion } from 'framer-motion';
import './ImageSection.css';

const ImageSection = ({ 
  title, 
  subtitle, 
  images = [], 
  layout = 'grid', // 'grid', 'carousel', 'masonry'
  columns = 3,
  showOverlay = true,
  className = '' 
}) => {
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

  const getGridClass = () => {
    switch (columns) {
      case 2: return 'image-grid-2';
      case 3: return 'image-grid-3';
      case 4: return 'image-grid-4';
      default: return 'image-grid-3';
    }
  };

  return (
    <section className={`image-section ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title && (
              <h2 
                className="section-title" 
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            <div className="section-divider"></div>
          </motion.div>
        )}

        <motion.div 
          className={`image-container ${getGridClass()}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="image-item"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-wrapper">
                <img 
                  src={image.src || '/api/placeholder/400/300'} 
                  alt={image.alt || `Project ${index + 1}`}
                  loading="lazy"
                />
                {showOverlay && (
                  <div className="image-overlay">
                    <div className="overlay-content">
                      {image.title && <h3 className="image-title">{image.title}</h3>}
                      {image.description && <p className="image-description">{image.description}</p>}
                      {image.category && <span className="image-category">{image.category}</span>}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection; 