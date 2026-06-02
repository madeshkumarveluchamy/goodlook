import React from 'react';
import './css/Hero.css';
import background from "../../assets/herobackgroundshade2.png";
import heroframe from "../../assets/heroFrame.png";
import heroback from "../../assets/herobackrectangle.png";

const Hero = () => {
  return (
    <div 
      className="hero-section d-flex flex-column justify-content-end" 
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Container with the elegant black shade gradient overlay */}
      <div className="hero-overlay-container container-fluid px-3 px-sm-4 px-md-5" style={{ backgroundImage: `url(${heroback})` }}>
        
        {/* Relative positioning wrapper containing both elements */}
        <div className="hero-content-wrapper w-100 position-relative" >
          
          {/* Massive Full-Width Statement Typography */}
          <h1 className="hero-main-title fw-bold m-0 text-white select-none inter-font">
            Your House <span className="hero-italic-is fw-normal inter-font">is</span>
            <br />
            <span className="hero-light-beige inter-font ms-lg-5 ps-lg-5">the Place of Mood</span>
          </h1>

          {/* Floating 3D Card overlay: Positioned exactly near the first line */}
          <div className="hero-floating-popup-card">
            <div className="hero-3d-card p-0">
              <div className="card-img-container">
                <img 
                  src={heroframe}
                  alt="3D Interior design layout sample" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-text-content px-3 pb-3 pt-2">
                <h5 className="card-heading fw-semibold text-white mb-1">3D visualization</h5>
                <p className="card-description m-0 fw-light">
                  So that the client can see with his own eyes what he will ultimately receive.
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