import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import '../styles/global.css';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="app">
      <Hero setCurrentSection={setCurrentSection} />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home; 