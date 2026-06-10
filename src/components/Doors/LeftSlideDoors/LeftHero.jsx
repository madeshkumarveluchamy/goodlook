 import React from 'react';
import './css/LeftHero.css';


// --- IMPORT YOUR DESIGN HIGH-RES BANNER IMAGE ---
import upvcHeroBg from '../../../assets/leftbackground.png';

const Hero = () => {
  return (
    <section className="left-upvc-hero-section position-relative overflow-hidden w-100">
      
      {/* THE BACKDROP CANVAS BACKGROUND ENGINE */}
      <div className="left-upvc-hero-bg-layer position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={upvcHeroBg} 
          alt="Good Look Home Decor premium minimalist layout architectural structural uPVC sliding doors collection case" 
          className="w-100 h-100 object-fit-cover"
        />
        {/* Soft custom premium dark ambient wash layer ensures typography remains highly readable */}
        <div className="left-upvc-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      {/* CONTAINER BOUNDARIES CONTENT HUB */}
      <div className="container-fluid left-upvc-hero-fluid-holder h-100 position-relative z-index-3 ">
        <div className="row h-100 align-items-center">
          
          {/* Main Title Content Wrapper Block matching image_0d0c24.png perfectly */}
          <div className="col-12 left-upvc-hero-text-engine text-center">
            <h1 className="left-upvc-hero-massive-title m-0 inter-font fw-semibold select-none">
              <span className="left-title-row-white text-white d-block">Elevate Design & Flow</span>
              <span className="left-title-row-cream d-block">Lift - Slide Windows & Doors.</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;