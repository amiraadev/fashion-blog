"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
 import './style.css'

const LandingPage = () => {
  useEffect(() => {
    gsap.from(".loader-wrapper", {
      scale: 0.8,
      ease: "power1.inOut"
    });

    gsap.from(".loader", {
      top: "100%",
      ease: "power3.inOut"
    });

    gsap.to(".pre-loader", {
      scale: 1.5,
      opacity: 0,
      display: "none",
      ease: "power3.inOut",
      delay: 1
    });

    gsap.from(".revealer", {
      width: "0",
      ease: "power3.inOut",
      delay: 1.5
    });

    gsap.to(".revealer", {
      left: "100%",
      ease: "power3.inOut",
      delay: 2,
      duration: 0.8
    });

    gsap.to(".loader-text-wrapper", {
      opacity: 0,
      display: "none",
      ease: "power3.inOut",
      delay: 2,
      duration: 0.2
    });

    gsap.from(".col-left", {
      left: "-100%",
      ease: "power3.inOut",
      delay: 2.25
    });

    gsap.from(".col-left .copy > div", {
      x: -40,
      opacity: 0,
      ease: "power3.inOut",
      delay: 2.5,
      stagger: {
        amount: 0.3
      }
    });

    gsap.from(".col-right .header", {
      x: -20,
      opacity: 0,
      ease: "power3.inOut",
      delay: 3.75
    });

  }, []);
  
  return (
    <>
     <div className="hero-img">
       <img  src="/header3.jpg" />
     </div>

     <div className="container">
      <div className="cols">
        <div className="column col-left">
          <div className="copy">
            <div className="header">Editorial - 2023</div>
            <div className="sub-header">A new collection of outdoor photography</div>
            <div className="image-wrapper">
               <img src="/hero.webp"   />
            </div>
            <div className="info">
                  Fashion is an ever-evolving expression of style, 
                  culture, and individuality. It encompasses a broad spectrum of clothing,
                  accessories, and trends that reflect the prevailing tastes and attitudes of a society at any given time.
                  From classic elegance to avant-garde experimentation, 
                  fashion serves as a creative outlet for individuals to communicate their personality,
                  values, and aspirations. It intertwines history and innovation
            </div>
            <div className="footer">
              <div className="footer-item">check Social media</div>
              <div className="footer-item">ffff</div>
              <div className="footer-item">get started</div>
            </div>
          </div>
        </div>
        <div className="col col-right">
           <div className="headr">
              Emotion 
              <br></br>
              from the <br></br> 
              photo day <br></br>
              no.8
            </div>
        </div>
      </div>
       <nav>
        <div className="nav-items"> 
          <div className="nav-item"><a href="#">Starting presentation</a></div>
          <div className="nav-item"><a href="#">Collections</a></div>
        </div>
        <div className="nav-items">
           <div className="nav-item"><a href="#" id="logo">Amira &copy;</a></div>
        </div>
        <div className="nav-items">
          <div className="nav-item"><a href="#">Branding universal</a></div>
          <div className="nav-item"><a href="#">contact models</a></div>
        </div>
       </nav>
     </div>
      <div className="loader-text-wrapper block">
        <h1 className="loader-text">amw-soon</h1>
      </div>
       <div className="revealer"></div>
       {/* <div className="pre-loader block">
        <div className="loader-wrapper">
           <div className="loader">
            
           </div>
        </div>
       </div> */}
    
    </>
  );
};

export default LandingPage;
