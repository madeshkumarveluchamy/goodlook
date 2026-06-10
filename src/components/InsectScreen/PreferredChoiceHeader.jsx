import React from 'react';
import './css/PrefferedChoiceHeader.css';

const PreferredChoiceHeader = () => {
  return (
    <section className="preferred-choice-section pb-3 pt-2 pt-md-5">
      <div className="container text-center py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">

            <h6 className="choice-gold-badge text-uppercase mb-2 ssub">
              Quality You Trust
            </h6>

            <h2 className="choice-main-title mb-3 stit">
              Why GHD Insect Screens Are <br className="d-none d-md-block" /> The Preferred Choice
            </h2>

            <p className="choice-subtext manrope-font mx-auto mb-0 hanken-grotesk-font sdes">
              Upgrade your lifestyle with our durable, made-to-measure screens <br className="d-none d-md-block" /> where innovative design meets effortless pest protection.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferredChoiceHeader;