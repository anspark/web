import React, { useState, useEffect } from 'react';

// ==================== COMPONENTS ====================

const FloatingParticles = () => {
  return (
    <div className="floating-particles">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

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
      Enjoy premium-quality projects — completely free and open source.      </p>
    </div>
  </section>
);

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

const Skills = () => {
  const skills = [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
  ];
  
  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technologies</h2>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact = () => {
  const socialLinks = [
    {
      name: "Discord",
      className: "discord",
      icon: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
    },
    {
      name: "GitHub",
      className: "github",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },

  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Join Anspark</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content">

          <div className="social-links">
            {socialLinks.map(link => (
              <a key={link.name} href="#" className={`social-link ${link.className}`}>
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={link.icon} />
                  </svg>
                </div>
                <span>Join {link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



// ==================== MAIN APP COMPONENT ====================

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="app">
      <style jsx>{`
        /* ==================== FONTS ==================== */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ==================== GLOBAL STYLES ==================== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0a;
          color: white;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%);
          position: relative;
        }

        .app::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ==================== FLOATING PARTICLES ==================== */
        .floating-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          opacity: 0.7;
          animation: float infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 1; 
          }
        }

        /* ==================== MOUSE FOLLOWER (FIXED) ==================== */
        .mouse-follower {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.05s ease-out;
          mix-blend-mode: screen;
        }

        /* ==================== NAVIGATION ==================== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 0;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          z-index: 1000;
          animation: slideDown 1s ease;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* ==================== HERO SECTION ==================== */
        .hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
          margin-bottom: -4rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%);
          top: 50%;
          right: 5%;
          animation-delay: 3s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
          bottom: 10%;
          left: 40%;
          animation-delay: 6s;
        }

        .hero-content {
          z-index: 2;
          max-width: 800px;
          padding: 0 2rem;
          margin-top: -4rem;
        }

        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1.1;
          animation: fadeInUp 1s ease 0.3s both;
        }

        .highlight {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.85;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          animation: fadeInUp 1s ease 0.6s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.9s both;
        }

        /* ==================== BUTTONS ==================== */
        .btn-primary, .btn-secondary {
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .btn-primary {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: white;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }

        .btn-primary:hover .btn-shine {
          left: 100%;
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(59, 130, 246, 0.5);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        /* ==================== SECTIONS ==================== */
        .about-section, .skills-section, .projects-section, .contact-section {
          padding: 6rem 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* ==================== ABOUT SECTION ==================== */
        .about-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s ease;
          animation: fadeInUp 1s ease;
        }

        .about-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
        }

        .about-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #e2e8f0;
        }

        .about-card p {
          opacity: 0.8;
          line-height: 1.6;
          color: #cbd5e1;
        }

        /* ==================== SKILLS SECTION ==================== */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInScale 1s ease both;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .skill-item:hover {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        .skill-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          transition: left 0.6s;
        }

        .skill-item:hover .skill-glow {
          left: 100%;
        }

        .skill-name {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          position: relative;
          z-index: 2;
          color: #e2e8f0;
        }

        /* ==================== PROJECTS SECTION ==================== */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: fadeInUp 1s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
        }

        .project-image {
          height: 200px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
          position: relative;
          overflow: hidden;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .view-project {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .view-project:hover {
          transform: scale(1.05);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #e2e8f0;
        }

        .project-content p {
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1rem;
          color: #cbd5e1;
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .project-tags span {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ==================== CONTACT SECTION ==================== */
        .contact-description {
          text-align: center;
          font-size: 1.25rem;
          opacity: 0.85;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 1rem 2rem;
          color: white;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          font-weight: 500;
        }

        .social-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
        }

        .social-link.discord:hover {
          border-color: #5865f2;
          box-shadow: 0 20px 40px rgba(88, 101, 242, 0.3);
        }

        .social-link.github:hover {
          border-color: #6cc644;
          box-shadow: 0 20px 40px rgba(108, 198, 68, 0.3);
        }

        .social-link.twitter:hover {
          border-color: #1da1f2;
          box-shadow: 0 20px 40px rgba(29, 161, 242, 0.3);
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }

        .social-icon svg {
          width: 100%;
          height: 100%;
        }

        /* ==================== FOOTER ==================== */
        .footer {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
          text-align: center;
        }

        .footer-content p {
          opacity: 0.6;
          font-size: 0.95rem;
        }

        /* ==================== ANIMATIONS ==================== */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* ==================== RESPONSIVE DESIGN ==================== */
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }
          
          .nav-links a {
            font-size: 0.9rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .social-links {
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>

      <Hero setCurrentSection={setCurrentSection} />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;