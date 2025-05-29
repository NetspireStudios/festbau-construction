import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import './Preloader.css';

// Enhanced 3D Rotating Cube Component
function Cube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.8;
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.z += delta * 0.4;
    
    // Add floating animation
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1.8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#DDAB4D" 
        metalness={0.9} 
        roughness={0.1}
        emissive="#DDAB4D"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

// Enhanced 3D Scene Component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#DDAB4D" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#F2E991" />
      <spotLight position={[0, 10, 0]} intensity={0.5} color="#DDAB4D" />
      <Cube />
    </>
  );
}

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="preloader-background">
        <div className="preloader-glare"></div>
        <div className="preloader-particles"></div>
      </div>
      
      <div className="preloader-content">
        <motion.div 
          className="cube-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Scene />
          </Canvas>
        </motion.div>
        
        <motion.div 
          className="logo-section"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <h1 className="preloader-logo">
            FEST<span className="gold-text">BAU</span>
          </h1>
          <motion.p 
            className="preloader-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Premium Construction & Design Excellence
          </motion.p>
        </motion.div>

        <motion.div 
          className="progress-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <div className="progress-glow"></div>
          </div>
          <motion.div 
            className="progress-text"
            key={progress}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader; 