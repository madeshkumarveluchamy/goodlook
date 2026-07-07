import React from 'react';
import './css/ArchDoorsHero.css'; 
import storyhero from "../../../assets/uPVC_Arc_ Door_Banner (3).webp"

const Hero = () => {
  return (
    <section 
      className="archdoors-story-hero-section position-relative overflow-hidden w-100"
      /* 🎯 பிக்ஸ்: url-க்குள் "${storyhero}" என Quotes சேர்க்கப்பட்டுள்ளது. இது ஸ்பேஸ் உள்ள ஃபைல் பெயர்களை லோட் செய்ய உதவும் */
      style={{ backgroundImage: `url("${storyhero}")` }} 
    >
      {/* Ambient dark gradient overlay */}
      <div className="archdoors-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>


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