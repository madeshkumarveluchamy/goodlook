import React from 'react';
import '../css/MusquitoTypes.css';
import { Link } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows_banner(4).webp"
import img1 from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (3).webp'; 
import img2 from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (6).webp';
import img3 from '../../../../../assets/folding_security_mesh_windows/folding_mosquito_window.webp';
import img4 from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (9).webp';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (8).webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (2).webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (5).webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const FixedFrameNetWindow = () => {
  return (
    <>
    

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Foldable Security Mesh Window</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Engineered for a perfect fit on every window, our foldable mesh screens fold flat and open<br className="d-none d-md-block" /> 
smooth built to keep insects out and fresh air flowing, without ever getting in the way of your
view.

            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Window Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR WINDOW</span>
                  <h4 className="musquitotypes-hover-title font-serif tex">Foldable Security Mesh Window</h4>
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
                  <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
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
              {/* Overlay Box with hover effect */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
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
                <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR WINDOW</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Foldable Security  <br className="d-none d-md-block" />Mesh Window
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
       Fresh air, uninterrupted views, zero mosquitoes. Our precision-folding mesh screens glide open
in seconds and tuck away just as easily quiet, durable, and made to handle daily use for years
              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Twenty-one years of hands-on expertise, right at your door from first measurement to final fit.
              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Sliding Mosquito Net" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR WINDOW</span>
                <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
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
                  <span className="hanken-grotesk-font sdes">Specialists in UPVC frame integration</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Trained on Casement and Sliding door systems</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site pleated mesh replacement</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Cord repair for wear-and-tear or misuse</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>


  {/*----------Experience aura----------------------*/}
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
              Two decades of craftsmanship, one visit away. See why Coimbatore homes trust GLHD for
lasting comfort and protection.

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

export default FixedFrameNetWindow;