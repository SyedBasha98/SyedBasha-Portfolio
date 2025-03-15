import React from 'react';
import '../styles/Contact.css';  
import githubLogo from '../logo/GitHub-Logo.png';
import gmailLogo from '../logo/Gmail-Emblem.png';
import linkedinLogo from '../logo/linked-in.png';
import whatsappLogo from '../logo/whatsapp.png';
import Phone from '../logo/phone.png';

const ContactPage = () => {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>

      <div className="card-container">
        <a href="tel:8247723001" className="link">
          <img src={Phone} alt="Phone" className="icon" />
          <div className="text">+91 8247723001</div>
          <p>India</p>
        </a>
      </div>

      <div className="card-container">
        <a href="tel:97967831" className="link">
          <img src={Phone} alt="Phone" className="icon" />
          <div className="text">+965 9796 7831</div>
          <p>Kuwait</p>
        </a>
      </div>

      <div className="card-container">
        <div className="card">
          <a href="https://github.com/syedbasha98" target="_blank" rel="noopener noreferrer" className="link">
            <img src={githubLogo} alt="GitHub" className="icon" />
            <div className="text">GitHub</div>
          </a>
        </div>
        <div className="card">
          <a href="mailto:syedbasha94684@gmail.com" className="link">
            <img src={gmailLogo} alt="Gmail" className="icon" />
            <div className="text">Gmail</div>
          </a>
        </div>
        <div className="card">
          <a href="https://www.linkedin.com/in/syed-basha78956" target="_blank" rel="noopener noreferrer" className="link">
            <img src={linkedinLogo} alt="LinkedIn" className="icon" />
            <div className="text">LinkedIn</div>
          </a>
        </div>

        {/* Updated WhatsApp Links */}
        <div className="card">
          <a href="https://wa.me/918247723001" className="link" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="icon" />
            <div className="text">WhatsApp</div>
            <p>India</p>
          </a>
        </div>

        <div className="card">
          <a href="https://wa.me/96597967831" className="link" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="icon" />
            <div className="text">WhatsApp</div>
            <p>Kuwait</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
