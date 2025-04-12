import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaGlobe } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const { currentLanguage, changeLanguage } = useLanguage();

  // Language-specific content
  const content = {
    en: {
      logoText: "PriceWatcher",
      cropRecommendation: "Crop Recommendation",
      cropInformation: "Crop Information",
      sellCrops: "Sell Crops",
      resources: "Resources",
      language: "Language",
      english: "English",
      hindi: "Hindi",
      telugu: "Telugu"
    },
    hi: {
      logoText: "मूल्य निगरान",
      cropRecommendation: "फसल सिफारिश",
      cropInformation: "फसल जानकारी",
      sellCrops: "फसल बेचें",
      resources: "संसाधन",
      language: "भाषा",
      english: "अंग्रे़ी",
      hindi: "हिंदी",
      telugu: "तेलुगु"
    },
  };

  const currentContent = content[currentLanguage];

  const navStyles = {
    container: {
      borderBottom: "1px solid rgba(229, 231, 235, 0.5)",
      backgroundColor: "white",
      padding: "18px 40px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    },
    innerContainer: {
      display: "flex",
      alignItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
      justifyContent: "space-between"
    },
    logo: {
      display: "flex",
      alignItems: "center",
      color: "#166534",
      fontWeight: "800",
      fontSize: "26px",
      textDecoration: "none",
      letterSpacing: "-0.3px",
      marginRight: "180px",
      transition: "all 0.3s ease",
      textTransform: "capitalize"
    },
    logoIcon: {
      color: "#16a34a",
      marginRight: "12px",
      fontSize: "32px",
      filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))"
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "64px",
      flex: 1,
      justifyContent: "center"
    },
    link: {
      color: "#374151",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "600",
      padding: "10px 16px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      letterSpacing: "0.3px",
      position: "relative"
    },
    languageContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    select: {
      padding: "10px 36px 10px 20px",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      fontSize: "15px",
      color: "#374151",
      backgroundColor: "white",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.3s ease",
      fontWeight: "500",
      minWidth: "140px",
      appearance: "none",
      backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"/></svg>')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 8px center",
      backgroundSize: "16px"
    },
    globeIcon: {
      color: "#16a34a",
      fontSize: "18px",
      position: "absolute",
      left: "12px",
      pointerEvents: "none"
    }
  };

  const linkHoverStyle = {
    color: "#15803d",
    backgroundColor: "#f0fdf4",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
  };

  const selectHoverStyle = {
    borderColor: "#16a34a",
    backgroundColor: "#f0fdf4",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
  };

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', e.target.value);
  };

  // Navigation links configuration
  const navigationLinks = [
    { to: "/recommendation", text: currentContent.cropRecommendation },
    { to: "/crops", text: currentContent.cropInformation },
    { to: "/sell", text: currentContent.sellCrops },
    { to: "/resources", text: currentContent.resources }
  ];

  return (
    <nav style={navStyles.container}>
      <div style={navStyles.innerContainer}>
        <Link 
          to="/" 
          style={navStyles.logo}
          onMouseOver={e => {
            e.target.style.color = "#15803d";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseOut={e => {
            e.target.style.color = "#166534";
            e.target.style.transform = "translateY(0)";
          }}
        >
          <FaLeaf style={navStyles.logoIcon} />
          {currentContent.logoText}
        </Link>

        <div style={navStyles.navLinks}>
          {navigationLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              style={navStyles.link}
              onMouseOver={e => {
                Object.assign(e.target.style, linkHoverStyle);
              }}
              onMouseOut={e => {
                e.target.style.color = "#374151";
                e.target.style.backgroundColor = "transparent";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div style={navStyles.languageContainer}>
          <FaGlobe style={navStyles.globeIcon} />
          <select 
            value={currentLanguage}
            onChange={handleLanguageChange}
            style={{
              ...navStyles.select,
              paddingLeft: "40px"
            }}
            onMouseOver={e => {
              Object.assign(e.target.style, selectHoverStyle);
            }}
            onMouseOut={e => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.backgroundColor = "white";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
            aria-label={currentContent.language}
          >
            <option value="en">{currentContent.english}</option>
            <option value="hi">{currentContent.hindi}</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;