import React, { useRef, useEffect } from 'react';
import './css/VentilatorWindowsShow.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது

import uPVC_Ventilator_Windows_Image1 from '../../../assets/uPVC_Ventilator_Windows_Images (1).webp';
import uPVC_Ventilator_Windows_Image2 from '../../../assets/uPVC_Ventilator_Windows_Images (2).webp';
import uPVC_Ventilator_Windows_Image3 from '../../../assets/uPVC_Ventilator_Windows_Images (3).webp';
import uPVC_Ventilator_Windows_Image4 from '../../../assets/uPVC_Ventilator_Windows_Images (5).webp';
import uPVC_Ventilator_Windows_Image5 from '../../../assets/uPVC_Ventilator_Windows_Images (6).webp';
import uPVC_Ventilator_Windows_Image6 from '../../../assets/uPVC_Ventilator_Windows_Images (7).webp';
import uPVC_Ventilator_Windows_Image7 from '../../../assets/uPVC_Ventilator_Windows_Images (8).webp';
import uPVC_Ventilator_Windows_Image8 from '../../../assets/uPVC_Ventilator_Windows_Images (9).webp';
import uPVC_Ventilator_Windows_Image9 from '../../../assets/uPVC_Ventilator_Windows_Images (10).webp';

const VentilatorWindowsShow = () => {
  const baseData = [
    { id: 1, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image1 },
    { id: 2, badge: "uPVC Windows", title: "uPVC Ventilator Windows",  image: uPVC_Ventilator_Windows_Image2 },
    { id: 3, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image3 },
    { id: 4, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image4 },
    { id: 5, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image5 },
    { id: 6, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image6 },
    { id: 7, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image7 },
    { id: 8, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image8 },
    { id: 9, badge: "uPVC Windows", title: "uPVC Ventilator Windows", image: uPVC_Ventilator_Windows_Image9 },
  ];

  const rodData = [...baseData, ...baseData, ...baseData, ...baseData, ...baseData];
  
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null); 
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftState = useRef(0);
  const isHovered = useRef(false);
  const isButtonPaused = useRef(false); 

  const autoPlay = () => {
    if (!scrollRef.current) {
      animationRef.current = requestAnimationFrame(autoPlay);
      return;
    }

    if (isDown.current || isHovered.current || isButtonPaused.current) {
      animationRef.current = requestAnimationFrame(autoPlay);
      return;
    }

    const slider = scrollRef.current;
    slider.scrollLeft += 1; 

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(autoPlay);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoPlay);
    return () => {
      cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // 💻 Desktop Mouse Events
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftState.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    isHovered.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeftState.current - walk;
  };

  // 📱 Mobile Touch Events
  const handleTouchStart = (e) => {
    isDown.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftState.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDown.current) return;
    if (e.cancelable) e.preventDefault(); 
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeftState.current - walk;
  };

  const triggerButtonPause = () => {
    isButtonPaused.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      isButtonPaused.current = false;
    }, 2000);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      triggerButtonPause();
      const stepWidth = window.innerWidth <= 768 ? 310 : 410;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - stepWidth, 
        behavior: 'smooth'
      });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      triggerButtonPause();
      if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
        scrollRef.current.scrollLeft = 0;
      }
      const stepWidth = window.innerWidth <= 768 ? 310 : 410;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + stepWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="ventilatorwindows-show-section py-5 overflow-hidden">
      <div className="container px-md-4">
        
        <div 
          className="ventilatorwindows-show-track-window"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}  
          onTouchEnd={handleMouseUp}      
          onTouchMove={handleTouchMove}    
          onMouseEnter={() => { isHovered.current = true; }}
          onMouseLeave={() => { isHovered.current = false; }}
        >
          <div className="ventilatorwindows-show-inner-flex">
            {rodData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="ventilatorwindows-show-item-col">
                <div className="ventilatorwindows-show-product-card">
                  
                  <div className="ventilatorwindows-show-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={`${item.title} Premium curtains collections`} 
                      className="ventilatorwindows-show-product-img"
                      draggable="false" 
                    />
                  </div>

                  <div className="ventilatorwindows-show-info-box-overlay">
                    <span className="ventilatorwindows-show-brand-badge manrope-font ssub">{item.badge}</span>
                    <p className="ventilatorwindows-show-product-title m-0 font-serief sdes">{item.title}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="ventilatorwindows-slider-navigation-wrapper">
          <button className="ventilatorwindows-nav-btn ventilatorwindows-btn-prev" onClick={handlePrev} aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="ventilatorwindows-nav-btn ventilatorwindows-btn-next" onClick={handleNext} aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default VentilatorWindowsShow;