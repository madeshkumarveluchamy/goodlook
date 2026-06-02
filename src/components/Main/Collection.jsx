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

// --- Aluminium Profiles Category Products (Additional Set if needed) ---
import prof1 from '../../assets/collection1.png';
import prof2 from '../../assets/collection1.png';
import prof3 from '../../assets/collection1.png';
import prof4 from '../../assets/collection1.png';

const Collection = () => {
  // Active tab state engine (ALL, UPVC, INSECT, ALUMINIUM, PROFILES)
  const [activeTab, setActiveTab] = useState('ALL');

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

  // Logic to dynamically filter products based on active state criteria
  const filteredProducts = activeTab === 'ALL' 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);

  return (
    <section className="collections-section bg-white" id="collections">
      <div className="container-fluid collections-fluid px-3 px-sm-4 px-md-5">
        
        {/* ================= HEADER TITLE BLOCK ================= */}
        <div className="text-center collections-header mx-auto">
          <h2 className="collections-main-title font-serif">Our Collections</h2>
          <p className="collections-sub-desc fw-light mt-3">
            Experience the harmony of structural integrity and aesthetic grace. Our curated architectural solutions define the modern living space.
          </p>
        </div>

        {/* ================= DYNAMIC NAVIGATION CATEGORY BAR ================= */}
        <div className="filter-navigation-row d-flex flex-wrap justify-content-center border-bottom pb-2 mb-5">
          <button 
            className={`filter-tab-btn tracking-widest text-uppercase ${activeTab === 'ALL' ? 'active' : ''}`}
            onClick={() => setActiveTab('ALL')}
          >
            All Products
          </button>
          <button 
            className={`filter-tab-btn tracking-widest text-uppercase ${activeTab === 'UPVC' ? 'active' : ''}`}
            onClick={() => setActiveTab('UPVC')}
          >
            uPVC Products
          </button>
          <button 
            className={`filter-tab-btn tracking-widest text-uppercase ${activeTab === 'INSECT' ? 'active' : ''}`}
            onClick={() => setActiveTab('INSECT')}
          >
            Insect Screens
          </button>
          <button 
            className={`filter-tab-btn tracking-widest text-uppercase ${activeTab === 'ALUMINIUM' ? 'active' : ''}`}
            onClick={() => setActiveTab('ALUMINIUM')}
          >
            Aluminium Profiles
          </button>
        </div>

        {/* ================= PRODUCTS CARD RESPONSIVE GRID ================= */}
        <div className="row g-4 product-display-grid mb-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-3 product-card-col">
              <div className="product-item-card-box">
                <div className="product-img-frame rounded-1 overflow-hidden">
                  <img src={product.img} alt={product.title} className="w-100 h-100 object-fit-cover" />
                </div>
                <span className="product-card-tag text-uppercase tracking-wider d-block mt-3 mb-1">
                  {product.tag}
                </span>
                <h4 className="product-card-title font-serif m-0">{product.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOWER BANNER SECTION ================= */}
        <div className="row align-items-center mt-5 pt-4 g-4 layout-row-reverse">
          <div className="col-12 col-md-7 p-0">
            <div className="lower-banner-img-frame pe-md-4">
              <img src={upvc1} alt="Architectural Integrity detail showcase" className="w-100 h-100 object-fit-cover" />
            </div>
          </div>
          <div className="col-12 col-md-5 p-0 ps-md-4">
            <div className="lower-banner-content text-left">
              <h3 className="lower-banner-title font-serif mb-4">
                Architectural <br /> Integrity
              </h3>
              <p className="lower-banner-desc fw-light mb-4">
                At Good Look Home, we believe your sanctuary is defined by the quality of light and the clarity of your view. Our uPVC and Aluminium solutions are engineered for more than just durability—they are designed to disappear, allowing the beauty of the outdoors to become your home's living art.
              </p>
              <button className="btn explore-process-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium">
                Explore Our Process
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collection;