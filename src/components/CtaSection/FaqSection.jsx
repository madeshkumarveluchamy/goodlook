import React, { useState } from 'react';
import './css/FaqSection.css';

const FaqSection = () => {
  // Track continuous active item index. Set -1 to keep all collapsed initially
  const [activeFaq, setActiveFaq] = useState(-1);

  const faqData = [
    {
      question: "How long has Good Look Home Decor been in the industry?",
      answer: "Over 24 years. We've spent two decades perfecting mosquito net and UPVC solutions for homes and businesses across Coimbatore long enough to have seen every kind of window, door, and pest problem this city can throw at us."
    },
    {
      question: "Can mosquito nets be fitted on my existing UPVC or aluminium windows?",
      answer: "Yes. Whether you already have UPVC, aluminium, or wooden frames, we custom-fit our nets to match no need to replace what's already installed. As a GHD partner, we use precision, made-to-measure frames so the fit is exact, not approximate."
    },
    {
      question: "What's the difference between your UPVC windows and ordinary ones?",
      answer: "Ordinary frames warp, discolour, and weather down over time. Our UPVC profiles, sourced through Baydee's manufacturing standards, don't rot, rust, or swell and they hold up their shape and seal for years with zero repainting or resealing."
    },
    {
      question: "Do you offer custom sizing for non-standard windows and doors?",
      answer: "Every home is different, and our measurements reflect that. From narrow balcony openings to oversized commercial glazing, we design and fit each net and frame to your exact dimensions nothing off-the-shelf."
    },
    {
      question: "How much maintenance do UPVC windows and mosquito nets actually need?",
      answer: "Almost none. A damp cloth wipe-down is usually enough. No annual painting, no rust treatment, no sagging frames to adjust just clean, functioning windows and nets year after year."
    },
     {
      question: "Will UPVC windows help keep my home cooler and quieter?",
      answer: "Yes. UPVC's insulating properties reduce heat transfer and dampen outside noise better than standard aluminium or wood, which is a big part of why it's become the preferred choice for both homes and offices in Coimbatore."
    },
     {
      question: "Do you serve areas outside Coimbatore city?",
      answer: "We cover Coimbatore and surrounding areas reach out with your location, and we'll confirm serviceability and timelines."
    }
  ];

  const handleFaqToggle = (index) => {
    if (activeFaq === index) {
      setActiveFaq(-1); // Smoothly collapse if the same active line is clicked again
    } else {
      setActiveFaq(index); // Auto close previous and snap expand the selected data container
    }
  };

  return (
    <section className="faq-accordion-section bg-white text-dark" id="faq-engine">
      <div className="container faq-fluid-holder">
        
        {/* ================= TOP HEADLINE PART ================= */}
        <div className="row mb-5">
          <div className="col-12 text-center text-md-start">
            <h2 className="faq-main-headline font-serif text-uppercase m-0 stit ">
              YOUR QUESTIONS, <br /> OUR EXPERTISE
            </h2>
          </div>
        </div>

        {/* ================= INTERACTIVE ACCORDION ACCELERATOR GRID ================= */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="faq-list-stack d-flex flex-column gap-3">
              {faqData.map((item, index) => (
                <div key={index} className="faq-row-node-wrapper">
                  
                  {/* The Trigger Bar row component header */}
                  <div 
                    className={`faq-list-item d-flex align-items-center justify-content-between ${
                      activeFaq === index ? 'faq-row-active' : ''
                    }`}
                    onClick={() => handleFaqToggle(index)}
                  >
                    <h4 className="faq-item-question m-0 fw-medium text-start">
                      {item.question}
                    </h4>
                    
                    {/* Symmetrical circle background plus metric button */}
                    <div className="faq-plus-minus-circle d-flex align-items-center justify-content-center rounded-circle">
                      <span className="faq-icon-symbol">{activeFaq === index ? '−' : '+'}</span>
                    </div>
                  </div>

                  {/* DROP DOWN EXPANSION CONTENT CONTAINER BLOCK (3 TO 4 LINES RETENTION) */}
                  <div className={`faq-fluid-collapsible-drawer ${
                    activeFaq === index ? 'faq-drawer-expanded' : 'faq-drawer-collapsed'
                  }`}>
                    <div className="faq-drawer-interior-padding px-4 pb-4 pt-1">
                      <p className="faq-answer-desc-text m-0 hanken-grotesk-font text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;