import React from 'react';
import './css/UpvcFeatures.css';

// --- IMPORT FEATURE IMAGES ---
import featImg1 from '../../assets/upvc1.webp'; 
import featImg2 from '../../assets/upvc2.webp'; 
import featImg3 from '../../assets/upvc3.webp'; 
import featImg4 from '../../assets/upvc4.webp'; 
import featImg6 from '../../assets/upvc5.webp'; 
import featImg7 from '../../assets/upvc6.webp'; 

const UpvcFeatures = () => {
  return (
    <section className="features-section" id="upvc">
      <div className="container-fluid features-fluid-holder px-4 px-sm-4 px-md-5">
        <div className="features-main-flex-wrapper">
          
          {/* ================= FIRST BLOCK ROW: HERO HEADER + CARD 01 ================= */}
          <div className="features-layout-row row-type-top mb-2">
            <div className="feature-main-header-block text-center text-md-start">
              <span className="features-mini-badge  text-uppercase tracking-widest d-block mb-2 manrope-font text-center text-md-start ssub">
                How We Do It
              </span>
              <p className="features-sub-header-text mb-4  text-center hanken-grotesk-font text-md-start sdes">
                Our work involves many intricate <br /> steps and stages.
              </p>
              <h2 className="features-main-title m-0 font-serif text-center text-md-start font-serif stit">
                Why uPVC Windows <br /> & Doors?
              </h2>
            </div>

            <div className="feature-item-card top-hero-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start manrope-font sdes">01.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font sdes">Energy Saving Technologies</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font smin">
                Advanced multi-chambered technology that creates a powerful thermal barrier. Keep your home comfortable year-round while significantly lowering your energy bills.
              </p>
            </div>
          </div>

          {/* ================= SECOND BLOCK ROW: THREE SLIM NARROW PANELS ================= */}
          <div className="features-layout-row row-type-middle mb-5">
            {/* CARD 02 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number d-block text-center text-md-start manrope-font sdes">02.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg2} alt="Excellent Sound Insulation" className="w-100 h-100 object-fit-cover" />
              </div> 
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font sdes">Excellent Sound Insulation</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font smin">
                Maximize natural light with our high-transmittance uPVC designs. Bring the outdoors in while maintaining superior thermal performance.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start manrope-font sdes">03.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font smin">High Light Transmittance</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font sdes">
                Details on color schemes, furniture, lighting placement, and technical layouts.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="feature-item-card middle-slim-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start manrope-font sdes">04.</span>
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font sdes">Durability 25 years warranty</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font smin">
                Built to last with a 25-year structural warranty. Invest in long-term resilience that defies the elements and stands the test of time.
              </p>
            </div>
          </div>

          {/* ================= THIRD BLOCK ROW: EXACTLY CENTERED CARDS PACK ================= */}
          <div className="features-layout-row row-type-bottom">
            {/* CARD 05 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start manrope-font sdes">05.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg6} alt="Eco-friendly materials" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font sdes">Eco-friendly materials</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font  smin">
                Eco-conscious engineering for a healthier home and a cleaner planet. Our non-toxic, sustainable uPVC profiles are designed for long-term ecological responsibility.
              </p>
            </div>

            {/* CARD 06 */}
            <div className="feature-item-card bottom-centered-card text-center text-md-start">
              <span className="card-serial-number inter-font d-block text-center text-md-start manrope-font sdes">06.</span>
              {/* FIXED: Uniform narrow profile height frame added */}
              <div className="feature-card-img-wrapper horizontal-narrow-frame mx-auto mx-md-0">
                <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
              </div>
              <h4 className="feature-card-title mt-3 mb-2 inter-font text-center text-md-start manrope-font sdes">Aesthetic Versatility</h4>
              <p className="feature-card-desc m-0 hanken-grotesk-font text-center text-md-start hanken-grotesk-font smin">
                Available in a wide range of styles, finishes, and configurations, our systems seamlessly integrate into any architectural design, from modern minimalist to classic luxury.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpvcFeatures;