import React from 'react';
import './css/Features.css';

// --- IMPORT YOUR 6 SPECIFIC FEATURE IMAGES HERE ---
import featImg1 from '../../assets/upvc1.png'; // Energy Saving
import featImg2 from '../../assets/upvc2.png'; // Sound Insulation
import featImg3 from '../../assets/upvc3.png'; // Light Transmittance
import featImg4 from '../../assets/upvc4.png'; // Durability
import featImg6 from '../../assets/upvc5.png'; // Eco-friendly (Note: skips 05 to match your UI)
import featImg7 from '../../assets/upvc6.png'; // Aesthetic Versatility

const Features = () => {
  return (
    <section className="features-section" id="upvc">
      <div className="container-fluid features-fluid-holder px-3 px-sm-4 px-md-5">
        <div className="features-grid-layout">
          
          {/* ================= LEFT MAIN HERO HEADING ================= */}
          <div className="feature-main-header-block">
            <span className="features-mini-badge text-uppercase tracking-widest d-block mb-2">
              How We Do It
            </span>
            <p className="features-sub-header-text mb-4">
              Our work involves many intricate <br /> steps and stages.
            </p>
            <h2 className="features-main-title m-0">
              Why uPVC Windows <br /> & Doors?
            </h2>
          </div>

          {/* ================= CARD 01: ENERGY SAVING ================= */}
          <div className="feature-item-card grid-area-01">
            <span className="card-serial-number">01.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg1} alt="Energy Saving Technologies" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">Energy Saving Technologies</h4>
            <p className="feature-card-desc m-0">
              Advanced multi-chambered technology that creates a powerful thermal barrier. Keep your home comfortable year-round while significantly lowering your energy bills.
            </p>
          </div>

          {/* ================= CARD 02: SOUND INSULATION ================= */}
          <div className="feature-item-card grid-area-02">
            <span className="card-serial-number">02.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg2} alt="Excellent Sound Insulation" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">Excellent Sound Insulation</h4>
            <p className="feature-card-desc m-0">
              Maximize natural light with our high-transmittance uPVC designs. Bring the outdoors in while maintaining superior thermal performance.
            </p>
          </div>

          {/* ================= CARD 03: LIGHT TRANSMITTANCE ================= */}
          <div className="feature-item-card grid-area-03">
            <span className="card-serial-number">03.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg3} alt="High Light Transmittance" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">High Light Transmittance</h4>
            <p className="feature-card-desc m-0">
              Details on color schemes, furniture, lighting placement, and technical layouts.
            </p>
          </div>

          {/* ================= CARD 04: DURABILITY ================= */}
          <div className="feature-item-card grid-area-04">
            <span className="card-serial-number">04.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg4} alt="Durability 25 years warranty" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">Durability 25 years warranty</h4>
            <p className="feature-card-desc m-0">
              Built to last with a 25-year structural warranty. Invest in long-term resilience that defies the elements and stands the test of time.
            </p>
          </div>

          {/* ================= CARD 06: ECO-FRIENDLY ================= */}
          <div className="feature-item-card grid-area-06">
            <span className="card-serial-number">05.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg6} alt="Eco-friendly materials" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">Eco-friendly materials</h4>
            <p className="feature-card-desc m-0">
              Eco-conscious engineering for a healthier home and a cleaner planet. Our non-toxic, sustainable uPVC profiles are designed for long-term ecological responsibility.
            </p>
          </div>

          {/* ================= CARD 07: AESTHETIC VERSATILITY ================= */}
          <div className="feature-item-card grid-area-07">
            <span className="card-serial-number">06.</span>
            <div className="feature-card-img-wrapper">
              <img src={featImg7} alt="Aesthetic Versatility" className="w-100 h-100 object-fit-cover" />
            </div>
            <h4 className="feature-card-title mt-3 mb-2">Aesthetic Versatility</h4>
            <p className="feature-card-desc m-0">
              Available in a wide range of styles, finishes, and configurations, our systems seamlessly integrate into any architectural design, from modern minimalist to classic luxury.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;