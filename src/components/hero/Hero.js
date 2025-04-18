import React, { useEffect, useRef } from 'react';
import ParticlesBg from 'particles-bg';
import { motion } from 'framer-motion';

const Hero = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      const codeAnimation = setInterval(() => {
        const randomCode = generateRandomCode();
        codeRef.current.innerHTML = randomCode;
      }, 3000);
      
      return () => clearInterval(codeAnimation);
    }
  }, []);

  const generateRandomCode = () => {
    const codeSnippets = [
      `def train_model(X, y):\n  model = CNN()\n  model.fit(X, y)\n  return model`,
      `class CNN(nn.Module):\n  def __init__(self):\n    super().__init__(),\n    self.conv1 = nn.Conv2d(1, 32, 3),\n    self.relu = nn.ReLU(),\n    self.pool = nn.MaxPool2d(2)`,
      `model.eval()\n with torch.no_grad():\n  for batch_idx, (data, target) in enumerate(valloader):\n    data, target = data.to(device), target.to(device)\n    output = model(data)\n    loss = criterion(output, target)`,
    ];
    return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  };

  return (
    <section id="hero" className="hero">
      <ParticlesBg type="cobweb" bg={true} color="#00b0ff" />
      
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">Alexandru</span>
          </h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="title"
          >
            <span className="title-prefix">Electrical Engineering</span>
            <span className="title-divider">&</span>
            <span className="title-suffix">Computer Science Student</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bio"
          >
            An enthusiastic student with a growing passion for machine learning and programming.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              <span className="btn-text">View Projects</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-text">Contact</span>
              <span className="btn-icon">✉</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="code-window">
          <div className="code-header">
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-title">ml_project.py</span>
          </div>
          <pre className="code-content">
            <code ref={codeRef} style={{ minHeight: "150px", display: "block", fontSize: "0.85rem", maxWidth: "100%" }}>
              {generateRandomCode()}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;