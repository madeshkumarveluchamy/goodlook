import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Collection.css';
import { Link } from 'react-router-dom';

import upvcdoor1 from '../../assets/uPVC_Casement_ Door_Images (7).webp';
import upvcdoor2 from '../../assets/uPVC_Sliding_Door_Images (3).webp';
import upvcdoor3 from '../../assets/uPVC_Sliding_Folding_Door_Images (2).webp';
import upvcdoor4 from '../../assets/uPVC_Arc_ Door_Images (9).webp';


import upvcwindow1 from '../../assets/uPVC_Casement_Windows_Image (5).webp';
import upvcwindow2 from '../../assets/uPVC_Sliding_Windows_Images (2).webp';
import upvcwindow3 from '../../assets/uPVC_Fixed_Window_Images (4).webp';
import upvcwindow4 from '../../assets/uPVC_Ventilator_Windows_Images (1).webp';
import upvcwindow5 from '../../assets/uPVC_Arch_Windows_Image (2).webp';

import MosquitoNetWindows1 from '../../assets/folding_mosquito_net_doors/folding_mosqutio_net_doors_banner (10).webp';
import MosquitoNetWindows2 from '../../assets/hinged_mosquito_net_doors/hinged_mosquito_net_doors (6).webp';
import MosquitoNetWindows3 from '../../assets/Pleaded_mosqutio_net_doors/pleaded_mosqito_net_doors (4).webp';
import MosquitoNetWindows4 from '../../assets/sliding4.webp';


import MosquitoNetDoor1 from '../../assets/sliding_mosquito_net_window(1).webp';
import MosquitoNetDoor2 from '../../assets/pleaded10.webp';
import MosquitoNetDoor3 from '../../assets/hinged_mosquito_net_window/hinged_mosquito_net_window (4).webp';
import MosquitoNetDoor4 from '../../assets/folding_security_mesh_windows/folding_security_mesh_windows (9).webp';

import curtain1 from '../../assets/curtainrodcollection1.webp';
import curtain2 from '../../assets/curtainrodcollection2.webp';
import curtain3 from '../../assets/curtainrodcollection3.webp';

import blind1 from '../../assets/HomeBlinds.webp';
import blind2 from '../../assets/OfficeRoomBlind.webp';
import blind3 from '../../assets/StudyRoomBlind.webp';



const Collection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('UPVCdoor');
  const [visibleCount, setVisibleCount] = useState(8);

  const productsData = [
    { id: 1, category: 'UPVCdoor', tag: 'uPVC Doors', title: 'uPVC Casement Doors', img: upvcdoor1, path: 'our-collections/upvc-doors/casement-doors' },
    { id: 2, category: 'UPVCdoor', tag: 'uPVC Doors', title: 'uPVC Sliding Doors', img: upvcdoor2, path: 'our-collections/upvc-doors/sliding-doors' },
    { id: 3, category: 'UPVCdoor', tag: 'uPVC Doors', title: 'uPVC Folding Doors', img: upvcdoor3, path: 'our-collections/upvc-doors/folding-doors' },
    { id: 4, category: 'UPVCdoor', tag: 'uPVC Doors', title: 'uPVC Arch Doors', img: upvcdoor4, path: 'our-collections/upvc-doors/arch-doors' },


    { id: 5, category:  'UPVCwindow', tag:'uPVC Windows', title: 'uPVC Casement Windows', img: upvcwindow1, path: 'our-collections/upvc-windows/casement-windows' },
    { id: 6, category: 'UPVCwindow', tag: 'uPVC Windows', title: 'uPVC Sliding Windows', img: upvcwindow2, path: 'our-collections/upvc-windows/sliding-windows' },
    { id: 7, category: 'UPVCwindow', tag: 'uPVC Windows', title: 'uPVC Fixed Windows', img: upvcwindow3, path: 'our-collections/upvc-windows/fixed-windows' },
    { id: 8, category: 'UPVCwindow', tag: 'uPVC Windows', title: 'uPVC Ventilator Windows', img: upvcwindow4, path: 'our-collections/upvc-windows/ventilator-windows' },
    { id: 9, category: 'UPVCwindow', tag: 'uPVC Windows', title: 'uPVC Arch Windows', img: upvcwindow5, path: 'our-collections/upvc-windows/arch-windows' },


    { id: 9, category:  'MosqutioDoor', tag: 'Mosquito Net For Doors', title: 'Foldable Security Mesh Doors', img: MosquitoNetWindows1, path: '/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors' },
    { id: 10, category: 'MosqutioDoor', tag: 'Mosquito Net For Doors', title: 'Hinged Frame Mosquito Doors', img: MosquitoNetWindows2, path: '/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors' },
    { id: 11, category: 'MosqutioDoor', tag: 'Mosquito Net For Doors', title: 'Pleated Mosquito Net Doors', img: MosquitoNetWindows3, path: 'insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors' },
    { id: 12, category: 'MosqutioDoor', tag: 'Mosquito Net For Doors', title: 'Sliding Mosquito Net Doors', img: MosquitoNetWindows4, path: 'insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors' },
    
    { id: 16, category: 'MosqutioWindows', tag: 'Mosquito Net For Windows', title: 'Foldable Security Mesh Windows', img: MosquitoNetDoor4, path: 'insect-screen/mosquito-net-for-window/foldable-security-mesh-window' },
    { id: 15, category: 'MosqutioWindows', tag: 'Mosquito Net For Windows', title: 'Hinged Frame Mosquito Windows', img: MosquitoNetDoor3, path: 'insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window' },
    { id: 14, category: 'MosqutioWindows', tag: 'Mosquito Net For Windows', title: 'Pleated Mosquito Net Windows', img: MosquitoNetDoor2, path: 'insect-screen/mosquito-net-for-window/pleated-mosquito-net-window' },
    { id: 13, category: 'MosqutioWindows', tag: 'Mosquito Net For Windows', title: 'Sliding Mosquito Net Windows', img: MosquitoNetDoor1, path: 'insect-screen/mosquito-net-for-window/sliding-mosquito-net-window' },

    { id: 17, category: 'curtainsBlinds', tag: 'curtain', title: 'Golden Rod', img: curtain1, path: 'curtains-blinds/curtains' },
    { id: 18, category: 'curtainsBlinds', tag: 'curtain', title: 'Black Rod', img: curtain2, path: 'curtains-blinds/curtains' },
    { id: 19, category: 'curtainsBlinds', tag: 'curtain', title: 'Design Rod', img: curtain3, path: 'curtains-blinds/curtains' },
    { id: 20, category: 'curtainsBlinds', tag: 'blind', title: 'Home', img: blind1, path: 'curtains-blinds/blinds' },
    { id: 21, category: 'curtainsBlinds', tag: 'blind', title: 'Office Room', img: blind2, path: 'curtains-blinds/blinds' },
    { id: 22, category: 'curtainsBlinds', tag: 'blind', title: 'Study Room', img: blind3, path: 'curtains-blinds/blinds' },
  ];

  const bannerContent = {
    ALL: {
      title: <>Architectural <br /> Integrity</>,
      image: upvcdoor1,
      desc: "At Good Look Home, we believe your sanctuary is defined by the quality of light and the clarity of your view. Our uPVC and Aluminium solutions are engineered for more than just durability—they are designed to disappear, allowing the beauty of the outdoors to become your home's living art.",
      link:"/"
    },
    UPVCdoor: {
      title: <>Insulation <br/>That Just Works </>,
      image: upvcdoor2,
      desc: "Our uPVC profiles lock out heat, noise, and weather all at once. Built to perform for 24+ years without a single repair, they're engineered for homes that don't have time for maintenance drama. ",
      link:"/our-collections/upvc-doors/casement-doors"
    },
    UPVCwindow: {
      title: <>Invisible Protection.<br/> Uninterrupted Views.</>,
      image: upvcwindow1,
      desc: "Engineered with ultra fine, tear resistant mesh and smooth gliding architectural tracks, our insect screens fit flush into your existing UPVC frames no bulk, no compromise, just clean airflow. ",
      link:"/our-collections/upvc-windows/casement-windows"
    },
    MosqutioDoor: {
      title: <>Precision Protection,<br/> Effortless Style</>,
      image: MosquitoNetWindows1,
      desc: "Every door net is custom-fitted with slimline aluminium frames and durable mesh, built to handle daily use for years, so your entryways stay elegant, breathable, and bite-free.",
      link:"/insect-screen/mosquito-net-for-doors"
    },
     MosqutioWindows: {
      title: <>Effortless <br /> Pure Air, Pure Comfort</>,
      image: MosquitoNetDoor4,
      desc: "Discover premium mosquito protection engineered for silence and ease. Our precision-glide mesh panels deliver uninterrupted airflow and light, keeping every room open, breathable, and bite-free.",
      link:"/insect-screen/mosquito-net-for-window"
    },
    curtainsBlinds: {
      title: <>Minimal. Modern.<br/> Made to Fit. </>,
      image: curtain2,
      desc: "Discover premium curtains and blinds with clean sightlines and smooth-glide tracks, designed to frame your view, control your light, and complete your interiors with effortless style. ",
      link:"/curtains-blinds/curtains"
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
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'UPVCdoor' ? 'active' : ''}`}
            onClick={() => handleTabChange('UPVCdoor')}
          >
            uPVC doors
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'UPVCwindow' ? 'active' : ''}`}
            onClick={() => handleTabChange('UPVCwindow')}
          >
            uPVC windows
          </button>
          <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'MosqutioDoor' ? 'active' : ''}`}
            onClick={() => handleTabChange('MosqutioDoor')}
          >
            Mosquito Net For Doors
          </button>
           <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'MosqutioWindows' ? 'active' : ''}`}
            onClick={() => handleTabChange('MosqutioWindows')}
          >
            Mosquito Net For Windows
          </button>
           <button 
            className={`filter-tab-btn tracking-widest manrope-font text-uppercase ssub ${activeTab === 'curtainsBlinds' ? 'active' : ''}`}
            onClick={() => handleTabChange('curtainsBlinds')}
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
                <Link to={activeBanner.link}>
                <button 
                  className="btn explore-process-btn text-uppercase tracking-wider px-4 py-2.5 fw-medium manrope-font"
                  onClick={() => navigate(activeTab === 'ALL' ? '/collections/openabledoors' : activeBanner.path || '/')}
                >
                  Explore Our Process
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Collection;