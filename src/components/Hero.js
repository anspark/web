import React from 'react';
import FloatingParticles from './FloatingParticles';
import '../styles/components.css';

const Hero = ({ setCurrentSection }) => (
  <section className="hero">
    <div className="hero-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </div>
    <FloatingParticles />
    <div className="hero-content">
      <h1 className="hero-title">
        Welcome To <span className="highlight">Anspark</span>
      </h1>
      <p className="hero-subtitle">
        Enjoy premium-quality projects — completely free and open source.
      </p>
    </div>
  </section>
);

export default Hero; 