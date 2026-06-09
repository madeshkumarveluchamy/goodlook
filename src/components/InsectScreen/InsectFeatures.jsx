import React from 'react';
import './css/InsectFeatures.css';

import bgImg from '../../assets/insectcollectionbackground.png';
import img1 from '../../assets/insectcollection1.png';
import img2 from '../../assets/insectcollection2.png';
import img3 from '../../assets/insectcollection3.png';
import img4 from '../../assets/insectcollection4.png';
import img5 from '../../assets/insectcollection5.png';

const InsectFeatures = () => {
  const featuresData = [
    {
      id: "01",
      title: "Pest-Free Ventilation",
      description: "Open your windows and doors to invite refreshing natural breezes into your home while maintaining a secure, impenetrable barrier against mosquitoes, flies, and other pests.",
      image: img1,
      gridClass: "card-pos-1"
    },
    {
      id: "02",
      title: "Custom-Fit Choice",
      description: "Tailor your home's protection with precision, made-to-measure screens that offer a perfect fit for any opening, with over 300 unique variants to match your specific requirements.",
      image: img2,
      gridClass: "card-pos-2"
    },
    {
      id: "03",
      title: "User-Friendly & Safe",
      description: "Enjoy incredibly simple-to-use, robust construction that is easy to remove when needed, all while benefiting from eco-friendly, certified products that ensure safety without the use of harsh chemicals.",
      image: img3,
      gridClass: "card-pos-3"
    },
    {
      id: "04",
      title: "Low Maintenance",
      description: "Built for longevity, our screens are crafted from hard-wearing, easy-to-clean materials specifically designed to provide a long service lifetime with minimal upkeep.",
      image: img4,
      gridClass: "card-pos-4"
    },
    {
      id: "05",
      title: "Expertly Designed",
      description: "Elevate your home's aesthetic with unobtrusive, elegant architectural finishes, all supported by advanced, patented technology that has been proven effective in millions of homes.",
      image: img5,
      gridClass: "card-pos-5"
    }
  ];

  return (
    <section className="insect-features-section py-5" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container py-md-5">
        
        <div className="features-unified-grid">
          {featuresData.map((item) => (
            <div key={item.id} className={`feature-grid-card ${item.gridClass}`} style={{ backgroundImage: `url(${item.image})` }}>
              <div className="card-glass-dark-overlay">
                <span className="feature-card-number">{item.id}</span>
                <h3 className="feature-card-title mb-3">{item.title}</h3>
                <p className="feature-card-desc manrope-font mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsectFeatures;