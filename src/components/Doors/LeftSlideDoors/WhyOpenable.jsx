import React from "react";
import "./css/WhyOpenable.css";
import interiorImg from "../../../assets/overlay.png";
import bgImg from "../../../assets/backgroundpicture.png"; // Ungaloda premium dark stripes texture image

const WhyOpenable = () => {
  const cardsData = [
    {
      id: "01",
      title: "Smooth Vertical Operation",
      description:
        "These windows and doors operate by sliding the sashes vertically within the frame. The counterbalanced mechanism ensures smooth and effortless movement, allowing you to easily open and close them to control ventilation and access.",
      image: interiorImg,
      layoutReverse: false,
    },
    {
      id: "02",
      title: "Durability and Longevity",
      description:
        "UPVC is a durable material that can withstand various weather conditions without warping, rotting, or corroding. Lift UPVC windows and doors are built to last, ensuring long-term functionality and aesthetic appeal.",
      image: interiorImg,
      layoutReverse: true,
    },
    {
      id: "03",
      title: "Low Maintenance",
      description:
        "The design and insulation properties of lift UPVC windows and doors contribute to sound reduction. They can help to minimize external noise, creating a quieter and more peaceful indoor environment. This is particularly beneficial if you live in busy or noisy areas.",
      image: interiorImg,
      layoutReverse: false,
    },
  ];

  return (
    <section
      className="why-openable-section py-5 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className=" container-xxl">
        {/* --- TOP FIXED HEADER BLOCK --- */}
        <div className="why-header-block d-flex justify-content-between align-items-end mb-5">
          <div className="header-left">
            <h6 className="sub-title text-uppercase mb-2">How We Do It</h6>
            <p className="text-muted small-desc mb-2">
              Our work involves many intricate
              <br />
              steps and stages.
            </p>
            <h2 className="why-main-title">
              Why Lift or Sliding Windows <br /> & Doors?
            </h2>
          </div>
          <div className="header-right mb-3">
            <button className="btn btn-light project-cta-btn d-flex align-items-center gap-2">
              <span className="manrope-font btn-text">Start Your Project</span>
              <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  style={{ width: "9px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* --- STACKING OVERLAP CONTAINER --- */}
        <div className="why-stacking-container">
          {cardsData.map((card, index) => (
            <div
              className="stacking-card-item"
              key={card.id}
              style={{
                "--card-index": index,
                backgroundImage: `url(${bgImg})` /* FIXED: Sets the exact same background image loop for the cards inner canvas */,
              }}
            >
              {/* FIXED: Open Row Layout with Divider Line instead of closed boxes */}
              <div
                className={`row align-items-center g-5 card-row-divider ${card.layoutReverse ? "flex-row-reverse" : ""}`}
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                {/* Image Area */}
                <div className="col-12 col-md-6">
                  <div className="card-image-box">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="img-fluid why-card-img"
                    />
                  </div>
                </div>

                {/* Text Area */}
                <div className="col-12 col-md-6">
                  <div className="card-text-box ps-md-4 pe-md-4">
                    <span className="card-number-index d-block mb-2">
                      {card.id}
                    </span>
                    <h3 className="card-title-text mb-3">{card.title}</h3>
                    <p className="card-desc-text manrope-font">
                      {card.description}
                    </p>
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
