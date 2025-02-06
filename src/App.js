import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ContactForm from './pages/Contact';
import Experince from './pages/Experience';

import './App.css';
import { AccountantDescription, FrontendDeveloperDescription } from './pages/DevloperDescription';
import Developer from './pages/FrontendDevloperCertificates';
import Accountant from './pages/AccountantCertificate';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experince />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path='/AccountantDescription' element={<AccountantDescription />} />
          <Route path='/FrontendDeveloperDescription' element={<FrontendDeveloperDescription />} />
          <Route path='/Developer' element={<Developer />} />
          <Route path='/Accountant' element={<Accountant />} />
          <Route path='' />
         </Routes>
      </div>
    </Router>
  );
};

export default App;
