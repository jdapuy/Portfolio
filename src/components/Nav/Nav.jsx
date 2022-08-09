import React from 'react'
import cv from "../../CV/CV.pdf";

export const Nav = () => {
  return (
    <div ><nav className="navbar navbar-expand-sm bg-dark navbar-dark " style={{position:"fixed",width:"100%", top:"0", zIndex:"6"}}>
    <div className="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#mails">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#footer">Footer</a>
        </li>
        <li className="nav-item"><a className="nav-link active" style={{zIndex:"6"}} href={cv} download="CV Juan Diego Apuy FullStack">
              CV
        </a> </li>
      </ul>
    </div>
    </div>
  </nav></div>
  )
}
