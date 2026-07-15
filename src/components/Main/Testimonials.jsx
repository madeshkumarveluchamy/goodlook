import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/Testimonials.css';

import reviewUserImg from '../../assets/quality1.webp'; 

const Testimonials = () => {
  const baseTestimonials = [
    {
      id: 1,
      image: reviewUserImg,
      text: "Stunning designs and impeccable attention to detail. Truly premium decor that turns any house into a beautiful home. I couldn’t be happier with how these pieces transformed my space.",
      author: "Team Kriya - Coimbatore"
    },
    {
      id: 2,
      image: reviewUserImg,
      text: "The uPVC windows have completely soundproofed our living room. The engineering quality is exceptional, and the minimalist borders look incredibly clean and luxury.",
      author: "Dheena - Chennai"
    },
    {
      id: 3,
      image: reviewUserImg,
      text: "Exceptional service from design mapping to final structural assembly. Their architectural focus ensures form perfectly aligns with long-term weather durability.",
      author: "Anand - Bangalore"
    }
  ];

  const testimonialsData = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

  return (
    <section className="testimonials-section" id="reviews">
      <div className="container-fluid p-0">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center testimonial-header mb-5">
          <h2 className="testimonial-main-title font-serif m-0 stit">What Our Clients Say</h2>
        </div>

        {/* ================= DYNAMIC INFINITE CAROUSEL FRAME ================= */}
        <div className="slider-outer-carousel-container position-relative">
          
          <button className="custom-swiper-arrow swiper-prev-node" aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          
          <button className="custom-swiper-arrow swiper-next-node" aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            observer={true}
            observeParents={true}
            slidetoclickedslides="true" 
            speed={600} 
            navigation={{
              prevEl: '.swiper-prev-node',
              nextEl: '.swiper-next-node',
            }}
            pagination={{ 
              el: '.custom-dots-wrapper',
              clickable: true 
            }}
            className="testimonials-swiper-instance"
          >
            {testimonialsData.map((item, index) => (
              <SwiperSlide key={index} className="testimonial-swiper-slide-node">
                <div className="testimonial-core-card bg-white text-center d-flex flex-column align-items-center justify-content-center">
                  
                  <div className="client-avatar-circle-frame overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt="Installation tracking snapshot" 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  <p className="client-review-statement-text fw-light mb-4 hanken-grotesk-font sdes">
                    {item.text}
                  </p>

                  <span className="client-author-signature fw-medium text-muted text-uppercase tracking-wider jost-font ssub">
                    {item.author}
                  </span>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          

        </div>

      </div>
    </section>
  );
};

export default Testimonials;