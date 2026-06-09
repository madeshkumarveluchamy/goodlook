import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/Counter.css";

import counterImg1 from "../../assets/counter1.png"; 
import counterImg2 from "../../assets/counter2.png"; 
import counterImg3 from "../../assets/counter3.png"; 
import counterImg4 from "../../assets/counter4.png"; 

// --- Slot Rolling Logic Block ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value)); 

  return (
    <span ref={ref} className="slot-wrapper-inline">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit))) return <span key={i} className="slot-static-char">{digit}</span>;
        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1,
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span> {digit}</span>
                </>  
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

const AboutCounter = () => {
  return (
    <section className="about-counter-section">
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        <div className="row justify-content-between align-items-start m-0 w-100 g-4">
          
          {/* METRIC BLOCK 1 */}
          <div className="col-12 col-md-6 col-lg-3 counter-metric-col d-flex justify-content-center">
            <div className="metric-card-box d-flex">
              <h2 className="metric-display-number ">
                <SlotCounter value={2006} baseDirection="up" />
              </h2>
              <div className="metric-text-meta">
                <h5 className="metric-label-title m-0 inter-font text-center text-md-start ">Year of establishment</h5>
                <p className="metric-label-desc m-0 mt-1 inter-font text-center text-md-start">More than 21 years in the field</p>
              </div>
              <div className="metric-visual-footer d-flex justify-content-center justify-content-md-start ">
                <img src={counterImg1} alt="Establishment Group" className="metric-custom-img" />
              </div>
            </div>
          </div>

          {/* METRIC BLOCK 2 (ZIGZAG DROP APPLIED IN CSS VIA EVEN SELECTOR) */}
          <div className="col-12 col-md-6 col-lg-3 counter-metric-col d-flex justify-content-center">
            <div className="metric-card-box">
              <h2 className="metric-display-number">
                <SlotCounter value={154} baseDirection="up" />
                <span className="metric-suffix ">+</span>
              </h2>
              <div className="metric-text-meta">
                <h5 className="metric-label-title m-0 inter-font text-center text-md-start">Products are launched</h5>
                <p className="metric-label-desc m-0 mt-1 inter-font text-center text-md-start">A lot of projects are done</p>
              </div>
              <div className="metric-visual-footer d-flex justify-content-center justify-content-md-start ">
                <img src={counterImg2} alt="Products Strip" className="metric-custom-img" />
              </div>
            </div>
          </div>

          {/* METRIC BLOCK 3 */}
          <div className="col-12 col-md-6 col-lg-3 counter-metric-col d-flex justify-content-center">
            <div className="metric-card-box">
              <h2 className="metric-display-number">
                <SlotCounter value={1.5} baseDirection="up" />
                <span className="metric-suffix "> K</span>
              </h2>
              <div className="metric-text-meta">
                <h5 className="metric-label-title m-0 inter-font text-center text-md-start">Clients are satisfied</h5>
                <p className="metric-label-desc m-0 mt-1 inter-font text-center text-md-start">These people love us</p>
              </div>
              <div className="metric-visual-footer d-flex justify-content-center justify-content-md-start text-center text-md-start">
                <img src={counterImg3} alt="Clients Set" className="metric-custom-img" />
              </div>
            </div>
          </div>

          {/* METRIC BLOCK 4 (ZIGZAG DROP APPLIED IN CSS VIA EVEN SELECTOR) */}
          <div className="col-12 col-md-6 col-lg-3 counter-metric-col d-flex justify-content-center">
            <div className="metric-card-box">
              <h2 className="metric-display-number">
                <SlotCounter value={100} baseDirection="up" />
                <span className="metric-suffix ">%</span>
              </h2>
              <div className="metric-text-meta">
                <h5 className="metric-label-title m-0 inter-font text-center text-md-start">Quality Of UPVC</h5>
                <p className="metric-label-desc m-0 mt-1 inter-font text-center text-md-start">What we do right now</p>
              </div>
              <div className="metric-visual-footer d-flex justify-content-center justify-content-md-start  text-center text-md-start">
                <img src={counterImg4} alt="Quality Proof" className="metric-custom-img" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCounter;