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
               Twenty-one years of<br className="d-none d-lg-block" /> keeping the outside beautiful and the inside undisturbed. 
              </h2>
              
              <p className="story-description fw-normal mb-4 hanken-grotesk-font text-center text-md-start sdes">
                A home should let in the monsoon breeze, not the mosquitoes. The morning light, not the noise.
Since 2003 (adjust year), Good Look Home has built its name on that exact balance of precision
engineered UPVC frames and GHD certified insect screens that disappear into your
architecture, so all you notice is the calm they create.
              </p>
              
              <Link to="/story" className="text-decoration-none"><button className="btn text-uppercase story-cta-btn fw-medium tracking-wider px-4 py-2.5 ">
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