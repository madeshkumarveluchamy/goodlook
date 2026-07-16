import React from 'react';
import '../css/MusquitoTypes.css';
import { Link } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa';
import storyhero from "../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors_banner (10).webp"
import img1 from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (4).webp'; 
import img2 from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors_banner (9).webp';
import img3 from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors_banner (12).webp';
import img4 from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (6).webp';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (8).webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (3).webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (2).webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const RollerMosquitoScreensDoors = () => {
  return (
    <>

      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Foldable Security Mesh Doors</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Built to fold flat when not in use and lock firmly into place when you need protection, our roller
mesh doors give you the best of both, an open doorway when you want it, and a mosquito-proof
barrier in seconds when you don't. Engineered for a precise fit on every frame type, so there are
no gaps for insects to sneak through.

            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Door Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
                </div>
              </div>
            </div>
            
            {/* Image 2 - With Overlay Content & Hover box */}
            <div className="col-12 col-lg-8">
              <div className="musquitotypes-img-container has-overlay-text position-relative">
                <img src={img2} alt="Door Model 2" className="musquitotypes-grid-img" />
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
                alt="Roller Net View 1" 
                className="musquitotypes-sticky-img" 
              />
              {/* Overlay Box with hover effect */}
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Roller Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Foldable Security Mesh Window</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR DOORS</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Foldable Security<br className="d-none d-md-block" />Mesh Window 
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                No more choosing between fresh air and a bug-free home. Our roller mesh windows glide open
and shut with a single hand, staying out of sight until you need them, so you get the breeze, the
view, and the quiet, insect-free evenings, all without compromise.

              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Let our Foldable mosquito nets be the companion that helps you navigate life's daily rhythms with grace and comfort.
              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Roller Mosquito Net" className="musquitotypes-right-img" />
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
                  <span className="hanken-grotesk-font sdes">Specialists in fitting UPVC door frames without compromising the seal</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Trusted for both casement and roller door installations</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">On-site mesh replacement, no need to remove or ship your doors</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Quick repair of worn or damaged rollers and cords</span>
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
              Two decades of precision engineering, one simple promise a door that opens to fresh air and
closes on every mosquito. Visit us and see twenty-one years of craftsmanship at work in your
own home.

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

export default RollerMosquitoScreensDoors;