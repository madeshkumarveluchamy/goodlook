import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Metadata configuration for all 34 routes
const metaConfig = {
  "/": {
    title: "Upvc doors and windows in coimbatore | Good Look Home",
    description: "Explore quality uPVC doors, windows & custom mosquito nets in Coimbatore from Good Look Home. Backed by 24+ years of experience. Get a free quote today!",
    keywords: "uPVC doors Coimbatore, uPVC windows, mosquito net Coimbatore, custom blinds, luxury curtains, home decor, Good Look Home"
  },
  // UPVC Doors
  "/our-collections/upvc-doors/casement-doors": {
    title: "Upvc casement doors in coimbatore | Good Look Home",
    description: "Choose uPVC casement doors in Coimbatore designed for security, durability, weather resistance & sound insulation. Get a free estimate from Good Look Home!",
    keywords: "uPVC casement doors, soundproof doors, secure uPVC doors, custom casement doors, Coimbatore"
  },
  "/our-collections/upvc-doors/sliding-doors": {
    title: "Upvc sliding doors in coimbatore | Good Look Home",
    description: "Discover space-saving uPVC sliding doors in Coimbatore with smooth operation. Ideal for balconies, patios & modern interiors. Contact us for custom pricing!",
    keywords: "uPVC sliding doors, balcony sliding doors, patio doors, space saving doors, Coimbatore"
  },
  "/our-collections/upvc-doors/arch-doors": {
    title: "Upvc arch doors in coimbatore | Good Look Home",
    description: "Enhance your home with custom uPVC arch doors in Coimbatore. Elegant curved designs combine distinctive style with durable frames. Explore custom options!",
    keywords: "uPVC arch doors, curved uPVC doors, custom shaped doors, arched entrance doors, Coimbatore"
  },
  "/our-collections/upvc-doors/folding-doors": {
    title: "Upvc sliding folding doors in coimbatore | Good Look Home",
    description: "Transform your home with custom uPVC folding doors in Coimbatore. Enjoy wider openings, natural light & seamless views. Request your quote today!",
    keywords: "uPVC folding doors, bi-fold doors, multi-fold doors, patio folding doors, Coimbatore"
  },
  // UPVC Windows
  "/our-collections/upvc-windows/casement-windows": {
    title: "Upvc casement windows in coimbatore | Good Look Home",
    description: "Upgrade your home with uPVC casement windows in Coimbatore featuring airtight seals, sound insulation & energy efficiency. Enquire with Good Look Home today!",
    keywords: "uPVC casement windows, soundproof windows, energy efficient windows, secure windows, Coimbatore"
  },
  "/our-collections/upvc-windows/sliding-windows": {
    title: "Upvc sliding windows in coimbatore | Good Look Home",
    description: "Choose 2-track and 3-track uPVC sliding windows in Coimbatore with smooth operation and optional mosquito mesh. Contact us today for custom measurements!",
    keywords: "uPVC sliding windows, horizontal sliding windows, track windows, modern uPVC windows, Coimbatore"
  },
  "/our-collections/upvc-windows/arch-windows": {
    title: "Upvc arch windows in coimbatore | Good Look Home",
    description: "Add timeless character to your home with custom uPVC arch windows in Coimbatore. Curved frames combine design with durability. Consult our experts today!",
    keywords: "uPVC arch windows, curved windows, custom shaped windows, architectural windows, Coimbatore"
  },
  "/our-collections/upvc-windows/fixed-windows": {
    title: "Upvc fixed windows in coimbatore | Good Look Home",
    description: "Brighten your home with energy-efficient fixed uPVC windows in Coimbatore. Enjoy large glass areas, durable frames & low maintenance. Get a price quote now!",
    keywords: "uPVC fixed windows, picture windows, stationary windows, glass facade, Coimbatore"
  },
  "/our-collections/upvc-windows/ventilator-windows": {
    title: "Upvc ventilator windows in coimbatore | Good Look Home",
    description: "Improve ventilation with custom uPVC ventilator windows in Coimbatore. Ideal for kitchens & bathrooms with optional exhaust slots. Call for a quick estimate!",
    keywords: "uPVC ventilator windows, exhaust windows, bathroom ventilators, louvered windows, Coimbatore"
  },
  // Insect Screens / Mosquito Nets for Windows
  "/insect-screen/mosquito-net-for-window": {
    title: "Mosquito net for windows in coimbatore | Good Look Home",
    description: "Keep mosquitoes out with custom mosquito nets for windows in Coimbatore. Choose hinged, pleated, sliding & security mesh options. Get a free quote today!",
    keywords: "window mosquito nets, custom insect screens, window mesh, magnetic net, pleated net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/sliding-mosquito-net-window": {
    title: "Sliding mosquito net for windows in coimbatore | Good Look Home",
    description: "Install custom sliding mosquito nets for windows in Coimbatore with smooth horizontal movement and durable mesh. Request your free estimate today!",
    keywords: "sliding mosquito net, sliding window screen, track mesh screen, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/pleated-mosquito-net-window": {
    title: "Pleated mosquito net for windows in coimbatore | Good Look Home",
    description: "Save space with pleated mosquito nets for windows in Coimbatore. Smooth folding screens provide insect protection while keeping windows accessible. Order now!",
    keywords: "pleated mosquito net, folding window screens, retractable insect mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/hinged-frame-mosquito-window": {
    title: "Hinged mosquito net for windows in coimbatore | Good Look Home",
    description: "Choose hinged mosquito nets for windows in Coimbatore with durable frames & quality insect mesh. Easy to open, clean & maintain. Call for custom fitting!",
    keywords: "hinged frame mosquito net, swing open window screen, openable mosquito net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-window/foldable-security-mesh-window": {
    title: "Security mesh windows in coimbatore | Good Look Home",
    description: "Protect your home with foldable security mesh windows in Coimbatore. Stainless steel mesh provides insect protection & security. Contact us for pricing!",
    keywords: "security mesh windows, steel screen windows, anti-theft window nets, Coimbatore"
  },
  // Insect Screens / Mosquito Nets for Doors
  "/insect-screen/mosquito-net-for-doors": {
    title: "Mosquito net for doors in coimbatore | Good Look Home",
    description: "Keep insects out with custom mosquito nets for doors in Coimbatore. Choose hinged, sliding, pleated & security mesh options. Call now for a site visit!",
    keywords: "door mosquito net, heavy duty door screen, sliding screen door, pleated door net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/sliding-mosquito-net-doors": {
    title: "Sliding mosquito net doors in coimbatore | Good Look Home",
    description: "Choose sliding mosquito net doors in Coimbatore for balconies, patios & large glass openings. Smooth operation & durable mesh. Enquire with us today!",
    keywords: "sliding mosquito door net, balcony screen doors, patio sliding mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/pleated-mosquito-net-doors": {
    title: "Pleated mosquito net for doors in coimbatore | Good Look Home",
    description: "Choose space-saving pleated mosquito net doors in Coimbatore for balconies & patios. Retractable screens fold away neatly. Book your measurement now!",
    keywords: "pleated door mosquito net, folding screen doors, retractable door mesh, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/hinged-frame-mosquito-doors": {
    title: "Hinged mosquito net doors in coimbatore | Good Look Home",
    description: "Choose custom hinged mosquito net doors in Coimbatore for main entrances, balconies & back exits. Durable frames offer protection. Contact us today!",
    keywords: "hinged mosquito door net, swing screen doors, openable door net, Coimbatore"
  },
  "/insect-screen/mosquito-net-for-doors/foldable-security-mesh-doors": {
    title: "Security mesh doors in coimbatore | Good Look Home",
    description: "Improve home protection with foldable security mesh doors in Coimbatore. Durable designs provide pest control & security for entryways. Get a quote today!",
    keywords: "security mesh doors, stainless steel door screen, strong mosquito door net, Coimbatore"
  },
  // Story, Profile, Curtains, Blinds, Contact, Blog, Privacy Policy
  "/our-story": {
    title: "Upvc manufacturers in coimbatore | Good Look Home",
    description: "Discover Good Look Home’s 24+ years of experience in providing quality uPVC doors, windows & durable insect screens in Coimbatore. Learn about our legacy!",
    keywords: "about us, Good Look Home Decor story, interior decor history, Coimbatore decor company"
  },
  "/our-collections/upvc-profile": {
    title: "High Quality uPVC Profile Systems | Good Look Home Decor",
    description: "Discover the structural engineering behind our uPVC doors and windows. Multi-chambered profiles designed for acoustics, energy saving, and durability.",
    keywords: "uPVC profiles, multi-chambered profiles, window profile technology, durable uPVC material, Coimbatore"
  },
  "/curtains-blinds/curtains": {
    title: "Window curtains in coimbatore | Good Look Home",
    description: "Discover custom window curtains in Coimbatore, from elegant sheer fabrics to full blackout styles. Get tailored designs & fitting. Contact us today!",
    keywords: "luxury curtains Coimbatore, custom drapes, blackout curtains, sheer curtains, motorized curtains"
  },
  "/curtains-blinds/blinds": {
    title: "Window blinds in coimbatore | Good Look Home",
    description: "Choose stylish window blinds in Coimbatore for homes & offices. Explore roller, zebra & Venetian blinds for flexible light control. Get a quote now!",
    keywords: "window blinds Coimbatore, zebra blinds, roller blinds, wooden blinds, Roman blinds, vertical blinds"
  },
  "/contact-us": {
    title: "Upvc window dealers in coimbatore | Good Look Home",
    description: "Contact Good Look Home in Sanganoor, Coimbatore for custom uPVC windows, doors & mosquito net solutions. Call 94434 09613 for a free site visit today!",
    keywords: "contact Good Look Home Decor, Coimbatore office, call decor company, address, email"
  },
  "/blog": {
    title: "Home decor and upvc guide in coimbatore | Good Look Home",
    description: "Read expert tips on uPVC windows, doors, mosquito nets & home decor to make informed choices for your home. Explore insights from Good Look Home today!",
    keywords: "home decor blog, uPVC guide Coimbatore, expert tips uPVC, home improvement tips"
  },
  "/privacy-policy": {
    title: "Privacy policy and terms | Good Look Home",
    description: "Read Good Look Home’s privacy policy and terms to understand how we handle customer information and deliver our products & services securely.",
    keywords: "privacy policy, terms and conditions, Good Look Home"
  },
  "/terms": {
    title: "Privacy policy and terms | Good Look Home",
    description: "Read Good Look Home’s privacy policy and terms to understand how we handle customer information and deliver our products & services securely.",
    keywords: "privacy policy, terms and conditions, Good Look Home"
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

    // 8. Manage Google Analytics (gtag.js) for listed pages only
    if (metaConfig[currentPath]) {
      if (!window.dataLayer) {
        const gtagScript = document.createElement("script");
        gtagScript.async = true;
        gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YQWNQ2EFR8";
        document.head.appendChild(gtagScript);

        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){window.dataLayer.push(arguments);}
          window.gtag('js', new Date());
          window.gtag('config', 'G-YQWNQ2EFR8', { send_page_view: false });
        `;
        document.head.appendChild(inlineScript);
      }

      if (window.gtag) {
        window.gtag('config', 'G-YQWNQ2EFR8', {
          page_path: currentPath,
          page_title: currentMeta.title
        });
      }
    }

  }, [location]);

  return null;
};

export default SEO;
