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
                Every door we craft goes through precision engineering, careful fitting, and rigorous quality checks,<br/> because a door isn't just an entry point, it's your home's first line of defence.
              </p>
              <h2 className="features-main-title m-0 inter-font text-center text-md-start font-serif stit">
                Why uPVC Casement <br /> Doors?
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
                Our multi-chambered profile design locks in a powerful thermal seal at every hinge and edge. Keep interiors cool in summer and warm in winter, while your energy bills stay refreshingly low.
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
                Layered glazing and airtight seals turn your doorway into a sound barrier, not a sound leak. Shut out traffic, construction, and street noise, and let your home stay peaceful.
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
                Slim profiles and expansive glass panels mean your casement door doesn't just open your home, it opens up the view. Enjoy natural daylight streaming in without compromising on insulation.
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
                Engineered to outlast extreme heat, heavy rain, and daily wear. Our casement doors carry a 25-year structural warranty, so what you install today still stands strong decades from now.
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
                Crafted from non-toxic, fully recyclable uPVC profiles — no harmful emissions, no compromise on strength. A door that protects your home and respects the planet in equal measure.
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
                From sleek modern frames to classic elegant finishes, our casement doors adapt to any architectural style, matching your home's character, not the other way around.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;