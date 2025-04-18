import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, tags, link, github, category, featured } = project;
  const [isHovered, setIsHovered] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hover: { scale: 1.05 },
    initial: { scale: 1 }
  };

  const overlayVariants = {
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    initial: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const infoVariants = {
    hover: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 }
    },
    initial: { 
      y: 20,
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Machine Learning': 'var(--ml-color, #6a11cb)',
      'Backend': 'var(--backend-color, #005C97)',
      'DevOps': 'var(--devops-color, #f46b45)'
    };
    return colors[category] || 'var(--primary-color, #00b0ff)';
  };

  return (
    <motion.article 
      ref={ref}
      className={`project-card ${featured ? 'featured' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-inner">
        <div className="project-image-container">
          <motion.div 
            className="project-image"
            variants={imageVariants}
            animate={isHovered ? "hover" : "initial"}
          >
            <img src={image} alt={title} />
            <motion.div 
              className="project-overlay"
              variants={overlayVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
            >
              <motion.div 
                className="project-actions"
                variants={infoVariants}
              >
                {link && (
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-sm"
                  >
                    <span className="btn-icon"><FaExternalLinkAlt /></span>
                    <span>Demo</span>
                  </a>
                )}
                {github && (
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    <span className="btn-icon"><FaGithub /></span>
                    <span>Code</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          <div 
            className="project-category-badge"
            style={{ backgroundColor: getCategoryColor(category) }}
          >
            {category}
          </div>
          
          {featured && (
            <div className="featured-badge">
              <span className="featured-icon"><FaStar /></span>
              <span className="featured-text">Featured</span>
            </div>
          )}
        </div>
        
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;