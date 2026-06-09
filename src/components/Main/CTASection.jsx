import React, { useState } from 'react';
import './css/CTASection.css';

// --- 1. IMPORT YOUR SINGLE WIDE BACKGROUND IMAGE HERE ---
import ctaBgImg from '../../assets/email.png';
import "../../App.css"; 

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="cta-split-section position-relative overflow-hidden">
      
      {/* ================= SINGLE IMAGE BACKGROUND PANEL ================= */}
      <div className="cta-single-bg-wrapper position-absolute top-0 start-0 w-100 h-100">
        <img 
          src={ctaBgImg} 
          alt="Premium luxury interior window setup" 
          className="w-100 h-100 object-fit-cover" 
        />
      </div>

      {/* ================= DARK BACKGROUND MASK OVERLAY ================= */}
      <div className="cta-dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* ================= CORE CONTENT & INLINE INPUT FORM ================= */}
      <div className="container-fluid cta-content-fluid position-relative z-3 px-3 px-sm-4 px-md-5 h-100 d-flex align-items-center justify-content-center">
        <div className="cta-inner-card text-center text-white mx-auto">
          
          <h2 className="cta-main-title font-serif m-0 mb-3 stit">
            Experience the Aura in person.
          </h2>
          
          <p className="cta-sub-description fw-light mb-4 mx-auto hanken-grotesk-font sdes">
            Discover how twenty-one years of architectural excellence can redefine your everyday life.
          </p>

          <form onSubmit={handleSubscribe} className="cta-inline-form-box d-flex align-items-stretch mx-auto mt-4">
            <input 
              type="email" 
              className="cta-input-field flex-grow-1 border-0 px-4 jost-font" 
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-subscribe-submit-btn border-0 text-uppercase tracking-wider px-4 fw-medium jost-font"> 
              Subscribe
            </button>
          </form>
          <p className="cta-sub-description fw-light hanken-grotesk-font mb-4 mx-auto h text-gray-100 mt-4 sdes">
            Your trusted partner for premium mosquito nets and UPVC solutions. With over 21 years of experience, we provide high-quality protection and durable products for homes and businesses.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CTASection;