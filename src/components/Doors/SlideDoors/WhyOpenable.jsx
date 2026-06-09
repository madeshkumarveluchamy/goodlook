import React from "react";
import "./css/WhyOpenable.css";
import interiorImg from "../../../assets/overlay.png";
import bgImg from "../../../assets/backgroundpicture.png"; // Ungaloda premium dark stripes texture image

const WhyOpenable = () => {
  const cardsData = [
    {
      id: "01",
      title: "Space Saving Design",
      description:
        "Sliding windows and doors do not require any additional space for operation. Since they slide horizontally, they are an ideal choice for areas with limited space, such as balconies or tight corners. The absence of swing space makes them a practical solution for small rooms or areas with furniture placement restrictions.",
      image: interiorImg,
      layoutReverse: false,
    },
    {
      id: "02",
      title: "Welcoming Natural Light",
      description:
        "UPVC sliding windows and doors typically feature large glass panels, offering expansive views of the outdoors and allowing ample natural light to enter the space. This not only enhances the aesthetic appeal but also creates a bright and inviting atmosphere within the room.",
      image: interiorImg,
      layoutReverse: true,
    },
    {
      id: "03",
      title: "Security Features",
      description:
        "UPVC sliding windows and doors are designed with security in mind. They come with multi-point locking systems, sturdy frames, and toughened glass options, ensuring enhanced safety and peace of mind. These features make it difficult for intruders to break in, providing an added layer of security for your property.",
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
            <h2 className="why-main-title">Why Sliding Windows <br />& Doors?</h2>
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
