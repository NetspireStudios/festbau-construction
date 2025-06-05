import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaMapMarkerAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import { useInfiniteCarousel } from '../hooks/useInfiniteCarousel';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    console.log('handleProjectClick called with project:', project);
    setSelectedProject(project);
    setIsModalOpen(true);
    console.log('Modal state set to open, selectedProject:', project);
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal called');
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Real project data based on the folder structure
  const recentProjects = [
    // Commercial Construction Projects
    {
      id: 1,
      title: "BarBurrito in Fort Erie",
      folderName: "BarBurrito in Fort Erie",
      location: "Fort Erie, ON",
      category: "Commercial Construction",
      type: "Restaurant",
      description: "Complete restaurant buildout featuring modern kitchen design, customer seating area, and brand-compliant interior finishes.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EBarBurrito Fort Erie%3C/text%3E%3C/svg%3E`,
      features: ["Restaurant", "Kitchen Design", "Brand Compliance", "Health Code Standards"]
    },
    {
      id: 2,
      title: "Dairy Queen in Niagara Falls",
      folderName: "Dairy Queen in Niagara Falls",
      location: "Niagara Falls, ON",
      category: "Commercial Construction",
      type: "Restaurant",
      description: "Flagship restaurant construction with specialized equipment installation, drive-thru design, and high-traffic layout optimization.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EDairy Queen Niagara%3C/text%3E%3C/svg%3E`,
      features: ["Drive-Thru Design", "Equipment Installation", "High-Traffic Layout", "Brand Standards"]
    },
    {
      id: 3,
      title: "Tokyo Smoke in Port Elgin",
      folderName: "Tokyo Smoke in Port Elgin",
      location: "Port Elgin, ON",
      category: "Commercial Construction",
      type: "Retail",
      description: "Specialized retail space with secure storage, compliance features, and modern customer experience areas.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3ETokyo Smoke Port Elgin%3C/text%3E%3C/svg%3E`,
      features: ["Secure Storage", "Compliance Features", "Modern Design", "Customer Experience"]
    },
    {
      id: 4,
      title: "Eggmania",
      folderName: "Eggmania",
      location: "Ontario, ON",
      category: "Commercial Construction",
      type: "Restaurant",
      description: "Unique restaurant concept featuring custom kitchen design, specialized equipment installation, and innovative dining layout.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EEggmania Restaurant%3C/text%3E%3C/svg%3E`,
      features: ["Custom Kitchen", "Specialized Equipment", "Innovative Layout", "Unique Concept"]
    },
    // Residential Projects
    {
      id: 5,
      title: "Condo renovation in North York",
      folderName: "Condo renovation in North York",
      location: "North York, ON",
      category: "Residential Projects",
      type: "Condo Renovation",
      description: "Complete condo transformation featuring modern kitchen renovation, bathroom upgrades, and open-concept living space design.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3ECondo North York%3C/text%3E%3C/svg%3E`,
      features: ["Modern Kitchen", "Bathroom Upgrades", "Open Concept", "Premium Finishes"]
    },
    {
      id: 6,
      title: "Basement renovation in London",
      folderName: "Basement renovation in London",
      location: "London, ON",
      category: "Residential Projects",
      type: "Basement Renovation",
      description: "Comprehensive basement finishing project creating a multi-functional family space with entertainment area and home office.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EBasement London%3C/text%3E%3C/svg%3E`,
      features: ["Entertainment Area", "Home Office", "Multi-Functional", "Bedroom Suite"]
    },
    // Additional Services
    {
      id: 7,
      title: "Deck in Waterloo",
      folderName: "Deck in Waterloo",
      location: "Waterloo, ON",
      category: "Additional Services",
      type: "Deck Construction",
      description: "A stunning multi-level deck with integrated lighting and premium composite materials, creating the perfect outdoor space.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EDeck Waterloo%3C/text%3E%3C/svg%3E`,
      features: ["Multi-level Design", "Integrated Lighting", "Composite Materials", "Built-in Seating"]
    },
    {
      id: 8,
      title: "Fence Project For Niagara region",
      folderName: "Fence Project For Niagara region",
      location: "Niagara Region, ON",
      category: "Commercial Construction",
      type: "Infrastructure",
      description: "Comprehensive fencing solution providing security and aesthetic appeal for commercial properties throughout the region.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EFence Niagara%3C/text%3E%3C/svg%3E`,
      features: ["Commercial Fencing", "Security Solutions", "Regional Coverage", "Durable Materials"]
    },
    // Additional projects to ensure scrolling
    {
      id: 9,
      title: "Kitchen Renovation in Hamilton",
      folderName: "Kitchen Renovation Hamilton",
      location: "Hamilton, ON",
      category: "Residential Projects",
      type: "Kitchen Renovation",
      description: "Complete kitchen transformation with custom cabinetry, granite countertops, and high-end appliance installation.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EKitchen Hamilton%3C/text%3E%3C/svg%3E`,
      features: ["Custom Cabinetry", "Granite Countertops", "High-End Appliances", "Modern Design"]
    },
    {
      id: 10,
      title: "Office Space in Toronto",
      folderName: "Office Space Toronto",
      location: "Toronto, ON",
      category: "Commercial Construction",
      type: "Office Renovation",
      description: "Modern office space design with open concept layout, collaboration areas, and technology integration.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EOffice Toronto%3C/text%3E%3C/svg%3E`,
      features: ["Open Concept", "Collaboration Areas", "Tech Integration", "Modern Workspace"]
    },
    {
      id: 11,
      title: "Bathroom Remodel in Ottawa",
      folderName: "Bathroom Remodel Ottawa",
      location: "Ottawa, ON",
      category: "Residential Projects",
      type: "Bathroom Renovation",
      description: "Luxury bathroom renovation featuring spa-like amenities, premium fixtures, and elegant tile work.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EBathroom Ottawa%3C/text%3E%3C/svg%3E`,
      features: ["Spa Amenities", "Premium Fixtures", "Elegant Tile Work", "Luxury Design"]
    },
    {
      id: 12,
      title: "Patio Construction in Mississauga",
      folderName: "Patio Construction Mississauga",
      location: "Mississauga, ON",
      category: "Additional Services",
      type: "Patio Construction",
      description: "Custom outdoor patio with fire pit, seating area, and premium stone materials for year-round enjoyment.",
      image: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='14' fill='%236c757d'%3EPatio Mississauga%3C/text%3E%3C/svg%3E`,
      features: ["Fire Pit", "Seating Area", "Premium Stone", "Year-Round Design"]
    }
  ];

  // Initialize infinite carousel after projects array is defined
  const carouselRef = useInfiniteCarousel(recentProjects);

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Commercial Construction':
        return '#3B82F6'; // Blue
      case 'Residential Projects':
        return '#10B981'; // Green
      case 'Additional Services':
        return '#F59E0B'; // Amber
      default:
        return '#6B7280'; // Gray
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="section-header"
            variants={cardVariants}
          >
            <h2 className="section-title">
              Recent <span className="gold-text">Projects</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Explore our portfolio of exceptional construction and renovation projects that showcase our commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>

          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            ref={carouselRef}
          >
            {recentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <FaEye />
                      <span className="btn-text">View Project</span>
                    </motion.button>
                  </div>
                  <div className="project-category-badge" style={{ backgroundColor: getCategoryColor(project.category) }}>
                    {project.type}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-location">
                      <FaMapMarkerAlt />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="project-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal - Rendered at the end for proper overlay */}
      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          category={selectedProject?.category}
        />
      )}
    </section>
  );
};

export default Projects; 