import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaChartBar, FaMediumM, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/AlexandruBlbn' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/AlexandruBlbn' },
  ];

  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">AlexBlbn</h3>
          <p className="footer-description">
          An enthusiastic student with a growing passion for machine learning and programming.
          </p>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-icon">{link.icon}</span>
                <br></br>
                <span className="social-name">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Navigation</h3>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Tech Stack</h3>
          <div className="footer-tech-stack">
            <div className="tech-category">
              <h4 className="tech-category-title">Machine Learning</h4>
              <div className="tech-tags">
                <span className="tech-tag">Pytorch</span>
                <br></br>
                <span className="tech-tag">Scikit-Learn</span>

              </div>
            </div>
            <br></br>
            <div className="tech-category">
              <h4 className="tech-category-title">Backend</h4>
              <div className="tech-tags">
              <span className="tech-tag">Java</span>
              <br></br>
                <span className="tech-tag">.NET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Alexandru Balaban. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;