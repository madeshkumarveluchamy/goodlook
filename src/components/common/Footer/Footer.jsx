import React, { useState } from 'react';
import './Footer.css';
import "../../../App.css";
import { Link, useLocation } from 'react-router-dom';

import logoImg from '../../../assets/navlogo.webp'; 
import { FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // Nested accordion toggles for Collections
  const [showUpvcDoors, setShowUpvcDoors] = useState(false);
  const [showUpvcWindows, setShowUpvcWindows] = useState(false);

  // Nested accordion toggles for Insect Screen
  const [showMosWindow, setShowMosWindow] = useState(false);
  const [showMosDoors, setShowMosDoors] = useState(false);
  const [showMosBalcony, setShowMosBalcony] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // 🎯 GLOBAL SCROLL ENGINE
  const handleScrollToTop = (targetPath) => {
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 10);
    }
  };

  // 🎯 Premium Smooth-Rotating Chevron Component for Footer Accordions
  const FooterChevron = ({ isActive }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={3} 
      stroke="currentColor" 
      style={{ 
        width: '10px', 
        height: '10px', 
        display: 'inline-block', 
        marginLeft: '4px',
        verticalAlign: 'middle',
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        color: isActive ? '#dfa82d' : 'rgba(255, 255, 255, 0.6)'
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <footer className="footer-section position-relative pb-4">
      
      <div className="footer-watermark-text position-absolute w-100 text-center select-none unselectable">
        GOOD LOOK <br/>
        HOME DECORS
      </div>

      <div className="container-fluid footer-fluid-holder position-relative z-2 px-3 px-sm-4 px-md-5">
        
        <div className="row footer-top-branding mb-5">
          <div className="col-12 col-lg-5">
            <div className="footer-logo-box mb-3 text-center text-md-start">
              <Link to="/" onClick={() => handleScrollToTop('/')}>
                <img src={logoImg} alt="Good Look Home Decor Logo" className="footer-logo-graphic" />
              </Link>
            </div>
            <p className="footer-brand-bio fw-light m-0 hanken-grotsek-font smin">
              Your trusted partner for premium mosquito nets and UPVC solutions. With over 24 years of experience, we provide high-quality protection and durable products for homes and businesses.
            </p>
          </div>
        </div>

        <div className="row g-4 footer-columns-matrix pt-4 mb-4 border-top-dark">
          
          {/* ================= COLUMN 1: CONTACT INFO ================= */}
          <div className="col-12 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 text-center text-md-start sdes text-warning">Contact Information</h5>
              <p className="footer-address-txt fw-light mb-3 hanken-grotesk-font text-center text-md-start smin text-light">
                Dir on.460, Dr Radhakrishna St,<br />
                Hudco Colony, Tatabad,
                Coimbatore,<br />
                Tamil Nadu 641012
              </p>
              <p className="footer-contact-link-line m-0 text-center text-md-start sdes text-light">
                Call us: <a href="tel:9443409613" className="text-decoration-none text-white rubik-font smin">94434 09613</a>
              </p>
              <p className="footer-contact-link-line mt-1 text-center text-md-start sdes text-light">
                Email: <a href="mailto:Admin@goodlookhome.com" className="text-decoration-none text-white rubik-font smin">Admin@goodlookhome.com</a>
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2: OUR COLLECTIONS ================= */}
          <div className="col-12 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 rubik-font text-center text-md-start sdes text-warning">Our Collections</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light text-center text-md-start">
                
                <li className="footer-link-wrapper">
                  <Link to="/our-collections/upvc-profile" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/our-collections/upvc-profile')}>uPVC Profile</Link>
                </li>
                
                {/* uPVC Doors Toggle */}
                <li className="footer-interactive-item mt-2">
                  <span 
                    className="rubik-font d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-white" 
                    style={{ fontSize: '0.95em', cursor: 'pointer' }} 
                    onClick={() => setShowUpvcDoors(!showUpvcDoors)}
                  >
                    uPVC Doors <FooterChevron isActive={showUpvcDoors} />
                  </span>
                  <div className={`footer-accordion-content ps-md-3 d-flex flex-column gap-1 ${showUpvcDoors ? 'open' : ''}`}>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-doors/casement-and-designer-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-doors/casement-doors')}>Casement Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-doors/sliding-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-doors/sliding-doors')}>Sliding Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-doors/sliding-and-folding-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-doors/folding-doors')}>Folding Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-doors/arch-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-doors/arch-doors')}>Arch Doors</Link></div>
                  </div>
                </li>

                {/* uPVC Windows Toggle */}
                <li className="footer-interactive-item mt-2">
                  <span 
                    className="rubik-font d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-white" 
                    style={{ fontSize: '0.95em', cursor: 'pointer' }} 
                    onClick={() => setShowUpvcWindows(!showUpvcWindows)}
                  >
                    uPVC Windows <FooterChevron isActive={showUpvcWindows} />
                  </span>
                  <div className={`footer-accordion-content ps-md-3 d-flex flex-column gap-1 ${showUpvcWindows ? 'open' : ''}`}>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-windows/casement-windows" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-windows/casement-windows')}>Casement Windows</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-windows/sliding-windows" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-windows/sliding-windows')}>Sliding Windows</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-windows/fixed-windows" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-windows/fixed-windows')}>Fixed Windows</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-windows/ventilator-windows" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-windows/ventilator-windows')}>Ventilator Windows</Link></div>
                    <div className="footer-link-wrapper"><Link to="/our-collections/upvc-windows/arch-windows" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/our-collections/upvc-windows/arch-windows')}>Arch Windows</Link></div>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          {/* ================= COLUMN 3: INSECT SCREEN & CURTAINS ================= */}
          <div className="col-12 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 rubik-font text-center text-md-start sdes text-warning">Insect Screens</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light text-center text-md-start">
                
                {/* Mosquito Net for Window */}
                <li className="footer-interactive-item">
                  <span 
                    className="rubik-font d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-white" 
                    style={{ fontSize: '0.95em', cursor: 'pointer' }} 
                    onClick={() => setShowMosWindow(!showMosWindow)}
                  >
                    Net for Window <FooterChevron isActive={showMosWindow} />
                  </span>
                  <div className={`footer-accordion-content ps-md-3 d-flex flex-column gap-1 ${showMosWindow ? 'open' : ''}`}>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-window/all-mosquito-net-window" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-window/all-mosquito-net-window')}>All Net Window</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-window/foldable-security-mesh-window" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-window/foldable-security-mesh-window')}>Foldable Security Mesh Window</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window')}>Hinged Frame Mosquito Window</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window')}>Pleated Mosquito Net Window</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window')}>Sliding Mosquito Net Window</Link></div>
                  </div>
                </li>

                {/* Mosquito Net for Doors */}
                <li className="footer-interactive-item mt-2">
                  <span 
                    className="rubik-font d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-white" 
                    style={{ fontSize: '0.95em', cursor: 'pointer' }} 
                    onClick={() => setShowMosDoors(!showMosDoors)}
                  >
                    Net for Doors <FooterChevron isActive={showMosDoors} />
                  </span>
                  <div className={`footer-accordion-content ps-md-3 d-flex flex-column gap-1 ${showMosDoors ? 'open' : ''}`}>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-doors/all-mosquito-net-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-doors/all-mosquito-net-doors')}>All Net Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-doors/roller-mosquito-screens" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors')}>Foldable Security Mesh Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-doors/hinged-mosquito-net-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors')}>Hinged Frame Mosquito Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors')}>Pleated Mosquito Net Doors</Link></div>
                    <div className="footer-link-wrapper"><Link to="/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors" className="rubik-font small text-decoration-none text-secondary" onClick={() => handleScrollToTop('/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors')}>Sliding Mosquito Net Doors</Link></div>
                  </div>
                </li>


                <h5 className="footer-col-title text-uppercase tracking-wider mt-4 mb-3 rubik-font text-center text-md-start sdes text-warning">Curtains & Blinds</h5>
                <div className="footer-link-wrapper"><li><Link to="/curtains-blinds/curtains" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/curtains-blinds/curtains')}>Curtains</Link></li></div>
                <div className="footer-link-wrapper"><li><Link to="/curtains-blinds/blinds" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/curtains-blinds/blinds')}>Blinds</Link></li></div>

              </ul>
            </div>
          </div>

          {/* ================= COLUMN 4: QUICK LINKS & SOCIAL ================= */}
          <div className="col-12  col-md-3 footer-grid-col">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3 rubik-font text-center text-md-start sdes text-warning">Quick Links</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light text-center text-md-start mb-4">
                <div className="footer-link-wrapper"><li><Link to="/" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/')}>Home</Link></li></div>
                <div className="footer-link-wrapper"><li><Link to="/our-story" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/our-story')}>Our Story</Link></li></div>
                <div className="footer-link-wrapper"><li><Link to="/contact-us" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/contact-us')}>Contact Us</Link></li></div>
                <div className="footer-link-wrapper">
                  <li>
                    <Link 
                      to="/" 
                      className="rubik-font smin text-decoration-none text-light" 
                      onClick={(e) => {
                        handleScrollToTop('/');
                        setTimeout(() => {
                          const blogSection = document.getElementById('blog');
                          if (blogSection) {
                            blogSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                </div>
                <div className="footer-link-wrapper"><li><Link to="/" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/')}>Privacy Policy</Link></li></div>
                <div className="footer-link-wrapper"><li><Link to="/" className="rubik-font smin text-decoration-none text-light" onClick={() => handleScrollToTop('/')}>Terms & Conditions</Link></li></div>
              </ul>

              {/* Social Accounts */}
              <div className="h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start mt-4">
                <h5 className="footer-social-header-title mb-4 rubik-font sdes text-warning">Follow Us</h5>
                <div className="footer-social-icons-row d-flex align-items-center gap-3">
                  <a href="https://www.instagram.com/ghd_upvc_windows" target="_blank" rel="noreferrer" className="social-icon-anchor text-white border border-light rounded-circle p-2 d-flex align-items-center justify-content-center" aria-label="Instagram">
                    <FaInstagram size={18} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61567207111228" target="_blank" rel="noreferrer" className="social-icon-anchor text-white border border-light rounded-circle p-2 d-flex align-items-center justify-content-center" aria-label="Facebook">
                    <FaFacebookF size={18} />
                  </a>
                  <Link to="/" className="social-icon-anchor text-white border border-light rounded-circle p-2 d-flex align-items-center justify-content-center" aria-label="LinkedIn" onClick={() => handleScrollToTop('/')}>
                    <FaLinkedinIn size={18} />
                  </Link>
                  <Link to="/" className="social-icon-anchor text-white border border-light rounded-circle p-2 d-flex align-items-center justify-content-center" aria-label="Pinterest" onClick={() => handleScrollToTop('/')}>
                    <FaPinterestP size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;