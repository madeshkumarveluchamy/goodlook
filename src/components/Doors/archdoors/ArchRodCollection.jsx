import React from 'react';
import './css/ArchRodCollection.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import rodImg from '../../../assets/uPVC_Arc_ Door_Banner (4).webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; 

const ArchRodCollection = () => {
  return (
    <section className="arch-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="arch-rod-main-title mb-2 stit">uPVC Arch Doors</h2>
    
        <p className="arch-rod-sub-desc manrope-font mx-auto mb-5 sdes">
          Curves that catch the eye, strength that holds the line explore<br className="d-none d-md-block" /> arch doors engineered for the perfect fit and lasting protection, room after room.
        </p>

        <div className="arch-rod-display-window">
          <div className="arch-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="arch-rod-main-img"
            />

            <div className="arch-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="arch-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="arch-bullet-diamond-small">❖</span> uPVC Arch Doors
                  </h4>
                  <p className="arch-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    No drilling, no fuss just a door that fits in anywhere and holds its own everywhere. Sturdy where it counts, quiet on the eye.  
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light arch-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="arch-yellow-arrow-circle d-flex align-items-center justify-content-center">
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

        <div className="arch-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12 padding-manual col-md-4">
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Flexible opening design</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Excellent soundproofing</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">High thermal insulation</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 padding-manual col-md-4">
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Supports large glass panels</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Tamper-resistant hardware</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Effective weather protection</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 padding-manual col-md-4">
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Drill-free installation</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Fits virtually anywhere</span>
              </div>
              <div className="arch-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="arch-exact-tick-icon" />
                <span className="arch-feature-text">Robust yet unobtrusive</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ArchRodCollection;