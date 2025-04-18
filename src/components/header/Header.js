import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <a href="#home" className="logo">
          <motion.span 
            className="logo-icon"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
          >
            <FaLaptopCode />
          </motion.span>
          <motion.span 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >AlexandruBlbn</motion.span>
        </a>
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;