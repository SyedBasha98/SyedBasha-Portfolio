import React from 'react';
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import '../styles/Certificate.css'

const Developer = () => {
  return (
    <div className="image-gallery">
     <img src={Image1} alt="Beautiful landscape" />
<img src={Image2} alt="City skyline" />

    </div>
  );
};

export default Developer;
