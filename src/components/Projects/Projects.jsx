import React from "react";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";
import { FaExternalLinkAlt, FaBriefcase, FaStore, FaGraduationCap, FaTools } from "react-icons/fa";
import { ProjectCarousel } from "./ProjectCarousel";
import Images from "../../Images";

export const Projects = () => {
  const projects = [
    {
      title: "Online Casino XYES",
      company: "MoonHi – San José",
      type: "Sportsbook & Betting Platform",
      description: "Comprehensive development of a sportsbook and betting platform with microservices architecture, real-time features, and advanced user management.",
      highlights: [
        "Microservices architecture with API gateways",
        "Real-time communication with WebSockets",
        "Custom Strapi CMS plugins and providers"
      ],
      technologies: "Node.js, TypeScript, MongoDB, Redis, Express.js, Strapi",
      link: "https://xyes.com/",
      icon: <FaBriefcase />,
      // Agrega tus imágenes aquí:
      images: [
        Images.xyes.xyes0,
        Images.xyes.xyes1,
        Images.xyes.xyes2,
        Images.xyes.xyes3,
        Images.xyes.xyes4,
        Images.xyes.xyes5,
        Images.xyes.xyes6,
        Images.xyes.xyes7,
        Images.xyes.xyes8,
        Images.xyes.xyes9,
        Images.xyes.xyes10,
        Images.xyes.xyes11,
      ]
    },
    {
      title: "Repuestos Herrera",
      company: "Freelance – Heredia",
      type: "Spare Parts Store",
      description: "Online spare parts store with warranty management, direct customer contact, and optimized product catalog for improved accessibility.",
      highlights: [
        "Warranty ticket management system",
        "Direct contact with owner",
        "Optimized product catalog"
      ],
      technologies: "React, Next.js, Node.js, Tailwind CSS, Strapi",
      link: "https://repuestosherrera.com/",
      icon: <FaTools />,
      // Agrega tus imágenes aquí:
      images: [
        Images.repuestos.repuestos0,
        Images.repuestos.repuestos1,
        Images.repuestos.repuestos2,
      ]
    },
    {
      title: "Mentes Brillantes",
      company: "Centauro Solutions – Alajuela",
      type: "Educational Platform",
      description: "Interactive web platform for student tournaments featuring mental games and quizzes to boost engagement and learning.",
      highlights: [
        "Interactive tournament system",
        "Mental games and quizzes",
        "Real-time scoring and leaderboards"
      ],
      technologies: "JavaScript, Node.js, Next.js, Tailwind CSS, Strapi",
      link: "https://www.marathonbrightminds.com/",
      icon: <FaGraduationCap />,
      // Agrega tus imágenes aquí:
      images: [
        Images.mentes.mentes0,
        Images.mentes.mentes1,
        Images.mentes.mentes2,
        Images.mentes.mentes3,
      ]
    },
    {
      title: "E-commerce Detinmarin",
      company: "Centauro Solutions – Alajuela",
      type: "E-commerce Platform",
      description: "Client-specific e-commerce website with integrated payment and delivery systems, significantly improving user shopping experience.",
      highlights: [
        "Full e-commerce functionality",
        "Multiple payment API integrations",
        "Enhanced user experience"
      ],
      technologies: "JavaScript, Node.js, Next.js, Tailwind CSS, Strapi",
      link: null,
      icon: <FaStore />,
      // Agrega tus imágenes aquí:
      images: [
        Images.detinmarin.detinmarin1,
        Images.detinmarin.detinmarin2,
        Images.detinmarin.detinmarin3,
        Images.detinmarin.detinmarin4,
        Images.detinmarin.detinmarin5,
      ]
    },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const titleAnimation = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 120, friction: 26 }
  });

  const trail = useTrail(projects.length, {
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 26 }
  });

  return (
    <section className={styles.containerProj} style={{position:"relative", background: "#ffffff"}}>
<div className="custom-shape-divider-top-1659919788">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <animated.h1 ref={titleRef} className="text-center pt-5 display-3" style={{...titleAnimation, fontWeight: "800", color: "#000000", letterSpacing: "3px", textTransform: "uppercase"}}>Projects</animated.h1>
      
      <div className="container py-5" ref={projectsRef}>
        <div className="row justify-content-center g-4">
          {trail.map((style, index) => (
            <animated.div key={index} style={style} className="col-lg-6">
              <div className={styles.projectCardVisual}>
                {/* Carrusel de imágenes del proyecto */}
                <div className={styles.projectImageContainer}>
                  <ProjectCarousel 
                    images={projects[index].images}
                    title={projects[index].title}
                    icon={projects[index].icon}
                  />
                  {/* Overlay con info rápida */}
                  <div className={styles.projectOverlay}>
                    <span className={styles.overlayType}>{projects[index].type}</span>
                    {projects[index].link && (
                      <a 
                        href={projects[index].link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                      >
                        <FaExternalLinkAlt /> Visit Site
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Contenido del proyecto */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitleVisual}>{projects[index].title}</h3>
                  <p className={styles.projectCompanyVisual}>
                    <FaBriefcase /> {projects[index].company}
                  </p>
                  
                  <p className={styles.projectDescriptionVisual}>{projects[index].description}</p>
                  
                  <div className={styles.projectHighlightsVisual}>
                    {projects[index].highlights.map((highlight, idx) => (
                      <span key={idx} className={styles.highlightBadge}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.projectTechVisual}>
                    {projects[index].technologies}
                  </div>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};
