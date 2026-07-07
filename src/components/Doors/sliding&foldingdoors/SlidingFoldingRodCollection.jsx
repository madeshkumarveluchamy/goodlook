import React from 'react';
import './css/SlidingFoldingRodCollection.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import rodImg from '../../../assets/uPVC_Sliding_Folding_Door_Banner (2).webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; 

const SlidingFoldingRodCollection = () => {
  return (
    <section className="slidingfolding-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="slidingfolding-rod-main-title mb-2 stit">uPVC Sliding Folding & Designer</h2>
    
        <p className="slidingfolding-rod-sub-desc manrope-font mx-auto mb-5 sdes">
          Explore our complete range of premium screens, specifically engineered <br className="d-none d-md-block" /> 
          to provide the perfect fit and lasting protection for every room
        </p>

        <div className="slidingfolding-rod-display-window">
          <div className="slidingfolding-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="slidingfolding-rod-main-img"
            />

            <div className="slidingfolding-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="slidingfolding-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="slidingfolding-bullet-diamond-small">❖</span> uPVC Sliding Folding & Designer
                  </h4>
                  <p className="slidingfolding-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    Safe and easy to handle, and can usually be installed without drilling Can be used almost anywhere, robust and unobtrusive.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light slidingfolding-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="slidingfolding-yellow-arrow-circle d-flex align-items-center justify-content-center">
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

        <div className="slidingfolding-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12 col-md-4">
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Flexible opening design</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Excellent soundproofing</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">High thermal insulation</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-4">
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Supports large glass panels</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Tamper-resistant hardware</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Effective weather protection</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-4">
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Supports large glass panels</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Tamper-resistant hardware</span>
              </div>
              <div className="slidingfolding-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="slidingfolding-exact-tick-icon" />
                <span className="slidingfolding-feature-text">Effective weather protection</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SlidingFoldingRodCollection;