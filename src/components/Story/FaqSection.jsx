  import React, { useState } from 'react';
  import './css/FaqSection.css';

  const FaqSection = () => {
    // Track continuous active item index. Set -1 to keep all collapsed initially
    const [activeFaq, setActiveFaq] = useState(-1);

    const faqData = [
      {
        question: "How long has Good Look Home Decor been in the industry?",
        answer: "We bring two decades of precision manufacturing expertise to the interior solutions landscape. Over the last 20 years, our team has pioneered durable architectures, delivering quality installation frameworks engineered for commercial complexes and residential layouts across the country."
      },
      {
        question: "Do you provide customized solutions for different space requirements?",
        answer: "Absolutely. We specialize in designing and engineering custom truck bodies, structural uPVC casings, and modular component integrations tailored to match your specific dimensions. Our engineering setup ensures functional optimization regardless of complex landscape constraints."
      },
      {
        question: "How do your products contribute to the \"mood\" of my home?",
        answer: "Our installations perfectly balance aesthetic clarity with structural utility. By optimizing natural ambient light entry points and introducing sound isolation glass joints, we ensure your living space retains a quiet, secure comfort that elevates your home's interior ecosystem cleanly."
      },
      {
        question: "What sets your uPVC solutions apart from traditional windows and doors?",
        answer: "Unlike traditional materials that wrap or decay over time under environmental stress, our precision uPVC compositions boast uncompromising durability. They are structurally reinforced with heavy-duty structural profiles, requiring zero scaling maintenance while offering top-tier thermal insulation bounds."
      },
      {
        question: "What kind of maintenance is required for your uPVC systems?",
        answer: "Our engineered uPVC profiles are completely built to last without demanding rigorous cleaning pipelines. A simple wipe down with a damp cloth keeps the layout surface pristine, eliminating the recurring costs of protective painting, structural sealing, or dynamic alignment tunings."
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
                      <h4 className="faq-items-question m-0 fw-medium text-start">
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
                        <p className="faq-answers-desc-text m-0 hanken-grotesk-font text-muted">
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