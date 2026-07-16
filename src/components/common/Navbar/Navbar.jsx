import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../../assets/navlogo.webp';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showInsectNav, setShowInsectNav] = useState(false);
  const [showCurtainsNav, setShowCurtainsNav] = useState(false);
  
  // Cleaned Individual States for Sub Nav items to avoid global triggers
  const [openUpvcDoors, setOpenUpvcDoors] = useState(false);
  const [openUpvcWindows, setOpenUpvcWindows] = useState(false);
  
  const [openInsectWindow, setOpenInsectWindow] = useState(false);
  const [openInsectDoors, setOpenInsectDoors] = useState(false);
  const [openInsectBalcony, setOpenInsectBalcony] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Click ஆன இடம் navbarRef-க்கு வெளியே இருந்தால்...
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowSubNav(false);
        setShowInsectNav(false);
        setShowCurtainsNav(false);
        resetAllSubSections();
        
        // Mobile menu-வும் வெளியே click செய்தால் close ஆக வேண்டுமென்றால் கீழேயுள்ள வரியை un-comment செய்து கொள்ளவும்
        // setIsOpen(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll நடக்கும்போது எல்லா Menu-வும் Close ஆகிவிடும்
      setShowSubNav(false);
      setShowInsectNav(false);
      setShowCurtainsNav(false);
      resetAllSubSections();
    };

    // Window-ல் scroll event-ஐ listen செய்கிறோம்
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Main Nav Toggles (Reset sub items on close)
  const handleCollectionClick = (e) => {
    e.preventDefault(); 
    setShowCurtainsNav(false);
    setShowInsectNav(false);
    setShowSubNav(!showSubNav);
    resetAllSubSections();
  };

  const handleInsectClick = (e) => {
    e.preventDefault();
    setShowSubNav(false);
    setShowCurtainsNav(false);
    setShowInsectNav(!showInsectNav);
    resetAllSubSections();
  };

  const handleCurtainsClick = (e) => {
    e.preventDefault();
    setShowSubNav(false);
    setShowInsectNav(false);
    setShowCurtainsNav(!showCurtainsNav);
    resetAllSubSections();
  };

  const resetAllSubSections = () => {
    setOpenUpvcDoors(false);
    setOpenUpvcWindows(false);
    setOpenInsectWindow(false);
    setOpenInsectDoors(false);
    setOpenInsectBalcony(false);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setShowSubNav(false);
    setShowInsectNav(false);
    setShowCurtainsNav(false);
    resetAllSubSections();
  };

  const handleNavLinkClick = (targetPath) => {
    closeAllMenus();
    if (currentPath === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  // Modern Dropdown Main Chevron Component
  const PremiumChevron = ({ isActive }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={3} 
      stroke="currentColor" 
      style={{ 
        width: '11px', 
        height: '11px', 
        display: 'inline-block', 
        marginLeft: '5px',
        verticalAlign: 'middle',
        transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
        opacity: isActive ? 1 : 0.7
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  // 🎯 Premium Minimal Indicator SVG for Active Links (Replacing '→')
  const ActiveLinkIndicator = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={3} 
      stroke="currentColor" 
      style={{ 
        width: '12px', 
        height: '12px', 
        display: 'inline-block', 
        marginRight: '6px',
        verticalAlign: 'middle'
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  return (
    <div className="navbar-wrapper fixed-top" ref={navbarRef}>
      <nav className="navbar navbar-expand-lg navbar-dark custom-capsule-navbar">
        <div className="container-fluid p-0">
          
          {/* LOGO */}
          <Link className="navbar-brand d-flex align-items-center m-0" to="/" onClick={() => handleNavLinkClick('/')}>
            <img src={logo} alt="GoodLook Logo" className="logo-img" />
          </Link>

          {/* HAMBURGER TOGGLER */}
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
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/' ? 'nav-active-yellow' : ''}`} to="/" onClick={() => handleNavLinkClick('/')}>Home</Link>
              </li>
              
              {/* Our Collections Link */}
              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showSubNav ? 'active-dropdown' : ''} ${currentPath.includes('/our-collections/') ? 'nav-active-yellow' : ''}`} 
                  href="/our-collections" 
                  onClick={handleCollectionClick}
                >
                  Our Collections 
                  <span className="dropdown-arrow-icon"><PremiumChevron isActive={showSubNav} /></span>
                </a>

                {/* Mobile Sub Nav */}
                {showSubNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className="mobile-sub-link manrope-font" to="/our-collections/upvc-profile" onClick={closeAllMenus}>
                      uPVC Profile
                    </Link>
                    
                    <span className={`mobile-sub-link manrope-font cursor-pointer ${openUpvcDoors ? 'mobile-inner-active-yellow' : ''}`} onClick={() => setOpenUpvcDoors(!openUpvcDoors)}>
                      uPVC Doors <span className="mobile-inner-arrow"><PremiumChevron isActive={openUpvcDoors} /></span>
                    </span>
                    {openUpvcDoors && (
                      <div className="mobile-inner-nested-list">
                        <Link to="/our-collections/upvc-doors/casement-doors" onClick={closeAllMenus}>Casement Doors</Link>
                        <Link to="/our-collections/upvc-doors/sliding-doors" onClick={closeAllMenus}>Sliding Doors</Link>
                        <Link to="/our-collections/upvc-doors/folding-doors" onClick={closeAllMenus}>Folding Doors</Link>
                        <Link to="/our-collections/upvc-doors/arch-doors" onClick={closeAllMenus}>Arch Doors</Link>
                      </div>
                    )}

                    <span className={`mobile-sub-link manrope-font cursor-pointer ${openUpvcWindows ? 'mobile-inner-active-yellow' : ''}`} onClick={() => setOpenUpvcWindows(!openUpvcWindows)}>
                      uPVC Windows <span className="mobile-inner-arrow"><PremiumChevron isActive={openUpvcWindows} /></span>
                    </span>
                    {openUpvcWindows && (
                      <div className="mobile-inner-nested-list">
                        <Link to="/our-collections/upvc-windows/casement-windows" onClick={closeAllMenus}>Casement Windows</Link>
                        <Link to="/our-collections/upvc-windows/sliding-windows" onClick={closeAllMenus}>Sliding Windows</Link>
                        <Link to="/our-collections/upvc-windows/fixed-windows" onClick={closeAllMenus}>Fixed Windows</Link>
                        <Link to="/our-collections/upvc-windows/ventilator-windows" onClick={closeAllMenus}>Ventilator Windows</Link>
                        <Link to="/our-collections/upvc-windows/arch-windows" onClick={closeAllMenus}>Arch Windows</Link>
                      </div>
                    )}
                  </div>
                )}
              </li>

              {/* Insect Screen Link */}
              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showInsectNav ? 'active-dropdown' : ''} ${currentPath.includes('/insect-screen') ? 'nav-active-yellow' : ''}`} 
                  href="/insect-screen" 
                  onClick={handleInsectClick}
                >
                  Insect Screen 
                  <span className="dropdown-arrow-icon"><PremiumChevron isActive={showInsectNav} /></span>
                </a>

                {/* Mobile Sub Nav */}
                {showInsectNav && (
                  <div className="mobile-nested-sub-nav">

                    <span className={`mobile-sub-link manrope-font cursor-pointer ${openInsectDoors ? 'mobile-inner-active-yellow' : ''}`} onClick={() => setOpenInsectDoors(!openInsectDoors)}>
                     Mosquito Net for Doors <span className="mobile-inner-arrow"><PremiumChevron isActive={openInsectDoors} /></span>
                    </span>
                    {openInsectDoors && (
                      <div className="mobile-inner-nested-list">
                        <Link to="/insect-screen/mosquito-net-for-doors" onClick={closeAllMenus}>All Mosquito Net Doors</Link>
                        <Link to="/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors" onClick={closeAllMenus}>Foldable Security Mesh Doors</Link>
                        <Link to="/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors" onClick={closeAllMenus}>Hinged Frame Mosquito Doors</Link>
                        <Link to="/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors" onClick={closeAllMenus}>Pleated Mosquito Net Doors</Link>
                        <Link to="/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors" onClick={closeAllMenus}>Sliding Mosquito Net Doors</Link>
                      </div>
                    )}

                    <span className={`mobile-sub-link manrope-font cursor-pointer ${openInsectWindow ? 'mobile-inner-active-yellow' : ''}`} onClick={() => setOpenInsectWindow(!openInsectWindow)}>
                      Mosquito Net for Window<span className="mobile-inner-arrow"><PremiumChevron isActive={openInsectWindow} /></span>
                    </span>
                    {openInsectWindow && (
                      <div className="mobile-inner-nested-list">
                        <Link to="/insect-screen/mosquito-net-for-window" onClick={closeAllMenus}>All Mosquito Net Window</Link>
                        <Link to="/insect-screen/mosquito-net-for-window/foldable-security-mesh-window" onClick={closeAllMenus}>Foldable Security Mesh Window</Link>
                        <Link to="/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window" onClick={closeAllMenus}>Hinged Frame Mosquito Window</Link>
                        <Link to="/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window" onClick={closeAllMenus}>Pleated Mosquito Net Window</Link>
                        <Link to="/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window" onClick={closeAllMenus}>Sliding Mosquito Net Window</Link>
                      </div>
                    )}

                  </div>
                )}
              </li>

              {/* Curtains & Blinds */}
              <li className="nav-item mobile-dropdown-wrapper">
                <a 
                  className={`nav-link capsule-link manrope-font collection-toggle-trigger ${showCurtainsNav ? 'active-dropdown' : ''} ${currentPath.includes('/curtains-blinds/') ? 'nav-active-yellow' : ''}`} 
                  href="/curtains-blinds" 
                  onClick={handleCurtainsClick}
                >
                  Curtains & Blinds
                  <span className="dropdown-arrow-icon"><PremiumChevron isActive={showCurtainsNav} /></span>
                </a>

                {showCurtainsNav && (
                  <div className="mobile-nested-sub-nav">
                    <Link className="mobile-sub-link" to="/curtains-blinds/curtains" onClick={closeAllMenus}>Curtains</Link>
                    <Link className="mobile-sub-link" to="/curtains-blinds/blinds" onClick={closeAllMenus}>Blinds</Link>
                  </div>
                )}
              </li>
              
              <li className="nav-item">
                <Link className={`nav-link capsule-link manrope-font ${currentPath === '/our-story' ? 'nav-active-yellow' : ''}`} to="/our-story" onClick={() => handleNavLinkClick('/our-story')}>Our Story</Link>
              </li>
            </ul>
            
            {/* CTA BUTTON */}
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

      {/* ==============================================
          🎯 DESKTOP COLLECTIONS MEGA MENU (Click Based)
          ============================================== */}
      {showSubNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box interactive-mega-dropdown">
            <div className="capsule-sub-nav-item">
              <Link className={`sub-nav-link manrope-font text-decoration-none ${currentPath === '/our-collections/upvc-profile' ? 'desktop-sub-active' : ''}`} to="/our-collections/upvc-profile" onClick={closeAllMenus}>uPVC Profile</Link>
            </div>
            
            <div className="capsule-sub-nav-item position-relative">
              <span className={`sub-nav-link manrope-font cursor-pointer ${openUpvcDoors ? 'desktop-sub-active' : ''}`} onClick={() => { setOpenUpvcWindows(false); setOpenUpvcDoors(!openUpvcDoors); }}>
                uPVC Doors <span className="inner-indicator-arrow"><PremiumChevron isActive={openUpvcDoors} /></span>
              </span>
              
              {openUpvcDoors && (
                <div className="pill-dropdown-inner-list">
                  {/* Note: If your previous arrow was coming from CSS pseudo-elements (:before), you can safely clean/keep it. 
                      Added inline structural icon component layout for ultimate structural fit. */}
                  <Link to="/our-collections/upvc-doors/casement-doors" onClick={closeAllMenus}>Casement Doors</Link>
                  <Link to="/our-collections/upvc-doors/sliding-doors" onClick={closeAllMenus}>Sliding Doors</Link>
                  <Link to="/our-collections/upvc-doors/folding-doors" onClick={closeAllMenus}>Folding Doors</Link>
                  <Link to="/our-collections/upvc-doors/arch-doors" onClick={closeAllMenus}>Arch Doors</Link>
                </div>
              )}
            </div>
            
            <div className="capsule-sub-nav-item position-relative">
              <span className={`sub-nav-link manrope-font cursor-pointer ${openUpvcWindows ? 'desktop-sub-active' : ''}`} onClick={() => { setOpenUpvcDoors(false); setOpenUpvcWindows(!openUpvcWindows); }}>
                uPVC Windows <span className="inner-indicator-arrow"><PremiumChevron isActive={openUpvcWindows} /></span>
              </span>
              
              {openUpvcWindows && (
                <div className="pill-dropdown-inner-list">
                  <Link to="/our-collections/upvc-windows/casement-windows" onClick={closeAllMenus}>Casement Windows</Link>
                  <Link to="/our-collections/upvc-windows/sliding-windows" onClick={closeAllMenus}>Sliding Windows</Link>
                  <Link to="/our-collections/upvc-windows/fixed-windows" onClick={closeAllMenus}>Fixed Windows</Link>
                  <Link to="/our-collections/upvc-windows/ventilator-windows" onClick={closeAllMenus}>Ventilator Windows</Link>
                  <Link to="/our-collections/upvc-windows/arch-windows" onClick={closeAllMenus}>Arch Windows</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==============================================
          🎯 DESKTOP INSECT SCREEN MEGA MENU (Hover Based)
          ============================================== */}
      {showInsectNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box interactive-mega-dropdown">
            


            {/* Doors Dropdown */}
            <div 
              className="capsule-sub-nav-item position-relative"
              onMouseEnter={() => setOpenInsectDoors(true)}
              onMouseLeave={() => setOpenInsectDoors(false)}
            >
              <Link 
                to="/insect-screen/mosquito-net-for-doors" 
                className={`sub-nav-link manrope-font text-decoration-none ${openInsectDoors ? 'desktop-sub-active' : ''}`}
                onClick={closeAllMenus}
              >
                Mosquito Net for Doors <span className="inner-indicator-arrow"><PremiumChevron isActive={openInsectDoors} /></span>
              </Link>
              {openInsectDoors && (
                <>
                  <div style={{ position: 'absolute', top: '100%', left: '-50%', width: '200%', height: '25px', background: 'transparent', zIndex: 1999 }}></div>
                  <div className="pill-dropdown-inner-list">
                    <Link to="/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors" onClick={closeAllMenus}>Foldable Security Mesh Doors</Link>
                    <Link to="/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors" onClick={closeAllMenus}>Hinged Frame Mosquito Doors</Link>
                    <Link to="/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors" onClick={closeAllMenus}>Pleated Mosquito Net Doors</Link>
                    <Link to="/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors" onClick={closeAllMenus}>Sliding Mosquito Net Doors</Link>
                  </div>
                </>
              )}
            </div>

            
            {/* Window Dropdown */}
            <div 
              className="capsule-sub-nav-item position-relative"
              onMouseEnter={() => setOpenInsectWindow(true)}
              onMouseLeave={() => setOpenInsectWindow(false)}
            >
              <Link 
                to="/insect-screen/mosquito-net-for-window" 
                className={`sub-nav-link manrope-font text-decoration-none ${openInsectWindow ? 'desktop-sub-active' : ''}`}
                onClick={closeAllMenus}
              >
                Mosquito Net for Window <span className="inner-indicator-arrow"><PremiumChevron isActive={openInsectWindow} /></span>
              </Link>
              {openInsectWindow && (
                <>
                  <div style={{ position: 'absolute', top: '100%', left: '-50%', width: '200%', height: '25px', background: 'transparent', zIndex: 1999 }}></div>
                  <div className="pill-dropdown-inner-list">
                    <Link to="/insect-screen/mosquito-net-for-window/foldable-security-mesh-window" onClick={closeAllMenus}>Foldable Security Mesh Window</Link>
                    <Link to="/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window" onClick={closeAllMenus}>Hinged Frame Mosquito Window</Link>
                    <Link to="/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window" onClick={closeAllMenus}>Pleated Mosquito Net Window</Link>
                    <Link to="/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window" onClick={closeAllMenus}>Sliding Mosquito Net Window</Link>
                  </div>
                </>
              )}
            </div>

            

          

          </div>
        </div>
      )}

      {/* DESKTOP CURTAINS SUB-NAV */}
      {showCurtainsNav && (
        <div className="sub-navbar-capsule-container desktop-only-sub-nav">
          <div className="sub-navbar-pill-box justify-content-center gap-5">
            <Link className={`sub-nav-link manrope-font text-decoration-none ${currentPath === '/curtains-blinds/curtains' ? 'desktop-sub-active' : ''}`} to="/curtains-blinds/curtains" onClick={() => handleNavLinkClick('/curtains-blinds/curtains')}>Curtains</Link>
            <Link className={`sub-nav-link manrope-font text-decoration-none ${currentPath === '/curtains-blinds/blinds' ? 'desktop-sub-active' : ''}`} to="/curtains-blinds/blinds" onClick={() => handleNavLinkClick('/curtains-blinds/blinds')}>Blinds</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;