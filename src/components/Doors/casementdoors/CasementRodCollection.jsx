import React from 'react';
import './css/CasementRodCollection.css';
import rodImg from '../../../assets/uPVC_Casement_ Door_Banner (2).webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; // 🎯 பிக்ஸ்: எக்ஸாக்ட் சாலிட் சர்க்கிள் டிக் ஐகான்

const CasementRodCollection = () => {
  return (
    <section className="casement-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="casement-rod-main-title mb-2 stit">uPVC Casement Doors</h2>
    
        
        <p className="casement-rod-sub-desc manrope-font mx-auto mb-5 sdes">
          Discover a door range built for how you actually live, engineered for<br className="d-none d-md-block" />  a flawless fit, everyday ease, and protection that holds up room after room. 
        </p>

      

        <div className="casement-rod-display-window">
          <div className="casement-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="casement-rod-main-img"
            />

            <div className="casement-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="casement-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="casement-bullet-diamond-small">❖</span> uPVC Casement Doors
                  </h4>
                  <p className="casement-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    Effortless to operate, simple to install, often without any drilling and versatile enough to suit any space. Sturdy in build, seamless in look. 
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light casement-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="casement-yellow-arrow-circle d-flex align-items-center justify-content-center">
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

        {/* ========================================================
           🎯 NEW FIXED: EXACT PIGMA COMPATIBLE ALIGNMENT & TICK EMOJI
           ======================================================== */}
        <div className="casement-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12 padding-manual col-md-4">
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Smooth, flexible opening mechanism </span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Whisper-quiet soundproofing</span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Superior thermal insulation </span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 padding-manual col-md-4">
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Engineered for oversized glass panels </span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Tamper-resistant, secure hardware</span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">All-season weather resistance </span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 padding-manual col-md-4 ">
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Sleek, low-maintenance finish</span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3 mb-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Built to resist warping & discolouration</span>
              </div>
              <div className="casement-feature-item-box d-flex align-items-center gap-3 ">
                <FaCheckCircle className="casement-exact-tick-icon" />
                <span className="casement-feature-text">Long-lasting, corrosion-free performance</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CasementRodCollection;