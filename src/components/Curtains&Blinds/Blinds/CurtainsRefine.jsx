import React from 'react';
import './css/CurtainsRefine.css';
import refineImg from '../../../assets/curtainstory.png';

const CurtainsRefine = () => {
  return (
    <section className="curtains-refine-section py-5">
      <div className="container py-md-5">
        <div className="row align-items-center g-4 g-md-5">
          
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="curtains-content-block pe-lg-3">
              
              <h6 className="curtains-brand-badge mb-2 text-uppercase manrope-font ssub">
                Good Look Home Decors
              </h6>
              
              <h2 className="curtains-main-title mb-4 font-serief stit">
                Elevate Your Home <br /> with Window Blinds
              </h2>
              
              <p className="curtains-desc-paragraph hanken-grotesk-font mb-4 sdes">
                Revitalize your home or office with the exquisite charm of window blinds. These versatile window treatments not only enhance the aesthetic appeal of any room but also provide practical benefits to suit your needs.
              </p>
              
              <p className="curtains-desc-paragraph hanken-grotesk-font mb-5 sdes">
                Discover a wide range of window blinds designed to complement any interior decor style. From sleek and contemporary to timeless and traditional, there's a perfect blind for every taste. Whether you prefer the elegance of wooden blinds, the simplicity of roller blinds, or the sophistication of Venetian blinds, you'll find the ideal option to elevate your windows.
              </p>
              
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="btn btn-light curtains-capsule-cta-btn d-flex align-items-center gap-2">
                  <span className="manrope-font btn-text">Start Your Project</span>
                  <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              </div>

            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="curtains-image-frame-holder">
              <img 
                src={refineImg} 
                alt="Refine Interiors with Custom Curtains and Premium Rods Setup" 
                className="img-fluid curtains-showcase-photo" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CurtainsRefine;