import React from 'react';
import './Footer.css';

// --- IMPORT BRAND LOGO ASSET ---
import logoImg from '../../../assets/navlogo.png'; 

// --- IMPORT SOCIAL ICONS ---
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; // Modern X Icon

const Footer = () => {
  return (
    <footer className="footer-section position-relative">
      
      {/* BACKGROUND GIANT WATERMARK TEXT OVERLAY */}
      <div className="footer-watermark-text position-absolute w-100 text-center select-none unselectable">
        GOOD LOOK HOME DECORS
      </div>

      <div className="container-fluid footer-fluid-holder position-relative z-2 px-3 px-sm-4 px-md-5">
        
        {/* ================= TOP BRAND ROW ================= */}
        <div className="row footer-top-branding mb-5">
          <div className="col-12 col-lg-5">
            <div className="footer-logo-box mb-3">
              <img src={logoImg} alt="Good Look Home Decor Logo" className="footer-logo-graphic" />
            </div>
            <p className="footer-brand-bio fw-light m-0">
              Your trusted partner for premium mosquito nets and UPVC solutions. With over 21 years of experience, we provide high-quality protection and durable products for homes and businesses.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM METRICS 4-COLUMNS GRID ================= */}
        <div className="row g-4 footer-columns-matrix pt-4 border-top-dark">
          
          {/* Column 1: Contact Information */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3">Contact Information</h5>
              <p className="footer-address-txt fw-light mb-3">
                Diir on.460, Dr Radhakrishna St,<br />
                Hudco Colony, Tatabad,<br />
                Coimbatore,<br />
                Tamil Nadu 641012
              </p>
              <p className="footer-contact-link-line m-0">
                Call us: <a href="tel:9443409613" className="text-decoration-none">94434 09613</a>
              </p>
              <p className="footer-contact-link-line mt-1">
                Email: <a href="mailto:Admin@goodlookhome.com" className="text-decoration-none">Admin@goodlookhome.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3">Quick Links</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light">
                <li><a href="#home">Home</a></li>
                <li><a href="#collections" className="d-flex align-items-center justify-content-between">Our Collections <span className="list-plus-span">+</span></a></li>
                <li><a href="#insect" className="d-flex align-items-center justify-content-between">Insect Screen <span className="list-plus-span">+</span></a></li>
                <li><a href="#upvc">UPVC</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Further Info */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col border-right-split">
            <div className="footer-card-inner">
              <h5 className="footer-col-title text-uppercase tracking-wider mb-3">Further Info</h5>
              <ul className="footer-links-list list-unstyled m-0 p-0 d-flex flex-column gap-2 fw-light">
                <li><a href="#story">Our Story</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Social Accounts */}
          <div className="col-12 col-sm-6 col-md-3 footer-grid-col">
            <div className="footer-card-inner h-100 d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="footer-social-header-title mb-4">See What We're Up To</h5>
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
