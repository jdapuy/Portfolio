import React from 'react'
import { IconContext } from "react-icons";
import { SiLinkedin,SiGithub,SiInstagram,SiWhatsapp} from "react-icons/si";
export const Footer = () => {
  return (
    <div className="bg-dark">
    <div className=" p-4 bg-dark text-white text-center d-flex justify-content-between">
      <div className="col-sm-2"></div>
      <IconContext.Provider
            value={{
              color: "#f9f9f9",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <div>
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/diego-apuy/"
                  >
            <SiLinkedin/>
            </a>
            </div> </IconContext.Provider>
            <IconContext.Provider
            value={{
              color: "#f9f9f9",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <div>
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/jdapuy"
                  >
            <SiGithub/>
            </a>
            </div> </IconContext.Provider>
            <IconContext.Provider
            value={{
              color: "#f9f9f9",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <div><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/diego.apuy/"
                  >
             <SiInstagram/>
            </a>
           
            </div> </IconContext.Provider>
            <IconContext.Provider
            value={{
              color: "#f9f9f9",
              size: "2em",
              className: "global-class-name ",
            }}
          >
            <div>
            <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/50687168035"
                  >
             <SiWhatsapp/>
            </a>
            </div> </IconContext.Provider>
            
            <div className="col-sm-2"></div>
            

</div>
<p style={{color: "#f9f9f9", margin:"0"}}>© 2022 Juan Diego Apuy V. All rights reserved.</p>
</div>
  )
}
