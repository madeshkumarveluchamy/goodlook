import React from 'react';
import './css/UpvcAesthetics.css';

// --- IMPORT YOUR DESIGN RENDER IMAGE ---
import aestheticsImg from '../../assets/upvcprofile.webp';

const UpvcAesthetics = () => {
  return (
    <section className="upvc-aesthetics-section bg-white text-dark pt-5 mt-5" id="engineering-aesthetics ">
      <div className="container-fluid aesthetics-canvas-holder px-3 px-sm-4 px-md-5 ">
        
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
              Where Precision<br/> Meets Design 
            </h2>

            <div className="aesthetics-paragraphs-stack d-flex flex-column gap-3 mt-4 hanken-grotesk-font fw-light text-muted">
              <p className="aesthetics-body-text m-0  sdes">
                Every window tells a story of strength, style, and smart engineering, powered by Baydee UPVC. Baydee isn't just a UPVC profile, it's the backbone of some of the finest windows and doors being built today. As a large scale, fully integrated enterprise, Baydee spans everything from profile research and development to manufacturing, installation, and complete window-and-door value chain solutions.
              </p>
              
            <p className="aesthetics-body-text m-0 sdes">
                Behind that scale sits real infrastructure: a registered capital of ₹1,650+ crore (150 million Yuan), a 700,000 sq. m. campus, and a 200,000 sq. m. manufacturing facility powered by a team of over 1,200 professionals. This is the strength that stands behind three of the industry's most trusted names: BAYDEE profiles, the CROWN window and door system, and the TICHON window and door value chain service.
              </p>
            </div>

          </div>

          

        </div>

      </div>
    </section>
  );
};

export default UpvcAesthetics;