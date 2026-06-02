import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/navlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper fixed-top">
      <nav className="navbar navbar-expand-md navbar-dark custom-capsule-navbar">
        <div className="container-fluid p-0">
          
          {/* --- BRAND LOGO --- */}
          <a className="navbar-brand d-flex align-items-center m-0" href="#home">
            <img src={logo} alt="GoodLook Logo" className="logo-img" />
          </a>

          {/* --- MOBILE HAMBURGER TOGGLE (Only visible below 768px) --- */}
          <button 
            className="navbar-toggler border-0 shadow-none p-1" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger-lines ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* --- NAV LINKS & CTA BUTTON --- */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show mobile-expanded' : ''}`}>
            <ul className="navbar-nav mx-auto text-center nav-links-group">
              <li className="nav-item">
                <a className="nav-link capsule-link active manrope-font" href="#home" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link capsule-link manrope-font" href="#collections" onClick={() => setIsOpen(false)}>Our Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link capsule-link manrope-font" href="#insect-screen" onClick={() => setIsOpen(false)}>Insect Screen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link capsule-link manrope-font" href="#upvc" onClick={() => setIsOpen(false)}>UPVC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link capsule-link manrope-font" href="#story" onClick={() => setIsOpen(false)}>Our Story</a>
              </li>
            </ul>
            
            {/* Start Your Project Button */}
            <div className="d-flex justify-content-center pt-3 pt-md-0">
              <button className="btn btn-light project-cta-btn d-flex align-items-center gap-2 ">
                <span className="manrope-font">Start Your Project</span>
                <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;