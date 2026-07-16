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
                Every sliding door we install is a system, not just a panel, <br/>precision-engineered in stages, from profile selection to the final glide test.
              </p>
              <h2 className="features-main-title m-0 inter-font text-center text-md-start font-serif stit">
                Why uPVC Sliding <br /> Doors?
              </h2>
            </div>

            <div className="feature-item-card top-hero-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">01.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Smooth Multi-Track Glide Technology</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Effortless Everyday Motion
 Precision-engineered rollers and multi-chambered profiles let your door slide open with a single finger's touch no jamming, no sagging, no noise, even after years of daily use.
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
                 Peace, Sealed In
 Reinforced gasket seals and tight-fit tracks lock out street noise and draughts, so your balcony or patio door keeps the outside world exactly where it belongs outside.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">03.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Floor-to-Ceiling Natural Light</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Bring the Outdoors In
 Slim, high-strength profiles mean more glass and less frame flooding your living room or balcony with light while keeping the same thermal and weather performance intact.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">04.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Built for 25 Years, Guaranteed</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                A Door That Outlasts the Weather
 Coimbatore's sun, dust, and monsoons don't stand a chance. Our sliding doors carry a 25-year structural warranty install once, live worry-free for decades.
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
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Eco-Engineered Profiles</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Sustainable by Design
 Non-toxic, lead-free uPVC profiles that are fully recyclable, a sliding door that's as kind to your home as it is to the planet.
              </p>
            </div>

            {/* CARD 06 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start sdes">06.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start sdes">Every Space, Every Style</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start smin">
                Designed to Disappear or Define
 From slim-frame minimalist balconies to grand multi-panel living room openings, our sliding doors adapt to your architecture, sleek when you want subtlety, striking when you want a statement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;