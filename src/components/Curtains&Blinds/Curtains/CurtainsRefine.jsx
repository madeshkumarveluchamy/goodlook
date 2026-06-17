import React from 'react';
import './css/curtainsRefine.css';
import refineImg from '../../../assets/curtainstory.webp';
import { Link } from 'react-router-dom';

const curtainsRefine = () => {
  return (
    <section className="curtainss-refine-section py-5">
      <div className="container py-md-5">
        <div className="row align-items-center g-4 g-md-5">
          
          <div className="col-12 col-md-6 text-center text-md-start">
            <div className="curtainss-content-block pe-lg-3 d-flex flex-column">
              
              <h6 className="curtainss-brand-badge mb-2 text-uppercase manrope-font ssub">
                Good Look Home Decors
              </h6>
              
              <h2 className="curtainss-main-title mb-4 font-serief stit">
                Refine Interiors With <br /> Custom curtainss
              </h2>
              
              <p className="curtainss-desc-paragraph manrope-font mb-4 d-flex justify-content-evenly hanken-grotesk-font sdes">
                Complete the look of your curtains and enhance the overall appeal of your space with a stylish and functional curtains rod. These essential window accessories not only provide structural support but also add a touch of elegance to any room.
              </p>
              
              <p className="curtainss-desc-paragraph manrope-font mb-5 d-flex justify-content-evenly hanken-grotesk-font sdes">
                Discover a wide selection of curtains rods crafted from premium materials and available in various finishes to match your decor. Whether you prefer the classic charm of metal, the warmth of wood, or the sleekness of acrylic, there's a curtains rod to suit your style and preferences.
              </p>
              
              <div className="d-flex justify-content-center justify-content-md-start">
                <Link className='text-decoration-none' to="/contact-us" >
                <button className="btn btn-light curtainss-capsule-cta-btn d-flex align-items-center gap-2">
                  <span className="manrope-font btn-text">Start Your Project</span>
                  <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
                </Link>
              </div>

            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="curtainss-image-frame-holder">
              <img 
                src={refineImg} 
                alt="Refine Interiors with Custom curtainss and Premium Rods Setup (curtain window)" 
                className="img-fluid curtainss-showcase-photo" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default curtainsRefine;