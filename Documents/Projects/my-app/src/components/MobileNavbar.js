import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";

const MobileNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
        <div className={`mobile-navbar  ${showNavbar && 'active'}`}>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <GiHamburgerMenu/>
            </div>
            <div className={`buttons-wrapper  ${showNavbar && 'active'}`}>
                <NavLink to="/" style={{textDecoration:"none", width:"fit-content"}} className="buttons">About</NavLink>
                <NavLink to="/resume" className="buttons" style={{textDecoration:"none", width:"fit-content"}}>Resume</NavLink>
                <NavLink to="/projects" className="buttons" style={{textDecoration:"none", width:"fit-content"}}>Projects</NavLink>
            </div>
        </div>
  );
};

export default MobileNavbar;