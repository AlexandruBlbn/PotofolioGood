import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  // Add scroll animation effect
  useEffect(() => {
    // Add scroll listener to change header appearance
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;