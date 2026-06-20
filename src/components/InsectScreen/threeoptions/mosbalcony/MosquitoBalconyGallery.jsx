import React from 'react';
import './css/MosquitoBalconyGallery.css';

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
    { id: 1, image: img1, badge: "MOSQUITO NET FOR BALCONY", title: "Sliding Mosquito Net Balcony" },
    { id: 2, image: img2, badge: "MOSQUITO NET FOR BALCONY", title: "Pleated Mosquito Net Balcony" },
    { id: 3, image: img3, badge: "MOSQUITO NET FOR BALCONY", title: "Roller Mosquito Net Balcony" },
    { id: 4, image: img1, badge: "MOSQUITO NET FOR BALCONY", title: "Fixed Frame Net Balcony" },
    { id: 5, image: img2, badge: "MOSQUITO NET FOR BALCONY", title: "Magnetic Mosquito Net Balcony" },
    { id: 6, image: img3, badge: "MOSQUITO NET FOR BALCONY", title: "Velcro Mosquito Net Balcony" },
  ];

  return (
    <section className="mos-balcony-gallery-section">
      <div className="container">
        
        {/* Title & Subtitle */}
        <div className="mos-balcony-header text-center">
          <h2 className="mos-balcony-title stit">Mosquito Net for Balcony</h2>
          <p className="mos-balcony-subtitle hanken-grotesk-font mx-auto sdes">
            Explore our complete range of premium window, specifically engineered <br className="d-none d-md-block" /> 
            to provide the perfect fit and lasting protection for every room
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mos-balcony-grid">
          {galleryData.map((item) => (
            <div className="mos-balcony-card" key={item.id}>
              
              {/* Static Image */}
              <div className="mos-balcony-img-wrapper">
                <img src={item.image} alt={item.title} className="mos-balcony-img" />
              </div>

              {/* Hover Popup Overlay */}
              <div className="mos-balcony-overlay-box">
                <span className="mos-balcony-badge manrope-font">{item.badge}</span>
                <h4 className="mos-balcony-card-title">{item.title}</h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MosquitoWindowGallery;