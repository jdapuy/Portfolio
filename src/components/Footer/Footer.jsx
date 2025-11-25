import React, { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import { SiLinkedin,SiGithub,SiInstagram,SiWhatsapp} from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className="footer-container">
    <div className="footer-content">
      <IconContext.Provider
            value={{
              color: "#000000",
              size: "2em",
              className: "footer-icon",
            }}
          >
            <div className="footer-icon-wrapper">
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/diego-apuy/"
                  >
            <SiLinkedin/>
            </a>
            </div>
            
            <div className="footer-icon-wrapper">
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jdapuy"
                  >
            <SiGithub/>
            </a>
            </div>
            
            <div className="footer-icon-wrapper">
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/diego.apuy/"
                  >
             <SiInstagram/>
            </a>
            </div>
            
            <div className="footer-icon-wrapper">
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/50687168035"
                  >
             <SiWhatsapp/>
            </a>
            </div>
            </IconContext.Provider>


</div>
<p className="footer-copyright">© 2025 Juan Diego Apuy V. All rights reserved.</p>
</div>

{/* Scroll to top button */}
<button 
  className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
  onClick={scrollToTop}
  aria-label="Scroll to top"
>
  <FaArrowUp />
</button>
</>
  )
}
