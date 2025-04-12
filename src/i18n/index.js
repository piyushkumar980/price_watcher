import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.recommendation": "Crop Recommendation",
      "nav.crops": "Crop Information",
      "nav.sell": "Sell Crops",
      "recommendation.title": "Crop Recommendation",
      "recommendation.state": "State",
      "recommendation.district": "District",
      "recommendation.climate": "Climate",
      "recommendation.soil": "Soil Type",
      "recommendation.submit": "Get Recommendations",
      "crops.title": "Crop Information",
      "sell.title": "Sell Your Crops",
      "sell.vendors": "Local Vendors",
    }
  },
  hi: {
    translation: {
      "nav.home": "होम",
      "nav.recommendation": "फसल की सिफारिश",
      "nav.crops": "फसल की जानकारी",
      "nav.sell": "फसल बेचें",
      "recommendation.title": "फसल की सिफारिश",
      "recommendation.state": "राज्य",
      "recommendation.district": "जिला",
      "recommendation.climate": "जलवायु",
      "recommendation.soil": "मिट्टी का प्रकार",
      "recommendation.submit": "सिफारिशें प्राप्त करें",
      "crops.title": "फसल की जानकारी",
      "sell.title": "अपनी फसल बेचें",
      "sell.vendors": "स्थानीय विक्रेता",
    }
  },
  te: {
    translation: {
      "nav.home": "హోమ్",
      "nav.recommendation": "పంట సిఫార్సు",
      "nav.crops": "పంట సమాచారం",
      "nav.sell": "పంటలను అమ్మండి",
      "recommendation.title": "పంట సిఫార్సు",
      "recommendation.state": "రాష్ట్రం",
      "recommendation.district": "జిల్లా",
      "recommendation.climate": "వాతావరణం",
      "recommendation.soil": "నేల రకం",
      "recommendation.submit": "సిఫార్సులను పొందండి",
      "crops.title": "పంట సమాచారం",
      "sell.title": "మీ పంటలను అమ్మండి",
      "sell.vendors": "స్థానిక వ్యాపారులు",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;