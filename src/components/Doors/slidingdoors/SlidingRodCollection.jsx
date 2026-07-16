import React from 'react';
import './css/SlidingRodCollection.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import rodImg from '../../../assets/uPVC_Sliding_Door_Images (7).webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; 

const SlidingrodCollection = () => {
  return (
    <section className="sliding-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="sliding-rod-main-title mb-2 stit">uPVC Sliding Doors</h2>
    
        <p className="sliding-rod-sub-desc manrope-font mx-auto mb-5 sdes">
         Discover our full range of premium sliding doors, <br className="d-none d-md-block" /> precision-engineered for a flawless fit and enduring protection in every space.

        </p>

        <div className="sliding-rod-display-window">
          <div className="sliding-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="sliding-rod-main-img"
            />

            <div className="sliding-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="sliding-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="sliding-bullet-diamond-small">❖</span> uPVC Sliding Doors
                  </h4>
                  <p className="sliding-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    Effortless to handle and install no drilling required in most cases. Built tough yet unobtrusive, so it fits seamlessly into almost any space.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light sliding-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="sliding-yellow-arrow-circle d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '9px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sliding-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12 col-md-4  padding-manual">
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Smooth, flexible opening for everyday ease</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Superior soundproofing for quieter interiors</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Advanced thermal insulation, all year round</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-4 padding-manual">
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Engineered to support expansive glass panels</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Tamper-proof hardware for added security</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Reliable protection against wind and rain</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-4 padding-manual">
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Built to handle oversized glass installations</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">Sturdy, tamper-resistant locking systems</span>
              </div>
              <div className="sliding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="sliding-exact-tick-icon" />
                <span className="sliding-feature-text">All-weather sealing that keeps the elements out </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SlidingrodCollection;