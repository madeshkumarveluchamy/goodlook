import React, { useState } from 'react';
import './Footer.css';
import "../../../App.css";
import { NavHashLink } from 'react-router-hash-link';

import logoImg from '../../../assets/navlogo.webp'; 
import { Link, useLocation } from 'react-router-dom';

import { FaInstagram, FaFacebookF, FaPinterestP, FaChevronDown } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; 

const Footer = () => {
  const [showCollections, setShowCollections] = useState(false);
  const [showCurtains, setShowCurtains] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // 🎯 GLOBAL SCROLL ENGINE: பக்கம் மாறினாலும் சரி, ஒரே பக்கத்துல பாட்டத்துல இருந்தாலும் சரி டாப்-க்கு கொண்டு போகும்
  const handleScrollToTop = (targetPath) => {
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 10);
    }
  };

  return (
    <footer className="footer-section position-relative">
      
      <div className="footer-watermark-text position-absolute w-100 text-center select-none unselectable">
        GOOD LOOK <br/>
        HOME DECORS
      </div>

      <div className="container-fluid footer-fluid-holder position-relative z-2 px-3 px-sm-4 px-md-5">
        
        <div className="row footer-top-branding mb-5">
          <div className="col-12 col-lg-5">
            <div className="footer-logo-box mb-3 text-center text-md-start">
              <img src={logoImg} alt="Good Look Home Decor Logo" className="footer-logo-graphic" />
            </div>
            <p className="footer-brand-bio fw-light m-0 hanken-grotsek-font smin">
              Your trusted partner for premium mosquito nets and UPVC solutions. With over 21 years of experience, we provide high-quality protection and durable products for homes and businesses.
            </p>
          </div>
        </div>

        <div className="row g-4 footer-columns-matrix pt-4 border-top-dark">
          
          {/* Column 1: Contact Information */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 text-center text-md-start sdes">Contact Information</h5>
              <p className="footer-address-txt fw-light mb-3 hanken-grotesk-font text-center text-md-start smin">
                Diir on.460, Dr Radhakrishna St,<br />
                Hudco Colony, Tatabad,
                Coimbatore,<br />
                Tamil Nadu 641012
              </p>
              <p className="footer-contact-link-line m-0 text-center text-md-start sdes">
                Call us: <a href="tel:9443409613" className="text-decoration-none rubik-font smin">94434 09613</a>
              </p>
              <p className="footer-contact-link-line mt-1 text-center text-md-start sdes">
                Email: <a href="mailto:Admin@goodlookhome.com" className="text-decoration-none rubik-font smin">Admin@goodlookhome.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Interactive Quick Links with Sub-Options */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 rubik-font text-center text-md-start sdes">Quick Links</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light text-center text-md-start">
                <li><Link to="/" className="rubik-font smin" onClick={() => handleScrollToTop('/')}>Home</Link></li>
                
                {/* Our Collections Accordion */}
                <li className="footer-interactive-item">
                  <span 
                    className="footer-toggle-trigger rubik-font smin d-flex align-items-center justify-content-center justify-content-md-start gap-2"
                    onClick={() => setShowCollections(!showCollections)}
                  >
                    Our Collections <FaChevronDown className={`footer-chevron-icon ${showCollections ? 'rotate-180' : ''}`} />
                  </span>
                  <div className={`footer-nested-sub-links ${showCollections ? 'drawer-open' : 'drawer-closed'}`}>
                    <Link to="/our-collections/upvc-openable-doors-windows" className="rubik-font" onClick={() => handleScrollToTop('/our-collections/upvc-openable-doors-windows')}>UPVC Openable Doors</Link>
                    <Link to="/our-collections/upvc-slide-doors-windows" className="rubik-font" onClick={() => handleScrollToTop('/our-collections/upvc-slide-doors-windows')}>UPVC Sliding Doors</Link>
                    <Link to="/our-collections/upvc-lift-slide-doors-windows" className="rubik-font" onClick={() => handleScrollToTop('/our-collections/upvc-lift-slide-doors-windows')}>Lift or Sliding Windows & Doors</Link>
                  </div>
                </li>

                <li><Link to="/insect-screen" className="rubik-font sdes smin" onClick={() => handleScrollToTop('/insect-screen')}>Insect Screen</Link></li>
                
                {/* Curtains & Blinds Accordion */}
                <li className="footer-interactive-item">
                  <span 
                    className="footer-toggle-trigger rubik-font smin d-flex align-items-center justify-content-center justify-content-md-start  gap-2"
                    onClick={() => setShowCurtains(!showCurtains)}
                  >
                    Curtains & Blinds <FaChevronDown className={`footer-chevron-icon ${showCurtains ? 'rotate-180' : ''}`} />
                  </span>
                  <div className={`footer-nested-sub-links ${showCurtains ? 'drawer-open' : 'drawer-closed'}`}>
                    <Link to="/curtains-blinds/curtains" className="rubik-font" onClick={() => handleScrollToTop('/curtains-blinds/curtains')}>Curtains</Link>
                    <Link to="/curtains-blinds/blinds" className="rubik-font" onClick={() => handleScrollToTop('/curtains-blinds/blinds')}>Blinds</Link>
                  </div>
                </li>

                <li><Link to="/upvc" className="rubik-font smin" onClick={() => handleScrollToTop('/upvc')}>UPVC</Link></li>
                <li><Link to="/our-story" className="rubik-font smin" onClick={() => handleScrollToTop('/our-story')}>Our Story</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Further Info (🎯 FIXED: Added handleScrollToTop for all Links) */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 rubik-font text-center text-md-start sdes">Further Info</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light text-center text-md-start">
                <li><Link to="/our-story" className="rubik-font smin" onClick={() => handleScrollToTop('/our-story')}>Our Story</Link></li>
                <li><Link to="/contact-us" className="rubik-font smin" onClick={() => handleScrollToTop('/contact-us')}>Contact Us</Link></li>
                <li><NavHashLink smooth to="/#blog" className="rubik-font smin">Blog</NavHashLink></li>
                <li><Link to="/" className="rubik-font smin" onClick={() => handleScrollToTop('/')}>Privacy Policy</Link></li>
                <li><Link to="/" className="rubik-font smin" onClick={() => handleScrollToTop('/')}>Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social Accounts */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col">
            <div className="footer-card-inner h-100 d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="footer-social-header-title mb-4 rubik-font sdes">See What We're Up To</h5>
              <div className="footer-social-icons-row d-flex align-items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-anchor" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-anchor" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="social-icon-anchor" aria-label="X (Twitter)">
                  <RiTwitterXFill />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social-icon-anchor" aria-label="Pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;