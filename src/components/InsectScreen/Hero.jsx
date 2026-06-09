 import React from 'react';
import './css/Hero.css';


// --- IMPORT YOUR DESIGN HIGH-RES BANNER IMAGE ---
import upvcHeroBg from '../../assets/upvcframe1.png';

const Hero = () => {
  return (
    <section className="insect-upvc-hero-section position-relative overflow-hidden w-100">
      
      {/* THE BACKDROP CANVAS BACKGROUND ENGINE */}
      <div className="insect-upvc-hero-bg-layer position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={upvcHeroBg} 
          alt="Good Look Home Decor premium minimalist layout architectural structural uPVC sliding doors collection case" 
          className="w-100 h-100 object-fit-cover"
        />
        {/* Soft custom premium dark ambient wash layer ensures typography remains highly readable */}
        <div className="insect-upvc-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      {/* CONTAINER BOUNDARIES CONTENT HUB */}
      <div className="container-fluid insect-upvc-hero-fluid-holder h-100 position-relative z-index-3 ">
        <div className="row h-100 align-items-center">
          
          {/* Main Title Content Wrapper Block matching image_0d0c24.png perfectly */}
          <div className="col-12 insect-upvc-hero-text-engine text-center text-lg-start">
            <h1 className="insect-upvc-hero-massive-title m-0 inter-font fw-semibold select-none">
              <span className="insect-title-row-white text-white d-block">Breathe Fresh Air</span>
              <span className="insect-title-row-cream d-block">Keep Pests Out</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;