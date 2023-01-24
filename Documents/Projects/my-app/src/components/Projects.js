import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar.js";
import MobileNavbar from "./MobileNavbar.js";
import "./style.css";
import spdifreport from "../assets/spidf_report.pdf";
import broadbandreport from "../assets/6209_report.pdf";
import spdif from "../assets/spdif.jpg";
import stargazer from "../assets/stargazer.png";
import broadband from "../assets/broadband.jpg";
import {
    AiFillGithub,
    AiOutlineFilePdf,
    AiOutlineLink
  } from "react-icons/ai";

const LoadingComponent = () => <div style={{width:"100vw", height:"100vh", justifyContent:"center", alignItems:"center", display:"flex"}}>
    <div className="lds-dual-ring"></div>
</div>;

const Canvas = props => {
  
    const canvasRef = useRef(null);
    
    useEffect(() => {
      var circle1 = Math.random();
      var circle2 = Math.random();
      var circle3 = Math.random();
      var circle4 = Math.random();
      var circle5 = Math.random();
  
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
  
      for (let i = 0; i < 10; i = i + 1) {
        context.beginPath();
        context.arc(Math.random()*context.canvas.width, Math.random()*context.canvas.height, Math.random()*70, 0, 2 * Math.PI);
        context.fillStyle = "rgb(255, 255, 224)";
        context.fill();
      }
    }, [])
    
    return <canvas ref={canvasRef} {...props}/>
  }

const Projects = () => {
    const [mobile, setMobile] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const onLoadEffect = () => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    };
    useEffect(onLoadEffect, []);

    useEffect(() => {
        const temp = window.innerWidth <= 767;
        setMobile(temp);
        console.log(window.innerWidth);
    }, []);

    if (isLoading) {
        return <LoadingComponent />;
      }

    if (!mobile) {
        return (
        <>
            <Canvas className="my-canvas"/>
            <Navbar/>
            <div className="projects-font">
                <h1 style={{fontSize:"6vh", color:"#902D41", letterSpacing: "0.1em"}}>RECENT WORKS</h1>
                <h2 style={{color:"#b56776"}}>Here are some of the recent projects I have worked on!</h2>
                <br/>
                <div className="projects-square">
                    <div className="project-section">
                        <h1 style={{fontSize:"4vh", opacity:"0.5"}}>Audio Transmission via S/PDIF</h1>
                        <img src={spdif} style={{width:"25vw"}}/>
                        <div style={{width:"25vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            An interesting audio player! The project consisted in two Nexys 4 DDR FPGAs connected
                            by a TOSLINK fiber optic cable. The transmitter FPGA would contain an SD card —which would itself
                            have an implementation of the FAT12 file system in it— with .wav files, that would be selected
                            through a VGA screen. Then these audio files would be retransmitted through a TOSLINK fiber optic cable
                            using the S/PDIF audio transmission protocol to be received in a receiver FPGA, which would decode and reconstruct
                            the signal to be sent to an audio speaker. My main responsibility lied on the implementation of the audio transmission protocol
                            and the VGA screen.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"2vh"}}>
                            <a href="https://github.com/alkeirn/optical_project" target="_blank" style={{textDecoration:"none"}}><button className="project-buttons"><AiFillGithub style={{fontSize:"3vh"}}/> Github</button></a>
                            <a href={spdifreport} target="_blank" style={{textDecoration:"none"}}><button className="project-buttons"><AiOutlineFilePdf style={{fontSize:"3vh"}}/> Final Report</button></a>
                        </div>
                    </div>
                    <div className="project-section">
                        <h1 style={{fontSize:"4vh", opacity:"0.5"}}>Stargazer</h1>
                        <img src={stargazer} style={{width:"27vw"}}/>
                        <div style={{width:"25vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            An interactive game designed for the WebLab MIT competition, in collaboration with a classmate.
                            Through an implementation of the d3-celestial API developed from the D3.js visualization library, we designed
                            a game that allowed the user to learn and practice searching constellations in the sky. In order to make this possible,
                            we made use of the React.js framework. 
                            <br/>
                            The functionality of the website allows for a small encyclopedia that encompasses the original 
                            48 Greek constellations, a casual game mode, a competitive mode, and a leaderboard.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"2vh"}}>
                            <a href="https://github.com/LouisTheLuis/the-stargazer" target="_blank" style={{textDecoration:"none"}}><button className="project-buttons"><AiFillGithub style={{fontSize:"3vh"}}/> Github</button></a>
                        </div>
                    </div>
                    <div className="project-section">
                        <h1 style={{fontSize:"4vh", opacity:"0.5"}}>Broadband Amplifier</h1>
                        <img src={broadband} style={{width:"20vw"}}/>
                        <div style={{width:"25vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            Final project for my Solid-State Circuits class. Basically a broadband amplifier that achieves a series of benchmarks: a midband
                            gain greater than 200, an upper 3dB bandwith frequency <i>f<sub>h</sub></i> greater than 5MHz, 
                            a lower 3dB bandwith frequency <i>f<sub>h</sub></i> smaller than 100kHz, and a power dissipation of less than 100mW!
                            <br/>
                            The design was made on LTSpice and tested on a breadboard, using a total of 3 2N3904 npn transistors for the design. The specs were
                            verified with an oscilloscope.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"3vh"}}>
                            <a href={broadbandreport} target="_blank" style={{textDecoration:"none"}}><button className="project-buttons"><AiOutlineFilePdf style={{fontSize:"3vh"}}/>Final Report</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    } else {
        return (
        <>
            <MobileNavbar/>
            <div className="projects-font">
                <div className="projectsmob-square">
                    <div className="projectmob-section">
                        <h1 style={{fontSize:"4vh", color:"#902D41"}}>Audio Transmission via S/PDIF</h1>
                        <img src={spdif} style={{width:"70vw"}}/>
                        <div style={{width:"80vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            An interesting audio player! The project consisted in two Nexys 4 DDR FPGAs connected
                            by a TOSLINK fiber optic cable. The transmitter FPGA would contain an SD card —which would itself
                            have an implementation of the FAT12 file system in it— with .wav files, that would be selected
                            through a VGA screen. Then these audio files would be retransmitted through a TOSLINK fiber optic cable
                            using the S/PDIF audio transmission protocol to be received in a receiver FPGA, which would decode and reconstruct
                            the signal to be sent to an audio speaker. My main responsibility lied on the implementation of the audio transmission protocol
                            and the VGA screen.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"3vh"}}>
                            <a href="https://github.com/alkeirn/optical_project" target="_blank" style={{textDecoration:"none"}}><button className="projectmob-buttons"><AiFillGithub style={{fontSize:"3vh"}}/> Github</button></a>
                            <a href={spdifreport} target="_blank" style={{textDecoration:"none"}}><button className="projectmob-buttons"><AiOutlineFilePdf style={{fontSize:"3vh"}}/> Final Report</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-font">
                <div className="projectsmob-square">
                    <div className="projectmob-section">
                        <h1 style={{fontSize:"4vh", color:"#902D41"}}>Stargazer</h1>
                        <img src={stargazer} style={{width:"80vw"}}/>
                        <div style={{width:"80vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            An interactive game designed for the WebLab MIT competition, in collaboration with a classmate.
                            Through an implementation of the d3-celestial API developed from the D3.js visualization library, we designed
                            a game that allowed the user to learn and practice searching constellations in the sky. In order to make this possible,
                            we made use of the React.js framework. 
                            <br/>
                            The functionality of the website allows for a small encyclopedia that encompasses the original 
                            48 Greek constellations, a casual game mode, a competitive mode, and a leaderboard.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"3vh"}}>
                            <a href="https://github.com/LouisTheLuis/the-stargazer" target="_blank" style={{textDecoration:"none"}}><button className="projectmob-buttons"><AiFillGithub style={{fontSize:"3vh"}}/> Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-font">
                <div className="projectsmob-square">
                    <div className="projectmob-section">
                        <h1 style={{fontSize:"4vh", color:"#902D41"}}>Broadband Amplifier</h1>
                        <img src={broadband} style={{width:"70vw"}}/>
                        <div style={{width:"80vw", fontSize:"2vh", marginTop:"2vh", opacity:"0.7"}}>
                            Final project for my Solid-State Circuits class. Basically a broadband amplifier that achieves a series of benchmarks: a midband
                            gain greater than 200, an upper 3dB bandwith frequency <i>f<sub>h</sub></i> greater than 5MHz, 
                            a lower 3dB bandwith frequency <i>f<sub>h</sub></i> smaller than 100kHz, and a power dissipation of less than 100mW!
                            <br/>
                            The design was made on LTSpice and tested on a breadboard, using a total of 3 2N3904 npn transistors for the design. The specs were
                            verified with an oscilloscope.
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:"8vw", marginTop:"3vh"}}>
                            <a href={broadbandreport} target="_blank" style={{textDecoration:"none"}}><button className="projectmob-buttons"><AiOutlineFilePdf style={{fontSize:"3vh"}}/>Final Report</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
};

export default Projects;