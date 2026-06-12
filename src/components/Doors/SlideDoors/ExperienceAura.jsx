import React from 'react';
import './css/ExperienceAura.css';
import {Link} from "react-router-dom"

const ExperienceAura = () => {
  return (
    <section className="experience-aura-section py-5">
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            {/* --- MAIN DISPLAY HEADING --- */}
            <h2 className="aura-main-heading mb-3">
              Experience the Aura in person.
            </h2>
            
            {/* --- MUTED SUBTEXT --- */}
            <p className="aura-subtext manrope-font mb-4 pb-2">
              Discover how twenty-one years of architectural excellence can redefine your everyday life.
            </p>
            
            {/* --- GET IN TOUCH CTA CAPSULE BUTTON --- */}
            <Link to="/contact-us" className='text-decoration-none'></Link>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-dark aura-cta-btn d-flex align-items-center gap-3">
                <span className="manrope-font aura-btn-text">Get In Touch</span>
                <span className="aura-yellow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAura;