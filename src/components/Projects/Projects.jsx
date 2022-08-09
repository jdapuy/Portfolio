import React from "react";
import styles from "./Projects.module.css";
import { MdOndemandVideo } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import vgProject from "../../Images/vgImage.png";
import tennisProject from "../../Images/tennisImage.png";
export const Projects = () => {
  return (
    <section className={styles.containerProj} style={{position:"relative"}}>
<div className="custom-shape-divider-top-1659919788">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
      <h1 className="text-center pt-5 display-3">Projects</h1>
      <div className="row d-flex justify-content-sm-around flex-wrap">
        {/* <div className="col-sm-1 "></div> */}

        <ul className="d-flex justify-content-sm-around flex-wrap text-decoration-none col-sm-10">
          <li className="p-2 d-flex list-unstyled">
            <div className={styles.card}>
              <div className={styles.cardImg}>
                {" "}
                <img
                  className={styles.cardImage}
                  alt="poryectImage"
                  src={vgProject}
                />{" "}
              </div>
              <ul className={styles.socialMedia}>
              <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6960420913968209920/"
                  >
                    <MdOndemandVideo style={{fill: "#252525"}} />
                  </a>
                </li>
                <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pi-video-games-tau.vercel.app/"
                  >
                    <GrDeploy  style={{fill: "#252525"}}/>
                  </a>
                </li>
                <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jdapuy/PI-VideoGames"
                  >
                    <SiGithub style={{fill: "#252525"}}/>
                  </a>
                </li>
              </ul>
              <div className={styles.cardInfo}>
                <p className={styles.titleP}>Project</p>
                <p className={styles.subtitleP}>Videogame APP</p>
              </div>
            </div>
          </li>
          <li className="p-2 d-flex list-unstyled">
            <div className={styles.card}>
              <div className={styles.cardImg}>
                {" "}
                <img
                  className={styles.cardImage}
                  alt="poryectImage"
                  src={tennisProject}
                />{" "}
              </div>
              <ul className={styles.socialMedia}>
                <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/watch?v=yNRyLb2w9m4"
                  >
                    <MdOndemandVideo style={{fill: "#252525"}}/>
                  </a>
                </li>
                <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://proyecto-final-rho-three.vercel.app/"
                  >
                    <GrDeploy style={{fill: "#252525"}}/>
                  </a>
                </li>
                <li className={styles.liP}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Nicrosi/Proyecto-Final"
                  >
                    <SiGithub style={{fill: "#252525"}}/>
                  </a>
                </li>
              </ul>
              <div className={styles.cardInfo}>
                <p className={styles.titleP}>Project</p>
                <p className={styles.subtitleP}>Tennis APP</p>
              </div>
            </div>
          </li>
          <li className="p-2 d-flex list-unstyled">
            <div className={styles.card}>
              <div className={styles.cardImg}> </div>
              <ul className={styles.socialMedia}>
              <li className={styles.liP}>
                  <MdOndemandVideo style={{fill: "#252525"}}/>
                </li>
                <li className={styles.liP}>
                  <GrDeploy style={{fill: "#252525"}}/>
                </li>
                <li className={styles.liP}>
                  <SiGithub style={{fill: "#252525"}}/>
                </li>
              </ul>
              <div className={styles.cardInfo}>
                <p className={styles.titleP}>Project</p>
                <p className={styles.subtitleP}>not able yet</p>
              </div>
            </div>
          </li>
        </ul>
        {/* <div className="col-sm-1 "></div> */}
      </div>
    </section>
  );
};
