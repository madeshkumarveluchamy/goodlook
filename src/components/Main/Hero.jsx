import React from 'react';
import './css/Hero.css';
import background from "../../assets/herobackgroundshade2.png";
import heroframe from "../../assets/heroFrame.png";
import heroback from "../../assets/herobackrectangle.png";

const Hero = () => {
  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Elegantly contains the bottom black shade gradient overlay wrapper */}
      <div className="heroblack" style={{ backgroundImage: `url(${heroback})` }}>
        
        {/* Full width container serving as reference for perfect edge layout */}
        <div className="hero-content-wrapper">
          
          {/* Massive Full-Width Statement Typography (Edge-To-Edge Continuous Flow) */}
          <h1 className="hero-main-title select-none inter-font">
            Your House <span className="hero-italic-is inter-font">is </span><br />
            <span className="hero-light-beige inter-font second-line">the Place of Mood</span>
          </h1>
          
          {/* 3D Visualizer overlay: Floating clean overlay snap locked on right wall */}
          <div className="hero-floating-popup-card">
            <div className="hero-3d-card p-0">
              <div className="card-img-container">
                <img 
                  src={heroframe}
                  alt="3D Interior design layout sample" 
                  className="object-fit-cover"
                />
              </div>
              <div className="card-text-content">
                <h5 className="card-heading fw-semibold text-white mb-1 inter-font">3D visualization</h5>
                <p className="card-description m-0 fw-light inter-font">
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