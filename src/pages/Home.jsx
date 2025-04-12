import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaChartLine, FaSeedling, FaHandshake, FaArrowRight, FaChartBar, FaUsers, FaSun } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].home;

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      title: t.hero.slide1.title,
      subtitle: t.hero.slide1.subtitle
    },
    {
      url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      title: t.hero.slide2.title,
      subtitle: t.hero.slide2.subtitle
    },
    {
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
      title: t.hero.slide3.title,
      subtitle: t.hero.slide3.subtitle
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0',
    },
    heroContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    slideContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(-${currentImageIndex * 100}%)`,
    },
    slide: {
      position: 'relative',
      minWidth: '100%',
      height: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10%',
    },
    title: {
      color: 'white',
      fontSize: '64px',
      fontWeight: '800',
      marginBottom: '24px',
      letterSpacing: '2px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    subtitle: {
      color: 'white',
      fontSize: '24px',
      maxWidth: '600px',
      lineHeight: '1.5',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    sliderDots: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '12px',
      zIndex: 2,
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'white',
      opacity: 0.5,
      cursor: 'pointer',
      transition: 'opacity 0.3s ease',
    },
    activeDot: {
      opacity: 1,
    },
    featuresSection: {
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
    },
    sectionTitle: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#166534',
      textAlign: 'center',
      marginBottom: '60px',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(22, 101, 52, 0.1)',
    },
    featureIcon: {
      fontSize: '40px',
      color: '#16a34a',
      marginBottom: '24px',
      background: '#f0fdf4',
      width: '80px',
      height: '80px',
      borderRadius: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '16px',
    },
    featureText: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.8',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '18px 36px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2)',
    },
    testimonialSection: {
      padding: '100px 24px',
      backgroundColor: 'white',
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    testimonialCard: {
      padding: '32px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    testimonialText: {
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '24px',
      fontStyle: 'italic',
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    authorAvatar: {
      width: '48px',
      height: '48px',
      borderRadius: '24px',
      backgroundColor: '#16a34a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    authorInfo: {
      flex: 1,
    },
    authorName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#166534',
    },
    authorLocation: {
      fontSize: '14px',
      color: '#6b7280',
    },
    imageTextSection: {
      padding: '100px 24px',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    imageTextImage: {
      flex: 1,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    },
    imageTextContent: {
      flex: 1,
    },
    imageTextTitle: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '24px',
      lineHeight: '1.2',
    },
    imageTextDescription: {
      fontSize: '18px',
      color: '#4b5563',
      lineHeight: '1.8',
      marginBottom: '32px',
    },
    imageTextList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    imageTextListItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '16px',
      fontSize: '16px',
      color: '#374151',
    },
    listIcon: {
      color: '#16a34a',
      fontSize: '20px',
    },
    ctaSection: {
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#166534',
      marginBottom: '24px',
      maxWidth: '800px',
      margin: '0 auto 24px',
    },
    ctaText: {
      fontSize: '18px',
      color: '#374151',
      marginBottom: '40px',
      maxWidth: '700px',
      margin: '0 auto 40px',
      lineHeight: '1.8',
    },
  };

  const features = [
    {
      icon: <FaChartLine />,
      title: t.features.smartAnalytics.title,
      description: t.features.smartAnalytics.description,
    },
    {
      icon: <FaSeedling />,
      title: t.features.cropIntelligence.title,
      description: t.features.cropIntelligence.description,
    },
    {
      icon: <FaHandshake />,
      title: t.features.marketAccess.title,
      description: t.features.marketAccess.description,
    },
  ];

  const testimonials = {
    en: [
      {
        text: "PriceWatcher has transformed how I sell my crops. I'm getting 20% better prices than before, and the market insights are invaluable.",
        name: "Rajesh Kumar",
        location: "Punjab"
      },
      {
        text: "The crop recommendations helped me diversify my farm. Now I'm growing high-demand crops and earning more than ever.",
        name: "Anita Patel",
        location: "Gujarat"
      },
      {
        text: "Direct access to buyers has made selling my produce so much easier. The platform is simple to use and very reliable.",
        name: "Suresh Reddy",
        location: "Telangana"
      }
    ],
    hi: [
      {
        text: "प्राइसवॉचर ने मेरी फसलों को बेचने के तरीके को बदल दिया है। मुझे पहले से 20% बेहतर कीमतें मिल रही हैं, और बाजार की जानकारी अमूल्य है।",
        name: "राजेश कुमार",
        location: "पंजाब"
      },
      {
        text: "फसल की सिफारिशों ने मेरे खेत को विविधतापूर्ण बनाने में मदद की। अब मैं उच्च मांग वाली फसलें उगा रहा हूं और पहले से कहीं ज्यादा कमा रहा हूं।",
        name: "अनीता पटेल",
        location: "गुजरात"
      },
      {
        text: "खरीदारों तक सीधी पहुंच ने मेरी उपज को बेचना बहुत आसान बना दिया है। प्लेटफॉर्म उपयोग में आसान और बहुत भरोसेमंद है।",
        name: "सुरेश रेड्डी",
        location: "तेलंगाना"
      }
    ]
  };

  const imageTextContent = {
    en: {
      title: "Maximize Your Farm's Potential with Smart Technology",
      description: "Our advanced platform combines cutting-edge technology with agricultural expertise to help you make data-driven decisions and increase your farm's productivity.",
      features: [
        {
          icon: <FaChartLine style={styles.listIcon} />,
          text: "Real-time market price tracking and analysis"
        },
        {
          icon: <FaSeedling style={styles.listIcon} />,
          text: "Personalized crop recommendations based on soil and climate"
        },
        {
          icon: <FaHandshake style={styles.listIcon} />,
          text: "Direct connection with verified buyers"
        },
        {
          icon: <FaSun style={styles.listIcon} />,
          text: "Weather insights and climate pattern analysis"
        }
      ]
    },
    hi: {
      title: "स्मार्ट तकनीक के साथ अपने खेत की क्षमता को अधिकतम करें",
      description: "हमारा उन्नत प्लेटफॉर्म कृषि विशेषज्ञता के साथ आधुनिक तकनीक को जोड़ता है, जो आपको डेटा-आधारित निर्णय लेने और आपके खेत की उत्पादकता बढ़ाने में मदद करता है।",
      features: [
        {
          icon: <FaChartLine style={styles.listIcon} />,
          text: "रीयल-टाइम बाजार मूल्य ट्रैकिंग और विश्लेषण"
        },
        {
          icon: <FaSeedling style={styles.listIcon} />,
          text: "मिट्टी और जलवायु के आधार पर व्यक्तिगत फसल सिफारिशें"
        },
        {
          icon: <FaHandshake style={styles.listIcon} />,
          text: "सत्यापित खरीदारों से सीधा संपर्क"
        },
        {
          icon: <FaSun style={styles.listIcon} />,
          text: "मौसम की जानकारी और जलवायु पैटर्न विश्लेषण"
        }
      ]
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroContainer}>
        <div style={styles.slideContainer}>
          {images.map((image, index) => (
            <div key={index} style={styles.slide}>
              <img 
                src={image.url} 
                alt={image.title} 
                style={styles.image}
              />
              <div style={styles.overlay}>
                <h1 style={styles.title}>{image.title}</h1>
                <p style={styles.subtitle}>{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.sliderDots}>
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentImageIndex ? styles.activeDot : {})
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>{t.features.title}</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={styles.featureCard}
              onMouseOver={e => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 24px -8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>
          {currentLanguage === 'hi' ? 'हमारे किसानों की सफलता की कहानियां' : 'Success Stories from Our Farmers'}
        </h2>
        <div style={styles.testimonialGrid}>
          {testimonials[currentLanguage].map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}>
                  <FaUsers />
                </div>
                <div style={styles.authorInfo}>
                  <div style={styles.authorName}>{testimonial.name}</div>
                  <div style={styles.authorLocation}>
                    {currentLanguage === 'hi' ? 
                      testimonial.location === 'Punjab' ? 'पंजाब' :
                      testimonial.location === 'Gujarat' ? 'गुजरात' :
                      'तेलंगाना'
                      : testimonial.location
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.imageTextSection}>
        <div style={styles.imageTextImage}>
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt={imageTextContent[currentLanguage].title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={styles.imageTextContent}>
          <h2 style={styles.imageTextTitle}>
            {imageTextContent[currentLanguage].title}
          </h2>
          <p style={styles.imageTextDescription}>
            {imageTextContent[currentLanguage].description}
          </p>
          <ul style={styles.imageTextList}>
            {imageTextContent[currentLanguage].features.map((feature, index) => (
              <li key={index} style={styles.imageTextListItem}>
                {feature.icon}
                {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section style={{
        padding: '100px 24px',
        backgroundColor: '#f0fdf4',
        textAlign: 'center',
        borderBottom: '1px solid rgba(22, 101, 52, 0.1)'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          color: '#166534',
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px'
        }}>
          {t.vision.title}
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#374151',
          lineHeight: '1.8',
          maxWidth: '1000px',
          margin: '0 auto 40px'
        }}>
          {t.vision.description}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left',
          padding: '40px 0'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#166534',
              marginBottom: '16px'
            }}>{t.vision.cards.recommendations.title}</h3>
            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              {t.vision.cards.recommendations.description}
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#166534',
              marginBottom: '16px'
            }}>{t.vision.cards.information.title}</h3>
            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              {t.vision.cards.information.description}
            </p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#166534',
              marginBottom: '16px'
            }}>{t.vision.cards.connectivity.title}</h3>
            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: '1.6'
            }}>
              {t.vision.cards.connectivity.description}
            </p>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>{t.cta.title}</h2>
        <p style={styles.ctaText}>
          {t.cta.description}
        </p>
        <Link 
          to="/recommendation" 
          style={styles.button}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#15803d';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 12px -2px rgba(22, 163, 74, 0.3)';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = '#16a34a';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px -1px rgba(22, 163, 74, 0.2)';
          }}
        >
          {t.cta.button} <FaArrowRight />
        </Link>
      </section>
    </div>
  );
}

export default Home; 