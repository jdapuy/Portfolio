import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { SoftSkills } from "./SoftSkills/SoftSkills";
import { Technologies } from "./Technologies/Technologies";
import "./Skills.css";

export const Skills = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const { ref: softSkillsRef, inView: softSkillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const titleAnimation = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 120, friction: 26 }
  });

  const softSkillsAnimation = useSpring({
    opacity: softSkillsInView ? 1 : 0,
    transform: softSkillsInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 100
  });

  const techAnimation = useSpring({
    opacity: techInView ? 1 : 0,
    transform: techInView ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 100
  });

  return (
    <section className="skills-section">
      <div className="container py-5">
        <animated.h2 ref={titleRef} className="skills-main-title text-center mb-5" style={titleAnimation}>
          Skills
        </animated.h2>
        
        <animated.div ref={softSkillsRef} className="mb-5" style={softSkillsAnimation}>
          <h3 className="skills-subtitle text-center mb-4">Soft Skills</h3>
          <SoftSkills />
        </animated.div>
        
        <animated.div ref={techRef} className="mt-5" style={techAnimation}>
          <h3 className="skills-subtitle text-center mb-4">Technologies</h3>
          <Technologies />
        </animated.div>
      </div>
    </section>
  );
};
