import React, { useState, useEffect } from 'react';
import './css/Hero.css';

import bg1 from "../../assets/herobackgroundshade2.webp";
import frame1 from "../../assets/CurtainBackground.webp";
import heroback from "../../assets/herobackrectangle.webp";

import bg2 from "../../assets/insectcollectionbackground.webp";
import frame2 from "../../assets/insectcollectionbackground.webp";

import bg3 from "../../assets/leftbackground.webp";
import frame3 from "../../assets/leftbackground.webp";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { 
      bg: bg1, 
      frame: frame1,
      titleLine1: "Your House",
      titleItalic: "is ",
      titleLine2: "the Place of Mood",
      popupHeading: "3D visualization",
      popupDesc: "So that the client can see with his own eyes what he will ultimately receive."
    },
    { 
      bg: bg2, 
      frame: frame2,
      titleLine1: "Elevate",
      titleItalic: "your ",
      titleLine2: "Curtain designs",
      popupHeading: "Bespoke Fabrics",
      popupDesc: "Bespoke luxury tailoring to match your architectural vision perfectly."
    },
    { 
      bg: bg3, 
      frame: frame3,
      titleLine1: "Explore",
      titleItalic: "uPVC ",
      titleLine2: "Modern Collection",
      popupHeading: "Perfect Fit Screens",
      popupDesc: "Specifically engineered insulation frames to provide lasting protection."
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4500);

    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${slides[currentIndex].bg})` }}
    >
      {/* 🌊 Water Flow Fluid Background Layer Engine */}
      <div className="hero-water-flow-overlay"></div>

      <div className="heroblack" style={{ backgroundImage: `url(${heroback})` }}>
        <div className="hero-content-wrapper">
          
          <h1 className="hero-main-title select-none inter-font slide-content-fade" key={`title-${currentIndex}`}>
            {slides[currentIndex].titleLine1} <span className="hero-italic-is inter-font">{slides[currentIndex].titleItalic}</span><br />
            <span className="hero-light-beige inter-font second-line">{slides[currentIndex].titleLine2}</span>
          </h1>
          
          <div className="hero-floating-popup-card" key={`popup-${currentIndex}`}>
            <div className="hero-3d-card p-0 slide-content-fade">
              <div className="card-img-container">
                <img 
                  src={slides[currentIndex].frame}
                  alt="Premium interior decor design setup" 
                  className="object-fit-cover"
                />
              </div>
              <div className="card-text-content">
                <h5 className="card-heading fw-semibold text-white mb-1 inter-font">
                  {slides[currentIndex].popupHeading}
                </h5>
                <p className="card-description m-0 fw-light inter-font">
                  {slides[currentIndex].popupDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;