import React from 'react';
import './css/StoryPhilosophy.css';

// --- IMPORT YOUR RENDER IMAGE ASSET ---
import philosophyImg from '../../assets/storyframe3.png';

const StoryPhilosophy = () => {
  return (
    <section className="story-philosophy-section bg-white text-dark" id="purpose-philosophy">
      <div className="container-fluid philosophy-canvas-holder px-3 px-sm-4 px-md-5">
        
        {/* Mobile view-la row-reverse template logic automatic-ah photo-vai mela thallidum */}
        <div className="row align-items-center g-4 g-xl-5 flex-column-reverse flex-lg-row">
          
          {/* ================= LEFT SIDE: CORE VALUES DEFINITIONS ================= */}
          <div className="col-12 col-lg-6 philosophy-content-engine text-center text-lg-start pe-lg-4 pe-xl-5">
            
            <span className="philosophy-mini-tag text-uppercase tracking-widest fw-semibold d-block mb-2 manrope-font text-center text-lg-start color-yellow ssub">
              Purpose & Philosophy
            </span>
            
            <h2 className="philosophy-main-title font-serif mb-5 text-center text-lg-start stit">
              Shaping Spaces with <br /> Purpose: Our Commitment to Elevated Living
            </h2>

            {/* BLOCK 01: OUR VISION */}
            <div className="philosophy-block-segment d-flex flex-column flex-sm-row align-items-center align-items-lg-start gap-3 gap-md-4 mb-4 pb-2">
              <h4 className="segment-indicator-title m-0 inter-font text-uppercase manrope-font fw-semibold ssub ">Our Vision</h4>
              <p className="segment-desc-para m-0 hanken-grotesk-font fw-light  text-center text-lg-start hanken-grutsek-font sdes">
                We design residential and commercial interiors that balance aesthetics, function, and longevity creating spaces that feel intentional, refined, and deeply connected to how people live and work.
              </p>
            </div>

            {/* BLOCK 02: OUR MISSION */}
            <div className="philosophy-block-segment d-flex flex-column flex-sm-row align-items-center align-items-lg-start gap-3 gap-md-4">
              <h4 className="segment-indicator-title inter-font text-uppercase manrope-font fw-semibold ssub">Our Mission</h4>
              <p className="segment-desc-para hanken-grotesk-font fw-light  text-center text-lg-start hanken-grutsek-font sdes">
                We design residential and commercial interiors that balance aesthetics, function, and longevity creating spaces that feel intentional, refined, and deeply connected to how people live and work.
              </p>
            </div>

          </div>

          {/* ================= RIGHT SIDE: LUXURY INTERIOR ROOM PICTURE ================= */}
          <div className="col-12 col-lg-6 philosophy-image-engine shadow-sm-mobile mb-4 mb-lg-0">
            <div className="philosophy-img-wrapper rounded-1 overflow-hidden">
              <img 
                src={philosophyImg} 
                alt="Luxury architectural living space interior setup with hanging glass orb chandelier" 
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoryPhilosophy;