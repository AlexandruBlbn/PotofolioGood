import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaSpinner, FaCheck, FaExclamationTriangle, FaPhone, FaGithub, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaBriefcase, FaLaptopCode, FaCodeBranch } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    // This would be replaced with your actual form submission logic
    setTimeout(() => {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
      });
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
    }, 1000);
  };

  const contactReasons = [
    { value: 'job-opportunity', label: 'Job Opportunity' },
    { value: 'other', label: 'Other' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-background">
        <div className="contact-particles"></div>
      </div>
      
      <motion.div
        className="section-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            variants={itemVariants}
          >
            Interested in collaborating on ML projects or need a robust backend solution? Let's connect!
          </motion.p>
        </div>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info glass-card"
            variants={itemVariants}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">alexbalaban2004@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Brașov, Romania</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><FaBriefcase /></div>
                <div className="contact-text">
                  <h4>Work Preferences</h4>
                  <p>Remote, Hybrid, Office</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <motion.a 
                  href="https://github.com/AlexandruBlbn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="social-icon"><FaGithub /></span>
                  <span className="social-name">GitHub</span>
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/AlexandruBlbn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="social-icon"><FaLinkedinIn /></span>
                  <span className="social-name">LinkedIn</span>
                </motion.a>
                
                
              </div>
            </div>
            
            <div className="collaboration-types">
              <h4>Collaboration Areas</h4>
              <ul className="collab-list">
                <li className="collab-item">
                  <span className="collab-icon"><FaLaptopCode /></span>
                  <span className="collab-text">Machine Learning Projects</span>
                </li>
                <li className="collab-item">
                  <span className="collab-icon"><FaBriefcase /></span>
                  <span className="collab-text">Web Development</span>
                </li>
                <li className="collab-item">
                  <span className="collab-icon"><FaCodeBranch /></span>
                  <span className="collab-text">CRUD solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <h3 className="form-title">Send Me a Message</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-container">
                  <span className="input-icon"><FaUser /></span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Popescu Andrei"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <div className="input-container">
                  <span className="input-icon"><FaEnvelope /></span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="popescuandrei@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <div className="input-container">
                <span className="input-icon"><FaComment /></span>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a reason for contact</option>
                  {contactReasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <div className="input-container textarea-container">
                <span className="input-icon textarea-icon"><FaComment /></span>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What is on your mind?"
                  required
                  rows="5"
                ></textarea>
              </div>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={status.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status.submitting ? (
                <>
                  <span className="btn-icon spin"><FaSpinner /></span>
                  <span className="btn-text">Sending...</span>
                </>
              ) : (
                <>
                  <span className="btn-icon"><FaPaperPlane /></span>
                  <span className="btn-text">Send Message</span>
                </>
              )}
            </motion.button>
            
            {status.info.msg && (
              <motion.div 
                className={`form-status ${status.info.error ? 'error' : 'success'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span className="status-icon">
                  {status.info.error ? <FaExclamationTriangle /> : <FaCheck />}
                </span>
                <span className="status-text">{status.info.msg}</span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;