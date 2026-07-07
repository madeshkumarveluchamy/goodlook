import React from 'react';
import './css/CasementDoorsHero.css';
// ஃபைல் பெயரில் ஸ்பேஸ் இருப்பதால், அதை React சரியாக எடுக்க `require` அல்லது direct template string-ல் கொடுக்கலாம்.
import storyhero from "../../../assets/uPVC_Casement_ Door_Banner (1).webp";

const Hero = () => {
  return (
    <section 
      className="casementdoors-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url("${storyhero}")` }} /* இங்கே double quotes சேர்க்கப்பட்டுள்ளது */
    >
      {/* Ambient dark gradient overlay */}
      <div className="casementdoors-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>


      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid casementdoors-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 casementdoors-hero-text-alignment-row">
          <div className="col-12 casementdoors-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="casementdoors-story-main-title fw-bold text-white m-0 select-none casementdoors-inter-font">
              <span className="casementdoors-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="casementdoors-story-light-beige casementdoors-story-title-line-2 d-block">
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