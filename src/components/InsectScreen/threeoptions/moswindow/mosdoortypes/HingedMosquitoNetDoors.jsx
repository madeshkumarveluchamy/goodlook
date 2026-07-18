import React from 'react';
import '../css/MusquitoTypes.css'; 
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors_banner (10).webp"
import img1 from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (8).webp'; 
import img2 from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors_banner(3).webp';
import img3 from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors_banner (5).webp';
import img4 from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (7).webp';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors_banner (2).webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (9).webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (6).webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const HingedMosquitoNetDoors = () => {
  return (
    <>
  

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Hinged Frame Mosquito Doors</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Built for the doors you use every day. Our hinged mosquito net doors open and close like a
regular door, no sliding tracks, no fuss. While keeping every mosquito, fly, and creepy-crawly
firmly on the other side.

            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Door Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Door</h4>
                </div>
              </div>
            </div>
            
            {/* Image 2 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img2} alt="Door Model 2" className="musquitotypes-grid-img" />
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
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Seamless Design, Superior Defense.</h4>
                </div>
              </div>
            </div>

            {/* Image 3 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img3} alt="Door Model 3" className="musquitotypes-grid-img" />
                <div className="musquitotypes-overlay-content">
                  <h3 className="musquitotypes-overlay-title text-white manrope-font smin">Effortless Protection, Perfect Flow</h3>
                </div>
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Effortless Protection, Perfect Flow</h4>
                </div>
              </div>
            </div>
            
            {/* Image 4 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img4} alt="Door Model 4" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Doors</h4>
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
                alt="Hinged Net View 1" 
                className="musquitotypes-sticky-img" 
              />
              {/* Overlay Box with hover effect */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Doors</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Hinged Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Hinged Frame Mosquito Doors</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR DOORS</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Hinged Frame<br className="d-none d-md-block" />Mosquito Doors 
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Fresh air shouldn't come with a side of mosquito bites. Our hinged frame doors give you a full,
unobstructed view and a real breeze, not the compromise of a half-shut window
              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Engineered with precision hinges and tear-resistant mesh, these doors are made to handle daily
open-and-shut use for years without sagging, warping, or rattling loose.

              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Hinged Mosquito Net" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Experienced Service Team</h4>
              </div>
            </div>

            {/* Right Text Block 2 */}
            <div className="musquitotypes-text-block">
              <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
              <h2 className="musquitotypes-sticky-heading mb-4 font-geist stit ">
                Experienced Installation <br className="d-none d-md-block" />& Service Team
              </h2>

              <ul className="musquitotypes-features-list list-unstyled">
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Specialists in UPVC door frame fitting</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Trusted experts for Casement and Hinged door systems</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site pleated mesh replacement, no need to remove the frame</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Quick repair of cords and hinges worn out from daily use</span>
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
              See the craftsmanship for yourself.
Two decades of door engineering, built into every hinge, frame, and mesh we install.

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

export default HingedMosquitoNetDoors;