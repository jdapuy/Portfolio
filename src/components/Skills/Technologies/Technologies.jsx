import React from 'react'
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { IconContext } from "react-icons";
import { 
  SiJavascript, SiHtml5, SiCss3, SiReact, SiRedux, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiTypescript, SiExpress, SiSequelize, SiMongodb, SiRedis, 
  SiPostgresql, SiStrapi, SiPostman,
  SiGit, SiAmazonaws, SiJenkins, SiDocker, SiKubernetes,
  SiJira
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import './Technologies.css';

export const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      techs: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss3 />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind" }
      ]
    },
    {
      title: "Backend",
      techs: [
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <SiSequelize />, name: "Sequelize" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiStrapi />, name: "Strapi" },
        { icon: <SiPostman />, name: "Postman" }
      ]
    },
    {
      title: "DevOps & Cloud",
      techs: [
        { icon: <SiGit />, name: "Git" },
        { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" }
      ]
    },
    {
      title: "Methodologies",
      techs: [
        { icon: <DiScrum />, name: "Scrum" },
        { icon: <SiJira />, name: "Jira" }
      ]
    }
  ];

  // Crear refs para cada categoría
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trails para cada categoría
  const trail1 = useTrail(techCategories[0].techs.length, {
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.9)',
    config: { mass: 1, tension: 180, friction: 26 }
  });

  const trail2 = useTrail(techCategories[1].techs.length, {
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.9)',
    config: { mass: 1, tension: 180, friction: 26 }
  });

  const trail3 = useTrail(techCategories[2].techs.length, {
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.9)',
    config: { mass: 1, tension: 180, friction: 26 }
  });

  const trail4 = useTrail(techCategories[3].techs.length, {
    opacity: inView4 ? 1 : 0,
    transform: inView4 ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.9)',
    config: { mass: 1, tension: 180, friction: 26 }
  });

  const trails = [trail1, trail2, trail3, trail4];
  const refs = [ref1, ref2, ref3, ref4];

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          {techCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className='tech-category-section' ref={refs[categoryIdx]}>
              <h4 className='tech-category-header'>{category.title}</h4>
              <ul className='d-flex justify-content-center flex-wrap text-decoration-none tech-list-grid'>
                {trails[categoryIdx].map((style, index) => (
                  <animated.li key={index} style={style} className='p-2 list-unstyled tech-item'>
                    <IconContext.Provider
                      value={{
                        color: "#000000",
                        size: "3em",
                        className: "global-class-name",
                      }}
                    >
                      <div className='tech-icon'>
                        {category.techs[index].icon}
                      </div>
                    </IconContext.Provider>
                    <h5 className='tech-name'>{category.techs[index].name}</h5>
                  </animated.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
