import React from 'react';
import './css/QualityDurability.css';

const QualityDurability = () => {
  return (
    <section className="quality-section bg-white" id="quality">
      <div className="container-fluid quality-fluid-holder px-3 px-sm-4 px-md-5">
        
        {/* ================= HEADER OVERVIEW BLOCK ================= */}
        <div className="text-center quality-header mx-auto mb-5">
          <span className="quality-mini-badge text-uppercase tracking-widest d-block mb-2">
            The Standard
          </span>
          <h2 className="quality-main-title font-serif m-0">Quality & Durability</h2>
        </div>

        {/* ================= MAIN BENTO GRID MATRIX ================= */}
        <div className="row g-4 bento-upper-row align-items-stretch mb-4">
          
          {/* Large Left Card: 25-Year Warranty */}
          <div className="col-12 col-md-8">
            <div className="bento-card large-white-card p-4 p-sm-5 d-flex flex-column justify-content-between h-100">
              <div className="card-top-content">
                <div className="gold-icon-circle d-flex align-items-center justify-content-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="bento-card-title font-sans fw-bold mb-3">25-Year Integrity Warranty</h3>
                <p className="bento-card-desc fw-light text-muted">
                  Our confidence in our craftsmanship is absolute. Every foundational piece from Good Look Home is backed by a 25-year structural warranty, ensuring your investment remains as impeccable as the day it arrived.
                </p>
              </div>
              <div className="card-bottom-action mt-4">
                <a href="#story" className="bento-text-link tracking-wider text-uppercase d-inline-flex align-items-center gap-2 fw-medium text-decoration-none">
                  Read The Our Story 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="link-arrow-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Sustainability Sourced Materials */}
          <div className="col-12 col-md-4">
            <div className="bento-card dark-solid-card p-4 p-sm-5 d-flex flex-column justify-content-between h-100">
              <div className="card-top-content">
                <span className="dark-card-tag text-uppercase tracking-widest d-block mb-3">Ethical</span>
                <h3 className="dark-card-title font-serif text-white mb-4">Sustainably <br />Sourced Materials</h3>
                <p className="dark-card-desc fw-light">
                  We partner exclusively with FSC-certified forests and ethical artisans to ensure our luxury never costs the earth.
                </p>
              </div>
              <div className="card-bottom-progress mt-4">
                <div className="bento-progress-track">
                  <div className="bento-progress-fill"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= LOWER TRIPLE CARD BLOCKS ================= */}
        <div className="row g-4 bento-lower-row">
          
          {/* Card 01: Artisan Built */}
          <div className="col-12 col-md-4">
            <div className="utility-minimal-card p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="util-icon-wrapper mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="util-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75L4.81 7.46A2.652 2.652 0 001.5 11.25l5.83 5.83m3.75-3.75L13.84 9.77M8.9 14.71l-1.42 1.42m7.83-7.83l1.42-1.42m-1.42 1.42l-3.54 3.54m0 0l3.54-3.54M12 5.25l1.42-1.42a2.652 2.652 0 00-3.75 3.75L11.09 9" />
                </svg>
              </div>
              <h5 className="util-card-heading fw-semibold mb-2">Artisan Built</h5>
              <p className="util-card-desc m-0 text-muted fw-light">Each piece is hand-finished by master craftspeople.</p>
            </div>
          </div>

          {/* Card 02: Pristine Textiles */}
          <div className="col-12 col-md-4">
            <div className="utility-minimal-card p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="util-icon-wrapper mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="util-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" />
                </svg>
              </div>
              <h5 className="util-card-heading fw-semibold mb-2">Pristine Textiles</h5>
              <p className="util-card-desc m-0 text-muted fw-light">Grade-A leathers and high-thread-count linens.</p>
            </div>
          </div>

          {/* Card 03: Timeless Design */}
          <div className="col-12 col-md-4">
            <div className="utility-minimal-card p-4 text-center d-flex flex-column align-items-center justify-content-center">
              <div className="util-icon-wrapper mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="util-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0L15 16.5m4.5-10.5L6 18" />
                </svg>
              </div>
              <h5 className="util-card-heading fw-semibold mb-2">Timeless Design</h5>
              <p className="util-card-desc m-0 text-muted fw-light">Shapes designed to transcend seasonal trends.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QualityDurability;