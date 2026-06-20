import React from 'react';
import './css/MosDoorsHero.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import storyhero from "../../../../assets/casementback.png"

const MosDoorsHero = () => {
  return (
    <section 
      className="mosdoors-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url(${storyhero})` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="mosdoors-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}
      <div className="mosdoors-story-vertical-grid-lines d-none d-md-flex w-100 h-100 position-absolute top-0 start-0">
        <div className="mosdoors-story-line-col"></div>
        <div className="mosdoors-story-line-col"></div>
        <div className="mosdoors-story-line-col"></div>
      </div>

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid mosdoors-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 mosdoors-hero-text-alignment-row">
          <div className="col-12 mosdoors-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="mosdoors-story-main-title fw-bold text-white m-0 select-none mosdoors-inter-font">
              <span className="mosdoors-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="mosdoors-story-light-beige mosdoors-story-title-line-2 d-block">
                Comfort You Feel
              </span>
            </h1>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MosDoorsHero;