import React from 'react';
import './css/Story.css';
// Replace this with your actual local image file path from VS Code assets
import storyImg from '../../assets/storyframe.png'; 

const OurStory = () => {
  return (
    <section className="story-section bg-white d-flex align-items-center" id="story">
      <div className="container-fluid story-container px-3 px-sm-4 px-md-5">
        <div className="row align-items-center gy-5 m-0 w-100">
          
          {/* Left Column: Premium Square Framed Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start p-0 order-2 order-md-1">
            <div className="story-image-wrapper">
              <img 
                src={storyImg} 
                alt="Architectural view window to garden" 
                className="w-100 h-100 object-fit-cover shadow-sm"
              />
            </div>
          </div>

          {/* Right Column: Editorial Minimalist Content Text */}
          <div className="col-12 col-md-6 p-0 ps-md-4 ps-lg-5 order-1 order-md-2">
            <div className="story-content-block">
              
              <span className="story-badge text-uppercase tracking-widest fw-semibold d-block mb-2">
                Our Legacy
              </span>
              
              <div className="story-divider mb-4"></div>
              
              <h2 className="story-title font-serif mb-4">
                Twenty-one years of <br className="d-none d-lg-block" /> architectural excellence.
              </h2>
              
              <p className="story-description fw-light mb-4">
                At Good Look Home, we believe a window is more than a boundary; 
                it's a lens through which the world enters your private sanctuary. For 
                over two decades, we've pioneered the fusion of high-performance 
                UPVC engineering with timeless aesthetic sensibilities.
              </p>
              
              <button className="btn text-uppercase story-cta-btn fw-medium tracking-wider px-4 py-2.5">
                Our Story
              </button>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;