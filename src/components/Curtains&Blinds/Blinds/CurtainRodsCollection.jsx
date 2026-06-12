import React from 'react';
import './css/CurtainsRodsCollection.css';
import rodsImg from '../../../assets/curtainrod.webp';
import {Link} from "react-router-dom"

const CurtainRodsCollection = () => {
  return (
    <section className="rods-collection-section ">
      <div className="container py-4 text-center">
      
        <h2 className="rods-main-title mb-2 font-serief stit">Window Blinds</h2>
        <h2 className="rods-main-title mb-4 stit">Collections</h2>
        
        <p className="rods-sub-desc manrope-font mx-auto mb-5 sdes">
          Explore our premium blind collection, expertly crafted for a perfect fit  <br className="d-none d-md-block" />  and lasting style in every room
          
        </p>

        <div className="current-rods-heading text-center text-md-start mb-4 font-serief stit">
          <span className="bullet-diamond">❖</span> Window Blinds
        </div>

        <div className="rods-display-window">
          <div className="rods-showcase-card">
            <img 
              src={rodsImg} 
              alt="Premium Curtain Rods Designs" 
              className="rods-main-img"
            />

            <div className="rods-glass-card-overlay">
              <div className="row align-items-center  text-center text-md-start g-4 w-100 m-0">
                <div className="col-12 col-md-8 text-center text-md-start p-0">
                  <h4 className="overlay-rods-title mb-2 text-center text-md-start font-serief">
                    <span className="bullet-diamond-small sdes">❖</span> Window Blinds
                  </h4>
                  <p className="overlay-rods-desc text-center text-md-start manrope-font mb-0 hanken-grotesk-font smin">
                    Explore our premium blind collection, expertly crafted for a perfect fit and lasting style in every room.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end mb-3 pt-md-0">
                  <Link to="/contact-us" className="text-decoration-none">
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

export default CurtainRodsCollection;