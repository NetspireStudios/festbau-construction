import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaChartLine, FaShieldAlt, FaDollarSign, FaUsers, FaCalendarAlt, FaLightbulb, FaCogs, FaClipboardList, FaHandshake, FaTools } from 'react-icons/fa';
import ModernTimeline from '../components/ModernTimeline';
import './PageStyles.css';

const ProjectManagementPage = () => {

  const serviceIcons = [
    { icon: FaCalendarAlt, title: "Timeline Management", mobileTitle: "Timeline" },
    { icon: FaShieldAlt, title: "Quality Assurance", mobileTitle: "Quality" },
    { icon: FaDollarSign, title: "Budget Control", mobileTitle: "Budget" },
    { icon: FaLightbulb, title: "Risk Assessment", mobileTitle: "Risk" },
    { icon: FaUsers, title: "Stakeholder Engagement", mobileTitle: "Stakeholders" }
  ];

  const managementServices = [
    {
      icon: FaProjectDiagram,
      title: "Project Planning & Coordination",
      description: "Comprehensive project planning with detailed roadmaps, milestone identification, and resource allocation to ensure smooth execution from start to finish."
    },
    {
      icon: FaChartLine,
      title: "Progress Monitoring & Reporting",
      description: "Real-time project tracking with regular progress reports, performance metrics, and transparent communication to keep all stakeholders informed."
    },
    {
      icon: FaUsers,
      title: "Team Coordination & Leadership",
      description: "Expert coordination of all project teams including contractors, suppliers, and specialists to maintain efficiency and quality standards."
    },
    {
      icon: FaClipboardList,
      title: "Documentation & Compliance",
      description: "Meticulous documentation management, permit coordination, and regulatory compliance to ensure all legal and safety requirements are met."
    }
  ];



  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      className="page-container project-management-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <section className="page-hero">
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
            <FaProjectDiagram className="page-icon" />
            <h1 className="page-title">Project <span className="gold-text">Management</span></h1>
            <p className="page-subtitle">
              Expert oversight from planning to completion with engineering precision and unwavering commitment to excellence.
            </p>
            
            {/* Service Icons */}
            <div className="service-icons-grid">
              {serviceIcons.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-icon-item"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <service.icon className="service-icon" />
                  <span className="service-title desktop-title">{service.title}</span>
                  <span className="service-title mobile-title">{service.mobileTitle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Expert Project Management <span className="gold-text">Services</span>
            </h2>
            <p className="section-description">
              Comprehensive project planning and coordination are vital for successful construction execution. 
              Our team meticulously outlines each project phase, collaborating closely with clients, architects, 
              and contractors to establish clear objectives and timelines. By integrating all aspects of the project, 
              we streamline processes and minimize disruptions, enhancing efficiency and fostering effective 
              communication among stakeholders.
            </p>
          </motion.div>

          <div className="features-grid">
            {managementServices.map((service, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <service.icon className="feature-icon" />
                <h3 className="feature-title">{service.title}</h3>
                <p className="feature-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Timeline */}
      <ModernTimeline 
        steps={[
          {
            step: "01",
            title: "Project Initiation",
            mobileTitle: "Initiation",
            description: "Define project scope, objectives, and deliverables. Establish project charter and preliminary timeline with stakeholder analysis.",
            mobileDescription: "Define scope, objectives, and preliminary timeline with stakeholder analysis.",
            icon: FaLightbulb
          },
          {
            step: "02",
            title: "Planning & Design",
            mobileTitle: "Planning",
            description: "Develop detailed project plans, schedules, and budgets. Coordinate with architects and engineers for seamless execution.",
            mobileDescription: "Develop detailed plans, schedules, and coordinate with architects and engineers.",
            icon: FaCalendarAlt
          },
          {
            step: "03",
            title: "Execution & Monitoring",
            mobileTitle: "Execution",
            description: "Active construction phase with continuous monitoring, quality control, and progress reporting to ensure standards.",
            mobileDescription: "Active construction with monitoring, quality control, and progress reporting.",
            icon: FaShieldAlt
          },
          {
            step: "04",
            title: "Completion & Handover",
            mobileTitle: "Completion",
            description: "Final inspections, documentation completion, and project handover to client with comprehensive walkthrough.",
            mobileDescription: "Final inspections, documentation, and project handover with walkthrough.",
            icon: FaChartLine
          }
        ]}
        title={
          <>
            Our Project Management <span className="gold-text">Timeline</span>
          </>
        }
        subtitle="Our systematic approach ensures every project is delivered on time, within budget, and to the highest quality standards."
      />

      {/* Why Choose Our Project Management */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose FESTBAU for <span className="gold-text">Project Management</span>
            </h2>
            <p className="section-description">
              Our project management approach is built on years of experience, proven methodologies, and a commitment to excellence that ensures your project's success.
            </p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaHandshake className="benefit-icon" />
              <div className="benefit-content">
                <h3>Proven Track Record</h3>
                <p>Over 15 years of successful project completions across commercial and residential sectors with consistently satisfied clients.</p>
              </div>
            </motion.div>

            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaTools className="benefit-icon" />
              <div className="benefit-content">
                <h3>Advanced Tools & Technology</h3>
                <p>Utilizing cutting-edge project management software and communication tools for real-time tracking and reporting.</p>
              </div>
            </motion.div>

            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaCogs className="benefit-icon" />
              <div className="benefit-content">
                <h3>Systematic Approach</h3>
                <p>Structured methodology that ensures consistent results, risk mitigation, and efficient resource utilization across all projects.</p>
              </div>
            </motion.div>

            <motion.div
              className="benefit-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaShieldAlt className="benefit-icon" />
              <div className="benefit-content">
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control processes and regular inspections ensure every aspect meets or exceeds industry standards.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">
              Ready to Start Your <span className="gold-text">Next Project</span>?
            </h2>
            <p className="cta-description">
              Let our experienced project management team guide your construction project from concept to completion.
              Contact us today to discuss how we can help make your project a success.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="tel:+15483331419"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                (548) 333-1419
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectManagementPage; 