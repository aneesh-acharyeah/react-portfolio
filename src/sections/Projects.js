import React from 'react';
import { motion } from 'framer-motion';
import './styles/Projects.css';

const projects = [
  {
    title: 'Weather App',
    description: 'A responsive weather application using OpenWeatherMap API with 5-day forecasts and location search.',
    technologies: ['React', 'API Integration', 'CSS Modules'],
    link: 'https://github.com/aneesh-acharyeah/react-weather-useeffect',
    demo: '#'
  },
  {
    title: 'Password Generator',
    description: 'Secure password generator with customizable options (length, character types) and copy functionality.',
    technologies: ['React', 'JavaScript', 'Clipboard API'],
    link: 'https://github.com/aneesh-acharyeah/password-generator-react',
    demo: '#'
  },
  {
    title: 'Movie/TV Finder',
    description: 'Browse movies and TV shows with details, ratings, and trailers using TMDB API.',
    technologies: ['React', 'TMDB API', 'Axios'],
    link: 'https://github.com/aneesh-acharyeah/movie-tv-finder-react',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small"
                  >
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-outline"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;