import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { FaBrain, FaCode, FaChartPie, FaLayerGroup } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [skillDistribution, setSkillDistribution] = useState({});
  const chartContainerRef = useRef(null);
  
  // Extract unique categories
  const categories = ['all', ...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    // Filter skills based on active category
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }

    // Calculate skill distribution for chart
    const distribution = {};
    skills.forEach(skill => {
      if (!distribution[skill.category]) {
        distribution[skill.category] = 0;
      }
      distribution[skill.category]++;
    });
    setSkillDistribution(distribution);
  }, [activeCategory]);

  // Chart data for skill distribution
  const chartData = {
    labels: Object.keys(skillDistribution),
    datasets: [
      {
        data: Object.values(skillDistribution),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#7CFC00'
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e0e0e0',
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          boxWidth: 10,
          padding: 10
        }
      }
    },
    cutout: '70%',
    animation: {
      animateRotate: true,
      animateScale: true
    },
    responsive: true,
    maintainAspectRatio: true
  };

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

  const getCategoryIcon = (category) => {
    const icons = {
      'Languages': <FaCode />,
      'Machine Learning': <FaBrain />,
      'Data Science': <FaChartPie />,
      'Frontend': <FaLayerGroup />,
      'Backend': <FaLayerGroup />
    };
    return icons[category] || <FaCode />;
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technical Expertise
      </motion.h2>
      
      <div className="skills-overview">
        <div className="skills-distribution-chart">
          <h3 className="chart-title">Skill Distribution</h3>
          <div className="chart-container" ref={chartContainerRef}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
        
        <div className="skills-category-nav">
          <h3>Explore My Skills</h3>
          <div className="category-tabs">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category !== 'all' && (
                  <span className="category-icon">{getCategoryIcon(category)}</span>
                )}
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {activeCategory === category && <span className="active-indicator" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 8px 30px rgba(0, 176, 255, 0.2)',
              transition: { duration: 0.2 } 
            }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-category-tag">{skill.category}</div>
            <div className="skill-proficiency">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <span className="progress-percentage">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;