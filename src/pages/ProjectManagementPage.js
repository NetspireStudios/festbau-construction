import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaChartLine, FaShieldAlt, FaDollarSign, FaUsers, FaCalendarAlt, FaLightbulb, FaCogs, FaClipboardList, FaHandshake, FaTools, FaCheckCircle } from 'react-icons/fa';
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

  const processPhases = [
    {
      phase: "Phase 1",
      title: "Project Initiation",
      description: "Define project scope, objectives, and deliverables. Establish project charter and preliminary timeline.",
      duration: "1-2 weeks",
      activities: ["Stakeholder analysis", "Scope definition", "Resource planning", "Risk identification"]
    },
    {
      phase: "Phase 2", 
      title: "Planning & Design",
      description: "Develop detailed project plans, schedules, and budgets. Coordinate with architects and engineers.",
      duration: "3-6 weeks",
      activities: ["Detailed planning", "Design coordination", "Budget finalization", "Permit applications"]
    },
    {
      phase: "Phase 3",
      title: "Execution & Monitoring",
      description: "Active construction phase with continuous monitoring, quality control, and progress reporting.",
      duration: "Variable",
      activities: ["Construction oversight", "Quality inspections", "Progress tracking", "Issue resolution"]
    },
    {
      phase: "Phase 4",
      title: "Completion & Handover", 
      description: "Final inspections, documentation completion, and project handover to client.",
      duration: "1-2 weeks",
      activities: ["Final inspections", "Documentation", "Client walkthrough", "Project closure"]
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
              Professional Project Management Services in <span className="gold-text">Construction</span>
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

      {/* Our Project Management Process Timeline */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our Project Management <span className="gold-text">Timeline</span>
            </h2>
            <p className="section-description">
              Our systematic approach ensures every project is delivered on time, within budget, and to the highest quality standards. 
              Each phase is carefully planned and executed with precision.
            </p>
          </motion.div>

          <div className="timeline-phases">
            {processPhases.map((phase, index) => (
              <motion.div
                key={index}
                className="phase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="phase-header">
                  <span className="phase-number">{phase.phase}</span>
                  <div className="phase-info">
                    <h3 className="phase-title">{phase.title}</h3>
                    <span className="phase-duration">{phase.duration}</span>
                  </div>
                </div>
                <p className="phase-description">{phase.description}</p>
                <div className="phase-activities">
                  <h4>Key Activities:</h4>
                  <ul>
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex}>
                        <FaCheckCircle className="activity-icon" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Process Section */}
      <section className="section-padding bg-gradient">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Our Project Management <span className="gold-text">Process</span>
            </h2>
            <p className="section-description">
              This proactive approach ensures a seamless construction experience that aligns with your vision and goals, 
              protecting your investment and fostering a safer, more efficient work environment.
            </p>
          </motion.div>

          <motion.div
            className="process-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaLightbulb />
              </div>
              <div className="timeline-content">
                <h3>Planning & Coordination</h3>
                <p>Comprehensive project planning with clear objectives and detailed roadmaps, including resource allocation and timeline development.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaCalendarAlt />
              </div>
              <div className="timeline-content">
                <h3>Timeline Development</h3>
                <p>Creating realistic schedules with proper coordination of all stakeholders, including buffer time for unforeseen circumstances.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaShieldAlt />
              </div>
              <div className="timeline-content">
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control and compliance oversight throughout construction with regular inspections and documentation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaChartLine />
              </div>
              <div className="timeline-content">
                <h3>Monitoring & Control</h3>
                <p>Continuous monitoring of progress, budget, and quality standards with proactive issue resolution and stakeholder communication.</p>
              </div>
            </div>
          </motion.div>
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
                href="/quote"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Project Quote
              </motion.a>
              <motion.a
                href="/contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectManagementPage; 