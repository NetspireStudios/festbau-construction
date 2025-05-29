import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileInvoiceDollar, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome, FaRulerCombined, FaCalendarAlt, FaClipboardList, FaCheckCircle } from 'react-icons/fa';
import './PageStyles.css';
import './QuotePage.css';

const QuotePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    projectType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    additionalServices: [],
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'Commercial Construction',
    'Residential Renovation',
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Custom Carpentry',
    'Outdoor Construction',
    'Project Management',
    'Other'
  ];

  const additionalServicesList = [
    'Electrical Work',
    'Plumbing',
    'HVAC Systems',
    'Flooring Installation',
    'Interior Design',
    'Landscaping',
    'Permits & Documentation',
    'Project Consultation'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Quote request submitted:', formData);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="quote-success">
          <div className="container">
            <motion.div
              className="success-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
            >
              <FaCheckCircle className="success-icon" />
              <h1>Quote Request Submitted!</h1>
              <p>Thank you for choosing FESTBAU. We'll review your project details and get back to you within 24 hours.</p>
              <motion.a
                href="/"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Return Home
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="page-hero quote-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaFileInvoiceDollar className="page-icon" />
            <h1 className="page-title">Get Your <span className="gold-text">Quote</span></h1>
            <p className="page-subtitle">
              Tell us about your project and we'll provide a detailed, competitive quote within 24 hours.
            </p>
            <div className="hero-features">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FaCheckCircle />
                <span>Free Consultation</span>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <FaCheckCircle />
                <span>24-Hour Response</span>
              </motion.div>
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FaCheckCircle />
                <span>No Obligation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="quote-form-section">
        <div className="container">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="section-header">
              <h2 className="section-title">Project <span className="gold-text">Details</span></h2>
              <div className="section-divider"></div>
              <p className="section-description">
                Provide us with detailed information about your project so we can give you the most accurate quote.
              </p>
            </motion.div>

            <motion.form 
              className="quote-form"
              variants={itemVariants}
              onSubmit={handleSubmit}
            >
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <FaUser /> Personal Information
                </h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope /> Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Project Location */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <FaMapMarkerAlt /> Project Location
                </h3>
                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code *</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <FaHome /> Project Information
                </h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectSize">
                      <FaRulerCombined /> Project Size
                    </label>
                    <input
                      type="text"
                      id="projectSize"
                      name="projectSize"
                      value={formData.projectSize}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., 1200 sq ft, 3 rooms, etc."
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="timeline">
                      <FaCalendarAlt /> Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6-12months">6-12 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="over250k">Over $250,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className="form-section">
                <h3 className="form-section-title">
                  <FaClipboardList /> Additional Services
                </h3>
                <div className="checkbox-grid">
                  {additionalServicesList.map(service => (
                    <label key={service} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span className="checkbox-label">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="form-section">
                <h3 className="form-section-title">Project Description</h3>
                <div className="form-group">
                  <label htmlFor="description">
                    Tell us more about your project *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    placeholder="Please provide details about your project, specific requirements, materials preferences, or any other relevant information..."
                    required
                  ></textarea>
                </div>
              </div>

              {/* Preferred Contact */}
              <div className="form-section">
                <h3 className="form-section-title">Contact Preference</h3>
                <div className="radio-group">
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleInputChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleInputChange}
                    />
                    <span>Phone Call</span>
                  </label>
                  <label className="radio-item">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="both"
                      checked={formData.preferredContact === 'both'}
                      onChange={handleInputChange}
                    />
                    <span>Either</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div 
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FaFileInvoiceDollar />
                      Get My Quote
                    </>
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default QuotePage; 