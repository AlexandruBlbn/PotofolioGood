import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaFileDownload, FaBrain, FaBolt, FaDatabase } from 'react-icons/fa';

const About = () => {
  // Career timeline data fetched from content
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch('/content/career/data.json')
      .then(res => res.json())
      .then(setTimeline);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="about">
      <div className="section-background">
        <div className="section-grid-pattern"></div>
        <div className="section-blob"></div>
      </div>
      
      <motion.div
        className="section-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "100px 0px 0px 0px" }}
        variants={containerVariants}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
        </div>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="lead-text">
            I'm an <span className="highlight"> enthusiastic student </span>with a growing passion for machine learning and programming.
            </p>
            <p>
            As a student passionate about AI and programming, I love diving into new technologies and understanding how they work under the hood. From experimenting with neural networks to writing backend logic, I'm always curious to explore and build. I believe the best learning comes from hands-on experience and collaboration with others who share the same drive.
            </p>
            <p>
            My journey into tech started with curiosity and turned into a strong passion for machine learning and problem solving. I enjoy transforming data into useful insights and writing code that brings ideas to life.
            </p>
            
            <div className="about-resume-action">
              <motion.a 
                href="/Curriculum Vitae.pdf" 
                target="_blank"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-text">Download Resume</span>
                <span className="btn-icon"><FaFileDownload /></span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div className="about-details glass-card" variants={itemVariants}>
            <h3 className="details-title">Personal Details</h3>
            <div className="personal-details-container">
              <div className="detail-item">
                <span className="detail-icon"><FaUser /></span>
                <div className="detail-info">
                  <span className="detail-title">Name:</span> 
                  <span className="detail-content">Alexandru</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><FaEnvelope /></span>
                <div className="detail-info">
                  <span className="detail-title">Email:</span> 
                  <span className="detail-content">alexbalaban2004@gmail.com</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><FaMapMarkerAlt /></span>
                <div className="detail-info">
                  <span className="detail-title">Location:</span> 
                  <span className="detail-content">Brașov, Romania</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><FaGraduationCap /></span>
                <div className="detail-info">
                  <span className="detail-title">Degree:</span> 
                  <span className="detail-content">On Going</span>
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-icon"><FaBriefcase /></span>
                <div className="detail-info">
                  <span className="detail-title">Status:</span> 
                  <span className="detail-content">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="career-timeline" variants={itemVariants}>
          <h3 className="timeline-title">Career Path</h3>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-year">{item.year}</div>
                  <h4 className="timeline-role">{item.title}</h4>
                  <div className="timeline-company">{item.company}</div>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="specializations" variants={itemVariants}>
          <h3 className="spec-title">Interests</h3>
          
          <div className="spec-grid">
            <motion.div 
              className="spec-card glass-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 176, 255, 0.2)' }}
            >
              <div className="spec-icon"><FaBrain /></div>
              <h4 className="spec-name">Machine Learning</h4>
              <p className="spec-description">
                Designing and implementing deep learning architectures for computer vision and NLP tasks.
              </p>
            </motion.div>
            
            <motion.div 
              className="spec-card glass-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 176, 255, 0.2)' }}
            >
              <div className="spec-icon"><FaBolt /></div>
              <h4 className="spec-name">Web Development</h4>
              <p className="spec-description">
                Building responsive and interactive web applications using modern frameworks and libraries.
              </p>
            </motion.div>
            
            <motion.div 
              className="spec-card glass-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0, 176, 255, 0.2)' }}
            >
              <div className="spec-icon"><FaDatabase /></div>
              <h4 className="spec-name">CRUD Applications</h4>
              <p className="spec-description">
                Developing full-stack applications with robust data management and user-friendly interfaces.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;