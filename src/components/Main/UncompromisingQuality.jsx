import React from 'react';
import './css/UncompromisingQuality.css';

// --- IMPORT YOUR 3 IMAGE ASSETS DIRECTLY ---
import quality1 from '../../assets/quality1.webp';
import quality2 from '../../assets/quality2.webp';
import quality3 from '../../assets/quality3.webp';

const UncompromisingQuality = () => {
  const articlesData = [
    {
      id: 1,
      image: quality1,
      title: 'Master The Art Of Brightening Your Interiors',
      author: 'by Team Kriya',
      date: 'on Jul 18, 2026',
      desc: 'Discover how strategic window placement & high transmittance glass can transform your living space. We explore design tips to maximize natural sunlight.'
    },
    {
      id: 2,
      image: quality2,
      title: 'Efficient Elegance For The Future Of Comfort',
      author: 'by Team Kriya',
      date: 'on Jul 18, 2026',
      desc: 'Discover how strategic window placement & high transmittance glass can transform your living space. We explore design tips to maximize natural sunlight.'
    },
    {
      id: 3,
      image: quality3,
      title: 'Investing In Quality For A Lasting Home',
      author: 'by Team Kriya',
      date: 'on Jul 18, 2026',
      desc: 'Discover how strategic window placement & high transmittance glass can transform your living space. We explore design tips to maximize natural sunlight.'
    }
  ];

  return (
    <section className="uncompromising-quality-section" id="blog">
      <div className="container-fluid quality-container-fluid px-3 px-sm-4 px-md-5">
        
        {/* ================= HEADER TIMELINE ROW ================= */}
        <div className="text-center quality-section-header mx-auto mb-5">
          <span className="quality-sub-badge text-uppercase tracking-widest d-block mb-2 manrope-font ssub">
            Built Better
          </span>
          <h2 className="quality-header-title font-serif m-0 text-white stit">
            Uncompromising Quality
          </h2>
        </div>

        {/* ================= 3-COLUMN CONTENT CARDS GRID ================= */}
        <div className="row g-4 justify-content-center quality-articles-grid">
          {articlesData.map((article) => (
            <div key={article.id} className="col-12 col-md-4 article-column-node">
              <div className="quality-article-card-box h-100 d-flex flex-column">
                
                {/* Clean Aspect-Ratio Image Container */}
                <div className="article-img-viewport rounded-1 overflow-hidden mb-3">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-100 h-100 object-fit-cover-fix" 
                  />
                </div>

                {/* Editorial Title Header */}
                <h3 className="article-headline-title text-white mb-2 rubik-font text-center text-md-start sdes">
                  {article.title}
                </h3>

                {/* Author Metadata Trace */}
                <div className="article-meta-row d-flex align-items-center gap-2 mb-2 flex-column flex-md-row">
                  <span className="meta-author fw-medium rubik-font ssub">{article.author}</span>
                  <span className="meta-date rubik-font sdes">{article.date}</span>
                </div>

                {/* Article Snippet Core Body */}
                <p className="article-excerpt-description fw-light mb-3 hanken-grotesk-font text-center text-md-start sdes">
                  {article.desc}
                </p>

                {/* Interactive Anchor Link Line */}
                <div className="mt-auto pt-1 d-flex justify-content-center justify-content-md-start">
                  <a href="#details" className="article-details-action-link text-uppercase tracking-wider fw-medium text-decoration-none hanken-grotesk-font">
                    View Details
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UncompromisingQuality;