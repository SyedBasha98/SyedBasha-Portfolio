import React from 'react';
import '../styles/About.css';
import DevloperDescription from './DevloperDescription';

const About = () => {
  return (
    <section id="about" className="about-section">
      <DevloperDescription Description/>
    </section>
  );
};

export default About;