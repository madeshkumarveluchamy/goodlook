import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../../assets/navlogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showCurtainsNav, setShowCurtainsNav] = useState(false);

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

  return (
    <div className="navbar-wrapper fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark custom-capsule-navbar">
        <div className="container-fluid p-0">
          
          <a className="navbar-brand d-flex align-items-center m-0" href="#home">
            <img src={logo} alt="GoodLook Logo" className="logo-img" />
          </a>

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
              <li className="nav-item">
                <Link className="nav-link capsule-link active manrope-font" to="/" onClick={closeAllMenus}>Home</Link>
              </li>
              
              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showSubNav ? 'active-dropdown' : ''}`} 
                  href="/collections" 
                  onClick={handleCollectionClick}
                >
                  Our Collections
                </a>

                {showSubNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className="mobile-sub-link manrope-font" to="/collections/openabledoors" onClick={closeAllMenus}>UPVC Openable Doors</Link>
                    <Link className="mobile-sub-link manrope-font" to="/collections/slidedoors" onClick={closeAllMenus}>UPVC Sliding Doors</Link>
                    <Link className="mobile-sub-link manrope-font" to="/collections/leftslidedoors" onClick={closeAllMenus}>Lift or Sliding Windows & Doors</Link>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link capsule-link manrope-font" to="/insect" onClick={closeAllMenus}>Insect Screen</Link>
              </li>

              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showCurtainsNav ? 'active-dropdown' : ''}`} 
                  href="/curtains-blinds" 
                  onClick={handleCurtainsClick}
                >
                  Curtains & Blinds
                </a>

                {showCurtainsNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className="mobile-sub-link manrope-font" to="/curtains" onClick={closeAllMenus}>Curtains</Link>
                    <Link className="mobile-sub-link manrope-font" to="/blinds" onClick={closeAllMenus}>Blinds</Link>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <Link className="nav-link capsule-link manrope-font" to="/upvc" onClick={closeAllMenus}>UPVC</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link capsule-link manrope-font" to="/story" onClick={closeAllMenus}>Our Story</Link>
              </li>
            </ul>
            
            <div className="d-flex justify-content-center pt-3 pt-lg-0">
              <Link to="/cta" className='text-decoration-none'>
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

      {showSubNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box">
            <Link className="sub-nav-link manrope-font" to="/collections/openabledoors" onClick={closeAllMenus}>UPVC Openable Doors</Link>
            <Link className="sub-nav-link manrope-font" to="/collections/slidedoors" onClick={closeAllMenus}>UPVC Sliding Doors</Link>
            <Link className="sub-nav-link manrope-font" to="/collections/leftslidedoors" onClick={closeAllMenus}>Lift or Sliding Windows & Doors</Link>
          </div>
        </div>
      )}

      {showCurtainsNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box justify-content-center gap-5">
            <Link className="sub-nav-link manrope-font" to="/curtains" onClick={closeAllMenus}>Curtains</Link>
            <Link className="sub-nav-link manrope-font" to="/blinds" onClick={closeAllMenus}>Blinds</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;