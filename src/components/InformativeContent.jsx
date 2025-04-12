import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { FaArrowRight } from 'react-icons/fa';

const InformativeContent = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].informativeContent;

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px', 
      backgroundColor: '#f8fafc',
    },
    header: {
      marginBottom: '50px',
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: '50px',
      fontWeight: '800',
      color: '#166534',
      marginBottom: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginBottom: '24px',
    },
    box: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    boxHover: {
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)',
    },
    imageContainer: {
      width: '100%',
      height: '200px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    content: {
      padding: '24px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '12px',
    },
    description: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.6',
      marginBottom: '24px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      color: '#16a34a',
      fontWeight: '600',
      fontSize: '16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
    },
    arrowIcon: {
      marginLeft: '8px',
      transition: 'transform 0.3s ease',
    },
    buttonHover: {
      color: '#15803d',
    },
    impactSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '40px',
      marginTop: '40px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    impactTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '40px',
      textAlign: 'center'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '20px',
      textAlign: 'center'
    },
    statValue: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      color: '#4b5563'
    }
  };

  const contentItems = [
    {
      title: currentLanguage === 'en' ? "Market Reports" : "बाज़ार रिपोर्ट",
      description: currentLanguage === 'en' 
        ? "Get real-time agricultural commodity prices and market trends" 
        : "कृषि वस्तुओं की रीयल-टाइम कीमतें और बाजार के रुझान प्राप्त करें",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=90",
      link: "/resources/market-reports",
    },
    {
      title: currentLanguage === 'en' ? "Research Papers" : "अनुसंधान पत्र",
      description: currentLanguage === 'en'
        ? "Access peer-reviewed agricultural research and studies"
        : "सहकर्मी-समीक्षित कृषि अनुसंधान और अध्ययन तक पहुंचें",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=90",
      link: "/resources/research-papers",
    },
    {
      title: currentLanguage === 'en' ? "Farmer Meetups" : "किसान मिलन",
      description: currentLanguage === 'en'
        ? "Connect with local farming communities and experts"
        : "स्थानीय कृषि समुदायों और विशेषज्ञों से जुड़ें",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=90",
      link: "/community/farmer-meetups",
    },
    {
      title: currentLanguage === 'en' ? "Knowledge Sharing" : "ज्ञान साझाकरण",
      description: currentLanguage === 'en'
        ? "Share farming techniques and learn from peers"
        : "कृषि तकनीक साझा करें और साथियों से सीखें",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=90",
      link: "/community/knowledge-sharing",
    }
  ];

  const stats = [
    { value: "10K+", label: currentLanguage === 'en' ? 'Active Farmers' : 'सक्रिय किसान' },
    { value: "500+", label: currentLanguage === 'en' ? 'Resources' : 'संसाधन' },
    { value: "50+", label: currentLanguage === 'en' ? 'Villages' : 'गाँव' },
    { value: "24/7", label: currentLanguage === 'en' ? 'Support' : 'सहायता' }
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          {currentLanguage === 'en' ? 'Our Resources' : 'हमारी सेवाएं'}
        </h1>
      </div>

      <div style={styles.grid}>
        {contentItems.map((item, index) => (
          <div 
            key={index}
            style={styles.box}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = styles.boxHover.boxShadow;
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = styles.box.boxShadow;
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
            onClick={() => handleCardClick(item.link)}
          >
            <div style={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.title}
                style={styles.image}
              />
            </div>
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
              <button 
                style={styles.button}
                onMouseEnter={(e) => e.currentTarget.style.color = styles.buttonHover.color}
                onMouseLeave={(e) => e.currentTarget.style.color = styles.button.color}
              >
                {currentLanguage === 'en' ? 'Explore now' : 'अभी देखें'}
                <FaArrowRight style={styles.arrowIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.impactSection}>
        <h2 style={styles.impactTitle}>
          {currentLanguage === 'en' ? 'Our Impact' : 'हमारा प्रभाव'}
        </h2>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformativeContent;