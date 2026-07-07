import React from 'react';
import './css/FrenchWindowsHero.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import storyhero from "../../../assets/uPVC_Frinch_Window_Banner (1).webp"

const Hero = () => {
  return (
    <section 
      className="frenchwindows-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url("${storyhero}")` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="frenchwindows-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}
      <div className="frenchwindows-story-vertical-grid-lines d-none d-md-flex w-100 h-100 position-absolute top-0 start-0">
        <div className="frenchwindows-story-line-col"></div>
        <div className="frenchwindows-story-line-col"></div>
        <div className="frenchwindows-story-line-col"></div>
      </div>

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid frenchwindows-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 frenchwindows-hero-text-alignment-row">
          <div className="col-12 frenchwindows-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="frenchwindows-story-main-title fw-bold text-white m-0 select-none frenchwindows-inter-font">
              <span className="frenchwindows-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="frenchwindows-story-light-beige frenchwindows-story-title-line-2 d-block">
                Comfort You Feel
              </span>
            </h1>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;