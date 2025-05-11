import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/global.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ['#1a1a2e', '#16213e', '#0f3460', '#1a1a2e', '#16213e']

  );
  return (
    <motion.div className="app-container" style={{ backgroundColor }}>
      <Navbar
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
      />

      <main>
        <section ref={homeRef} id="home">
          <Home scrollTo={projectsRef} />
        </section>

        <section ref={aboutRef} id="about">
          <About />
        </section>

        <section ref={projectsRef} id="projects">
          <Projects />
        </section>

        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </motion.div>
  )

}

export default App;
