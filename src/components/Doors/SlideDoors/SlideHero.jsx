 import React from 'react';
import './css/SlideHero.css';

// --- IMPORT YOUR DESIGN HIGH-RES BANNER IMAGE ---
import upvcHeroBg from '../../../assets/slidingbackground.webp';

const SlideHero = () => {
  return (
    <section className="slide-upvc-hero-section position-relative overflow-hidden w-100">
      
      {/* THE BACKDROP CANVAS BACKGROUND ENGINE */}
      <div className="slide-upvc-hero-bg-layer position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={upvcHeroBg} 
          alt="Good Look Home Decor premium minimalist layout architectural structural uPVC sliding doors collection case" 
          className="w-100 h-100 object-fit-cover"
        />
        {/* Soft custom premium dark ambient wash layer ensures typography remains highly readable */}
        <div className="slide-upvc-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>

      {/* CONTAINER BOUNDARIES CONTENT HUB */}
      <div className="container-fluid slide-upvc-hero-fluid-holder h-100 position-relative z-index-3 d-flex justify-content-center">
        <div className="row h-100 align-items-center">
          
          {/* Main Title Content Wrapper Block matching image_0d0c24.webp perfectly */}
          <div className="col-12 slide-upvc-hero-text-engine text-center text-lg-start">
            <h1 className="slide-upvc-hero-massive-title m-0 inter-font fw-semibold select-none">
              <span className="slide-title-row-white text-white d-block">Brighten Every Room</span>
              <span className="slide-title-row-cream d-block">uPVC Sliding Doors</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default SlideHero;