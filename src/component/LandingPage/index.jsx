"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
// import './style.css'

const LandingPage = () => {
  
  return (
    <>
     <div className="hero-img">
       <img  src="/hero.webp" />
     </div>

     <div className="container">
      <div className="cols">
        <div className="column col-left">
          <div className="copy">
            <div className="header">Editorial - 2023</div>
            <div className="sub-header">A new collection of outdoor photography</div>
            <div className="img-wrapper1">
               <img src="/header1.jpg"   />
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
     <div className="loader-text block">
        <h1 className="loader-text">amw-soon</h1>
       </div>
       <div className="revealer"></div>
       <div className="pre-loader block">
        <div className="loader-wrapper">
           <div className="loader">
            
           </div>
        </div>
       </div>
    
    </>
  );
};

export default LandingPage;
