import React from 'react';
import '../css/MusquitoTypes.css'; 
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import storyhero from "../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors_banner (3).webp"
import img1 from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (4).webp'; 
import img2 from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors_banner (1).webp';
import img3 from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosquito_net_door.webp';
import img4 from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (2).webp';

// Ningalude images ingane import cheyyuka
import stickyImg from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (5).webp'; // Left Sticky Image
import rightImgTop from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (7).webp'; // Right Scrollable Image 1
import rightImgCenter from '../../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (8).webp'; // Right Scrollable Image 2
import ExperienceAura from '../../../../Doors/SlideDoors/ExperienceAura';

const PleatedMosquitoNetDoors = () => {
  return (
    <>


      {/* ================= GALLERY SECTION ================= */}
      <section className="musquitotypes-gallery-section">
        <div className="container">
          
          <div className="musquitotypes-gallery-header text-center">
            <h2 className="musquitotypes-gallery-title font-serif stit">Pleated Mosquito Net Doors</h2>
            <p className="musquitotypes-gallery-subtitle mx-auto hanken-grotesk-font sdes">
              Engineered for a flawless fit, built to outlast the everyday, explore our full range of premium
pleated mosquito net doors, designed to protect every doorway without ever getting in your way.

            </p>
          </div>

          <div className="row g-4 musquitotypes-grid-row">
            
            {/* Image 1 - Hover box only */}
            <div className="col-12 col-lg-4">
              <div className="musquitotypes-img-container position-relative">
                <img src={img1} alt="Door Model 1" className="musquitotypes-grid-img" />
                <div className="musquitotypes-gallery-overlay-box">
                  <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                  <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Door</h4>
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
                  <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Door</h4>
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
                <span className="musquitotypes-gold-badge fw-bolder manrope-font ">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Pleated Mosquito Net Door</h4>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SCROLLING CONTENT ================= */}
          <div className="col-12 col-lg-6 musquitotypes-content-scroll-col">

            {/* Right Top Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgTop} alt="Pleated Net View 2" className="musquitotypes-right-img" />
              <div className="musquitotypes-gallery-overlay-box">
                <span className="musquitotypes-gold-badge fw-bolder manrope-font">MOSQUITO NET FOR DOORS</span>
                <h4 className="musquitotypes-hover-title font-serif">Modern Pleated Screens</h4>
              </div>
            </div>

            {/* Right Text Block 1 */}
            <div className="musquitotypes-text-block mb-5">
              <span className="musquitotypes-gold-badge manrope-font fw-bolder ssub">MOSQUITO NET FOR DOORS</span>
              <h2 className="musquitotypes-main-heading mb-4 font-geist stit">
                Modern Pleated <br className="d-none d-md-block" />Door Screens
              </h2>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
               No bulky frames, no compromise just a clean fold-away screen that disappears when you don't
need it and glides shut in seconds when you do. Let in the breeze, keep out the bugs, and enjoy
an unobstructed view of the world outside, exactly as it should be.
              </p>
              <p className=" musquitotypes-desc-text hanken-grotesk-font sdes">
                Let our pleated mosquito nets be the companion that helps you navigate life's daily rhythms with grace and comfort.
              </p>
            </div>

            {/* Right Center Image with Hover Box */}
            <div className="musquitotypes-right-img-card position-relative mb-5">
              <img src={rightImgCenter} alt="Center Pleated Mosquito Net" className="musquitotypes-right-img" />
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
                  <span className="hanken-grotesk-font sdes">Specialists in fitting pleated and casement screens to UPVC door frames</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes"> Certified installers trained on-site, not on guesswork</span>
                </li>
                <li className="d-flex align-items-start gap-3 mb-4">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Quick mesh replacement without replacing the whole unit</span>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <FaCheckCircle className="musquitotypes-tick-icon mt-1" />
                  <span className="hanken-grotesk-font sdes">Cord and track repairs for wear-and-tear, handled fast</span>
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
                 Step into a GLHD showroom and feel what 21 years of precision engineering brings to your
doorway.

   
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

export default PleatedMosquitoNetDoors;