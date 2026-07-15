import React from 'react';
import './css/MosWindowHero.css';
import storyhero from "../../../../assets/pleaded6.webp";

const MosWindowHero = () => {
  return (
    <section 
      className="moswindow-story-hero-section position-relative overflow-hidden w-100"
      style={{ backgroundImage: `url("${storyhero}")` }}
    >
      {/* Ambient dark gradient overlay */}
      <div className="moswindow-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Vertical grid lines block */}
  

      {/* Core Canvas Typography Content Container */}
      <div className="container-fluid moswindow-story-hero-fluid h-100 position-relative z-3">
        
        {/* Dynamic responsive row engine */}
        <div className="row h-100 moswindow-hero-text-alignment-row">
          <div className="col-12 moswindow-hero-text-engine-col">
            
            {/* Split structural title template */}
            <h1 className="moswindow-story-main-title fw-bold text-white m-0 select-none moswindow-inter-font">
              <span className="moswindow-story-title-line-1 d-block">
                Quality You See
              </span>
              <span className="moswindow-story-light-beige moswindow-story-title-line-2 d-block">
                Comfort You Feel
              </span>
            </h1>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MosWindowHero;