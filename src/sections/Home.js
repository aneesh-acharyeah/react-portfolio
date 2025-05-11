import React from 'react';
import { motion } from 'framer-motion';
import './styles/Home.css';

const Home = ({ scrollTo }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h1 variants={textVariants}>
            Hi, I'm <span className="highlight">Aneesh</span>
          </motion.h1>
          
          <motion.h2 variants={textVariants}>
            Frontend Developer
          </motion.h2>
          
          <motion.p variants={textVariants}>
            I build exceptional digital experiences with modern web technologies.
          </motion.p>
          
          <motion.div variants={textVariants}>
            <button 
              onClick={() => scrollTo.current.scrollIntoView({ behavior: 'smooth' })}
              className="btn"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-down"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span>Scroll Down</span>
      </motion.div>
    </div>
  );
};

export default Home;