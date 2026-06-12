import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/InsectCollections.css';

import stenteringImg from '../../assets/Stentering Frames.webp'; 
import swingImg from '../../assets/Swing Doors.webp';
import hingedImg from '../../assets/Hinged Frames.webp';
import rollerImg from '../../assets/Roller Screens.webp';
import pleatedImg from '../../assets/curtainrod.webp';
import slidingImg from '../../assets/Sliding System.webp';
import lightwellImg from '../../assets/Pleated Screens.webp';
import {Link} from "react-router-dom"
const InsectCollections = () => {
  const [activeTab, setActiveTab] = useState('stentering');

  const collectionsData = {
    stentering: {
      title: "Stentering Frames",
      description: "Safe and easy to handle, and can usually be installed without drilling. Can be used almost anywhere, robust and unobtrusive.",
      image: stenteringImg
    },
    swing: {
      title: "Swing Doors",
      description: "Perfect for frequently used doors. Opens smoothly in both directions and closes automatically to ensure continuous insect protection.",
      image: swingImg
    },
    hinged: {
      title: "Hinged Frames",
      description: "Classic and highly reliable solution for windows and balcony doors. Can be opened completely out or in for easy cleaning.",
      image: hingedImg
    },
    roller: {
      title: "Roller Screens",
      description: "Innovative roll-up mechanism that lets you hide the screen when not in use. Ideal for keeping unobstructed outside views.",
      image: rollerImg
    },
    pleated: {
      title: "Pleated Screens",
      description: "Premium pleated mesh structure that collapses horizontally. Space-saving design engineered beautifully for large sliding patio doors.",
      image: pleatedImg
    },
    sliding: {
      title: "Sliding System",
      description: "Smooth multi-track sliding panels ideal for large window expanses and balconies. Glides effortlessly without taking up room space.",
      image: slidingImg
    },
    lightwell: {
      title: "Light Well Cover",
      description: "Heavy-duty mesh protection specifically built for cellar ventilation shafts. Keeps out leaves, rodents, and tiny insects flawlessly.",
      image: lightwellImg
    }
  };

  const tabsList = [
    { id: 'stentering', label: 'STENTERING FRAMES' },
    { id: 'swing', label: 'SWING DOORS' },
    { id: 'hinged', label: 'HINGED FRAMES' },
    { id: 'roller', label: 'ROLLER SCREENS' },
    { id: 'pleated', label: 'PLEATED SCREENS' },
    { id: 'sliding', label: 'SLIDING SYSTEM' },
    { id: 'lightwell', label: 'LIGHT WELL COVER' }
  ];

  return (
    <section className="insect-collections-section pt-5 pb-2 pb-md-5">
      <div className="container py-5 text-center">
        
        <h2 className="collections-main-title mb-2 stit">All Insect Screen</h2>
        <h2 className="collections-main-title mb-4 stit">Collections</h2>
        
        <p className="collections-sub-desc hanken-grotesk-font mx-auto text-center mb-5 sdes">
          Explore our complete range of premium screens, specifically engineered <br className="d-none d-md-block" /> 
          to provide the perfect fit and lasting protection for every room
        </p>

        <div className="tabs-navigation-wrapper mb-1 mb-md-3">
          <div className="tabs-scroller-track">
            {tabsList.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-trigger-btn manrope-font ${activeTab === tab.id ? 'tab-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="current-selection-heading text-start mb-1 mb-md-4">
          <span className="bullet-diamond stit">❖</span> {collectionsData[activeTab].title}
        </div>

        <div className="collection-display-window">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="dynamic-showcase-card"
            >
              <img 
                src={collectionsData[activeTab].image} 
                alt={collectionsData[activeTab].title} 
                className="showcase-main-img"
              />

              <div className="showcase-glass-card-overlay">
                <div className="row align-items-center g-1  m-0">
                  <div className="col-12 col-md-8 text-start p-0">
                    <h4 className="overlay-card-title text-center text-md-start">
                      <span className="bullet-diamond-small smin">❖</span> {collectionsData[activeTab].title}
                    </h4>
                    <div className='d-flex justify-content-center justify-content-md-start'><p className="overlay-card-desc hanken-grotesk-font mb-0 smin">
                      {collectionsData[activeTab].description}
                    </p></div>
                  </div>
                  
                  <div className="col-12 col-md-4 text-md-end">
                    <Link to="/contact-us" className="text-decoration-none">
                    <button className="btn btn-light project-cta-capsule-btn d-inline-flex align-items-center gap-2">
                      <span className="manrope-font btn-text">Start Your Project</span>
                      <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '9px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                    </Link>
                  </div>
                  
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default InsectCollections;