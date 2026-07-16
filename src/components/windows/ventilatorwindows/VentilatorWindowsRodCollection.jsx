import React from 'react';
import './css/VentilatorWindowsRodCollection.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது
import rodImg from '../../../assets/uPVC_Ventilator_Windows_Banner_2.webp';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa'; 

const VentilatorWindowsRodCollection = () => {
  return (
    <section className="ventilatorwindows-rod-collection-section">
      <div className="container py-4 text-center">
        
        <h2 className="ventilatorwindows-rod-main-title mb-2 stit">uPVC Ventilator Windows</h2>
    
        <p className="ventilatorwindows-rod-sub-desc manrope-font mx-auto mb-5 sdes">
          Compact spaces deserve serious engineering. Our ventilator window screens are precision-built <br className="d-none d-md-block" />to seal in comfort and seal out mosquitoes, dust, and noise without ever blocking the breeze.
        </p>

        <div className="ventilatorwindows-rod-display-window">
          <div className="ventilatorwindows-rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs collections" 
              className="ventilatorwindows-rod-main-img"
            />

            <div className="ventilatorwindows-rod-glass-card-overlay">
              <div className="row align-items-center text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="ventilatorwindows-overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="ventilatorwindows-bullet-diamond-small">❖</span> uPVC Ventilator Windows
                  </h4>
                  <p className="ventilatorwindows-overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    Experience superior airflow without compromising on security. Our robust, unobtrusive design features a drill-free installation that is quick, clean, and perfect for any room.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light ventilatorwindows-project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="ventilatorwindows-yellow-arrow-circle d-flex align-items-center justify-content-center">
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

        <div className="ventilatorwindows-features-exact-wrapper mt-5 pt-3 text-start">
          <div className="row g-4 manrope-font">
            
            {/* Column 1 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">Drill-free installation for a clean, hassle-free fit</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text"> Compact design that works in even the tightest openings</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">Multi-directional opening for total airflow control</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">Noise-dampening build for quieter, calmer interiors</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">High thermal insulation to keep rooms cool in summer, warm in winter</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text"> Engineered to support large glass panels without sagging</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12  padding-manual col-md-4">
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">Tamper-resistant hardware for added home security</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3 mb-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">All-weather sealing against rain, dust, and wind</span>
              </div>
              <div className="ventilatorwindows-feature-item-box d-flex align-items-center gap-3">
                <FaCheckCircle className="ventilatorwindows-exact-tick-icon" />
                <span className="ventilatorwindows-feature-text">Low-maintenance build made to outlast the years</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VentilatorWindowsRodCollection;