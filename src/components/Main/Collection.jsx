import React, { useState } from 'react';
import './css/Collection.css';

// ==========================================================================
// 1. IMPORT ALL 16 IMAGES ONE BY ONE (4 FOR EACH CATEGORY)
// ==========================================================================

// --- uPVC Category Products ---
import upvc1 from '../../assets/collection1.png';
import upvc2 from '../../assets/collection2.png';
import upvc3 from '../../assets/collection3.png';
import upvc4 from '../../assets/collection4.png';

// --- Aluminium Category Products ---
import alum1 from '../../assets/collection1.png';
import alum2 from '../../assets/collection1.png';
import alum3 from '../../assets/collection1.png';
import alum4 from '../../assets/collection1.png';

// --- Insect Screens Category Products ---
import insect1 from '../../assets/collection1.png';
import insect2 from '../../assets/collection1.png';
import insect3 from '../../assets/collection1.png';
import insect4 from '../../assets/collection1.png';

// --- Aluminium Profiles Category Products ---
import prof1 from '../../assets/collection1.png';
import prof2 from '../../assets/collection1.png';
import prof3 from '../../assets/collection1.png';
import prof4 from '../../assets/collection1.png';

const Collection = () => {
  // Active tab state engine (ALL, UPVC, INSECT, ALUMINIUM, PROFILES)
  const [activeTab, setActiveTab] = useState('ALL');
  
  // ==========================================================================
  // CRITICAL FIX: STATE STEP LIMIT FOR DYNAMIC ROW REVEALING
  // ==========================================================================
  const [visibleCount, setVisibleCount] = useState(8);

  // ==========================================================================
  // 2. THE COMPLETE 16 PRODUCT DATASET ARRAY
  // ==========================================================================
  const productsData = [
    // ------ Category 1: uPVC Products (4 Items) ------
    { id: 1, category: 'UPVC', tag: 'uPVC Elite', title: 'Casement Window System', img: upvc1 },
    { id: 2, category: 'UPVC', tag: 'Collection', title: 'Baydee Series Frame', img: upvc2 },
    { id: 3, category: 'UPVC', tag: 'uPVC Premium', title: 'Sliding Window Track', img: upvc3 },
    { id: 4, category: 'UPVC', tag: 'Luxury Tier', title: 'Tilt and Turn System', img: upvc4 },

    // ------ Category 2: Aluminium Products (4 Items) ------
    { id: 5, category: 'ALUMINIUM', tag: 'Aluminium', title: 'Slimline Sliding Track', img: alum1 },
    { id: 6, category: 'ALUMINIUM', tag: 'Heavy Duty', title: 'Thermal Break Casement', img: alum2 },
    { id: 7, category: 'ALUMINIUM', tag: 'Minimalist', title: 'UltraSlim Pivot Door', img: alum3 },
    { id: 8, category: 'ALUMINIUM', tag: 'Architectural', title: 'Structural Glazing Profile', img: alum4 },

    // ------ Category 3: Insect Screens (4 Items) ------
    { id: 9, category: 'INSECT', tag: 'Integrated', title: 'Plisse Insect Screen', img: insect1 },
    { id: 10, category: 'INSECT', tag: 'Roll-Up', title: 'Vertical Roller Mesh', img: insect2 },
    { id: 11, category: 'INSECT', tag: 'Magnetic', title: 'Detachable Eco Mesh', img: insect3 },
    { id: 12, category: 'INSECT', tag: 'Pleated', title: 'Zig-Zag Barrier Screen', img: insect4 },

    // ------ Category 4: Aluminium Profiles (4 Items) ------
    { id: 13, category: 'PROFILES', tag: 'Industrial', title: 'Louver Ventilation Frame', img: prof1 },
    { id: 14, category: 'PROFILES', tag: 'Commercial', title: 'Curtain Wall Mullion', img: prof2 },
    { id: 15, category: 'PROFILES', tag: 'Extrusion', title: 'Standard T-Slot Track', img: prof3 },
    { id: 16, category: 'PROFILES', tag: 'Premium Trim', title: 'Anodized Sub-Frame Ext', img: prof4 }
  ];

  // ==========================================================================
  // 3. DYNAMIC CONTENT DICTIONARY FOR THE LOWER BANNER SECTION
  // ==========================================================================
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

  // Logic to dynamically filter products grid array based on active criteria
  const filteredProducts = activeTab === 'ALL' 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);

  // CLAMPS DISPLAY GRID EXPLICITLY ACCORDING TO RUNTIME VISIBLE STEPS VALUE
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Fallback engine if activeTab state handles subcategories smoothly
  const activeBanner = bannerContent[activeTab] || bannerContent['ALL'];

  // Resets visible counts baseline layout instantly on every tab switches toggle
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setVisibleCount(8); // Snaps back limit to 8 rows safety parameters
  };

  return (
    <section className="collections-section bg-white" id="collections">
      <div className="container-fluid collections-fluid px-3 px-sm-4 px-md-5">
        
        {/* ================= HEADER TITLE BLOCK ================= */}
        <div className="text-center collections-header mx-auto">
          <h2 className="collections-main-title font-serif stit">Our Collections</h2>
          <p className="collections-sub-desc fw-light mt-3 hanken-grotesk-font sdes">
            Experience the harmony of structural integrity and aesthetic grace. Our curated architectural solutions define the modern living space.
          </p>
        </div>

        {/* ================= DYNAMIC NAVIGATION CATEGORY BAR ================= */}
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
            Insect Screens
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'ALUMINIUM' ? 'active' : ''}`}
            onClick={() => handleTabChange('ALUMINIUM')}
          >
            Aluminium Profiles
          </button>
        </div>

        {/* ================= PRODUCTS CARD RESPONSIVE GRID (SLICED ARRAY) ================= */}
        <div className="row g-4 product-display-grid mb-4">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-3 product-card-col">
              <div className="product-item-card-box">
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

        {/* ================= INTERACTIVE REVEAL ACTION BLOCK BUTTON ================= */}
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

        {/* ================= LOWER DYNAMIC SHOWCASE BANNER SECTION ================= */}
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
                <button className="btn explore-process-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium manrope-font">
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