import React from 'react';
import './css/UpvcAesthetics.css';

// --- IMPORT YOUR DESIGN RENDER IMAGE ---
import aestheticsImg from '../../assets/upvcprofile.webp';

const UpvcAesthetics = () => {
  return (
    <section className="upvc-aesthetics-section bg-white text-dark" id="engineering-aesthetics">
      <div className="container-fluid aesthetics-canvas-holder px-3 px-sm-4 px-md-5">
        
        {/* Responsive flex alignment rule automatic-ah mobile screen views-la image-ai top-ku push pannidum */}
        <div className="row align-items-center g-4 g-xl-5 d-flex flex-column-reverse flex-lg-row-reverse">
            
          {/* ================= RIGHT SIDE: INDUSTRIAL SLIDING GLASS WINDOW IMAGE ================= */}
          <div className="col-12 col-lg-6 aesthetics-image-engine mb-3 mb-lg-0">
            <div className="aesthetics-img-wrapper rounded-1 overflow-hidden shadow-sm">
              <img 
                src={aestheticsImg} 
                alt="Minimalist design interior view showcasing luxury modern uPVC openable terrace glass doors" 
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          {/* ================= LEFT SIDE: RICH ARTICLE LITERARY DETAILS ================= */}
          <div className="col-12 col-lg-6 aesthetics-content-engine text-center text-lg-start pe-lg-4 pe-xl-5">
            
            <span className="aesthetics-mini-tag text-uppercase tracking-widest d-block mb-2 t text-center text-lg-start fw-bold manrope-font ssub">
              Engineering Aesthetics
            </span>
            
            <h2 className="aesthetics-main-title font-serif mb-4 text-center text-lg-start  hanken-grotesk-font stit">
              Shaping Your World:<br/> High-Quality uPVC for an Elevated Lifestyle
            </h2>

            <div className="aesthetics-paragraphs-stack d-flex flex-column gap-3 mt-4 hanken-grotesk-font fw-light text-muted">
              <p className="aesthetics-body-text m-0  sdes">
                Baydee UPVC profiles company is a large- scale comprehensive enterprise integrating UPVC profile research and development, product, and deals services, high- end window and door system product and installation, and window and door value chain service system affair.
              </p>
              
            <p className="aesthetics-body-text m-0 sdes">
                The company has a registered capital of 150 million Yuan, covers an area of 700,000 square measures, and has a plant of 200,000 square measures. It has further than 1,200 employees, and owns BAYDEE profiles, CROWN window and door system, TICHON window and door value chain service system and other well- known brands in the industry
              </p>
            </div>

          </div>

          

        </div>

      </div>
    </section>
  );
};

export default UpvcAesthetics;