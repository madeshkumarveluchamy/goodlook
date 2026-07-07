import React from 'react';
import './css/FrenchDoorsHero.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import storyhero from "../../../assets/uPVC_Frinch_Door_Banner (1).webp"

const Hero = () => {
  return (
    <section 
      className="frenchdoors-story-hero-section position-relative overflow-hidden w-100"
      /* 🎯 பிக்ஸ்: ஸ்பேஸ் மற்றும் பிராக்கெட் உள்ள ஃபைல் பெயர்களை CSS சரியாக எடுக்க இங்கேயும் "${storyhero}" என Quotes சேர்க்கப்பட்டுள்ளது */
      style={{ backgroundImage: `url("${storyhero}")` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="frenchdoors-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid frenchdoors-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 frenchdoors-hero-text-alignment-row">
          <div className="col-12 frenchdoors-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="frenchdoors-story-main-title fw-bold text-white m-0 select-none frenchdoors-inter-font">
              <span className="frenchdoors-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="frenchdoors-story-light-beige frenchdoors-story-title-line-2 d-block">
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