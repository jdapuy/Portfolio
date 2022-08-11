import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { RiEqualizerFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { BsFillHexagonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const SoftSkills = () => {
  const styleBgIcon = {
    position: "absolute",
    zIndex: "2",
    transform: "rotate(0.085turn)",

  };
  const styleTitleIcon = {
    position: "relative",
    color: "#2852a8",
    marginTop: "6em",
    width: "6em",
  };
  const icon = { position: "absolute", margin: "3em", zIndex: "2" };

  return (
    <div className=" p-3">
      <div className="row justify-content-sm-center">

        <div className="col-sm-2 m-4 d-flex flex-wrap justify-content-center  ">
          <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "10em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={styleBgIcon}>
              <BsFillHexagonFill />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "white",
              size: "4em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={icon}>
              <HiUserGroup />
            </div>
          </IconContext.Provider>
          <h3 className="nameSoftskill" style={styleTitleIcon}>Teamwork</h3>
        </div>
        <div className="col-sm-2 m-4 d-flex flex-wrap justify-content-center ">
          <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "10em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={styleBgIcon}>
              <BsFillHexagonFill />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "white",
              size: "4em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={icon}>
              <RiEqualizerFill />
            </div>
          </IconContext.Provider>
          <h3 className="nameSoftskill" style={styleTitleIcon}>Adaptability</h3>
        </div>
        <div className="col-sm-2 m-4 d-flex flex-wrap justify-content-center ">
          <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "10em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={styleBgIcon}>
              <BsFillHexagonFill />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "white",
              size: "4em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={icon}>
              <FaTools />
            </div>
            <h3 className="nameSoftskill" style={styleTitleIcon}>Problem solving</h3>
          </IconContext.Provider>
        </div>
        <div className="col-sm-2 m-4 d-flex flex-wrap justify-content-center ">
          <IconContext.Provider
            value={{
              color: "#2852a8",
              size: "10em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={styleBgIcon}>
              <BsFillHexagonFill />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "white",
              size: "4em",
              className: "iconSoftskills",
              
            }}
          >
            <div style={icon}>
              <TbReportSearch />
            </div>
            <h3 className="nameSoftskill" style={styleTitleIcon}>Analytical</h3>
          </IconContext.Provider>
        </div>
   
      </div>
    </div>
  );
};
