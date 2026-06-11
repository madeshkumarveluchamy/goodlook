import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Collection.css';

import upvc1 from '../../assets/upvcCollection1.webp';
import upvc2 from '../../assets/upvcCollection2.webp';
import upvc3 from '../../assets/upvcCollection3.webp';
import upvc4 from '../../assets/upvcCollection4.webp';
import upvc5 from '../../assets/upvcdoor1.webp';
import upvc6 from '../../assets/upvcdoor2.webp';
import upvc7 from '../../assets/upvcdoor3.webp';
import upvc8 from '../../assets/upvcdoor4.webp';

import alum1 from '../../assets/BlackRod.webp';
import alum2 from '../../assets/CustomCurtains.webp';
import alum3 from '../../assets/GoldenRod.webp';
import alum4 from '../../assets/image19.webp';
import alum5 from '../../assets/studyroomwindow.webp';
import alum6 from '../../assets/OfficeWindowBlinds.webp';
import alum7 from '../../assets/HomeWindowBlinds.webp';

import insect1 from '../../assets/slidedoor1.webp';
import insect2 from '../../assets/openabledoor2.webp';
import insect3 from '../../assets/Lift-SlideWindows&Doors.webp';

const Collection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(8);

  const productsData = [
    { id: 1, category: 'UPVC', tag: 'uPVC BAYDEE', title: '65 Series uPVC profile', img: upvc1, path: '/upvc' },
    { id: 2, category: 'UPVC', tag: 'uPVC BAYDEE', title: '112 Series uPVC profile', img: upvc2, path: '/upvc' },
    { id: 3, category: 'UPVC', tag: 'uPVC BAYDEE', title: '92 Series uPVC profile', img: upvc3, path: '/upvc' },
    { id: 4, category: 'UPVC', tag: 'uPVC BAYDEE', title: '88 Series uPVC profile', img: upvc4, path: '/upvc' },
    { id: 5, category: 'UPVC', tag: 'uPVC BAYDEE', title: 'Sun Room lighting roof curtain wall', img: upvc5, path: '/upvc' },
    { id: 6, category: 'UPVC', tag: 'uPVC BAYDEE', title: 'Lifting sliding door', img: upvc6, path: '/upvc' },
    { id: 7, category: 'UPVC', tag: 'uPVC BAYDEE', title: 'Dimming comfort window', img: upvc7, path: '/upvc' },
    { id: 8, category: 'UPVC', tag: 'uPVC BAYDEE', title: 'Barrier-free mute door', img: upvc8, path: '/upvc' },

    { id: 9, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Black Rod', img: alum1, path: '/curtains' },
    { id: 10, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Custom Curtains', img: alum2, path: '/curtains' },
    { id: 11, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Golden Rod', img: alum3, path: '/curtains' },
    { id: 12, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'slide curtain', img: alum4, path: '/curtains' },
    { id: 13, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Study Room Blinds', img: alum5, path: '/blinds' },
    { id: 14, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Office Window Blinds', img: alum6, path: '/blinds' },
    { id: 15, category: 'ALUMINIUM', tag: 'GoodLookHome', title: 'Home Window Blinds', img: alum7, path: '/blinds' },

    { id: 16, category: 'INSECT', tag: 'GoodLookHomes', title: 'Slide Doors', img: insect1, path: '/collections/slidedoors' },
    { id: 17, category: 'INSECT', tag: 'GoodLookHomes', title: 'Openable Doors', img: insect2, path: '/collections/openabledoors' },
    { id: 18, category: 'INSECT', tag: 'GoodLookHomes', title: 'lift-slide windows', img: insect3, path: '/collections/liftslidedoors' }
  ];

  const bannerContent = {
    ALL: {
      title: <>Architectural <br /> Integrity</>,
      image: upvc1,
      desc: "At Good Look Home, we believe your sanctuary is defined by the quality of light and the clarity of your view. Our uPVC and Aluminium solutions are engineered for more than just durability—they are designed to disappear, allowing the beauty of the outdoors to become your home's living art."
    },
    UPVC: {
      title: <>Unmatched <br /> uPVC Insulation</>,
      image: upvc2,
      desc: "Our premium uPVC Profiles deliver exceptional thermal efficiency and complete acoustic dampening. Engineered expertly to withstand weather extremes, these frames offer twenty-one-plus years of structural stability with absolute zero maintenance requirement."
    },
    INSECT: {
      title: <>Flawless <br /> Insect Protection</>,
      image: insect1,
      desc: "Experience refreshing airflow with zero entry constraints for pests. Our integrated Plisse and Roller Insect Screens combine ultra-fine mesh resilience with precision architectural tracks, fitting seamlessly into your current luxury window profiles."
    },
    ALUMINIUM: {
      title: <>Sleek <br /> Aluminium Precision</>,
      image: alum1,
      desc: "Discover premium structural load bearing with minimalist sightlines. Our advanced slimline Aluminium tracks and break casement doors offer ultimate structural durability, expanding panoramic viewing horizons across modern architectural architectures."
    }
  };

  const filteredProducts = activeTab === 'ALL' 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const activeBanner = bannerContent[activeTab] || bannerContent['ALL'];

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setVisibleCount(8); 
  };

  return (
    <section className="collections-section bg-white" id="collections">
      <div className="container-fluid collections-fluid px-3 px-sm-4 px-md-5">
        
        <div className="text-center collections-header mx-auto">
          <h2 className="collections-main-title font-serif stit">Our Collections</h2>
          <p className="collections-sub-desc fw-light mt-3 hanken-grotesk-font sdes">
            Experience the harmony of structural integrity and aesthetic grace. Our curated architectural solutions define the modern living space.
          </p>
        </div>

        <div className="filter-navigation-row d-flex flex-wrap justify-content-center border-bottom pb-2 mb-5">
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'ALL' ? 'active' : ''}`}
            onClick={() => handleTabChange('ALL')}
          >
            All Products
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'UPVC' ? 'active' : ''}`}
            onClick={() => handleTabChange('UPVC')}
          >
            uPVC Products
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'INSECT' ? 'active' : ''}`}
            onClick={() => handleTabChange('INSECT')}
          >
            uPVC Doors & windows
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'ALUMINIUM' ? 'active' : ''}`}
            onClick={() => handleTabChange('ALUMINIUM')}
          >
            Curtains & Blinds
          </button>
        </div>

        <div className="row g-4 product-display-grid justify-content-center mb-4">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-3 product-card-col">
              <div 
                className="product-item-card-box style-clickable" 
                onClick={() => navigate(product.path)}
              >
                <div className="product-img-frame rounded-1 overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-100 h-100 object-fit-cover" />
                </div>
                <span className="product-card-tag text-uppercase tracking-wider d-block mt-3 mb-1 manrope-font text-center text-md-start ssub">
                  {product.tag}
                </span>
                <h4 className="product-card-title font-serif m-0 text-center text-md-start sdes">{product.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length > 8 && (
          <div className="text-center show-more-action-strip mb-5">
            {visibleCount < filteredProducts.length ? (
              <button 
                className="btn load-toggle-action-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium manrope-font"
                onClick={() => setVisibleCount(filteredProducts.length)}
              >
                Show More Products
              </button>
            ) : (
              <button 
                className="btn load-toggle-action-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium manrope-font"
                onClick={() => setVisibleCount(8)}
              >
                Show Less
              </button>
            )}
          </div>
        )}

        <div className="row align-items-center mt-5 pt-4 g-4 layout-row-reverse">
          <div className="col-12 col-md-7 p-0">
            <div className="lower-banner-img-frame pe-md-4">
              <img 
                src={activeBanner.image} 
                alt={`${activeTab} detail showcase`} 
                className="w-100 h-100 object-fit-cover transition-fade-effect" 
              />
            </div>
          </div>
          <div className="col-12 col-md-5 p-0 ps-md-4">
            <div className="lower-banner-content text-left d-flex flex-column justify-content-center">
              <h3 className="lower-banner-title font-serif mb-4 text-center text-md-start stit">
                {activeBanner.title}
              </h3>
              <p className="lower-banner-desc fw-light mb-4 hanken-grotesk-font text-center text-md-start sdes">
                {activeBanner.desc}
              </p>
              <div className="text-center text-md-start">
                <button 
                  className="btn explore-process-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium manrope-font"
                  onClick={() => navigate(activeTab === 'ALL' ? '/collections/openabledoors' : activeBanner.path || '/')}
                >
                  Explore Our Process
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collection;