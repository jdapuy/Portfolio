import React from 'react'

export const Nav = () => {
  return (
    <div ><nav className="navbar navbar-expand-sm bg-dark navbar-dark " style={{position:"fixed",width:"100%", top:"0", zIndex:"6"}}>
    <div className="container-fluid">
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
      </ul>
    </div>
  </nav></div>
  )
}
