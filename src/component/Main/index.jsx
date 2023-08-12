"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './style.css'

const HomePage = () => {
  const galleryData = [
    {
      col:'col-1',
      src :"/img/col-1_1.jpg",
    },
    {
      col:'col-1',
      src :"/img/col-1_2.jpg",
    },
    {
      col:'col-1',
      src :"/img/col-1_3.jpg",
    },
    {
      col:'col-1',
      src :"/img/col-1_4.jpg",
    },
    {
      col:'col-2',
      src :"/img/col-2_1.jpg",
    },
    {
      col:'col-2',
      src :"/img/col-2_2.jpg",
    },
    {
      col:'col-2',
      src :"/img/col-2_3.jpg",
    },
    {
      col:'col-2',
      src :"/img/col-2_4.jpg",
    },
    {
      col:'col-3',
      src :"/img/col-3_1.jpg",
    },
    {
      col:'col-3',
      src :"/img/col-3_2.webp",
    },
    {
      col:'col-3',
      src :"/img/col-3_3.jpg",
    },
    {
      col:'col-3',
      src :"/img/col-3_4.jpg",
    },
  ]
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector(".main-wrapper");
    let section = container.querySelectorAll("section");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=3300",
      },
    })
    .to(container, {
      x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth - 95) +
        "px",
      ease: "none",
      duration: 1,
    })
    .to(".side-bar", {
      x: 70,
      opacity: 1,
      scrollTrigger: {
        trigger: ".side-bar",
        start: "center+=2500 center",
        scrub: 2.5,
      },
    })
    .to({}, { duration: 1 / (section.length + 1) });

    gsap.to(".col-1", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.to(".col-2", {
      y: 250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.to(".col-3", {
      y: -250,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".image-gallery",
        start: "top center",
        end: "+=3000",
        scrub: true,
      },
    });

    gsap.from(".row-2", {
      height: "0%",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".section-3",
        start: "40% center",
        toggleActions: "play pause reverse reverse",
      },
    });

    gsap.from(".row li", {
      y: 200,
      opacity: 0,
      ease: "none",
      delay: 1,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".row li",
        toggleActions: "play pause reverse reverse",
      },
    });

    gsap.to(".num", {
      x: 600,
      duration: 2,
      scrollTrigger: {
        trigger: ".num",
        start: "right left",
      },
    });

  }, []);

  return (
    <>
    <div className="main-wrapper">
      <section className="section-1">
        <div className="box1">
          <div className="name">Vogue</div>
        </div>
        <div className="box2">
          <div className="image-gallery">
            <div className="col col-1">
              {
                galleryData.filter((item) => item.col === "col-1")
                            .map((item, index) => (
                              <Image key={index} src={item.src} width={200} height={200} alt="" />
                            ))
              }
            </div>
            <div className="col col-2">
             {
                galleryData.filter((item) => item.col === "col-2")
                            .map((item, index) => (
                              <Image key={index} src={item.src} width={200} height={200} alt="" />
                            ))
              }
            </div>
            <div className="col col-3">
              {
                galleryData.filter((item) => item.col === "col-3")
                            .map((item, index) => (
                              <Image key={index} src={item.src} width={200} height={200} alt="" />
                            ))
              }
            </div>
          </div>
        </div>
      </section>


      <section className="section-2">
        <div className="side-bar">
          <i className="fa-solid fa-expand"></i>
          <div className="brand-name">Vogue</div>
          <div className="des">HIGH QUALITY FABRICS. <br />designed & mad <br /> in iceland.<br /></div>
        </div>
        <div class="wrapper">
                <div class="left">
                    <div class="line-1">
                        <p>VORLIF</p>
                        <div class="copy-right">
                            Vogue 2022 <br></br> DESIGNED TO ENDURE
                        </div>

                    </div>

                    <div class="image-wrapper">
                        <Image src="/img/img-1.jpg" width={800} height={400} objectFit={"cover"} alt=""/>
                    </div>

                    <div class="line-2">
                        <p class="num">/22</p>
                        <button class="loop">
                            <span>SPRING COLLECTION</span>
                        </button>
                    </div>
                </div>
                <div class="right">
                    <div class="animate-text">
                        <span>COLLECTION /19° W</span>
                    </div>
                    <div class="img-container">
                        <Image src="/img/im2.jpg" width={1200} height={400} objectFit={"cover"} alt=""/>
                    </div>
                </div>
            </div>
      </section>
    </div>
     <section class="section-3">
     <div class="rows">
         <ul class="row row-1">
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
         </ul>
         <ul class="row row-2">
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
         </ul>
         <ul class="row row-3">
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
             <li>Vogue</li>
         </ul>
     </div>
 </section>
 </>
  );
};

export default HomePage;
