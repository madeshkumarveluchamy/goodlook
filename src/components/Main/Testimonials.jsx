import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/Testimonials.css';

import reviewUserImg1 from '../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (7).webp'; 
import reviewUserImg2 from '../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (4).webp'; 
import reviewUserImg3 from '../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors_banner (2).webp'; 
import reviewUserImg4 from '../../assets/uPVC_Sliding_Folding_Door_Images (3).webp'; 
import reviewUserImg5 from '../../assets/uPVC_Arc_ Door_Images (11).webp'; 

const Testimonials = () => {
  const baseTestimonials = [
   {
      id: 1,
      image: reviewUserImg1, // Hinged Mosquito Net Doors
      text: "The hinged mosquito net doors are fantastic! They are very sturdy, easy to use, and completely keep the bugs out without blocking the natural breeze. Highly recommended for main doors.",
      author: "Shakthishwaran - Coimbatore"
    },
    {
      id: 2,
      image: reviewUserImg2, // Pleated Mosquito Net Doors
      text: "We absolutely love the pleated mosquito nets. They fold away so neatly when not in use, saving a lot of space, and look very modern and elegant on our balcony doors.",
      author: "Dheena - Peelamedu"
    },
    {
      id: 3,
      image: reviewUserImg3, // Hinged Mosquito Net Doors (Banner)
      text: "Excellent installation of the hinged mosquito nets. They fit perfectly, and the mesh quality is highly durable to withstand daily use. Great service by the team!",
      author: "Anand - Vadavalli"
    },
    {
      id: 4,
      image: reviewUserImg4, // uPVC Sliding Folding Doors
      text: "The uPVC sliding folding doors totally transformed our living space. They glide effortlessly, provide amazing soundproofing, and bring so much natural light into the room.",
      author: "Karthik - Ramanathapuram"
    },
    {
      id: 5,
      image: reviewUserImg5, // uPVC Arc Doors (Updated to use Img5)
      text: "The uPVC arch doors gave our home a premium and classic architectural look. The finish is flawless, and the structural weatherproofing is exceptional. Truly a masterpiece.",
      author: "Sanjay - Saravanampatti"
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