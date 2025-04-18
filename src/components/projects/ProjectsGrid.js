import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('featured');
  
  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    let filtered = [...projects];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(lowercaseSearch) || 
        project.description.toLowerCase().includes(lowercaseSearch) || 
        project.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
      );
    }
    
    // Apply sorting
    if (sortOrder === 'featured') {
      filtered.sort((a, b) => (b.featured === true) - (a.featured === true));
    } else if (sortOrder === 'alphabetical') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setDisplayedProjects(filtered);
  }, [selectedCategory, searchTerm, sortOrder]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore machine learning and CRUD projects I've worked on
        </motion.p>
      </div>

      <div className="projects-filters">
        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Projects' : category}
              {selectedCategory === category && (
                <motion.div className="active-indicator" layoutId="activeCategory" />
              )}
            </button>
          ))}
        </div>
        
        <div className="search-and-sort">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured First</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <AnimatePresence>
        {displayedProjects.length > 0 ? (
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="no-results-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsGrid;