import React, { useState } from "react";
import "./css/ContactConnect.css";

const ContactConnect = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    // 🎯 REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const googleSheetScriptUrl = "https://script.google.com/macros/s/AKfycbyq3HiBJf03Rdn4PgIXaDMC3MoRF0weAfJyuLGY7nPbPUtfh7mLFqtdVoP_Un9ZHw/exec";

    try {
      const response = await fetch(googleSheetScriptUrl, {
        method: "POST",
        mode: "no-cors", // Crucial block to bypass browser CORS restrictions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show toast or alert notification
      alert("Message sent successfully directly to Google Sheets!");
      
      // Clear form inputs after success
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending data to sheet:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <section className="contact-connect-section py-5">
      <div className="container py-4">
        
        <div className="text-center mb-5">
          <h2 className="connect-main-title mb-3 stit">Let's Connect</h2>
          <p className="connect-top-desc hanken-grotesk-font mx-auto sdes">
            We'd love to hear from you. Reach out to our team for professional
            inquiries regarding our durable and energy-efficient UPVC
            installations for your home or business.
          </p>
        </div>

        {/* 🎯 FIXED: Replaced standard Bootstrap col classes with pixel-perfect custom wrappers */}
        <div className="connect-master-flex-wrapper d-flex flex-column-reverse flex-md-row mt-2">
          
          <div className="contact-info-sidebar">
            <p className="sidebar-intro-text hanken-grotesk-font sdes">
              Have a project in mind? Get in touch with us to start a
              conversation and turn your ideas into reality.
            </p>

            <div className="info-block-item d-flex gap-3">
              <div className="info-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="sidebar-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="info-block-label mb-2 inter-font sdes">Main office</h5>
                <p className="info-block-value hanken-grotesk-font mb-3 smin">
                  13A Poombuhar nagar, Civil aerodrome post
                  <br />
                  Coimbatore - 641014.
                </p>

                <div className="sidebar-map-wrapper">
                  <iframe
                    title="Good Look Home Decors Office Location"
                    src="https://maps.google.com/maps?q=13A%20Poompuhar%20nagar,%20Civil%20aerodrome%20post,%20Coimbatore%20-%20641014&t=&z=15&ie=UTF-8&iwloc=&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="info-block-item d-flex gap-3">
              <div className="info-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="sidebar-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.806-5.165-4.147-6.972-6.972l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="info-block-label mb-2 inter-font sdes">Phone no.</h5>
                <p className="info-block-value hanken-grotesk-font mb-0 smin">
                  91+ 975 143 70 20
                </p>
              </div>
            </div>

            <div className="info-block-item d-flex gap-3">
              <div className="info-icon-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="sidebar-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h5 className="info-block-label mb-2 inter-font sdes">Email id</h5>
                <p className="info-block-value hanken-grotesk-font mb-0 smin">
                  Unimaxxarchitects@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="connect-form-card-box">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              <div className="text-center mb-2">
                <h3 className="form-card-inner-title mb-3 font-serief stit">SEND A MESSAGE</h3>
                <p className="form-card-inner-desc hanken-grotesk-font mx-auto sdes">
                  We design timeless spaces blending function, beauty, and
                  thoughtful architectural innovation.
                </p>
              </div>

              <div className="form-input-line-group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name*"
                  className="connect-underline-input manrope-font"
                  required
                />
              </div>

              <div className="form-input-line-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address*"
                  className="connect-underline-input manrope-font"
                  required
                />
              </div>

              <div className="form-input-line-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number*"
                  className="connect-underline-input manrope-font"
                  required
                />
              </div>

              <div className="form-input-line-group mb-4">
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="connect-underline-input manrope-font"
                />
              </div>

              <div className="d-flex justify-content-center mt-2">
                <button
                  type="submit"
                  className="btn btn-light form-capsule-submit-btn d-flex align-items-center gap-2"
                >
                  <span className="manrope-font btn-text">
                    Start Your Project
                  </span>
                  <span className="yellow-arrow-circle d-flex align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
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
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactConnect;