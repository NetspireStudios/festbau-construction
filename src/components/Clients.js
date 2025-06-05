import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Clients.css';

// Import images directly (more reliable for deployment)
import dqLogo from '../assets/images/dq.png';
import barburritoLogo from '../assets/images/barburrito.png';
import quesadaLogo from '../assets/images/quesada.png';
import doughboxLogo from '../assets/images/doughbox.png';
import eggmaniaLogo from '../assets/images/eggmania.png';
import tokyosmokeLogo from '../assets/images/tokyosmoke.png';

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const clients = [
    {
      name: 'Dairy Queen',
      logo: dqLogo,
      alt: 'Dairy Queen Logo'
    },
    {
      name: 'BarBurrito',
      logo: barburritoLogo,
      alt: 'BarBurrito Logo'
    },
    {
      name: 'Quesada Burritos & Tacos',
      logo: quesadaLogo,
      alt: 'Quesada Burritos & Tacos Logo'
    },
    {
      name: 'DoughBox Wood Fired Pizza',
      logo: doughboxLogo,
      alt: 'DoughBox Wood Fired Pizza Logo'
    },
    {
      name: 'eggmaniac',
      logo: eggmaniaLogo,
      alt: 'eggmaniac Logo'
    },
    {
      name: 'Tokyo Smoke',
      logo: tokyosmokeLogo,
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
          
          <div
            style={{ 
              width: '100%',
              overflow: 'hidden',
              marginTop: '4rem',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity
              }}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                width: 'fit-content'
              }}
              className="clients-slider"
            >
              {/* Duplicate the array to create seamless loop */}
              {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="client-card"
                style={{
                  background: 'transparent',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  width: '200px',
                  height: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid transparent'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              >
                {/* Logo Container */}
                  <img
                    src={client.logo}
                    alt={client.alt}
                    style={{
                      maxWidth: '100%',
                    maxHeight: '120px',
                      objectFit: 'contain',
                    filter: 'brightness(1.0) contrast(1.1)',
                      transition: 'all 0.3s ease'
                    }}
                    className="client-logo"
                    onLoad={() => {
                      console.log(`✅ Successfully loaded: ${client.logo}`);
                    }}
                    onError={(e) => {
                      console.error(`❌ Failed to load image: ${client.logo}`);
                      console.error(`Full URL attempted: ${e.target.src}`);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text */}
                  <div style={{
                    display: 'none',
                    color: 'var(--gold)',
                  fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {client.name}
                </div>
              </motion.div>
                          ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .client-card:hover {
          border-color: var(--gold);
          background: rgba(221, 171, 77, 0.05);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 0 30px rgba(221, 171, 77, 0.15);
        }
        
        .client-card:hover .client-logo {
          filter: brightness(1.2) contrast(1.2);
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default Clients; 