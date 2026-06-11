import React from 'react';
import './css/Storystory.css';

// --- IMPORT IMAGES ---
import viewLarge from '../../assets/storyframe1.webp';
import lightsThumb from '../../assets/storyframe2.webp';
import {Link} from "react-router-dom"

const Storystory = () => {
  return (
    <section className="story-details-section bg-white" id="our-story-details">
      <div className="container-fluid story-details-fluid px-3 px-sm-4 px-md-5">
        <div className="row align-items-center g-4 g-lg-5 d-flex flex-lg-row-reverse">
            {/* ================= RIGHT SIDE: CONTENT LAYER + THUMBNAIL ================= */}
          <div className="col-12 col-md-6 story-content-engine-col d-flex flex-column align-items-center text-center">
            
            <span className="story-mini-badge text-uppercase tracking-widest d-block mb-2 mb-md-3 manrope-font color-yellow fw-semibold">
              Our Story
            </span>
            
            <h2 className="story-title-header font-serif mb-4 stit">
              Precision uPVC <br /> & For Elevated Living
            </h2>

            {/* CENTERAL DECORATIVE THUMBNAIL IMAGE */}
            <div className="story-thumbnail-frame overflow-hidden mb-4 shadow-sm">
              <img 
                src={lightsThumb} 
                alt="Elegant copper hanging pendant lights home decor close up" 
                className="w-100 h-100 object-fit-cover" 
              />
            </div>

            <p className="story-description-text  fw-light mb-4 font-bricolage mx-auto sdes">
              We bring two decades of expertise to every installation, ensuring your home's mood is 
              defined by quality, comfort, and precision-engineered uPVC solutions.
            </p>

            {/* GOLD CIRCULAR ACCENT ACTION BUTTON */}
            <div className="story-cta-action-holder">
              <Link to="/cta" className="text-decoration-none">
                <button className="btn story-get-in-touch-btn d-inline-flex align-items-center gap-3 text-capitalize manrope-font fw-medium">
                Get In Touch
                <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                </button>
              </Link>
            </div>

          </div>
          {/* ================= LEFT SIDE: TALL FRAME SHOWCASE ================= */}
          <div className="col-12 col-md-6 story-large-img-col">
            <div className="story-large-img-wrapper rounded-1 overflow-hidden">
              <img 
                src={viewLarge} 
                alt="Luxury uPVC window view of a serene garden landscape" 
                className="w-100 h-100 object-fit-cover" 
              />
            </div>
          </div>

        

        </div>
      </div>
    </section>
  );
};

export default Storystory;