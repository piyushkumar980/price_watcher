import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { FaArrowLeft, FaSeedling, FaWater, FaBug, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function CropManagement() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[currentLanguage].cropManagement;

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
    heroImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '16px',
      marginBottom: '40px',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '40px',
    },
    section: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    sectionContent: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.6',
    },
    icon: {
      color: '#16a34a',
      fontSize: '24px',
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

      <img
        src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
        alt={t.title}
        style={styles.heroImage}
      />

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaSeedling style={styles.icon} />
            {t.sections.planting.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.planting.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaWater style={styles.icon} />
            {t.sections.irrigation.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.irrigation.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaBug style={styles.icon} />
            {t.sections.pestControl.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.pestControl.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaCalendarAlt style={styles.icon} />
            {t.sections.seasonal.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.seasonal.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaChartLine style={styles.icon} />
            {t.sections.monitoring.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.monitoring.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CropManagement; 