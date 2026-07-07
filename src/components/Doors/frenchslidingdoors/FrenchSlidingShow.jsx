import React, { useRef, useEffect } from 'react';
import './css/FrenchSlidingShow.css'; // 🎯 பிக்ஸ்: சிஎஸ்எஸ் ஃபைல் பெயர் மாற்றப்பட்டுள்ளது

import uPVC_Frinch_Door_Images1 from '../../../assets/uPVC_Frinch_Sliding_Image (1).webp';
import uPVC_Frinch_Door_Images2 from '../../../assets/uPVC_Frinch_Sliding_Image (2).webp';
import uPVC_Frinch_Door_Images3 from '../../../assets/uPVC_Frinch_Sliding_Image (3).webp';
import uPVC_Frinch_Door_Images4 from '../../../assets/uPVC_Frinch_Sliding_Image (4).webp';
import uPVC_Frinch_Door_Images5 from '../../../assets/uPVC_Frinch_Sliding_Image (5).webp';
import uPVC_Frinch_Door_Images6 from '../../../assets/uPVC_Frinch_Sliding_Image (6).webp';
import uPVC_Frinch_Door_Images7 from '../../../assets/uPVC_Frinch_Sliding_Image (7).webp';
import uPVC_Frinch_Door_Images8 from '../../../assets/uPVC_Frinch_Sliding_Image (8).webp';
import uPVC_Frinch_Door_Images9 from '../../../assets/uPVC_Frinch_Sliding_Image (9).webp';

const FrenchSlidingShow = () => {
  const baseData = [
    { id: 1, badge: "GOOD LOOK HOME DECORS", title: "Golden Rod", image:  uPVC_Frinch_Door_Images1},
        { id: 2, badge: "GOOD LOOK HOME DECORS", title: "Black Rod", image: uPVC_Frinch_Door_Images2 },
        { id: 3, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images3 },
        { id: 4, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images4 },
        { id: 5, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images5 },
        { id: 6, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images6 },
        { id: 7, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images7 },
        { id: 8, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images8 },
        { id: 8, badge: "GOOD LOOK HOME DECORS", title: "Design Rod", image: uPVC_Frinch_Door_Images9 }
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

  // 📱 Mobile Touch Events (100% Fixed Now)
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
    <section className="frenchsliding-show-section py-5 overflow-hidden">
      <div className="container px-md-4">
        
        <div 
          className="frenchsliding-show-track-window"
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
          <div className="frenchsliding-show-inner-flex">
            {rodData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="frenchsliding-show-item-col">
                <div className="frenchsliding-show-product-card">
                  
                  <div className="frenchsliding-show-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={`${item.title} Premium curtains collections`} 
                      className="frenchsliding-show-product-img"
                      draggable="false" 
                    />
                  </div>

                  <div className="frenchsliding-show-info-box-overlay">
                    <span className="frenchsliding-show-brand-badge manrope-font ssub">{item.badge}</span>
                    <p className="frenchsliding-show-product-title m-0 font-serief sdes">{item.title}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="frenchsliding-slider-navigation-wrapper">
          <button className="frenchsliding-nav-btn frenchsliding-btn-prev" onClick={handlePrev} aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="frenchsliding-nav-btn frenchsliding-btn-next" onClick={handleNext} aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FrenchSlidingShow;