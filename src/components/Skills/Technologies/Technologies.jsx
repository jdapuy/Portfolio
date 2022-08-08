import React from 'react'
import { IconContext } from "react-icons";
import { SiJavascript,SiHtml5,SiCss3,SiReact,SiRedux,SiExpress,SiNodedotjs,SiSequelize,SiPostgresql,SiGithub } from "react-icons/si";
import {DiScrum} from "react-icons/di";



export const Technologies = () => {

  return (
    <div className='row'>
      <div className='col-sm-3 '></div>
      <div className='d-flex justify-content-center col-sm-6 '>
      <ul className='d-flex justify-content-sm-around flex-wrap text-decoration-none' >
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiJavascript />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}} >JavaScript</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiHtml5 />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>HTML</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiCss3 />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>CSS</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiReact />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>React</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiRedux />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Redux</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiExpress />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Express</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiNodedotjs />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Nodejs</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiSequelize />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Sequelize</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiPostgresql />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Postgresql</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <SiGithub />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Github</h3>
        </li>
        <li className='p-2  list-unstyled'>
          <i> <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "3em",
              className: "global-class-name",
            }}
          >
            <div>
              <DiScrum />
            </div> 
          </IconContext.Provider></i>
       
          <h3 style={{color: "#2852a8", margin:"0.5em"}}>Scrum</h3>
        </li>
      </ul>
      </div>
      <div className='col-sm-3 '></div>
    </div>
  )
}
