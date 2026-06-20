import React from 'react';
import './css/MosquitoWindowGallery.css';

// Ungaloda static images-a inga import pannikonga
import img1 from '../../../../assets/curtainrodcollection2.webp'; 
import img2 from '../../../../assets/curtainrodcollection2.webp';
import img3 from '../../../../assets/curtainrodcollection3.webp';
import img4 from '../../../../assets/curtainrodcollection1.webp';
import img5 from '../../../../assets/curtainrodcollection2.webp';
import img6 from '../../../../assets/curtainrodcollection3.webp';

const MosquitoWindowGallery = () => {
  // Image card-kana data
  const galleryData = [
    { id: 1, image: img1, badge: "MOSQUITO NET FOR WINDOW", title: "Sliding Mosquito Net Window" },
    { id: 2, image: img2, badge: "MOSQUITO NET FOR WINDOW", title: "Pleated Mosquito Net Window" },
    { id: 3, image: img3, badge: "MOSQUITO NET FOR WINDOW", title: "Roller Mosquito Net Window" },
    { id: 4, image: img1, badge: "MOSQUITO NET FOR WINDOW", title: "Fixed Frame Net Window" },
    { id: 5, image: img2, badge: "MOSQUITO NET FOR WINDOW", title: "Magnetic Mosquito Net Window" },
    { id: 6, image: img3, badge: "MOSQUITO NET FOR WINDOW", title: "Velcro Mosquito Net Window" },
  ];

  return (
    <section className="mos-window-gallery-section">
      <div className="container">
        
        {/* Title & Subtitle */}
        <div className="mos-window-header text-center">
          <h2 className="mos-window-title stit">Mosquito Net for Window</h2>
          <p className="mos-window-subtitle hanken-grotesk-font mx-auto sdes">
            Explore our complete range of premium window, specifically engineered <br className="d-none d-md-block" /> 
            to provide the perfect fit and lasting protection for every room
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mos-window-grid">
          {galleryData.map((item) => (
            <div className="mos-window-card" key={item.id}>
              
              {/* Static Image */}
              <div className="mos-window-img-wrapper">
                <img src={item.image} alt={item.title} className="mos-window-img" />
              </div>

              {/* Hover Popup Overlay */}
              <div className="mos-window-overlay-box">
                <span className="mos-window-badge manrope-font ">{item.badge}</span>
                <h4 className="mos-window-card-title">{item.title}</h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MosquitoWindowGallery;