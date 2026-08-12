import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Metadata configuration for all 34 routes
const metaConfig = {
  "/": {
    title: "Good Look Home Decor | Premium uPVC Windows & Doors in Coimbatore",
    description: "Elevate your space with Good Look Home Decor, Coimbatore's leading provider of premium uPVC doors, windows, insect screens, and luxury curtains & blinds. Custom designs for homes and offices.",
    keywords: "uPVC doors Coimbatore, uPVC windows, mosquito net Coimbatore, custom blinds, luxury curtains, home decor, Good Look Home Decor"
  },
  // UPVC Doors
  "/our-collections/upvc-doors/casement-doors": {
    title: "Premium uPVC Casement Doors | Good Look Home Decor",
    description: "Experience style and security with our durable uPVC casement doors. Featuring excellent soundproofing, thermal insulation, and weatherproofing for Coimbatore homes.",
    keywords: "uPVC casement doors, soundproof doors, secure uPVC doors, custom casement doors, Coimbatore"
  },
  "/our-collections/upvc-doors/sliding-doors": {
    title: "Space Saving uPVC Sliding Doors | Good Look Home Decor",
    description: "Maximize your living space and natural light with our elegant, smooth-gliding uPVC sliding doors. Perfect for balconies, patios, and modern interiors.",
    keywords: "uPVC sliding doors, balcony sliding doors, patio doors, space saving doors, Coimbatore"
  },
  "/our-collections/upvc-doors/arch-doors": {
    title: "Elegant uPVC Arch Doors | Good Look Home Decor",
    description: "Add a touch of classic architectural elegance to your home with custom-shaped uPVC arch doors. Combining traditional beauty with modern durability.",
    keywords: "uPVC arch doors, curved uPVC doors, custom shaped doors, arched entrance doors, Coimbatore"
  },
 
  "/our-collections/upvc-doors/folding-doors": {
    title: "uPVC Folding Doors | Good Look Home Decor",
    description: "Create seamless transitions between indoors and outdoors with multi-fold uPVC sliding folding doors. Ideal for wide openings and panoramic views.",
    keywords: "uPVC folding doors, bi-fold doors, multi-fold doors, patio folding doors, Coimbatore"
  },
  // UPVC Windows
  "/our-collections/upvc-windows/casement-windows": {
    title: "Premium uPVC Casement Windows | Good Look Home Decor",
    description: "Keep your home peaceful and secure with uPVC casement windows. Engineered for maximum ventilation, sound insulation, and superior energy efficiency.",
    keywords: "uPVC casement windows, soundproof windows, energy efficient windows, secure windows, Coimbatore"
  },
  "/our-collections/upvc-windows/sliding-windows": {
    title: "Modern uPVC Sliding Windows | Good Look Home Decor",
    description: "Upgrade your home with smooth-operating uPVC sliding windows. A sleek, space-saving design featuring multi-point locking and weatherproofing.",
    keywords: "uPVC sliding windows, horizontal sliding windows, track windows, modern uPVC windows, Coimbatore"
  },
  "/our-collections/upvc-windows/arch-windows": {
    title: "Custom uPVC Arch Windows | Good Look Home Decor",
    description: "Beautiful, custom-designed uPVC arch windows that add structural character. Built to custom sizes with outstanding thermal and acoustic performance.",
    keywords: "uPVC arch windows, curved windows, custom shaped windows, architectural windows, Coimbatore"
  },
  
  "/our-collections/upvc-windows/fixed-windows": {
    title: "Energy Efficient uPVC Fixed Windows | Good Look Home Decor",
    description: "Enjoy expansive views and maximum energy efficiency. Perfect for combining with active windows to build beautiful glass facade features.",
    keywords: "uPVC fixed windows, picture windows, stationary windows, glass facade, Coimbatore"
  },
  "/our-collections/upvc-windows/ventilator-windows": {
    title: "uPVC Ventilator Windows | Good Look Home Decor",
    description: "Specially designed uPVC ventilator windows for bathrooms, kitchens, and utility spaces. Ensures privacy while providing optimal airflow.",
    keywords: "uPVC ventilator windows, exhaust windows, bathroom ventilators, louvered windows, Coimbatore"
  },
 
  "/insect-screen/mosquito-net-for-window": {
    title: "Custom Mosquito Net for Windows | Good Look Home Decor",
    description: "Choose from sliding, pleated, magnetic, and roller mosquito nets for windows. Custom-fit screens designed to blend beautifully with your windows.",
    keywords: "window mosquito nets, custom insect screens, window mesh, magnetic net, pleated net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors": {
    title: "Durable Mosquito Net for Doors | Good Look Home Decor",
    description: "Heavy-duty hinged, sliding, and pleated mosquito door nets. Keep pests out while letting fresh air in with premium mesh screens.",
    keywords: "door mosquito net, heavy duty door screen, sliding screen door, pleated door net, Coimbatore"
  },

  // Mosquito Net for Windows Subtypes


  "/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window": {
    title: "Sliding Mosquito Net Windows | Good Look Home Decor",
    description: "Seamlessly integrated sliding mosquito nets for track windows. Highly durable, easy to slide, and simple to clean.",
    keywords: "sliding mosquito net, sliding window screen, track mesh screen, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window": {
    title: "Pleated Mosquito Net Windows | Good Look Home Decor",
    description: "Elegant pleated folding mosquito screens for space-saving protection. Fold them away neatly when not in use.",
    keywords: "pleated mosquito net, folding window screens, retractable insect mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window": {
    title: "Hinged Frame Mosquito Windows | Good Look Home Decor",
    description: "Classic swing open mosquito nets for easy access. Perfect for single and double sash windows, offering complete seal protection.",
    keywords: "hinged frame mosquito net, swing open window screen, openable mosquito net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/foldable-security-mesh-window": {
    title: "Foldable Security Mesh Windows | Good Look Home Decor",
    description: "Combine home security with insect protection. Strong steel mesh window systems that prevent break-ins and keep bugs out.",
    keywords: "security mesh windows, steel screen windows, anti-theft window nets, Coimbatore"
  },

  // Mosquito Net for Doors Subtypes

 
  "/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors": {
    title: "Sliding Mosquito Net Doors | Good Look Home Decor",
    description: "Smooth rolling sliding mosquito screens for patio doors and balconies. Designed to endure daily high-traffic usage.",
    keywords: "sliding mosquito door net, balcony screen doors, patio sliding mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors": {
    title: "Pleated Mosquito Net Doors | Good Look Home Decor",
    description: "Sophisticated pleated barrier systems for doors. Folds away elegantly without taking up space, ideal for large glass doors.",
    keywords: "pleated door mosquito net, folding screen doors, retractable door mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors": {
    title: "Hinged Frame Mosquito Doors | Good Look Home Decor",
    description: "Durable swinging frame mosquito net doors with heavy-duty mesh. Classic security and bug defense for main doors.",
    keywords: "hinged mosquito door net, swing screen doors, openable door net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors": {
    title: "Foldable Security Mesh Doors | Good Look Home Decor",
    description: "Premium stainless steel security mesh doors. Protects against intruders and insects without compromising on ventilation.",
    keywords: "security mesh doors, stainless steel door screen, strong mosquito door net, Coimbatore"
  },
  // Story, Profile, Curtains, Blinds, Contact
  "/our-story": {
    title: "Our Story | Good Look Home Decor | Expertly Crafted Interiors",
    description: "Learn about Good Look Home Decor's journey of delivering exceptional quality uPVC doors, windows, blinds, and curtains in Coimbatore since inception.",
    keywords: "about us, Good Look Home Decor story, interior decor history, Coimbatore decor company"
  },
  "/our-collections/upvc-profile": {
    title: "High Quality uPVC Profile Systems | Good Look Home Decor",
    description: "Discover the structural engineering behind our uPVC doors and windows. Multi-chambered profiles designed for acoustics, energy saving, and durability.",
    keywords: "uPVC profiles, multi-chambered profiles, window profile technology, durable uPVC material, Coimbatore"
  },
  "/curtains-blinds/curtains": {
    title: "Premium Custom Curtains & Drapes | Good Look Home Decor",
    description: "Beautify your windows with our custom luxury curtains. Choose from blackouts, sheers, motorizations, and a wide array of premium designer fabrics.",
    keywords: "luxury curtains Coimbatore, custom drapes, blackout curtains, sheer curtains, motorized curtains"
  },
  "/curtains-blinds/blinds": {
    title: "Modern Window Blinds & Shades | Good Look Home Decor",
    description: "Clean and contemporary window blinds. Explore roller, zebra, vertical, wooden, and Roman blinds custom-sized for your space.",
    keywords: "window blinds Coimbatore, zebra blinds, roller blinds, wooden blinds, Roman blinds, vertical blinds"
  },
  "/contact-us": {
    title: "Contact Us | Good Look Home Decor | Coimbatore",
    description: "Get a free quote today! Reach Good Look Home Decor in Sengammal Colony, Sanganoor, Coimbatore. Call +91 94434 09613 or email goodlookhdcbe@gmail.com.",
    keywords: "contact Good Look Home Decor, Coimbatore office, call decor company, address, email"
  }
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMeta = metaConfig[currentPath] || metaConfig["/"];

    // 1. Update document title
    document.title = currentMeta.title;

    // 2. Manage meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", currentMeta.description);

    // 3. Manage meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", currentMeta.keywords);

    // 4. Manage Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", currentMeta.title);

    // 5. Manage Open Graph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", currentMeta.description);

    // 6. Manage Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", window.location.href);

    // 7. Manage Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", window.location.origin + currentPath);

  }, [location]);

  return null;
};

export default SEO;
