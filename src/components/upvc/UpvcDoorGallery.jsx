import React from 'react';
import './css/UpvcDoorGallery.css';

// --- IMPORT YOUR SPECIFIC DOOR PROFILE RENDER ASSETS ---
import upvcDoor1 from '../../assets/upvcdoor1.webp';
import upvcDoor2 from '../../assets/upvcdoor2.webp';
import upvcDoor3 from '../../assets/upvcdoor3.webp';
import upvcDoor4 from '../../assets/upvcdoor4.webp';

const UpvcDoorsGallery = () => {
  const doorsData = [
    { title: "Sun Room lighting roof curtain wall", tag: "uPVC BAYDEE", image: upvcDoor1 },
    { title: "Lifting sliding door", tag: "uPVC BAYDEE", image: upvcDoor2 },
    { title: "Dimming comfort window", tag: "uPVC BAYDEE", image: upvcDoor3 },
    { title: "Barrier-free mute door", tag: "uPVC BAYDEE", image: upvcDoor4 }
  ];

  return (
    <section className="upvc-doors-gallery-section bg-white text-dark" id="doors-collection">
      <div className="container-fluid doors-gallery-holder px-3 px-sm-4 px-md-5">
        
        {/* ================= MAIN TOP LAYOUT MAIN HEADINGS ================= */}
        <div className="text-center doors-gallery-header mx-auto mb-5 pb-2">
          <h2 className="doors-main-headline font-serif text-capitalize mb-3 stit">
            UPVC Windows & Doors
          </h2>
          <p className="doors-subdesc hanken-grotesk-font fw-light text-muted mx-auto sdes">
            Engineered for Coimbatore's climate and built to last decades, our uPVC windows and doors combine German-inspired profile technology with precision manufacturing. As a trusted Baydee partner, we bring you weatherproof, energy-efficient, and low-maintenance window systems that keep your home cooler, quieter, and more secure, without ever needing a repaint. 
          </p>
        </div>

        {/* ================= INTEGRATED 4-COLUMN SYMMETRIC RENDER DISPLAY GRID ================= */}
        {/* Mobile columns lines match cleanly text-center via conditional layouts metrics configuration */}
        <div className="row g-4 justify-content-center doors-row-cards-matrix">
          {doorsData.map((door, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 door-variant-card-col">
              <div className="door-variant-profile-card bg-white d-flex flex-column h-100">
                
                {/* Visual profile frame container box logic wrapper */}
                <div className="door-image-viewport rounded-1 overflow-hidden mb-3 bg-light shadow-sm">
                  <img 
                    src={door.image} 
                    alt={door.title} 
                    className="w-100 h-100 object-fit-cover door-zoom-interaction-img" 
                  />
                </div>

                {/* Typography block descriptors details mapping content paths metadata */}
                <div className="door-card-metadata px-1 mt-1">
                  <span className="door-mini-brand-tag text-uppercase tracking-widest d-block mb-1 manrope-font fw-bold ssub">
                    {door.tag}
                  </span>
                  <h5 className="door-card-headline m-0 hanken-grotesk-font text-capitalize fw-normal text-dark sdes">
                    {door.title}
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

export default UpvcDoorsGallery;