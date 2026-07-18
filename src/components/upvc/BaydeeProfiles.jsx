import React from 'react';
import './css/BaydeeProfiles.css';

// --- IMPORT YOUR DESIGN IMAGES ---
import baydeeHeaderLogo from '../../assets/baydee.webp'; 
import upvcCollection1 from '../../assets/upvcCollection (1).webp';
import upvcCollection2 from '../../assets/upvcCollection (2).webp';
import upvcCollection3 from '../../assets/upvcCollection (3).webp';
import upvcCollection4 from '../../assets/upvcCollection (4).webp';
import upvcCollection5 from '../../assets/upvcCollection (5-1).webp'; 
import upvcCollection6 from '../../assets/upvcCollection (6).webp'; 
import upvcCollection7 from '../../assets/upvcCollection (7).webp'; 

const BaydeeProfiles = () => {
  const collectionsData = [
    { title: "65 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection2 },
    { title: "112 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection3 },
    { title: "92 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection1 },
    { title: "88 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection4 },
    { title: "80 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection5 },
    { title: "70 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection7 },
    { title: "60 Series uPVC profile", tag: "uPVC BAYDEE", image: upvcCollection6 },
  ];

  return (
    <section className="baydee-profiles-section bg-white text-dark" id="baydee-showcase">
      <div className="container-fluid baydee-canvas-holder   px-3 px-sm-4 px-md-5">
        
        {/* ================= TOP COMPONENT SHOWCASE BLOCK ================= */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 pb-4 upper-baydee-flex-row d-flex flex-column flex-column-reverse flex-md-row">
           <div className="col-12 col-lg-6 baydee-top-right">
            <div className="baydee-main-feature-box rounded-3 position-relative pb-4 ps-4">
              
              {/* PLAIN MINIMALIST TOP WORDING LABEL LINK (NO BOX/BACKGROUND SURFACE) */}
              <div >
              <p className="w-100 baydee-clean-top-label m-0 fw-semibold font-serief fw-normal pb-2 text-center text-md-start">
                Windows & Doors Built to Outlast the Weather 
              </p>
              </div>
              <div className="baydee-image-container rounded-3 overflow-hidden shadow-sm ">
                <img 
                  src={upvcCollection1} 
                  alt="Baydee precision engineered uPVC profile closeup showcase" 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

            </div>
          </div> 
          {/* TOP LEFT PANEL: COMBINED LOGO IMAGE + HEADLINE */}
          <div className="col-12 col-lg-6 baydee-top-left text-center text-lg-start">
            <span className="baydee-auth-badge text-uppercase tracking-wider d-block mb-3 manrope-font fw-bold color-yellow ssub">
              AUTHORISED BAYDEE DEALER 
            </span>
            
            <div className="baydee-logo-graphics-holder mx-auto mx-lg-0 mb-4">
              <img 
                src={baydeeHeaderLogo} 
                alt="Baydee Authorised Dealer Logo and Wording Combined" 
                className="baydee-brand-actual-logo img-fluid object-fit-contain"
              />
            </div>

            <h2 className="baydee-branding-headline font-serif mb-0 text-center text-lg-start stit">
              Genuine Baydee UPVC systems, expertly fitted, because your home deserves more than a quick fix.
            </h2>
          </div>

          {/* TOP RIGHT PANEL: PROFILE CLOSEUP FRAME */}
        

        </div>

        {/* ================= MIDDLE SECTION HEADERS BLOCK ================= */}
        <div className="text-center baydee-grid-header mx-auto my-3 pt-0 pt-md-3">
          <h2 className="baydee-grid-headline font-serif text-capitalize mb-3 stit">
            Baydee uPVC Profiles
          </h2>
          <p className="baydee-grid-subdesc hanken-grotesk-font fw-light text-muted mx-auto hanken-grotesk-font sdes">
            Engineered for strength, built to last. Baydee brings world-class uPVC profile technology to every window and door we install, combining precision manufacturing with a complete design-to-installation experience, so your home gets performance and style that stands the test of time.
          </p>
        </div>

        {/* ================= BOTTOM METRICS: 5-CARD GALLERY ================= */}
        <div className="row g-4 justify-content-center bottom-collection-gallery-row dynamic-five-cards-pipeline">
          {collectionsData.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 custom-five-col profile-variant-card-col">
              <div className="profile-variant-card bg-white d-flex flex-column h-100">
                
                <div className="variant-image-holder-box rounded-1 overflow-hidden mb-3 bg-light shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100 h-100 object-fit-cover variant-zoom-interaction-img" 
                  />
                </div>

                <div className="variant-card-details text-start px-1 mt-1">
                  <span className="variant-mini-tag text-uppercase tracking-widest d-block mb-1 manrope-font fw-bold color-yellow ssub">
                    {item.tag}
                  </span>
                  <h5 className="variant-card-title m-0 inter-font text-capitalize fw-semibold text-dark font-serif sdes">
                    {item.title}
                  </h5>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BaydeeProfiles;