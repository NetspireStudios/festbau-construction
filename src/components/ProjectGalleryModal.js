import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectGalleryModal.css';

const ProjectGalleryModal = ({ project, isOpen, onClose, category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState([]);

  useEffect(() => {
    if (project && isOpen) {
      // Load images from the project folder
      const loadProjectImages = async () => {
        const folderPath = `/images/${category}/${project.folderName}`;
        
        // Try to load common image names
        const imageNames = [
          'main.jpg', 'main.jpeg', 'main.png', 'main.webp',
          'hero.jpg', 'hero.jpeg', 'hero.png', 'hero.webp',
          'primary.jpg', 'primary.jpeg', 'primary.png', 'primary.webp',
          'featured.jpg', 'featured.jpeg', 'featured.png', 'featured.webp',
          'cover.jpg', 'cover.jpeg', 'cover.png', 'cover.webp',
          '1.jpg', '1.jpeg', '1.png', '1.webp',
          '2.jpg', '2.jpeg', '2.png', '2.webp',
          '3.jpg', '3.jpeg', '3.png', '3.webp',
          '4.jpg', '4.jpeg', '4.png', '4.webp',
          '5.jpg', '5.jpeg', '5.png', '5.webp',
          'image1.jpg', 'image1.jpeg', 'image1.png', 'image1.webp',
          'image2.jpg', 'image2.jpeg', 'image2.png', 'image2.webp',
          'image3.jpg', 'image3.jpeg', 'image3.png', 'image3.webp',
          'img1.jpg', 'img1.jpeg', 'img1.png', 'img1.webp',
          'img2.jpg', 'img2.jpeg', 'img2.png', 'img2.webp',
          'img3.jpg', 'img3.jpeg', 'img3.png', 'img3.webp'
        ];

        const validImages = [];
        
        for (const imageName of imageNames) {
          const imagePath = `${folderPath}/${imageName}`;
          try {
            // Check if image exists by creating a new Image object
            const img = new Image();
            img.src = imagePath;
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
              setTimeout(reject, 100); // Quick timeout for non-existent images
            });
            validImages.push({
              src: imagePath,
              alt: `${project.title} - Image ${validImages.length + 1}`
            });
          } catch (error) {
            // Image doesn't exist, continue to next
          }
        }

        // If no images found, use placeholder
        if (validImages.length === 0) {
          validImages.push({
            src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='%236c757d'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`,
            alt: project.title
          });
        }

        setProjectImages(validImages);
        setCurrentImageIndex(0);
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
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isOpen, projectImages.length, handleKeyPress]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="gallery-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="gallery-close-btn" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="gallery-content">
              {/* Image Gallery Section */}
              <div className="gallery-section">
                <div className="main-image-container">
                  {projectImages.length > 0 && (
                    <img 
                      src={projectImages[currentImageIndex]?.src} 
                      alt={projectImages[currentImageIndex]?.alt}
                      className="main-image"
                    />
                  )}
                  
                  {/* Navigation Arrows */}
                  {projectImages.length > 1 && (
                    <>
                      <button className="nav-btn prev-btn" onClick={prevImage}>
                        <FaChevronLeft />
                      </button>
                      <button className="nav-btn next-btn" onClick={nextImage}>
                        <FaChevronRight />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {projectImages.length > 1 && (
                    <div className="image-counter">
                      {currentImageIndex + 1} / {projectImages.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {projectImages.length > 1 && (
                  <div className="thumbnail-container">
                    {projectImages.map((image, index) => (
                      <button
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                      >
                        <img src={image.src} alt={image.alt} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details Section */}
              <div className="details-section">
                <div className="project-header">
                  <h2 className="project-title">{project.title}</h2>
                  <div className="project-category">
                    <span className="category-badge">{project.category}</span>
                  </div>
                </div>

                <div className="project-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{project.location}</span>
                </div>

                <div className="project-description">
                  <h3>Project Description</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-features">
                  <h3>Project Features</h3>
                  <ul>
                    {project.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="maps-btn" onClick={openGoogleMaps}>
                  <FaExternalLinkAlt />
                  View on Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGalleryModal; 