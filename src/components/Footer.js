import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--primary-black)', 
      padding: '3rem 0 2rem', 
      borderTop: '1px solid var(--accent-black)' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            flex: '1', 
            minWidth: '300px', 
            marginBottom: '2rem' 
          }}>
            <div className="footer-logo" style={{
              marginBottom: '1rem'
            }}>
              <h3 style={{ 
                color: 'var(--gold)', 
                marginBottom: '1rem', 
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>FESTBAU</h3>
              <p style={{ 
                color: 'var(--gray-light)', 
                lineHeight: '1.6' 
              }}>Excellence in Construction & Renovation. From commercial builds to residential renovations, 
              we deliver turnkey solutions with precision and quality.</p>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contact Info</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FaPhone style={{ color: 'var(--gold)', fontSize: '0.9rem' }} />
              <p style={{ color: 'var(--gray-light)', margin: 0 }}>
                (548) 333-1419
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <FaEnvelope style={{ color: 'var(--gold)', fontSize: '0.9rem' }} />
              <p style={{ color: 'var(--gray-light)', margin: 0 }}>
                info@festbau.com
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaMapMarkerAlt style={{ color: 'var(--gold)', fontSize: '0.9rem' }} />
              <p style={{ color: 'var(--gray-light)', margin: 0 }}>
                Cambridge, ON
              </p>
            </div>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Services</h4>
            <p style={{ color: 'var(--gray-light)', marginBottom: '0.5rem' }}>Commercial Construction</p>
            <p style={{ color: 'var(--gray-light)', marginBottom: '0.5rem' }}>Residential Services</p>
            <p style={{ color: 'var(--gray-light)', marginBottom: '0.5rem' }}>Project Management</p>
            <p style={{ color: 'var(--gray-light)' }}>Additional Services</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://www.facebook.com/profile.php?id=100085899534543" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gray-light)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--gold)';
                  e.target.style.color = 'var(--primary-black)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(221, 171, 77, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'var(--accent-black)';
                  e.target.style.color = 'var(--gray-light)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.linkedin.com/company/vugar-construction-inc/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gray-light)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--gold)';
                  e.target.style.color = 'var(--primary-black)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(221, 171, 77, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'var(--accent-black)';
                  e.target.style.color = 'var(--gray-light)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.instagram.com/vugarconstruction/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gray-light)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--gold)';
                  e.target.style.color = 'var(--primary-black)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(221, 171, 77, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'var(--accent-black)';
                  e.target.style.color = 'var(--gray-light)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--accent-black)', 
          paddingTop: '2rem', 
          marginTop: '3rem', 
          textAlign: 'center' 
        }}>
          <p className="footer-copyright" style={{ 
            color: 'var(--gray-medium)' 
          }}>
            © 2025 FESTBAU. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 