import React, { useState } from 'react';
import './css/StoryCategories.css';

// --- IMPORT YOUR MAIN INTERIOR IMAGE SETS ---
import defaultImg from '../../assets/storyframe4.png';

const StoryCategories = () => {
  // START STATE: -1 கொடுத்தா ஆரம்பத்துல எல்லா கன்டென்ட் டிராயரும் மூடியே இருக்கும்
  const [activeCategory, setActiveCategory] = useState(-1);

  const categoriesData = [
    { 
      title: "Openable & Sliding Doors and Windows", 
      desc: "Our premium openable and structural sliding frameworks offer maximized panoramic viewing angles combined with high-durability thermal layers insulation profiles.",
      image: defaultImg 
    },
    { 
      title: "Insect Protection & Stentering Frames", 
      desc: "Architectural mesh engineering integration designed to allow continuous natural ambient airflow while maintaining pristine pest protection boundaries flawlessly.",
      image: defaultImg 
    },
    { 
      title: "Hinged Frames for Doors & Windows", 
      desc: "Heavy-duty engineered hardware pivot points ensuring silent transitions, robust locking security matrix, and absolute weatherproof framing joints seal seals.",
      image: defaultImg 
    },
    { 
      title: "Roller Screens & Pleated Screens & Sliding System", 
      desc: "Sleek low-profile track mechanisms that retract completely from sightlines to merge your modern interior lounge effortlessly with the outdoors garden layout space.",
      image: defaultImg 
    },
    { 
      title: "Curtain Rods & Window Blinds", 
      desc: "Premium custom customized tracking controls and luxury anodized accents components to govern incoming daylight profiles with total minimalist aesthetic precision.",
      image: defaultImg 
    }
  ];

  const handleAccordionToggle = (idx) => {
    if (activeCategory === idx) {
      setActiveCategory(-1); // திரும்ப கிளிக் பண்ணா கன்டென்ட் மட்டும் மூடும், ஆனா இமேஜ் அப்படியே நிக்கும்!
    } else {
      setActiveCategory(idx); 
    }
  };

  return (
    <section className="product-categories-section bg-white text-dark" id="product-ranges">
      <div className="container">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center categories-main-heading mx-auto mb-5">
          <h2 className="cat-section-headline font-serif text-capitalize mb-3 stit">
            Innovation That Protects <br />Your Home
          </h2>
          <p className="cat-section-subdesc hanken-grotesk-font fw-light mx-auto sdes">
            We bring two decades of expertise to every installation, ensuring your home's mood is defined by quality, comfort, and precision-engineered uPVC solutions.
          </p>
        </div>

        {/* ================= INTEGRATED INTERACTIVE ROW CANVASES ================= */}
        <div className="row mt-5 align-items-start position-relative unified-categories-layout-grid">
          
          {/* LEFT COLUMN: DYNAMIC DESKTOP MEDIA ENGINE */}
          <div className="col-lg-5 d-none d-lg-block desktop-media-container-column">
            <div className="cat-view-image-frame rounded-3 overflow-hidden shadow-sm position-relative">
              {categoriesData.map((item, index) => {
                // RULE CONDITION: ஆரம்பத்துல (-1ஆ இருக்கும்போது) 0-வது இமேஜை மட்டும் காட்டு, மத்தபடி ஆக்டிவ் இமேஜை காட்டு!
                const isImageVisible = activeCategory === index || (activeCategory === -1 && index === 0);
                
                return (
                  <img 
                    key={index}
                    src={item.image} 
                    alt={item.title} 
                    className="preloaded-cat-img position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    style={{
                      opacity: isImageVisible ? 1 : 0,
                      zIndex: isImageVisible ? 2 : 1
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: HYBRID INTERACTIVE LISTS */}
          <div className="col-12 col-lg-7 ps-lg-5 lists-container-column">
            <div className="cat-interactive-list-stack d-flex flex-column gap-3">
              {categoriesData.map((category, idx) => (
                <div key={idx} className="cat-row-node-wrapper">
                  
                  {/* List Header Toggle Bar Trigger */}
                  <div 
                    className={`cat-list-row-item d-flex align-items-center justify-content-between ${
                      activeCategory === idx ? 'cat-row-active' : ''
                    }`}
                    onClick={() => handleAccordionToggle(idx)}
                  >
                    <div className="d-flex align-items-center gap-4 inner-title-icon-box">
                      <span className="cat-asymmetric-deco-cross">❖</span>
                      <h4 className="cat-row-item-title m-0 fw-semibold font-geist">
                        {category.title}
                      </h4>
                    </div>
                    
                    {/* Circle Vector Indicator Arrow Symbol */}
                    
                       <span  className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
                    
                  </div>

                  {/* UNIVERSAL ADAPTIVE DRAWER - CONTENT ONLY */}
                  <div className={`cat-adaptive-fluid-drawer ${
                    activeCategory === idx ? 'cat-drawer-open' : 'cat-drawer-closed'
                  }`}>
                    <div className="cat-drawer-interior-padding">
                      <p className="cat-drawer-desc-text hanken-grotesk-font">
                        {category.desc}
                      </p>
                      
                      {/* Mobile View Image Block */}
                      <div className="cat-drawer-media-box px-2 d-lg-none mt-3">
                        <img 
                          src={category.image} 
                          alt={category.title} 
                          className="img-fluid rounded shadow-sm mobile-category-render-img" 
                        />
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StoryCategories;