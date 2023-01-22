import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import "./style.css";

const Navbar = () => {
  return (
    <>
    <div>
        <nav className="navbar">
            <div className="container">
                <div className="nav-elements">
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