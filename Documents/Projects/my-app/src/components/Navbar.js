import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "./style.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    <div>
        <nav className={`navbar  ${showNavbar && 'active'}`}>
            <div className="container">
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <GiHamburgerMenu />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li><NavLink to="/" className="buttons">About</NavLink></li>
                        <li><NavLink to="/resume" className="buttons">Resume</NavLink></li>
                        <li><NavLink to="/projects" className="buttons">Projects</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;