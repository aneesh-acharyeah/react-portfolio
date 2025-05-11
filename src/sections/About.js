import React from 'react';
import { motion } from 'framer-motion';
import './styles/About.css';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js',
    'Git', 'Responsive Design', 'UI/UX', 'Framer Motion', 'Redux'
  ];

  return (
    <div className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Hi! I'm Aneesh, a passionate frontend developer specializing in React. 
                I create beautiful, functional, and user-centric digital experiences.
              </p>
              <p>
                With a keen eye for design and a love for clean code, I bridge the gap 
                between aesthetics and functionality. I'm constantly learning and adapting 
                to new technologies to build innovative solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new tech, contributing to 
                open-source projects, or enjoying outdoor activities.
              </p>
            </motion.div>
            
            <motion.div 
              className="skills"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;