import React from 'react';
import './css/Story.css';
// Replace this with your actual local image file path from VS Code assets
import storyImg from '../../assets/profilepicture.webp'; 
import {Link} from "react-router-dom"

const OurStory = () => {
  return (
    <section className="story-section bg-white d-flex align-items-center" id="story">
      <div className="container-fluid story-container px-3 px-sm-4 px-md-5">
        <div className="row align-items-center gy-5 m-0 w-100">
          
          {/* Left Column: Premium Square Framed Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-center p-0 order-2 order-md-1">
            
            <div className="story-image-wrapper">
              <img 
                src={storyImg} 
                alt="Architectural view window to garden" 
                className="w-100 h-100 object-fit-cover shadow-sm"
              />
            </div>
           
          </div>

          {/* Right Column: Editorial Minimalist Content Text */}
          <div className="col-12 col-md-6 p-0 ps-md-4 ps-lg-5 order-1 order-md-2 d-flex justify-content-center justify-content-md-center">
            <div className="story-content-block d-flex flex-column align-items-center align-items-md-start">
              
              <span className="story-badge text-uppercase tracking-widest fw-semibold d-block mb-2 manrope-font text-center ssub">
                Our Legacy
              </span>
              
              <div className="story-divider mb-4"></div>
              
              <h2 className="story-title font-serif mb-4 text-center text-md-start stit">
               Twenty Four years of<br className="d-none d-lg-block" /> Manufacturing Better Windows, Doors And Comfort. 
              </h2>
              
              <p className="story-description fw-normal mb-4 hanken-grotesk-font text-center text-md-start sdes">
                A home should welcome the monsoon breeze, morning light and fresh air while keeping
mosquitoes, dust and unwanted noise outside. Since 2002, Good Look Home has built
its name on precision engineered uPVC windows and doors in Coimbatore, along with
GHD certified insect screens that blend seamlessly with your architecture, creating
comfortable, secure and stylish spaces for modern homes.
              </p>
              
              <Link to="/our-story" className="text-decoration-none"><button className="btn text-uppercase story-cta-btn fw-medium tracking-wider px-4 py-2.5 ">
                <span className="manrope-font story-bttn">Our Story</span>
              </button></Link>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;