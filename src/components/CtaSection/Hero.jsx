import React from 'react';
import './css/Hero.css';

import curtainsHeroBg from '../../assets/ctahero.png';

const CurtainsHero = () => {
  return (
    <section className="curtains-hero-section position-relative overflow-hidden w-100">
      
      <div className="curtains-hero-bg-layer position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={curtainsHeroBg} 
          alt="Good Look Home Decor premium minimalist layout architectural modern custom curtains collection layout showcase" 
          className="w-100 h-100 object-fit-cover"
        />
        <div className="curtains-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      <div className="container-fluid curtains-hero-fluid-holder h-100 position-relative z-index-3 d-flex justify-content-center">
        <div className="row h-100 align-items-center">
          
          <div className="col-12 curtains-hero-text-engine text-center text-lg-start">
            <h1 className="curtains-hero-massive-title m-0 inter-font fw-semibold select-none">
              <span className="curtains-title-row-white text-white d-block">Elevate Interiors</span>
              <span className="curtains-title-row-cream d-block">With Custom Curtains</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CurtainsHero;