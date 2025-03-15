import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeMyCard.css'

const HomeMyCard = () => {
  return (
    <div className="home-card-container">
      <div className="home-card">
        <h1 className="name-title">Syed Basha</h1>
        <p className="description-text">
          I am a passionate and versatile Full Stack Developer with a strong foundation in frontend and backend technologies, including React.js, Node.js, MongoDB, and Express.js. My journey is fueled by a love for creating innovative and user-friendly applications.
          <br /><br />
          With over two years of experience as a Junior Accountant, I excel in problem-solving and managing financial operations. I specialize in crafting responsive interfaces, building scalable backend services, and delivering seamless digital experiences for users.
        </p>
        <Link to="/projects" className="view-projects-button">
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default HomeMyCard;
