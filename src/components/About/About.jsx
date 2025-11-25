import React, { useEffect, useState } from "react";
import { useSpring, animated, useScroll } from "@react-spring/web";
import profile from "../../Images/profile.png";
import "../../App.css";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animación de entrada para el texto
  const textAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-50px)',
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 100
  });

  // Animación de entrada para la imagen
  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px) scale(1)' : 'translateX(50px) scale(0.95)',
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 300
  });

  // Efecto parallax sutil en el scroll
  const { scrollY } = useScroll();
  
  const parallaxImage = useSpring({
    transform: scrollY.to(y => `translateY(${y * 0.1}px)`)
  });

  const parallaxCubes = useSpring({
    transform: scrollY.to(y => `translateY(${y * 0.2}px)`),
    opacity: scrollY.to(y => 1 - y * 0.001)
  });

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ position: "relative", zIndex: 2 }}>
            <animated.div style={textAnimation}>
              <h3 
                style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "300",
                  letterSpacing: "3px",
                  color: "#666666",
                  textTransform: "uppercase",
                  marginBottom: "1rem"
                }}
              >
                Hello, I'm
              </h3>
              <h1 
                style={{ 
                  fontSize: "4.5rem", 
                  fontWeight: "800",
                  color: "#000000",
                  marginBottom: "1rem",
                  lineHeight: "1.1"
                }}
              >
                Diego Apuy
              </h1>
              <h2 
                style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "400",
                  color: "#333333",
                  marginBottom: "2rem"
                }}
              >
                Full Stack Web Developer
              </h2>
              <div className="d-flex gap-3 mt-4">
                <a 
                  href="#mails" 
                  className="btn btn-dark btn-lg px-4"
                  style={{
                    borderRadius: "0",
                    fontWeight: "600",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    border: "2px solid #000000"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#ffffff";
                    e.target.style.color = "#000000";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#000000";
                    e.target.style.color = "#ffffff";
                  }}
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="btn btn-outline-dark btn-lg px-4"
                  style={{
                    borderRadius: "0",
                    fontWeight: "600",
                    borderWidth: "2px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#000000";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#000000";
                  }}
                >
                  View Projects
                </a>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-6" style={{ position: "relative", zIndex: 2 }}>
            <animated.div className="text-center" style={imageAnimation}>
              <animated.div 
                style={{
                  position: "relative",
                  display: "inline-block",
                  ...parallaxImage
                }}
              >
                <img
                  src={profile}
                  alt="profile"
                  className="rounded-circle"
                  style={{ 
                    width: "450px",
                    height: "450px",
                    objectFit: "cover",
                    border: "8px solid #000000",
                    boxShadow: "20px 20px 0px #f5f5f5",
                    position: "relative",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translate(-5px, -5px)";
                    e.target.style.boxShadow = "25px 25px 0px #f5f5f5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translate(0, 0)";
                    e.target.style.boxShadow = "20px 20px 0px #f5f5f5";
                  }}
                />
              </animated.div>
            </animated.div>
          </div>
        </div>
      </div>

      
      {/* Animated background elements with parallax */}
      <animated.div style={parallaxCubes}>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </animated.div>
    </section>
  );
};
