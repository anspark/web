import React from 'react';
import '../styles/components.css';

const About = () => (
  <section className="about-section">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About Us</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-card">
          <div className="card-icon">💫</div>
          <h3>Premium Quality</h3>
          <p>Despite the open source nature, we still provide premium quality projects.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">✅</div>
          <h3>Fully Open Source</h3>
          <p>Every project is open source, with no costs/copyright & ability to modify or verify safety.</p>
        </div>
        <div className="about-card">
          <div className="card-icon">🔥</div>
          <h3>Customizality</h3>
          <p>We support a channel to suggest any change you like, or maybe even a new project to create.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About; 