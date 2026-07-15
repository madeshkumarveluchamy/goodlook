import React from 'react';
import './css/MosquitoDoorsGallery.css';

// Ungaloda static images-a inga import pannikonga
import img1 from '../../../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors (4).webp'; 
import img2 from '../../../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (8).webp';
import img3 from '../../../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (4).webp';

import img6 from '../../../../assets/sliding4.webp';

const MosquitoDoorsGallery = () => {
  // Image card-kana data
  const galleryData = [
    { id: 1, image: img1, badge: "MOSQUITO NET FOR DOORS", title: "Sliding Mosquito Net Doors" },
    { id: 2, image: img2, badge: "MOSQUITO NET FOR DOORS", title: "Pleated Mosquito Net Doors" },
    { id: 3, image: img3, badge: "MOSQUITO NET FOR DOORS", title: "Roller Mosquito Net Doors" },
    { id: 6, image: img6, badge: "MOSQUITO NET FOR DOORS", title: "Velcro Mosquito Net Doors" },
  ];

  return (
    <section className="mos-doors-gallery-section">
      <div className="container">
        
        {/* Title & Subtitle */}
        <div className="mos-doors-header text-center">
          <h2 className="mos-doors-title stit">Mosquito Net for Doors</h2>
          <p className="mos-doors-subtitle mx-auto hanken-grotesk-font sdes">
            Explore our complete range of premium window, specifically engineered <br className="d-none d-md-block" /> 
            to provide the perfect fit and lasting protection for every room
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mos-doors-grid">
          {galleryData.map((item) => (
            <div className="mos-doors-card" key={item.id}>
              
              {/* Static Image */}
              <div className="mos-doors-img-wrapper">
                <img src={item.image} alt={item.title} className="mos-doors-img" />
              </div>

              {/* Hover Popup Overlay */}
              <div className="mos-doors-overlay-box">
                <span className="mos-doors-badge manrope-font">{item.badge}</span>
                <h4 className="mos-doors-card-title">{item.title}</h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MosquitoDoorsGallery;