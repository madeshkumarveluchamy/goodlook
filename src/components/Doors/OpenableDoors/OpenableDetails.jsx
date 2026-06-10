import React from 'react';
import './css/OpenableDetails.css';
import openableImg from '../../../assets/openablestoryframe.png';

const OpenableDetails = () => {
  return (
    <section className="openable-details-section py-5">
      <div className="container py-md-4">
        <div className="row align-items-center d-flex flex-column-reverse flex-md-row g-5">
          
          {/* --- LEFT COLUMN: IMAGE BANNER --- */}
          <div className="col-12 col-md-6 text-center">
            <div className="image-frame-wrapper shadow-sm">
              <img 
                src={openableImg} 
                alt="Openable Windows and Doors" 
                className="img-fluid details-display-img" 
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN: TEXT CONTENT --- */}
          <div className="col-12 col-md-6">
            <div className="content-text-block ps-lg-4">
              <h6 className="brand-badge-title manrope-font text-uppercase mb-3 text-center text-md-start">
                Good Look Home Decors
              </h6>
              
              <h2 className="main-display-heading mb-4 text-center text-md-start">
               uPVC Openable<br /> Windows and Doors
              </h2>
              
              <p className="description-paragraph manrope-font mb-4 justify-content-evenly">
               UPVC openable windows and doors are a popular choice for homeowners and businesses seeking functional, durable, and energy-efficient solutions. UPVC openable windows and doors offer long-term benefits in terms of energy efficiency, durability, security, and aesthetics, making them a wise investment for any property.
              </p>
              
              <p className="feature-paragraph manrope-font justify-content-evenly">
               Energy Efficiency: UPVC openable windows and doors are known for their superior thermal insulation properties. The multi-chambered profiles and tight sealing mechanisms of UPVC systems help prevent heat transfer, keeping your space insulated and reducing energy consumption. This results in energy savings and lower utility bills.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenableDetails;