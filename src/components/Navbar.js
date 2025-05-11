import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles/Navbar.css';

const Navbar = ({ refs }) => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const scrollPosition = window.scrollY + 100;
      
      if (scrollPosition < refs.aboutRef.current.offsetTop) {
        setActive('home');
      } else if (scrollPosition < refs.projectsRef.current.offsetTop) {
        setActive('about');
      } else if (scrollPosition < refs.contactRef.current.offsetTop) {
        setActive('projects');
      } else {
        setActive('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs]);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.a 
          href="#home" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo(refs.homeRef)}
        >
          Aneesh
        </motion.a>
        
        <ul className="nav-links">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <button
                className={`nav-link ${active === item ? 'active' : ''}`}
                onClick={() => scrollTo(refs[`${item}Ref`])}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {active === item && (
                  <motion.span 
                    className="underline"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;