import React from 'react';
import './css/ArchWindowsRodCollection.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import rodImg from '../../../assets/Upvc_arch_window.webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; 

const ArchWindowsRodCollection = () => {
  return (
    <section className="archwindows-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="archwindows-rod-main-title mb-2 stit">uPVC Arch Windows</h2>
    
        <p className="archwindows-rod-sub-desc manrope-font mx-auto mb-5 sdes">
         Curves that complement your walls, strength that outlasts <br className="d-none d-md-block" /> the years. Explore uPVC arch
windows engineered for a flawless fit and lasting protection in every room.

        </p>

        <div className="archwindows-rod-display-window">
          <div className="archwindows-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="archwindows-rod-main-img"
            />

            <div className="archwindows-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="archwindows-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="archwindows-bullet-diamond-small">❖</span> uPVC Arch Windows
                  </h4>
                  <p className="archwindows-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    No drilling, no hassle just smooth, secure installation. Rugged enough for any space, refined enough to disappear into the design.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light archwindows-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="archwindows-yellow-arrow-circle d-flex align-items-center justify-content-center">
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

        <div className="archwindows-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Graceful arch profiles that follow your window's natural curve</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Whisper-quiet soundproofing for calmer, quieter rooms</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Superior thermal insulation that holds comfort in, all year round</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Built to support large, uninterrupted glass panels</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Tamper-resistant hardware for extra peace of mind</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">All-weather sealing that locks out rain, dust, and wind</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Effortless no-drill installation, done in a fraction of the time</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Low-maintenance frames — no painting, no upkeep, ever</span>
              </div>
              <div className="archwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="archwindows-exact-tick-icon" />
                <span className="archwindows-feature-text">Engineered for durability that holds strong season after season</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ArchWindowsRodCollection;