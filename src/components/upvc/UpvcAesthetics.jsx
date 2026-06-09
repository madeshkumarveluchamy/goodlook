import React from 'react';
import './css/UpvcAesthetics.css';

// --- IMPORT YOUR DESIGN RENDER IMAGE ---
import aestheticsImg from '../../assets/upvcframe2.png';

const UpvcAesthetics = () => {
  return (
    <section className="upvc-aesthetics-section bg-white text-dark" id="engineering-aesthetics">
      <div className="container-fluid aesthetics-canvas-holder px-3 px-sm-4 px-md-5">
        
        {/* Responsive flex alignment rule automatic-ah mobile screen views-la image-ai top-ku push pannidum */}
        <div className="row align-items-center g-4 g-xl-5 flex-column-reverse flex-lg-row">
          
          {/* ================= LEFT SIDE: RICH ARTICLE LITERARY DETAILS ================= */}
          <div className="col-12 col-lg-6 aesthetics-content-engine text-center text-lg-start pe-lg-4 pe-xl-5">
            
            <span className="aesthetics-mini-tag text-uppercase tracking-widest d-block mb-2 t text-center text-lg-start fw-bold manrope-font ssub">
              Engineering Aesthetics
            </span>
            
            <h2 className="aesthetics-main-title font-serif mb-4 text-center text-lg-start  hanken-grotesk-font stit">
              Shaping Your World:<br/> High-Quality uPVC for an Elevated Lifestyle
            </h2>

            <div className="aesthetics-paragraphs-stack d-flex flex-column gap-3 mt-4 hanken-grotesk-font fw-light text-muted">
              <p className="aesthetics-body-text m-0 text-center text-lg-start sdes">
                UPVC openable windows and doors are a popular choice for homeowners and businesses seeking functional, durable, and energy-efficient solutions. UPVC openable windows and doors offer long-term benefits in terms of energy efficiency, durability, security, and aesthetics, making them a wise investment for any property.
              </p>
              
              <p className="aesthetics-body-text m-0 text-center text-lg-start sdes">
                Energy Efficiency: UPVC openable windows and doors are known for their superior thermal insulation properties. The multi-chambered profiles and tight sealing mechanisms of UPVC systems help prevent heat transfer, keeping your space insulated and reducing energy consumption. This results in energy savings and lower utility bills.
              </p>
            </div>

          </div>

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

        </div>

      </div>
    </section>
  );
};

export default UpvcAesthetics;