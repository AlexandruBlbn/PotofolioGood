import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaTools, FaEnvelope, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Projects', href: '#projects', icon: <FaCode /> },
    { name: 'Skills', href: '#skills', icon: <FaTools /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <nav className="navigation">
      {/* Desktop Navigation */}
      <motion.ul 
        className="desktop-nav"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            <a href={item.href} className="nav-link">
              <span className="nav-item-icon">{item.icon}</span>
              <span className="nav-item-text">{item.name}</span>
            </a>
          </motion.li>
        ))}
        <motion.li variants={itemVariants} className="resume-btn-container">
          <a 
            href="/Curriculum Vitae.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span className="btn-text">Resume</span>
            <span className="btn-icon"><FaFileAlt /></span>
          </a>
        </motion.li>
      </motion.ul>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
      >
        <div className="hamburger-wrapper">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </button>

      {/* Mobile Navigation */}
      <motion.div
        className="mobile-nav-container"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul className="mobile-nav">
          {navItems.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMenuOpen ? 0 : -20, 
                opacity: isMenuOpen ? 1 : 0 
              }}
              transition={{ delay: 0.1 * index }}
            >
              <a href={item.href} onClick={toggleMenu} className="mobile-nav-link">
                <span className="nav-item-icon">{item.icon}</span>
                <span className="nav-item-text">{item.name}</span>
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isMenuOpen ? 0 : -20, 
              opacity: isMenuOpen ? 1 : 0 
            }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mobile-resume-btn"
              onClick={toggleMenu}
            >
              <span className="btn-text">Resume</span>
              <span className="btn-icon"><FaFileAlt /></span>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;