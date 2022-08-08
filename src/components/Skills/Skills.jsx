import React from "react";
import { SoftSkills } from "./SoftSkills/SoftSkills";
import { Technologies } from "./Technologies/Technologies";

export const Skills = () => {
  return (
    <section style={{backgroundColor: "#C4DDFF"}}>
      
      <h1 className="text-center  display-3 ">SoftSkills</h1>
      <SoftSkills />
      <h1 className="text-center  display-3">Technologies</h1>
      <br />
      <Technologies />
      <br />
    

    </section>
  );
};
