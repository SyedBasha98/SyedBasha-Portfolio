import React from 'react';
import '../styles/Home.css';
import HomeMyCard from './HomeMyCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='descriptionurl container'>
      {/* Image in the left top corner */}
      <img 
        src='https://i.ibb.co/jDYRqFx/fc7cf457-83f3-4f5c-acd4-3f5ffca40ac5.jpg' 
        className='image' 
        alt='Syed'
      />
      
      {/* Section with card and intro */}
      <section id="home" className="home-section">
        <div className='intro'>
          <h1>Welcome to My Portfolio</h1>
          <h3>I am SYED BASHA,</h3>
          <div className='profile-card'>
            <HomeMyCard />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
