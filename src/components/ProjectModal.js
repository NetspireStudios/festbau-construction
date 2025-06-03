import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaExternalLinkAlt, 
  FaCheckCircle,
  FaMapPin,
  FaUtensils,
  FaShieldAlt,
  FaTools,
  FaBuilding,
  FaStore,
  FaCog,
  FaHome,
  FaBolt,
  FaBed,
  FaPaintBrush,
  FaWifi,
  FaLeaf,
  FaIndustry,
  FaThermometerHalf,
  FaTruck
} from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollPosition = useRef(0);

  console.log('ProjectModal render - isOpen:', isOpen, 'project:', project, 'category:', category);

  // Function to get appropriate icon based on feature content
  const getFeatureIcon = (feature) => {
    const featureLower = feature.toLowerCase();
    
    // Restaurant & Kitchen features
    if (featureLower.includes('kitchen') || featureLower.includes('dining')) return FaUtensils;
    if (featureLower.includes('restaurant') || featureLower.includes('food')) return FaUtensils;
    if (featureLower.includes('drive') || featureLower.includes('thru')) return FaTruck;
    
    // Security & Compliance
    if (featureLower.includes('security') || featureLower.includes('compliance') || featureLower.includes('health code')) return FaShieldAlt;
    if (featureLower.includes('storage') || featureLower.includes('secure')) return FaShieldAlt;
    
    // Design & Construction
    if (featureLower.includes('design') || featureLower.includes('modern') || featureLower.includes('contemporary')) return FaPaintBrush;
    if (featureLower.includes('construction') || featureLower.includes('building')) return FaBuilding;
    if (featureLower.includes('renovation') || featureLower.includes('upgrade')) return FaTools;
    
    // Retail & Commercial
    if (featureLower.includes('retail') || featureLower.includes('store')) return FaStore;
    if (featureLower.includes('brand') || featureLower.includes('standard')) return FaBuilding;
    
    // Home & Residential features
    if (featureLower.includes('home') || featureLower.includes('bedroom') || featureLower.includes('suite')) return FaBed;
    if (featureLower.includes('office') || featureLower.includes('entertainment')) return FaHome;
    if (featureLower.includes('smart') || featureLower.includes('tech') || featureLower.includes('wifi')) return FaWifi;
    if (featureLower.includes('sustainable') || featureLower.includes('eco') || featureLower.includes('green')) return FaLeaf;
    
    // Industrial & Equipment
    if (featureLower.includes('industrial') || featureLower.includes('equipment')) return FaIndustry;
    if (featureLower.includes('temperature') || featureLower.includes('control')) return FaThermometerHalf;
    if (featureLower.includes('system') || featureLower.includes('operation')) return FaCog;
    if (featureLower.includes('electric') || featureLower.includes('lighting')) return FaBolt;
    
    // Default icon for anything else
    return FaCheckCircle;
  };

  const getFeatureDescription = (feature) => {
    const featureLower = feature.toLowerCase();
    
    // Restaurant & Kitchen features
    if (featureLower.includes('kitchen')) return 'Professional-grade kitchen with modern appliances and design';
    if (featureLower.includes('dining')) return 'Spacious dining area designed for customer comfort';
    if (featureLower.includes('restaurant')) return 'Complete restaurant construction and design';
    if (featureLower.includes('drive')) return 'Convenient drive-through service capability';
    
    // Security & Compliance
    if (featureLower.includes('security')) return 'Advanced security systems and access controls';
    if (featureLower.includes('compliance')) return 'Full compliance with industry regulations and standards';
    if (featureLower.includes('health code')) return 'Meeting all health and safety requirements';
    if (featureLower.includes('storage')) return 'Optimized storage solutions for efficiency';
    
    // Design & Construction
    if (featureLower.includes('design')) return 'Custom design tailored to your specific needs';
    if (featureLower.includes('modern')) return 'Contemporary styling with clean lines and functionality';
    if (featureLower.includes('contemporary')) return 'Current design trends with timeless appeal';
    if (featureLower.includes('construction')) return 'Expert construction with quality materials';
    if (featureLower.includes('renovation')) return 'Complete renovation bringing new life to existing spaces';
    
    // Retail & Commercial
    if (featureLower.includes('retail')) return 'Optimized retail space for customer experience';
    if (featureLower.includes('store')) return 'Functional store layout maximizing sales potential';
    if (featureLower.includes('brand')) return 'Brand-consistent design and implementation';
    
    // Home & Residential features
    if (featureLower.includes('bedroom')) return 'Comfortable bedroom space with quality finishes';
    if (featureLower.includes('suite')) return 'Luxury suite with premium amenities';
    if (featureLower.includes('office')) return 'Dedicated workspace designed for productivity';
    if (featureLower.includes('entertainment')) return 'Entertainment space for family gatherings';
    if (featureLower.includes('smart')) return 'Smart home technology integration';
    if (featureLower.includes('sustainable')) return 'Eco-friendly design reducing environmental impact';
    
    // Default description
    return 'Premium feature enhancing project value and functionality';
  };

  useEffect(() => {
    if (project && isOpen) {
      console.log('Loading project images for:', project.title);
      const loadProjectImages = async () => {
        setIsLoading(true);
        
        const validImages = [];
        
        // Create multiple placeholder images for demonstration
        const placeholderImages = [
          {
            src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236c757d'%3E${encodeURIComponent(project.title)}%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%23adb5bd'%3EMain View%3C/text%3E%3C/svg%3E`,
            alt: `${project.title} - Main View`
          },
          {
            src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23e9ecef'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236c757d'%3E${encodeURIComponent(project.title)}%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%23adb5bd'%3EInterior Details%3C/text%3E%3C/svg%3E`,
            alt: `${project.title} - Interior Details`
          },
          {
            src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23dee2e6'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236c757d'%3E${encodeURIComponent(project.title)}%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%23adb5bd'%3EExterior View%3C/text%3E%3C/svg%3E`,
            alt: `${project.title} - Exterior View`
          },
          {
            src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23ced4da'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236c757d'%3E${encodeURIComponent(project.title)}%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%23adb5bd'%3EConstruction Process%3C/text%3E%3C/svg%3E`,
            alt: `${project.title} - Construction Process`
          }
        ];

        // For now, use placeholder images. In the future, this would check for real images
        validImages.push(...placeholderImages);

        setProjectImages(validImages);
        setCurrentImageIndex(0);
        setIsLoading(false);
      };

      loadProjectImages();
    }
  }, [project, isOpen, category]);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  }, [projectImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  }, [projectImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const openGoogleMaps = () => {
    const address = encodeURIComponent(project.location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  }, [onClose, prevImage, nextImage]);

  useEffect(() => {
    if (isOpen) {
      // Store current scroll position BEFORE any body style changes
      scrollPosition.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add event listener
      document.addEventListener('keydown', handleKeyPress);
      
      // Prevent background scroll - simpler approach
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Prevent layout shift from scrollbar
      
      return () => {
        // Remove event listener
        document.removeEventListener('keydown', handleKeyPress);
        
        // Restore body styles
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        
        // Force scroll restoration after a brief delay to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition.current,
            left: 0,
            behavior: 'instant'
          });
        }, 0);
      };
    }
  }, [isOpen, handleKeyPress]);

  if (!isOpen || !project) {
    console.log('ProjectModal returning null - isOpen:', isOpen, 'project:', project);
    return null;
  }

  // Create portal to render modal at document body level
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Close Button */}
            <motion.button 
              className="modal-close-btn" 
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes />
            </motion.button>

            <div className="modal-content">
              {/* Image Gallery Section */}
              <div className="modal-gallery">
                <motion.div 
                  className="main-image-container"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {!isLoading && projectImages.length > 0 && (
                    <motion.img 
                      key={currentImageIndex}
                      src={projectImages[currentImageIndex]?.src} 
                      alt={projectImages[currentImageIndex]?.alt}
                      className="main-image"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  {projectImages.length > 1 && (
                    <>
                      <motion.button 
                        className="nav-btn prev-btn" 
                        onClick={prevImage}
                        whileHover={{ scale: 1.15, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronLeft />
                      </motion.button>
                      <motion.button 
                        className="nav-btn next-btn" 
                        onClick={nextImage}
                        whileHover={{ scale: 1.15, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronRight />
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter */}
                  {projectImages.length > 1 && (
                    <motion.div 
                      className="image-counter"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      {currentImageIndex + 1} / {projectImages.length}
                    </motion.div>
                  )}
                </motion.div>

                {/* Thumbnail Navigation */}
                {projectImages.length > 1 && (
                  <motion.div 
                    className="thumbnail-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {projectImages.map((image, index) => (
                      <motion.button
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img src={image.src} alt={image.alt} />
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Project Details Section - Modern Magazine Layout */}
              <motion.div 
                className="modal-details"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Project Info Column */}
                <motion.div 
                  className="project-info-section"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <h2 className="project-title">{project.title}</h2>
                  
                  <div className="project-location">
                    <FaMapMarkerAlt className="location-icon" />
                    <span>{project.location}</span>
                  </div>
                </motion.div>

                {/* Description Column */}
                <motion.div 
                  className="project-description-section"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="project-description">
                    <h3>Project Overview</h3>
                    <p>{project.description}</p>
                  </div>
                </motion.div>

                {/* Features Column */}
                <motion.div 
                  className="project-features-section"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {/* Construction Techniques */}
                  {project.features && project.features.length > 0 && (
                    <div className="project-features">
                      <h3>Key Features</h3>
                      <ul className="features-list">
                        {project.features.map((feature, index) => {
                          const IconComponent = getFeatureIcon(feature);
                          const description = getFeatureDescription(feature);
                          return (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.7 + (index * 0.1), 
                                duration: 0.3
                              }}
                              whileHover={{ x: 10 }}
                            >
                              <IconComponent className="feature-icon" />
                              <div className="feature-content">
                                <span className="feature-title">{feature}</span>
                                <p className="feature-description">{description}</p>
                              </div>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* Google Maps Button */}
                  <motion.button
                    className="maps-btn"
                    onClick={openGoogleMaps}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaMapPin />
                    <span>View Location</span>
                    <FaExternalLinkAlt className="external-icon" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Use portal to render at body level for proper modal behavior
  return isOpen ? ReactDOM.createPortal(modalContent, document.body) : null;
};

export default ProjectModal; 