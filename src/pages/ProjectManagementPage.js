import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaChartLine, FaShieldAlt, FaDollarSign, FaUsers, FaClipboardCheck, FaCalendarAlt, FaLightbulb, FaCogs } from 'react-icons/fa';
import './PageStyles.css';

const ProjectManagementPage = () => {
  const services = [
    {
      icon: FaCalendarAlt,
      title: "Timeline Development & Schedule Management",
      description: "Creating detailed timelines that outline each phase, from planning and design to construction and inspection. We establish realistic deadlines and coordinate with subcontractors to keep projects on track.",
      features: [
        "Detailed project phase planning",
        "Realistic deadline establishment",
        "Subcontractor coordination",
        "Progress tracking and monitoring",
        "Swift challenge resolution"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance & Compliance Oversight",
      description: "Implementing rigorous quality control measures throughout the construction process, ensuring all materials and workmanship meet industry standards and building codes.",
      features: [
        "Regular inspections and monitoring",
        "Building code compliance verification", 
        "Material quality control",
        "Safety regulation adherence",
        "Comprehensive documentation"
      ]
    },
    {
      icon: FaDollarSign,
      title: "Budget Management & Cost Control",
      description: "Closely monitoring expenses throughout the project lifecycle, conducting financial analyses to identify potential overruns early and implementing cost mitigation strategies.",
      features: [
        "Real-time expense monitoring",
        "Financial analysis and reporting",
        "Early overrun identification",
        "Cost mitigation strategies",
        "Transparent budget updates"
      ]
    },
    {
      icon: FaLightbulb,
      title: "Risk Assessment & Mitigation",
      description: "Conducting thorough evaluations to identify potential risks at every stage, developing proactive strategies to minimize impact and ensure project success.",
      features: [
        "Comprehensive risk evaluation",
        "Financial risk analysis",
        "Safety protocol development",
        "Contingency planning",
        "Insurance coordination"
      ]
    },
    {
      icon: FaUsers,
      title: "Communication & Stakeholder Engagement",
      description: "Maintaining open communication among all project participants, providing regular updates and facilitating feedback to ensure collaborative project execution.",
      features: [
        "Regular progress updates",
        "Stakeholder coordination",
        "Feedback session facilitation",
        "Issue resolution",
        "Transparent communication"
      ]
    },
    {
      icon: FaCogs,
      title: "Comprehensive Project Planning",
      description: "Meticulous planning and coordination that integrates all project aspects, establishing clear objectives and streamlining processes for enhanced efficiency.",
      features: [
        "Detailed project roadmaps",
        "Resource allocation planning",
        "Team coordination",
        "Process optimization",
        "Goal establishment"
      ]
    }
  ];

  const serviceIcons = [
    { icon: FaCalendarAlt, title: "Timeline Management", mobileTitle: "Timeline" },
    { icon: FaShieldAlt, title: "Quality Assurance", mobileTitle: "Quality" },
    { icon: FaDollarSign, title: "Budget Control", mobileTitle: "Budget" },
    { icon: FaLightbulb, title: "Risk Assessment", mobileTitle: "Risk" },
    { icon: FaUsers, title: "Stakeholder Engagement", mobileTitle: "Stakeholders" }
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
        </div>
      </section>



      {/* Process Section */}
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
                <p>Comprehensive project planning with clear objectives and detailed roadmaps</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaCalendarAlt />
              </div>
              <div className="timeline-content">
                <h3>Timeline Development</h3>
                <p>Creating realistic schedules with proper coordination of all stakeholders</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaShieldAlt />
              </div>
              <div className="timeline-content">
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control and compliance oversight throughout construction</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <FaChartLine />
              </div>
              <div className="timeline-content">
                <h3>Monitoring & Control</h3>
                <p>Continuous monitoring of progress, budget, and quality standards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient">
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
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const footer = document.getElementById('contact');
                  if (footer) footer.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectManagementPage; 