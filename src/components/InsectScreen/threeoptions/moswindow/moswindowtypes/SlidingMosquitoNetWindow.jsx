import React from 'react';
import '../css/MusquitoTypes.css'; 
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/casementback.png"
import img1 from '../../../../../assets/sliding_mosquito_net_window(1).jpg'; 
import img2 from '../../../../../assets/sliding_mosquito_net_window(8).jpg';
import img3 from '../../../../../assets/sliding_mosquito_net_window(6).jpg';
import img4 from '../../../../../assets/sliding_mosquito_net_window(3).jpg';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/sliding_mosquito_net_window(4).jpg'; // Left Sticky Image
import rightImgTop from '../../../../../assets/sliding_mosquito_net_window(5).png'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/sliding_mosquito_net_window(7).png'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const SlidingMosquitoNetWindow = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section 
        className="musquitotypes-story-hero-section position-relative overflow-hidden w-100"
        style={{ backgroundImage: `url(${storyhero})` }}
      >
        <div className="musquitotypes-story-hero-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="musquitotypes-story-vertical-grid-lines d-none d-md-flex w-100 h-100 position-absolute top-0 start-0">
          <div className="musquitotypes-story-line-col"></div>
          <div className="musquitotypes-story-line-col"></div>
          <div className="musquitotypes-story-line-col"></div>
        </div>

        <div className="container-fluid musquitotypes-story-hero-fluid h-100 position-relative z-3">
          <div className="row h-100 musquitotypes-hero-text-alignment-row">
            <div className="col-12 musquitotypes-hero-text-engine-col font-inter">
              <h1 className="musquitotypes-story-main-title fw-bold text-white m-0 select-none musquitotypes-inter-font">
                <span className="musquitotypes-story-title-line-1 d-block">
                  Quality You See
                </span>
                <span className="musquitotypes-story-light-beige musquitotypes-story-title-line-2 d-block">
                  unbeatable view
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Sliding Mosquito Net Window</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Explore our complete range of premium Sliding Mosquito Net Window, specifically<br className="d-none d-md-block" /> 
              engineered to provide the perfect fit and lasting protection for every room
            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Window Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Sliding Mosquito Net Window</h4>
                </div>
              </div>
            </div>
            
            {/* Image 2 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img2} alt="Window Model 2" className="musquitotypes-grid-img" />
                <div className="musquitotypes-overlay-content">
                  <h3 className="musquitotypes-overlay-title text-white manrope-font smin">Seamless Design, Superior Defense.</h3>
                  <button className="btn btn-light musquitotypes-project-btn d-inline-flex align-items-center gap-2">
                    <span className="manrope-font btn-text ">Start Your Project</span>
                    <span className="musquitotypes-yellow-arrow d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Seamless Design, Superior Defense.</h4>
                </div>
              </div>
            </div>

            {/* Image 3 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img3} alt="Window Model 3" className="musquitotypes-grid-img" />
                <div className="musquitotypes-overlay-content">
                  <h3 className="musquitotypes-overlay-title text-white manrope-font smin">Effortless Protection, Perfect Flow</h3>
                </div>
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Effortless Protection, Perfect Flow</h4>
                </div>
              </div>
            </div>
            
            {/* Image 4 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img4} alt="Window Model 4" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Sliding Mosquito Net Window</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------------------------musquito wrapper section----------------------------------------------- */}

      <section className="musquitotypes-sticky-wrapper-section">
      <div className="container">
        <div className="row musquitotypes-sticky-row">

          {/* ================= LEFT COLUMN: STICKY IMAGE ================= */}
          <div className="col-12 col-lg-6 musquitotypes-image-sticky-col">
            <div className="musquitotypes-sticky-image-card position-relative">
              <img 
                src={stickyImg} 
                alt="Sliding Net View 1" 
                className="musquitotypes-sticky-img" 
              />
              {/* Overlay Box with hover effect added */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge manrope-font fw-bolder">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Sliding Mosquito Net Window</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Sliding Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Modern Sliding Screens</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR WINDOW</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Modern Sliding <br className="d-none d-md-block" />Window Screens
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Whether you're looking to enjoy a breeze, gain clarity through unobstructed views, or simply find a few moments of calm in your busy day, these precision-engineered sliding screens will inspire and motivate
              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Let our sliding mosquito nets be the companion that helps you navigate life's daily rhythms with grace and comfort
              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Sliding Mosquito Net" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Experienced Service Team</h4>
              </div>
            </div>

            {/* Right Text Block 2 */}
            <div className="musquitotypes-text-block">
              <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
              <h2 className="musquitotypes-sticky-heading mb-4 font-geist stit ">
                Experienced Installation <br className="d-none d-md-block" />& Service Team
              </h2>

              <ul className="musquitotypes-features-list list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Skilled in working with UPVC door frames</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Experts in solutions for Casement, Sliding doors</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site replacement of pleated mesh</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Repair or replacement of cords damaged due to misuse</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

    <ExperienceAura />
    </>
  );
};

export default SlidingMosquitoNetWindow;