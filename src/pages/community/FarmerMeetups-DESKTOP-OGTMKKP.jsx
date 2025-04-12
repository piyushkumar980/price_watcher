import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { FaArrowLeft, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/farmersmeetup.webp";

function FarmerMeetups() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[currentLanguage].farmerMeetups;

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
    upcomingMeetups: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginTop: '32px',
    },
    meetupCard: {
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #e5e7eb',
    },
    meetupTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '12px',
    },
    meetupDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px',
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: '#6b7280',
    },
    joinButton: {
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
      width: '100%',
      justifyContent: 'center',
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
        src={image}
        alt={t.title}
        style={styles.heroImage}
      />

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaUsers style={styles.icon} />
            {t.sections.about.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.about.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaUsers style={styles.icon} />
            {t.sections.benefits.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.benefits.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaUsers style={styles.icon} />
            {t.sections.upcoming.title}
          </h2>
          <div style={styles.upcomingMeetups}>
            {[1, 2, 3].map((meetup) => (
              <div key={meetup} style={styles.meetupCard}>
                <h3 style={styles.meetupTitle}>{t.meetups[meetup].title}</h3>
                <div style={styles.meetupDetails}>
                  <div style={styles.detailRow}>
                    <FaMapMarkerAlt /> {t.meetups[meetup].location}
                  </div>
                  <div style={styles.detailRow}>
                    <FaCalendarAlt /> {t.meetups[meetup].date}
                  </div>
                  <div style={styles.detailRow}>
                    <FaClock /> {t.meetups[meetup].time}
                  </div>
                </div>
                <button style={styles.joinButton}>
                  <FaUserPlus /> {currentLanguage === 'en' ? 'Join Meetup' : 'मीटअप में शामिल हों'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerMeetups; 