import React from 'react';
import './css/OpenableDetails.css';
import openableImg from '../../../assets/slidingstory.png';

const OpenableDetails = () => {
  return (
    <section className="openable-details-section py-5">
      <div className="container py-md-4">
        <div className="row align-items-center g-5 d-flex flex-column-reverse flex-md-row">
          
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
               uPVC Sliding Doors <br /> and Windows
              </h2>
              
              <p className="description-paragraph manrope-font mb-4 text-center text-md-start">
                UPVC sliding windows and doors are a popular choice for their sleek design, ease of use, and space-saving benefits. They offer several advantages that make them an excellent option for both residential and commercial spaces. UPVC sliding windows and doors offer a combination of style, functionality, energy efficiency, and durability. Whether you're looking to upgrade your home or commercial space, UPVC sliding windows and doors provide an excellent solution for modern and efficient living.
              </p>
              
              <p className="feature-paragraph manrope-font text-center text-md-start">
                Smooth Operation: Sliding windows and doors operate on a horizontal track, allowing them to slide open and closed effortlessly. This smooth gliding mechanism makes them easy to operate, requiring minimal effort to open and close. It also enables convenient access to outdoor spaces such as gardens, balconies, or patios.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenableDetails;