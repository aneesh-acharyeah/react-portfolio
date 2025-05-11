import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './styles/Footer.css';


const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/aneesh-acharyeah' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aneesh-acharyeah' },
    { icon: <FaTwitter />, url: '#' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Aneesh G. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;