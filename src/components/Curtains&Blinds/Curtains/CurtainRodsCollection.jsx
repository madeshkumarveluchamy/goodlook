import React from 'react';
import './css/CurtainsrodsCollection.css';
import rodImg from '../../../assets/curtainrod.webp';
import {Link} from "react-router-dom";
const CurtainrodCollection = () => {
  return (
    <section className="rod-collection-section ">
      <div className="container py-4 text-center">
        
        <h2 className="rod-main-title mb-2 stit">Curtain rod</h2>
        <h2 className="rod-main-title mb-4 stit">Collections</h2>
        
        <p className="rod-sub-desc manrope-font mx-auto mb-5 sdes">
          Explore our complete range of premium screens, specifically engineered <br className="d-none d-md-block" /> 
          to provide the perfect fit and lasting protection for every room
        </p>

        <div className="current-rod-heading text-center text-md-start mb-4 stit">
          <span className="bullet-diamond">❖</span> Curtain rod Designs
        </div>

        <div className="rod-display-window">
          <div className="rod-showcase-card">
            <img 
              src={rodImg} 
              alt="Premium Curtain rod Designs" 
              className="rod-main-img"
            />

            <div className="rod-glass-card-overlay">
              <div className="row align-items-center  text-center text-md-start g-4 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="overlay-rod-title mb-2 text-center text-md-start sdes">
                    <span className="bullet-diamond-small ">❖</span> Curtain rod Designs
                  </h4>
                  <p className="overlay-rod-desc d-flex justify-content-even manrope-font mb-0 smin">
                    Safe and easy to handle, and can usually be installed without drilling Can be used almost anywhere, robust and unobtrusive.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end p-0 pb-3 pt-md-0">
                  <Link to="/cta" className="text-decoration-none">
                  <button className="btn btn-light project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                    <span className="manrope-font btn-text">Start Your Project</span>
                    <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
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

      </div>
    </section>
  );
};

export default CurtainrodCollection;