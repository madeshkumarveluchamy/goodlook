import React from 'react';
import '../css/MusquitoTypes.css'; 
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window_banner (1).webp"
import img1 from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (2).webp'; 
import img2 from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window_banner (5).webp';
import img3 from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (7).webp';
import img4 from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (6).webp';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (4).webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (3).webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window_banner (1).webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const RollerMosquitoNetWindow = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
     

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Hinged Frame Mosquito Window</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Built to swing open as easily as your window does. Our hinged frame mosquito nets combine a
snug,<br className="d-none d-md-block" />  gap-free fit with effortless everyday use so every room stays open to fresh air, natural
light, and nothing else.
            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Window Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Window</h4>
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
                  <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Window</h4>
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
                alt="Roller Net View 1" 
                className="musquitotypes-sticky-img" 
              />
              {/* Overlay Box with hover effect */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge manrope-font fw-bolder">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Window</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Roller Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Modern Hinged Frame Mosquito Window</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR WINDOW</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Hinged Frame <br className="d-none d-md-block" />Mosquito Window
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                No more choosing between a breeze and peace of mind. Our precision-fitted hinged frames
open and close like a second window, giving you uninterrupted views, quiet corners, and a
home that finally breathes easy.
              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Let our hinged frame mosquito nets become part of your daily rhythm simple to use, sturdy enough to forget they're even there.

              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Roller Mosquito Net" className="musquitotypes-right-img" />
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
                  <span className="hanken-grotesk-font sdes">Skilled in fitting UPVC, wood, and aluminium window frames</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Experts in Hinged, Casement, and Sliding door systems</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site repair and replacement of worn mesh</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Hinge and lock servicing for smooth, long-term use</span>
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
             Twenty-one years of craftsmanship, engineered into every frame we fit.


            </p>
            
            {/* --- GET IN TOUCH CTA CAPSULE BUTTON --- */}
            <Link to="/contact-us" className='text-decoration-none'></Link>
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-dark aura-cta-btn d-flex align-items-center gap-3">
                <span className="manrope-font aura-btn-text">Get In Touch</span>
                <span className="aura-yellow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default RollerMosquitoNetWindow;