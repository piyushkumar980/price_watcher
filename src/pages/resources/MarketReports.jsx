import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import {
  FaArrowLeft,
  FaChartBar,
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCrop,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import markerImage from "../../assets/images/marketreports.webp";
import reportPDF from "../../assets/reports/market-price-report.pdf";
import reportPDF2 from "../../assets/reports/RegionalAnalysis.pdf";
import reportPDF3 from "../../assets/reports/SeasonalTrends.pdf";


function MarketReports() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[currentLanguage].marketReports;

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 24px",
      backgroundColor: "#f8fafc",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "40px",
    },
    backButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#166534",
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#166534",
      marginBottom: "20px",
    },
    heroImage: {
      width: "100%",
      height: "500px",
      objectFit: "cover",
      borderRadius: "16px",
      marginBottom: "40px",
    },
    content: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginBottom: "40px",
    },
    section: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#166534",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    sectionContent: {
      fontSize: "16px",
      color: "#4b5563",
      lineHeight: "1.6",
    },
    icon: {
      color: "#16a34a",
      fontSize: "24px",
    },
    downloadButton: {
      backgroundColor: "#16a34a",
      maxWidth: "10rem",
      color: "white",
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          <FaArrowLeft /> {currentLanguage === "en" ? "Back" : "वापस"}
        </button>
        <h1 style={styles.title}>{t.title}</h1>
      </div>

      <img src={markerImage} alt={t.title} style={styles.heroImage} />

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaChartBar style={styles.icon} />
            {t.sections.priceAnalysis.title}
          </h2>
          <p style={styles.sectionContent}>
            {t.sections.priceAnalysis.content}
          </p>
          <a href={reportPDF} download style={styles.downloadButton}>
            <FaDownload />{" "}
            {currentLanguage === "en"
              ? "Download Report"
              : "रिपोर्ट डाउनलोड करें"}
          </a>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaCalendarAlt style={styles.icon} />
            {t.sections.seasonalTrends.title}
          </h2>
          <p style={styles.sectionContent}>
            {t.sections.seasonalTrends.content}
          </p>
          <a href={reportPDF2} download style={styles.downloadButton}>
            <FaDownload />{" "}
            {currentLanguage === "en"
              ? "Download Report"
              : "रिपोर्ट डाउनलोड करें"}
          </a>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaMapMarkerAlt style={styles.icon} />
            {t.sections.regionalAnalysis.title}
          </h2>
          <p style={styles.sectionContent}>
            {t.sections.regionalAnalysis.content}
          </p>
          <a href={reportPDF3} download style={styles.downloadButton}>
            <FaDownload />{" "}
            {currentLanguage === "en"
              ? "Download Report"
              : "रिपोर्ट डाउनलोड करें"}
          </a>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaCrop style={styles.icon} />
            {t.sections.cropSpecific.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.cropSpecific.content}</p>
          <a href={reportPDF} download style={styles.downloadButton}>
            <FaDownload />{" "}
            {currentLanguage === "en"
              ? "Download Report"
              : "रिपोर्ट डाउनलोड करें"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default MarketReports;
