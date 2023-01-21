import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import "./style.css";
import Pdf from "../assets/resume.pdf";

const Resume = () => {

  return (
    <>
      <Navbar/>
      <div style={{display:"flex", flexDirection:"column", gap:"1000px"}}>
        <div className="resume-square">
            <h1 style={{fontSize:"8vh", color:"#902D41"}}>EDUCATION</h1>
                <h2 style={{fontSize:"3.5vh"}}>MASSACHUSETTS INSTITUTE OF TECHNOLOGY</h2>
                <h3 style={{color:"#959090", fontSize:"2.8vh"}}>BACHELOR OF SCIENCE - ELECTRICAL ENGINEERING AND COMPUTER SCIENCE</h3>
                <h3 style={{color:"#959090", fontSize:"2.8vh"}}><i>SEPTEMBER 2020 - MAY 2024</i></h3>
                <br/>
                <h3 style={{color:"#959090"}}>Relevant coursework:</h3>
                <div className="list-tab" style={{color:"#959090", fontSize:"2.8vh"}}>
                    <li><b style={{color:"#b56776"}}>6.2050:</b> Digital Systems Laboratory</li>
                    <li><b style={{color:"#b56776"}}>6.1010:</b> Fundamentals of Programming</li>
                    <li><b style={{color:"#b56776"}}>6.3000:</b> Signal Processing</li>
                    <li><b style={{color:"#b56776"}}>6.2000:</b> Circuits and Electronics</li>
                    <li><b style={{color:"#b56776"}}>6.2090:</b> Solid-State Circuits</li>
                    <li><b style={{color:"#b56776"}}>6.1910:</b> Computation Structures</li>
                    <li><b style={{color:"#b56776"}}>6.3900:</b> Introduction to Machine Learning</li>
                    <li><b style={{color:"#b56776"}}>6.1210:</b> Introduction to Algorithms</li>
                    <li><b style={{color:"#b56776"}}>6.1200:</b> Mathematics for Computer Science</li>
                    <li><b style={{color:"#b56776"}}>6.9620:</b> Web Lab: A Programming Class and Competition</li>
                </div>
                <br/>
            <h1 style={{fontSize:"8vh", color:"#902D41"}}>EXPERIENCE</h1>
                <h2 style={{fontSize:"3.5vh"}}>UNDERGRADUATE RESEARCH ASSISTANT</h2>
                <h3 style={{color:"#959090", fontSize:"2.8vh"}}>MIT Climate and Sustainability Consortium  |  Cambridge, MA</h3>
                <br/>
                <div className="list-tab" style={{color:"#959090", fontSize:"2.8vh"}}>
                    <li>Assisted in the discovery and characterization of novel materials with advantageous and nonpolluting properties through the use of machine learning algorithms</li>
                    <li>Constructed simulations in Unity for the molecular dynamics of polymers</li>
                    <li>Implemented a reinforcement learning architecture for polymer property prediction through the ML-Agents package in Unity</li>
                </div>
                <br/>
                <h2 style={{fontSize:"3.5vh"}}>UNDERGRADUATE RESEARCH ASSISTANT</h2>
                <h3 style={{color:"#959090", fontSize:"2.8vh"}}>Transiting Exoplanet Survey Satellite (TESS) @ MIT  |  Cambridge, MA</h3>
                <br/>
                <div className="list-tab" style={{color:"#959090", fontSize:"2.8vh"}}>
                    <li>Helped identify the most promising TESS exoplanet candidates for atmospheric characterization</li>
                    <li>Worked with Python in the visualization of data obtained from exoplanets</li>
                </div>
                <br/>
            <h1 style={{fontSize:"8vh", color:"#902D41"}}>TECHNICAL SKILLS</h1>
                <div className="list-tab" style={{color:"#959090", fontSize:"2.8vh"}}>
                    <li><b style={{color:"#b56776"}}>Programming Languages/HDL:</b> Java, Python, C++, C#, JavaScript, HTML/CSS, SystemVerilog, Assembly</li>
                    <li><b style={{color:"#b56776"}}>Frameworks:</b> React, Node.js</li>
                    <li><b style={{color:"#b56776"}}>Tools:</b> Git, Arduino, Xilinx Vivado, Unity, LaTeX, LTSPice</li>
                    <li><b style={{color:"#b56776"}}>Libraries:</b> NumPy, Matplotlib, PyTorch</li>
                    <li><b style={{color:"#b56776"}}>Languages:</b> English, Spanish</li>
                </div>
            <h1 style={{fontSize:"8vh", color:"#902D41"}}>AWARDS</h1>
                <div className="list-tab" style={{color:"#959090", fontSize:"2.8vh"}}>
                    <li>Questbridge Finalist</li>
                    <li>Venezuelan National Math Olympiad | <i>Gold Medal</i></li>
                    <li>Iranian Geometry Olympiad Intermediate Level | <i>Honourable Mention</i></li>
                    <li>Olimpíada de Mayo, Second Level | <i>Gold Medal</i></li>
                </div>
            <br/>
            <br/>
            <a href={Pdf} target="_blank" style={{fontSize:"8vh", color:"#6f6933", fontFamily:"Ubuntu", textDecoration:"none"}}>PDF VERSION</a>
        </div>
        <div style={{position:"relative", height:"100px", width:"100vw", marginTop:"100px"}}></div>
      </div>
    </>
  );
};

export default Resume;