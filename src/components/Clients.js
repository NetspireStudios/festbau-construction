import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Clients.css';

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const clients = [
    {
      name: 'Dairy Queen',
      logo: '/images/dq.png',
      alt: 'Dairy Queen Logo'
    },
    {
      name: 'BarBurrito',
      logo: '/images/barburrito.png',
      alt: 'BarBurrito Logo'
    },
    {
      name: 'Quesada Burritos & Tacos',
      logo: '/images/quesada.png',
      alt: 'Quesada Burritos & Tacos Logo'
    },
    {
      name: 'DoughBox Wood Fired Pizza',
      logo: '/images/doughbox.png',
      alt: 'DoughBox Wood Fired Pizza Logo'
    },
    {
      name: 'eggmaniac',
      logo: '/images/eggmania.png',
      alt: 'eggmaniac Logo'
    },
    {
      name: 'Tokyo Smoke',
      logo: '/images/tokyosmoke.png',
      alt: 'Tokyo Smoke Logo'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="clients" style={{ 
      padding: '120px 0', 
      background: 'var(--primary-black)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ddab4d\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
        pointerEvents: 'none'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our <span className="gold-text">Clients</span></h2>
          <div className="section-divider"></div>
          <p style={{
            textAlign: 'center',
            color: 'var(--gray-light)',
            fontSize: '1.2rem',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem auto'
          }}>
            Trusted by leading brands across Ontario for their construction and renovation needs
          </p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'clamp(1rem, 3vw, 2rem)',
              marginTop: '3rem'
            }}
            className="clients-grid"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="client-card"
                style={{
                  background: 'linear-gradient(135deg, var(--secondary-black), var(--accent-black))',
                  padding: '3rem 2rem',
                  borderRadius: '20px',
                  border: '1px solid var(--accent-black)',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              >
                {/* Golden border on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease'
                }} className="client-card-border" />
                
                {/* Logo Container */}
                <div style={{
                  width: '100%',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative'
                }}>
                  <img
                    src={client.logo}
                    alt={client.alt}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'brightness(0.9) contrast(1.1)',
                      transition: 'all 0.3s ease'
                    }}
                    className="client-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text */}
                  <div style={{
                    display: 'none',
                    color: 'var(--gold)',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {client.name}
                  </div>
                </div>
                
                {/* Client Name */}
                <h3 style={{
                  color: 'var(--white)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  margin: 0,
                  opacity: 0.9,
                  transition: 'all 0.3s ease'
                }} className="client-name">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .client-card:hover .client-card-border {
          transform: scaleX(1);
        }
        
        .client-card:hover .client-logo {
          filter: brightness(1.1) contrast(1.2);
          transform: scale(1.05);
        }
        
        .client-card:hover .client-name {
          color: var(--gold);
          opacity: 1;
        }
        
        .client-card:hover {
          border-color: var(--gold);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(221, 171, 77, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Clients; 