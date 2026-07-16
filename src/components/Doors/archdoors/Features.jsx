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
                Precision curves, seamless strength.
 Every arch door is shaped, reinforced, and fitted <br/> with the same care we bring to every uPVC system, engineered in stages, perfected in detail.
              </p>
              <h2 className="features-main-title m-0 inter-font text-center text-md-start font-serif stit">
                Why uPVC Arch<br />Doors?
              </h2>
            </div>

            <div className="feature-item-card top-hero-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">01.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Energy Saving Technologies</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Multi-chambered profiles trace the curve without losing thermal performance, so the elegant shape never compromises the seal. Stay comfortable indoors while cutting energy costs, arch and all.
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
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Excellent Sound Insulation</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Curved doesn't mean compromised. Our arch frames hold the same dense, multi-layered structure as our straight-line systems, keeping outside noise exactly that outside.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">03.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">High Light Transmittance</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                The arch shape is built to frame light, not block it. High-transmittance glazing lets the curve draw in natural brightness, turning your entryway into a feature, not just a function.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">04.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Durability 25 years warranty</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Curved profiles demand tighter engineering, and ours are built for it. A 25-year structural warranty means the arch that welcomes you today still holds its shape decades from now.
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
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Eco-friendly materials</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Non-toxic, sustainable uPVC shaped into an arch without losing an ounce of its eco-conscious engineering. Beauty and responsibility, in the same curve.
              </p>
            </div>

            {/* CARD 06 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">06.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Aesthetic Versatility</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                From grand colonial arches to soft modern curves, our systems adapt to the architectural language of your home, a single design element that instantly elevates the entrance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;