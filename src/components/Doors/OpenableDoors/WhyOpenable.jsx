import React from 'react';
import './css/WhyOpenable.css';
import interiorImg1 from '../../../assets/openable1.webp'; 
import interiorImg2 from '../../../assets/openable2.webp';
import interiorImg3 from '../../../assets/openable3.webp';
import bgImg from '../../../assets/backgroundpicture.webp'; // Ungaloda premium dark stripes texture image
import {Link} from "react-router-dom"

const WhyOpenable = () => {
  const cardsData = [
    {
      id: "01",
      title: "Design and Versatility",
      description: "UPVC openable windows and doors are available in a variety of designs and styles to suit different architectural preferences. Whether you prefer casement windows, tilt-and-turn windows, or hinged doors, UPVC can be customized to meet your specific requirements. This versatility allows you to achieve the desired look and feel for your property.",
      image: interiorImg1,
      layoutReverse: false
    },
    {
      id: "02",
      title: "Enhanced Ventilation",
      description: "Openable windows and doors provide excellent ventilation options, allowing fresh air to flow into your space. You can control the amount of airflow by adjusting the opening angle or using different opening options available with UPVC systems. This feature is particularly beneficial in maintaining a comfortable indoor environment and reducing reliance on mechanical ventilation.",
      image: interiorImg2,
      layoutReverse: true
    },
    {
      id: "03",
      title: "Low Maintenance",
      description: "UPVC is a low-maintenance material that is resistant to rot, corrosion, and fading. Unlike traditional wooden frames, UPVC does not require regular painting or sealing. Cleaning UPVC windows and doors is easy and can be done with mild soapy water, making them a hassle-free option.",
      image: interiorImg3,
      layoutReverse: false
    }
  ];

  return (
    <section className="why-openable-section py-5 " style={{ backgroundImage: `url(${bgImg})` }}>
      <div className=" container-xxl">
        
        {/* --- TOP FIXED HEADER BLOCK --- */}
        <div className="why-header-block d-flex justify-content-between align-items-center  align-items-md-end  mb-5">
          <div className="header-left">
            <h6 className="sub-title text-uppercase mb-2 text-center text-md-start">How We Do It</h6>
            <p className=" smalls-desc mb-2 text-center text-md-start">Our work involves many intricate<br />steps and stages.</p>
            <h2 className="why-main-title text-center text-md-start">Why Openable Windows <br />& Doors?</h2>
          </div>
          <Link to="/cta" className="text-decoration-none">
          <div className="header-right mb-3 ">
            <button className="btn btn-light project-cta-btn d-flex align-items-center gap-2">
              <span className="manrope-font btn-text">Start Your Project</span>
              <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{ width: '9px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </button>
          </div>
          </Link>
        </div>

        {/* --- STACKING OVERLAP CONTAINER --- */}
        <div className="whys-stacking-container ">
          {cardsData.map((card, index) => (
            <div 
              className="stacking-card-item " 
              key={card.id}
              style={{ 
                '--card-index': index,
                backgroundImage: `url(${bgImg})` /* FIXED: Sets the exact same background image loop for the cards inner canvas */
              }}
            >
              {/* FIXED: Open Row Layout with Divider Line instead of closed boxes */}
              <div className={`row align-items-center  g-5 card-row-divider ${card.layoutReverse ? 'flex-row-reverse' : ''}`} style={{ backgroundImage: `url(${bgImg})` }}>
                
                {/* Image Area */}
                <div className="col-12 col-md-6">
                  <div className="card-image-box">
                    <img src={card.image} alt={card.title} className="img-fluid why-card-img" />
                  </div>
                </div>

                {/* Text Area */}
                <div className="col-12 col-md-6">
                  <div className="card-text-box ps-md-4 pe-md-4">
                    <span className="card-number-index d-block mb-2 text-center text-md-start">{card.id}</span>
                    <h3 className="card-title-text mb-3 text-center text-md-start">{card.title}</h3>
                    <p className="card-desc-text manrope-font text-center text-md-start">{card.description}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyOpenable;