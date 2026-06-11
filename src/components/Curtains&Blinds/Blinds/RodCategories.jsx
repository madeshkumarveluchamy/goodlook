import React from 'react';
import './css/RodCategories.css';

import rodGolden from '../../../assets/curtainrodcollection1.webp';
import rodBlack from '../../../assets/curtainrodcollection2.webp';
import rodDesign from '../../../assets/curtainrodcollection3.webp';

const RodCategories = () => {
  const rodData = [
    {
      id: 1,
      badge: "GOOD LOOK HOME DECORS",
      title: "Home",
      image: rodGolden
    },
    {
      id: 2,
      badge: "GOOD LOOK HOME DECORS",
      title: "Office Room",
      image: rodBlack
    },
    {
      id: 3,
      badge: "GOOD LOOK HOME DECORS",
      title: "Study Room",
      image: rodDesign
    }
  ];

  return (
    <section className="rods-categories-section py-5">
      <div className="container py-md-4">
        <div className="row g-4 justify-content-center">
          
          {rodData.map((item) => (
            <div key={item.id} className="col-12 col-md-4">
              <div className="rods-product-card">
                
                <div className="rods-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={`${item.title} Premium Architecture Showcase`} 
                    className="rods-product-img"
                  />
                </div>

                <div className="rods-info-box-overlay">
                  <span className="rods-brand-badge manrope-font ssub">{item.badge}</span>
                  <h4 className="rods-product-title m-0 font-serief sdes">{item.title}</h4>
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