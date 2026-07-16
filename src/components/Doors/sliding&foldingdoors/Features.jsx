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
             How We Craft It  
              </span>
              <p className="features-sub-header-text mb-4 text-center text-md-start hanken-grutsek-font sdes">
                Every folding door we install is the result of precise engineering,<br/>
 from panel alignment to weatherproof sealing, each stage is built for a flawless fold.
              </p>
              <h2 className="features-main-title m-0 inter-font text-center text-md-start font-serif stit">
                Why uPVC Folding <br />Doors?
              </h2>
            </div>

            <div className="feature-item-card top-hero-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">01.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Energy-Efficient by Design</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Multi-chambered profiles form a continuous thermal seal across every panel, so even a fully foldable door keeps your interiors cool in summer and warm in winter, with the energy bills to prove it.
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
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Whisper-Quiet Living</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Overlapping panel seals block outside noise without blocking the view. Fold it open for fresh air, close it for a quiet, insulated space, the choice is yours, instantly.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">03.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Walls of Natural Light</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Slim uPVC frames and expansive glass panels turn your folding door into a wall of light. Open it fully, and your living room becomes the patio; close it, and the view stays uninterrupted.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">04.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Built to Fold for 25 Years</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                 Reinforced hinges, heavy-duty rollers, and a 25-year structural warranty mean your door folds as smoothly on year twenty as it did on day one.
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
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Eco-Conscious Engineering</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Non-toxic, fully recyclable uPVC profiles mean a folding door that opens up your space without costing the planet.
              </p>
            </div>

            {/* CARD 06 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">06.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Space That Bends to Your Style</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                From wide balcony openings to full-width patio walls, our folding systems adapt to any layout and finish modern, minimal, or classic, while giving you complete control over how open your space feels.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;