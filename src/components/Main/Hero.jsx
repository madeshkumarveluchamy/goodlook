import React, { useState, useEffect } from 'react';
import './css/Hero.css';
import {FaChevronDown } from 'react-icons/fa';
import bg1 from "../../assets/herobanners.webp";
import frame1 from "../../assets/herobanners.webp";
import heroback from "../../assets/herobackrectangle.webp";

import bg2 from "../../assets/herobanners2.webp";
import frame2 from "../../assets/herobanners2.webp";

import bg3 from "../../assets/leftbackground.webp";
import frame3 from "../../assets/leftbackground.webp";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [
    { 
      bg: bg1, 
      frame: frame1,
      titleLine1: "Your House",
      titleItalic: "is ",
      titleLine2: "The Place of Mood",
      popupHeading: "3D visualization",
      popupDesc: "So that the client can see with his own eyes what he will ultimately receive."
    },
    { 
      bg: bg2, 
      frame: frame2,
      titleLine1: "Your House",
      titleItalic: "Is",
      titleLine2: " The Soul Of Space",
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

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsTransitioning(true); 
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 6000); 

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentIndex(0);        
      }, 2000); 

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, slides.length]);

  const actualContentIndex = currentIndex === slides.length ? 0 : currentIndex;

  return (
    <div className="hero-section">
      
      <div 
        className="hero-bg-track" 
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none' 
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div 
            key={`bg-${index}`} 
            className="hero-bg-item"
            style={{ backgroundImage: `url(${slide.bg})` }}
          ></div>
        ))}
      </div>

      <div className="hero-water-flow-overlay"></div>

      <div className="heroblack" style={{ backgroundImage: `url(${heroback})` }}>
        
        <div className="hero-content-wrapper" key={`content-${actualContentIndex}`}>
          
          <h1 className="hero-main-title select-none inter-font">
            
            {/* First Line */}
            <div className="text-mask-wrapper">
              <div className="slide-up-text line-fast">
                {slides[actualContentIndex].titleLine1} <span className="hero-italic-is inter-font">{slides[actualContentIndex].titleItalic}</span>
              </div>
            </div>

            {/* Second Line */}
            <div className="text-mask-wrapper">
              <div className="slide-up-text line-slow hero-light-beige inter-font second-line">
                {slides[actualContentIndex].titleLine2}
              </div>
            </div>

          </h1>
          
          <div className="hero-floating-popup-card">
            <div className="hero-3d-card p-0">
              <div className="card-img-container rounded-2">
                <img 
                  src={slides[actualContentIndex].frame}
                  alt="Premium interior decor design setup" 
                  className="object-fit-cover"
                />
              </div>
              <div className="card-text-content">
                <h5 className="card-heading fw-semibold text-white mb-1 inter-font">
                  {slides[actualContentIndex].popupHeading}
                </h5>
                <p className="card-description m-0 fw-light inter-font">
                  {slides[actualContentIndex].popupDesc}
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