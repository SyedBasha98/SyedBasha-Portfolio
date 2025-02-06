// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import HomeMyCard from './HomeMyCard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='descriptionurl container'>
         <img src='https://i.ibb.co/jDYRqFx/fc7cf457-83f3-4f5c-acd4-3f5ffca40ac5.jpg' className='image' alt='syed'/>
    <section id="home" className="home-section">

    <div className=''>
    <div>
      <div className="intro">
     
      <div>
        <h1 className='heading1'>Welcome to My Portfolio</h1>
        <h3 className='heading2'>I am SYED BASHA, </h3>
      </div>
      </div>
      <div className='card'>
      <HomeMyCard />
      </div>
      </div>
      </div>
  
    </section>
    <Footer />
    </div>
    
  );
};

export default Home;
