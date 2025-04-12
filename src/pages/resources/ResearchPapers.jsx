import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { FaArrowLeft, FaFileAlt, FaDownload, FaSearch, FaFilter, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import pdf1 from "../../assets/reports/pdf1.pdf";
import pdf2 from "../../assets/reports/pdf2.pdf";
import pdf3 from "../../assets/reports/pdf3.pdf";
import pdf4 from "../../assets/reports/pdf4.pdf";

function ResearchPapers() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[currentLanguage].researchPapers;

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 24px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '40px',
    },
    backButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#166534',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '20px',
    },
    searchBar: {
      display: 'flex',
      gap: '16px',
      marginBottom: '40px',
    },
    searchInput: {
      flex: 1,
      padding: '12px 24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      fontSize: '16px',
    },
    searchButton: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    filterSection: {
      display: 'flex',
      gap: '16px',
      marginBottom: '32px',
      flexWrap: 'wrap',
    },
    filterButton: {
      backgroundColor: 'white',
      color: '#166534',
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid #16a34a',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    papersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    paperCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    paperTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '12px',
    },
    paperAuthor: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px',
    },
    paperAbstract: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    downloadButton: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          <FaArrowLeft /> {currentLanguage === 'en' ? 'Back' : 'वापस'}
        </button>
        <h1 style={styles.title}>{t.title}</h1>
      </div>

      {/* <div style={styles.searchBar}>
        <input
          type="text"
          placeholder={currentLanguage === 'en' ? 'Search research papers...' : 'शोध पत्र खोजें...'}
          style={styles.searchInput}
        />
        <button style={styles.searchButton}>
          <FaSearch /> {currentLanguage === 'en' ? 'Search' : 'खोजें'}
        </button>
      </div> */}

      {/* <div style={styles.filterSection}>
        <button style={styles.filterButton}>
          <FaFilter /> {currentLanguage === 'en' ? 'All Topics' : 'सभी विषय'}
        </button>
        <button style={styles.filterButton}>
          <FaFilter /> {currentLanguage === 'en' ? 'Recent' : 'हाल के'}
        </button>
        <button style={styles.filterButton}>
          <FaFilter /> {currentLanguage === 'en' ? 'Most Cited' : 'सबसे अधिक उद्धृत'}
        </button>
      </div> */}

<div style={styles.papersGrid}>
  {[pdf1, pdf2, pdf3, pdf4].map((pdfFile, index) => (
    <div key={index} style={styles.paperCard}>
      <h3 style={styles.paperTitle}>{t.papers[index + 1].title}</h3>
      <p style={styles.paperAuthor}>{t.papers[index + 1].author}</p>
      <p style={styles.paperAbstract}>{t.papers[index + 1].abstract}</p>
      <a href={pdfFile} download style={{ textDecoration: 'none' }}>
        <button style={styles.downloadButton}>
          <FaDownload /> {currentLanguage === 'en' ? 'Download PDF' : 'PDF डाउनलोड करें'}
        </button>
      </a>
    </div>
  ))}
</div>

    </div>
  );
}

export default ResearchPapers; 