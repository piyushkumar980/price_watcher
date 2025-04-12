import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { FaArrowLeft, FaComments, FaShareAlt, FaThumbsUp, FaBookmark, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function KnowledgeSharing() {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = translations[currentLanguage].knowledgeSharing;

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
    discussionBoard: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    postCard: {
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #e5e7eb',
    },
    postHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '20px',
      backgroundColor: '#16a34a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    postInfo: {
      flex: 1,
    },
    postAuthor: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#166534',
    },
    postDate: {
      fontSize: '14px',
      color: '#6b7280',
    },
    postContent: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    postActions: {
      display: 'flex',
      gap: '16px',
    },
    actionButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#6b7280',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    newPostButton: {
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
      marginBottom: '24px',
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
            <FaComments style={styles.icon} />
            {t.sections.about.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.about.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaComments style={styles.icon} />
            {t.sections.guidelines.title}
          </h2>
          <p style={styles.sectionContent}>{t.sections.guidelines.content}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaComments style={styles.icon} />
            {t.sections.discussions.title}
          </h2>
          <button style={styles.newPostButton}>
            <FaShareAlt /> {currentLanguage === 'en' ? 'Create New Post' : 'नई पोस्ट बनाएं'}
          </button>
          <div style={styles.discussionBoard}>
            {[1, 2, 3].map((post) => (
              <div key={post} style={styles.postCard}>
                <div style={styles.postHeader}>
                  <div style={styles.userAvatar}>
                    <FaUser />
                  </div>
                  <div style={styles.postInfo}>
                    <div style={styles.postAuthor}>{t.posts[post].author}</div>
                    <div style={styles.postDate}>{t.posts[post].date}</div>
                  </div>
                </div>
                <div style={styles.postContent}>{t.posts[post].content}</div>
                <div style={styles.postActions}>
                  <button style={styles.actionButton}>
                    <FaThumbsUp /> {t.posts[post].likes} {currentLanguage === 'en' ? 'Likes' : 'लाइक्स'}
                  </button>
                  <button style={styles.actionButton}>
                    <FaComments /> {t.posts[post].comments} {currentLanguage === 'en' ? 'Comments' : 'टिप्पणियां'}
                  </button>
                  <button style={styles.actionButton}>
                    <FaBookmark /> {currentLanguage === 'en' ? 'Save' : 'सहेजें'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeSharing; 