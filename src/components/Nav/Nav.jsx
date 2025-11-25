import React, { useState, useEffect } from 'react';
import cv from "../../CV/CV.pdf";
import './Nav.css';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <a className="navbar-brand" href="#about" style={{ 
          fontWeight: '800', 
          fontSize: '1.5rem',
          color: '#000000',
          letterSpacing: '2px'
        }}>
          DA
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ color: 'white' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#description">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#mails">Contact</a>
            </li>
            <li className="nav-item">
              <a 
                className="btn btn-cv" 
                href={cv} 
                download="Juan Diego Apuy Villalobos – Full Stack Web Developer"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
