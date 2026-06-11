import React from 'react';
import './css/Hero.css';

import blindsHeroBg from '../../../assets/Blindbackground.webp';

const BlindsHero = () => {
  return (
    <section className="blinds-hero-section position-relative overflow-hidden w-100">
      
      <div className="blinds-hero-bg-layer position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={blindsHeroBg} 
          alt="Good Look Home Decor premium minimalist window blinds architectural designs case" 
          className="w-100 h-100 object-fit-cover"
        />
        <div className="blinds-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      <div className="container-fluid blinds-hero-fluid-holder h-100 position-relative z-index-3 d-flex justify-content-center">
        <div className="row h-100 align-items-center">
          
          <div className="col-12 blinds-hero-text-engine text-center text-lg-start">
            <h1 className="blinds-hero-massive-title m-0 inter-font fw-semibold select-none">
              <span className="blinds-title-row-white text-white d-block">Upgrade Your Space</span>
              <span className="blinds-title-row-cream d-block">with our Blinds</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BlindsHero;