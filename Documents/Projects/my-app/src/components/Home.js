import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import "./style.css";
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";

const LoadingComponent = () => <div style={{width:"100vw", height:"100vh", justifyContent:"center", alignItems:"center", display:"flex"}}>
  <div class="lds-dual-ring"></div>
</div>;

const Home = () => {
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
        <Navbar/>
        <div className="home-square">
          <div className="text-square">
            Hi! I'm Louis, a 3rd year Electrical Engineering and Computer Science student at MIT
            <div className="icon-square">
              <a href="https://github.com/LouisTheLuis" target="_blank" rel="noreferrer" style={{color:"#902D41"}}><AiFillGithub/></a>
              <a href="luism@mit.edu" target="_blank" rel="noreferrer" style={{color:"#902D41"}}><AiFillMail/></a>
              <a href="https://www.linkedin.com/in/luis-martinez-a55285250/" target="_blank" rel="noreferrer" style={{color:"#902D41"}}><AiFillLinkedin/></a>
            </div>
          </div>
          <div className="text-square">
            <div className="image-square"><img src={require('../assets/yo.jpg').default} className="resize"/></div>
          </div>
        </div>
        <div className="home-square">
          <div className="text-square">
            <div className="image-square"><img src={require('../assets/osci.jpg').default} className="resize"/></div>
          </div>
          <div className="text-square">
            I love hardware, software, and most importantly, making stuff! Check my project page!
          </div>
        </div>
        <div className="home-square">
          <div className="text-square">I am from Puerto Ordaz, Venezuela. During my free time, I love reading, appreciating film, and learning about history!</div>
          <div className="text-square">
            <div className="image-square"><img src={require('../assets/books.jpg').default} className="resize"/></div>
          </div>
        </div>
      </>
    );
  } else {
      return (
      <>
        {/* <Navbar/> */}
        <div style={{position:"relative", topMargin:"70px"}}>Phone not supported yet! :&#40;</div>
      </>
      );
  }
};

export default Home;