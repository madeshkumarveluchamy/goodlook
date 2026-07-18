import React from 'react';
import '../css/MusquitoTypes.css'; 
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/pleaded6.webp";
import img1 from '../../../../../assets/pleaded10.webp';
import img2 from '../../../../../assets/pleaded6.webp';
import img3 from '../../../../../assets/pleaded8.webp';
import img4 from '../../../../../assets/pleaded3.webp';
import { Link } from 'react-router-dom';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/pleaded1.webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/pleaded7.webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/pleaded4.webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const PleatedMosquitoNetWindow = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
  

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Pleated Mosquito Net Window</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Precision-engineered pleated screens built for a perfect fit, room after room, window after
window. Zero gaps, zero compromise, uninterrupted airflow and unobstructed views, backed by
durable frames that hold their shape for years.
            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Window Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Window</h4>
                </div>
              </div>
            </div>
            
            {/* Image 2 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img2} alt="Window Model 2" className="musquitotypes-grid-img" />
                <div className="musquitotypes-overlay-content">
                  <h3 className="musquitotypes-overlay-title text-white manrope-font smin">Seamless Design, Superior Defense.</h3>
                  <Link to="/contact-us"><button className="btn btn-light musquitotypes-project-btn d-inline-flex align-items-center gap-2">
                    <span className="manrope-font btn-text ">Start Your Project</span>
                    <span className="musquitotypes-yellow-arrow d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button></Link>
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
                  <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Window</h4>
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
                alt="Pleated Net View 1" 
                className="musquitotypes-sticky-img" 
              />
              {/* Overlay Box with hover effect */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Window</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Pleated Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Modern Pleated Screens</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR WINDOW</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Modern Pleated <br className="d-none d-md-block" />Window Screens
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Fresh air in, mosquitoes out without ever blocking the view. Our pleated screens fold away
smoothly at a touch, so you get full ventilation when you want it and a clean, invisible seal when
you don't. Designed for everyday comfort, engineered to outlast the seasons.

              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Let our pleated mosquito nets be the companion that helps you navigate life's daily rhythms with grace and comfort
              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Pleated Mosquito Net" className="musquitotypes-right-img" />
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
                  <span className="hanken-grotesk-font sdes">Specialists in UPVC door and window integration</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Trusted for both Casement and Sliding systems</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site pleated mesh replacement, done right the first time</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Quick fixes for worn or damaged pull cords no need to replace the whole unit</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>

    <section className="experience-aura-section py-5">
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            
            {/* --- MAIN DISPLAY HEADING --- */}
            <h2 className="aura-main-heading mb-3">
              Experience the Aura in person.
            </h2>
            
            {/* --- MUTED SUBTEXT --- */}
            <p className="aura-subtext manrope-font mb-4 pb-2">
              Step into a home where every window works exactly as it should. Experience the GLHD
difference in person.

            </p>
            
            {/* --- GET IN TOUCH CTA CAPSULE BUTTON --- */}
            <div className="d-flex justify-content-center">
            <Link to="/contact-us" className='text-decoration-none'>
              <button className="btn btn-outline-dark aura-cta-btn d-flex align-items-center gap-3">
                <span className="manrope-font aura-btn-text">Get In Touch</span>
                <span className="aura-yellow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default PleatedMosquitoNetWindow;