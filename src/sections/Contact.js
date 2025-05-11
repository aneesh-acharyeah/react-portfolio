import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Thank you! Your message has been sent successfully.');
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="contact-container"
        >
          <h2>Get In Touch</h2>
          
          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Let's talk about your project</h3>
              <p>
                I'm currently open to new opportunities and interesting projects. 
                Feel free to reach out if you'd like to collaborate or just say hi!
              </p>
              
              <div className="contact-details">
                <div className="detail-item">
                  <h4>Email</h4>
                  <a href="mailto:aneesh@example.com">aneesh@example.com</a>
                </div>
                
                <div className="detail-item">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <motion.p 
                  className="submit-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {submitMessage}
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;