import React from 'react';
import './css/OpenableDetails.css';
import openableImg from '../../../assets/leftstory.png';

const OpenableDetails = () => {
  return (
    <section className="openable-details-section py-5">
      <div className="container py-md-4">
        <div className="row d-flex flex-column-reverse flex-md-row  align-items-center g-5">
          
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
                uPVC Lift or Sliding <br /> Windows and Doors 
              </h2>
              
              <p className="description-paragraph manrope-font mb-4 justify-content-evenly">
               Lift UPVC windows and doors, also known as sliding and lifting windows and doors, are a modern and versatile option for enhancing the aesthetics and functionality of your space. Lift UPVC windows and doors offer a perfect blend of traditional aesthetics, modern functionality, and energy efficiency. Whether you're renovating a period property or seeking a classic touch for a new building, lift UPVC windows and doors provide an elegant solution that combines style, convenience, and performance.
              </p>
              
              <p className="feature-paragraph manrope-font justify-content-evenly">
                Innovative Design: Lift UPVC windows and doors feature a unique design that allows the sashes to slide horizontally and lift vertically. This dual functionality provides flexibility in terms of ventilation and access to outdoor areas. You can slide the sashes horizontally for partial opening or lift them up entirely for maximum airflow and unobstructed views.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenableDetails;