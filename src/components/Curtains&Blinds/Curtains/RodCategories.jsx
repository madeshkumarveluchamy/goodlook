import React from 'react';
import './css/RodCategories.css';

import rodGolden from '../../../assets/curtainrodcollection1.png';
import rodBlack from '../../../assets/curtainrodcollection2.png';
import rodDesign from '../../../assets/curtainrodcollection3.png';

const RodCategories = () => {
  const rodData = [
    {
      id: 1,
      badge: "GOOD LOOK HOME DECORS",
      title: "Golden Rod",
      image: rodGolden
    },
    {
      id: 2,
      badge: "GOOD LOOK HOME DECORS",
      title: "Black Rod",
      image: rodBlack
    },
    {
      id: 3,
      badge: "GOOD LOOK HOME DECORS",
      title: "Design Rod",
      image: rodDesign
    }
  ];

  return (
    <section className="rod-categories-section py-5">
      <div className="container py-md-4">
        <div className="row g-4 justify-content-center">
          
          {rodData.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="rod-product-card">
                
                <div className="rod-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={`${item.title} Premium Architecture Showcase`} 
                    className="rod-product-img"
                  />
                </div>

                <div className="rod-info-box-overlay">
                  <span className="rod-brand-badge manrope-font ssub">{item.badge}</span>
                  <p className="rod-product-title m-0 font-serief sdes">{item.title}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RodCategories;