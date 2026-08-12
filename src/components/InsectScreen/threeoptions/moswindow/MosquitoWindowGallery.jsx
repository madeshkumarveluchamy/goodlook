import React from 'react';
import './css/MosquitoWindowGallery.css';

// Ungaloda static images-a inga import pannikonga
import img1 from '../../../../assets/sliding_mosquito_net_window(1).webp'; 
import img2 from '../../../../assets/pleaded10.webp';
import img3 from '../../../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (4).webp';
import img4 from '../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (3).webp';
import img5 from '../../../../assets/folding_security_mesh_windows/folding_security_mesh_windows (9).webp';
import img6 from '../../../../assets/pleaded3.webp';

const MosquitoWindowGallery = () => {
  // Image card-kana data
  const galleryData = [
    { id: 5, image: img5, badge: "MOSQUITO NET FOR WINDOW", title: "Foldable Security Mesh Window" },
    { id: 3, image: img3, badge: "MOSQUITO NET FOR WINDOW", title: "Hinged Frame Mosquito Window" },
    { id: 2, image: img2, badge: "MOSQUITO NET FOR WINDOW", title: "Pleated Mosquito Net Window" },
    { id: 1, image: img1, badge: "MOSQUITO NET FOR WINDOW", title: "Sliding Mosquito Net Window" },

  ];

  return (
    <section className="mos-window-gallery-section">
      <div className="container">
        
        {/* Title & Subtitle */}
        <div className="mos-window-header text-center">
          <h1 className="mos-window-title stit">Mosquito Net for Windows in Coimbatore</h1>
          <p className="mos-window-subtitle hanken-grotesk-font mx-auto sdes">
           Protect your home with mosquito net for windows in Coimbatore, designed for
ventilation, precise fitting, insect control and lasting comfort.
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