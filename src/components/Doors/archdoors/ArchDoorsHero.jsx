import React from 'react';
import './css/ArchDoorsHero.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import storyhero from "../../../assets/casementback.png"

const Hero = () => {
  return (
    <section 
      className="archdoors-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url(${storyhero})` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="archdoors-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}
      <div className="archdoors-story-vertical-grid-lines d-none d-md-flex w-100 h-100 position-absolute top-0 start-0">
        <div className="archdoors-story-line-col"></div>
        <div className="archdoors-story-line-col"></div>
        <div className="archdoors-story-line-col"></div>
      </div>

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid archdoors-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 archdoors-hero-text-alignment-row">
          <div className="col-12 archdoors-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="archdoors-story-main-title fw-bold text-white m-0 select-none archdoors-inter-font">
              <span className="archdoors-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="archdoors-story-light-beige archdoors-story-title-line-2 d-block">
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