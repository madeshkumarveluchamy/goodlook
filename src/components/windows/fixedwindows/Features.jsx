import React from 'react';
import '../../Main/css/Features.css';

// --- IMPORT FEATURE IMAGES ---
import featImg1 from '../../../assets/upvc1.webp'; 
import featImg2 from '../../../assets/upvc2.webp'; 
import featImg3 from '../../../assets/upvc3.webp'; 
import featImg4 from '../../../assets/upvc4.webp'; 
import featImg6 from '../../../assets/upvc5.webp'; 
import featImg7 from '../../../assets/upvc6.webp'; 

const Features = () => {
  return (
    <section className="features-section" id="upvc">
      <div className="container-fluid features-fluid-holder px-4 px-sm-4 px-md-5">
        <div className="features-main-flex-wrapper">
          
          {/* ================= FIRST BLOCK ROW: HERO HEADER + CARD 01 ================= */}
          <div className="features-layout-row row-type-top mb-5">
            <div className="feature-main-header-block text-center text-md-start">
              <span className="features-mini-badge text-uppercase tracking-widest d-block mb-2 inter-font text-center text-md-start manrope-font fw-bold ssub">
                How We Do It
              </span>
              <p className="features-sub-header-text mb-4 text-center text-md-start hanken-grutsek-font sdes">
                Every fixed window we install is engineered for <br/>one purpose, an uninterrupted view with zero compromise on protection.
              </p>
              <h2 className="features-main-title m-0 inter-font text-center text-md-start font-serif stit">
                Why uPVC Fixed<br />Windows?
              </h2>
            </div>

            <div className="feature-item-card top-hero-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">01.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Uninterrupted Views</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                No frames, no tracks, no obstructions just a clean sheet of glass that turns any wall into a view. Perfect for spaces where the outside is the whole point.
              </p>
            </div>
          </div>

          {/* ================= SECOND BLOCK ROW: THREE SLIM NARROW PANELS ================= */}
          <div className="features-layout-row row-type-middle mb-5">
            {/* CARD 02 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number d-block text-center text-md-start sdes">02.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg2} alt="Excellent Sound Insulation" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Maximum Light, Zero Draft</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Because there's nothing to open, the seal is airtight from day one. Enjoy sun-filled interiors without the heat gain, dust, or noise that comes through moving parts.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">03.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Silence, Sealed In</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                With no gaps or moving joints, fixed windows offer the tightest seal in our range, blocking outside noise more effectively than any window designed to open.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">04.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Built to Outlast — 25-Year Warranty</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Fewer moving parts mean fewer points of failure. Our fixed uPVC frames come with a 25-year structural warranty, built for decades of maintenance-free performance.
              </p>
            </div>
          </div>

          {/* ================= THIRD BLOCK ROW: EXACTLY CENTERED CARDS PACK ================= */}
          <div className="features-layout-row row-type-bottom">
            {/* CARD 05 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">05.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg6} alt="Eco-friendly materials" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">. Eco-Friendly by Design</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Crafted from non-toxic, recyclable uPVC profiles, a smarter, greener choice for facades, feature walls, and statement openings.
              </p>
            </div>

            {/* CARD 06 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">06.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Designed to Disappear</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Slim sightlines and a clean finish let the window vanish into your architecture, ideal for modern facades, double-height walls, and picture-window features where the frame should never compete with the view.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;