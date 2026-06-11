import React from 'react';
import './css/InsectProtection.css';
import insectImg from '../../assets/frameeee.webp'; // Ungaloda same interior image asset path

const InsectProtection = () => {
  return (
    <section className="insect-protection-section py-1">
      <div className="container">
        {/* Swapped rows cleanly so image scales beautifully on stack arrays */}
        <div className="row align-items-center g-5  ">
          
          {/* --- LEFT COLUMN: TEXT CONTENT & CTA --- */}
          {/* FIXED: text-center for mobile layout, switches to text-md-start on larger screens */}
          <div className="col-12 col-md-6 text-center text-md-start ">
            <div className="insect-content-block pe-lg-4">
              
              <h6 className="brand-badge-gold text-uppercase mb-2 ssub">
                Good Look Home Decors
              </h6>
              
              <h2 className="insect-main-heading mb-4 stit">
                INSECT PROTECTION
              </h2>
              
              <p className="insect-desc-text fw-normal d-flex hanken-grotesk-font mb-4 justify-content-evenly sdes">
                GHD, with its buttery symbol, has been manufacturing high-quality, eco-friendly 
                insect screens for over 21 years. The GHD system is recognised as the leading 
                name in made-to-measure insect protection in Germany.
              </p>
              
              <p className="insect-desc-text fw-normal d-flex hanken-grotesk-font mb-5 justify-content-evenly sdes">
                As a GHD partner, we supply precision, made-to-measure frames for your doors and 
                windows to keep out unwelcome visitors. We specialize in providing reliable and 
                effective solutions to keep insects out while allowing fresh air and natural light 
                into your living spaces.
              </p>
              
              {/* Pushes button layout wrapper grid to match alignments natively */}
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="btn btn-light projects-cta-capsule-btn d-flex align-items-center gap-2">
                  <span className="manrope-font btn-text">Start Your Project</span>
                  <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN: IMAGE WITH INTERPOLATED FLOATING BADGE --- */}
          <div className="col-12 col-md-6">
            <div className="insect-image-relative-canvas">
              <img 
                src={insectImg} 
                alt="Insect Protection Screen" 
                className="img-fluid insect-display-img" 
              />
              
              {/* Floating Badge Box component overlayed onto bottom border edge as per image_45be94.webp */}
              <div className="floating-excellence-badge text-center">
                <h4 className="badge-serif-text mb-0">
                  21 Years of <br /> Engineering Excellence
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsectProtection;