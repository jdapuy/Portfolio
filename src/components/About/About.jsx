import React from "react";
import profile from "../../Images/profile.png";
import "../../App.css";


export const About = () => {
  return (
    <section className="hero mt-2">
      <div className="row ">
        <div className="col"></div>
        <div className="col-8">
          <div className="row">
            <div className="col-lg-6  p-5 my-5">
              <h3 className="text-start display-4">Hello, I am</h3>
              <h1 className="text-start display-2 p-4 border border-dark ">
                Diego Apuy
              </h1>
              <h2 className="text-start  display-8">
                Working As Web Developer
              </h2>
              
            </div>
            <div className="col-md-6 ">
              <img
                src={profile}
                alt="profile"
                className={`rounded-circle profileImg`}
                style={{ height: "80%", zIndex: "6", padding: "20%" }}
              />
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      
    </section>
  );
};
