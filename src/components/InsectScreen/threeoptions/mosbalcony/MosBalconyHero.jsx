import React from 'react';
import './css/MosBalconyHero.css';
import storyhero from "../../../../assets/casementback.png"

const MosBalconyHero = () => {
  return (
    <section 
      className="mosbalcony-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url(${storyhero})` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="mosbalcony-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}
      <div className="mosbalcony-story-vertical-grid-lines d-none d-md-flex w-100 h-100 position-absolute top-0 start-0">
        <div className="mosbalcony-story-line-col"></div>
        <div className="mosbalcony-story-line-col"></div>
        <div className="mosbalcony-story-line-col"></div>
      </div>

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid mosbalcony-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 mosbalcony-hero-text-alignment-row">
          <div className="col-12 mosbalcony-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="mosbalcony-story-main-title fw-bold text-white m-0 select-none mosbalcony-inter-font">
              <span className="mosbalcony-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="mosbalcony-story-light-beige mosbalcony-story-title-line-2 d-block">
                Comfort You Feel
              </span>
            </h1>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MosBalconyHero;