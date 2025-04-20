import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import { FaBrain, FaCode, FaChartPie, FaLayerGroup } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [key, setKey] = useState(0);
  
  // Extract unique categories
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    // Filter skills based on active category
    if (activeCategory === 'all') {
      setFilteredSkills([...skills]);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }

    // Force re-render of component by updating key
    setKey(prevKey => prevKey + 1);
  }, [activeCategory]);

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
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Get the correct color class for the skill level
  const getLevelColorClass = (level) => {
    if (level >= 90) return "expert";
    if (level >= 75) return "advanced";
    return "intermediate";
  };

  // Get the text label for the skill level
  const getLevelLabel = (level) => {
    if (level >= 90) return "EXPERT";
    if (level >= 75) return "ADVANCED";
    return "INTERMEDIATE";
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
      </div>
      
      {/* Category filter tabs - exactly like screenshot */}
      <div className="category-filter-container">
        <div className="category-tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={key}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "100px 0px 0px 0px" }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={itemVariants}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-category">{skill.category}</div>
              <div className={`skill-level ${getLevelColorClass(skill.level)}`}>
                {getLevelLabel(skill.level)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;