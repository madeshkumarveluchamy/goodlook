import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../assets/navlogo.webp';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showCurtainsNav, setShowCurtainsNav] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isOpen]);

  const handleCollectionClick = (e) => {
    e.preventDefault(); 
    setShowCurtainsNav(false);
    setShowSubNav(!showSubNav);
  };

  const handleCurtainsClick = (e) => {
    e.preventDefault();
    setShowSubNav(false);
    setShowCurtainsNav(!showCurtainsNav);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setShowSubNav(false);
    setShowCurtainsNav(false);
  };

  // 🎯 UNIVERSAL SAME PAGE SCROLL ENGINE: ஆல்ரெடி அதே பக்கத்துல இருந்தா ஸ்மூத்தா டாப்-க்கு கொண்டு போகும்
  const handleNavLinkClick = (targetPath) => {
    closeAllMenus();
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-wrapper fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark custom-capsule-navbar">
        <div className="container-fluid p-0">
          
          {/* LOGO CLICK FIXED */}
          <Link className="navbar-brand d-flex align-items-center m-0" to="/" onClick={() => handleNavLinkClick('/')}>
            <img src={logo} alt="GoodLook Logo" className="logo-img" />
          </Link>

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

          <div className={`collapse navbar-collapse ${isOpen ? 'show mobile-expanded' : ''}`}>
            <ul className="navbar-nav mx-auto text-center nav-links-group">
              {/* HOME LINK FIXED */}
              <li className="nav-item">
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/' ? 'nav-active-yellow' : ''}`} to="/" onClick={() => handleNavLinkClick('/')}>Home</Link>
              </li>
              
              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showSubNav ? 'active-dropdown' : ''} ${currentPath.includes('/our-collections/') ? 'nav-active-yellow' : ''}`} 
                  href="/our-collections" 
                  onClick={handleCollectionClick}
                >
                  Our Collections
                </a>

                {showSubNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className={`mobile-sub-link manrope-font ${currentPath === '/our-collections/upvc-openable-doors-windows' ? 'sub-active-yellow' : ''}`} to="/our-collections/upvc-openable-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-openable-doors-windows')}>UPVC Openable Doors</Link>
                    <Link className={`mobile-sub-link manrope-font ${currentPath === '/our-collections/upvc-slide-doors-windows' ? 'sub-active-yellow' : ''}`} to="/our-collections/upvc-slide-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-slide-doors-windows')}>UPVC Sliding Doors</Link>
                    <Link className={`mobile-sub-link manrope-font ${currentPath === '/our-collections/upvc-lift-slide-doors-windows' ? 'sub-active-yellow' : ''}`} to="/our-collections/upvc-lift-slide-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-lift-slide-doors-windows')}>Lift or Sliding Windows & Doors</Link>
                  </div>
                )}
              </li>

              {/* INSECT SCREEN FIXED */}
              <li className="nav-item">
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/insect-screen' ? 'nav-active-yellow' : ''}`} to="/insect-screen" onClick={() => handleNavLinkClick('/insect-screen')}>Insect Screen</Link>
              </li>

              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showCurtainsNav ? 'active-dropdown' : ''} ${currentPath.includes('/curtains-blinds/') ? 'nav-active-yellow' : ''}`} 
                  href="/curtains-blinds" 
                  onClick={handleCurtainsClick}
                >
                  Curtains & Blinds
                </a>

                {showCurtainsNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className={`mobile-sub-link manrope-font ${currentPath === '/curtains-blinds/curtains' ? 'sub-active-yellow' : ''}`} to="/curtains-blinds/curtains" onClick={() => handleNavLinkClick('/curtains-blinds/curtains')}>Curtains</Link>
                    <Link className={`mobile-sub-link manrope-font ${currentPath === '/curtains-blinds/blinds' ? 'sub-active-yellow' : ''}`} to="/curtains-blinds/blinds" onClick={() => handleNavLinkClick('/curtains-blinds/blinds')}>Blinds</Link>
                  </div>
                )}
              </li>

              {/* UPVC FIXED */}
              <li className="nav-item">
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/upvc' ? 'nav-active-yellow' : ''}`} to="/upvc" onClick={() => handleNavLinkClick('/upvc')}>UPVC</Link>
              </li>
              
              {/* OUR STORY FIXED */}
              <li className="nav-item">
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/our-story' ? 'nav-active-yellow' : ''}`} to="/our-story" onClick={() => handleNavLinkClick('/our-story')}>Our Story</Link>
              </li>
            </ul>
            
            <div className="d-flex justify-content-center pt-3 pt-lg-0">
              <Link to="/contact-us" className='text-decoration-none' onClick={() => handleNavLinkClick('/contact-us')}>
                <button className="btn btn-light project-cta-btn d-flex align-items-center gap-2">
                  <span className="manrope-font btn-text">Start Your Project</span>
                  <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </nav>

      {/* DESKTOP COLLECTIONS SUB-NAV FIXED */}
      {showSubNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box">
            <Link className={`sub-nav-link manrope-font ${currentPath === '/our-collections/upvc-openable-doors-windows' ? 'desktop-sub-active' : ''}`} to="/our-collections/upvc-openable-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-openable-doors-windows')}>UPVC Openable Doors</Link>
            <Link className={`sub-nav-link manrope-font ${currentPath === '/our-collections/upvc-slide-doors-windows' ? 'desktop-sub-active' : ''}`} to="/our-collections/upvc-slide-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-slide-doors-windows')}>UPVC Sliding Doors</Link>
            <Link className={`sub-nav-link manrope-font ${currentPath === '/our-collections/upvc-lift-slide-doors-windows' ? 'desktop-sub-active' : ''}`} to="/our-collections/upvc-lift-slide-doors-windows" onClick={() => handleNavLinkClick('/our-collections/upvc-lift-slide-doors-windows')}>Lift or Sliding Windows & Doors</Link>
          </div>
        </div>
      )}

      {/* DESKTOP CURTAINS SUB-NAV FIXED */}
      {showCurtainsNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box justify-content-center gap-5">
            <Link className={`sub-nav-link manrope-font ${currentPath === '/curtains-blinds/curtains' ? 'desktop-sub-active' : ''}`} to="/curtains-blinds/curtains" onClick={() => handleNavLinkClick('/curtains-blinds/curtains')}>Curtains</Link>
            <Link className={`sub-nav-link manrope-font ${currentPath === '/curtains-blinds/blinds' ? 'desktop-sub-active' : ''}`} to="/curtains-blinds/blinds" onClick={() => handleNavLinkClick('/curtains-blinds/blinds')}>Blinds</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;