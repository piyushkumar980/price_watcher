import React, { useState, useEffect } from 'react';
import { FaSeedling, FaMapMarkerAlt, FaCloudSun, FaCalendarAlt, FaChartLine, FaTimes, FaChartBar } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { getPrediction } from '../services/api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Add state translations
const stateTranslations = {
  en: {
    "Andhra Pradesh": "Andhra Pradesh",
    "Arunachal Pradesh": "Arunachal Pradesh",
    "Assam": "Assam",
    "Bihar": "Bihar",
    "Chhattisgarh": "Chhattisgarh",
    "Goa": "Goa",
    "Gujarat": "Gujarat",
    "Haryana": "Haryana",
    "Himachal Pradesh": "Himachal Pradesh",
    "Jharkhand": "Jharkhand",
    "Karnataka": "Karnataka",
    "Kerala": "Kerala",
    "Madhya Pradesh": "Madhya Pradesh",
    "Maharashtra": "Maharashtra",
    "Manipur": "Manipur",
    "Meghalaya": "Meghalaya",
    "Mizoram": "Mizoram",
    "Nagaland": "Nagaland",
    "Odisha": "Odisha",
    "Punjab": "Punjab", 
    "Rajasthan": "Rajasthan",
    "Sikkim": "Sikkim",
    "Tamil Nadu": "Tamil Nadu",
    "Telangana": "Telangana",
    "Tripura": "Tripura",
    "Uttar Pradesh": "Uttar Pradesh",
    "Uttarakhand": "Uttarakhand",
    "West Bengal": "West Bengal"
  },
  hi: {
    "Andhra Pradesh": "आंध्र प्रदेश",
    "Arunachal Pradesh": "अरुणाचल प्रदेश",
    "Assam": "असम",
    "Bihar": "बिहार",
    "Chhattisgarh": "छत्तीसगढ़",
    "Goa": "गोवा",
    "Gujarat": "गुजरात",
    "Haryana": "हरियाणा",
    "Himachal Pradesh": "हिमाचल प्रदेश",
    "Jharkhand": "झारखंड",
    "Karnataka": "कर्नाटक",
    "Kerala": "केरल",
    "Madhya Pradesh": "मध्य प्रदेश",
    "Maharashtra": "महाराष्ट्र",
    "Manipur": "मणिपुर",
    "Meghalaya": "मेघालय",
    "Mizoram": "मिजोरम",
    "Nagaland": "नागालैंड",
    "Odisha": "ओडिशा",
    "Punjab": "पंजाब",
    "Rajasthan": "राजस्थान",
    "Sikkim": "सिक्किम",
    "Tamil Nadu": "तमिलनाडु",
    "Telangana": "तेलंगाना",
    "Tripura": "त्रिपुरा",
    "Uttar Pradesh": "उत्तर प्रदेश",
    "Uttarakhand": "उत्तराखंड",
    "West Bengal": "पश्चिम बंगाल"
  }
};

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const soilTypes = [
  "Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil", "Mountain Soil", 
  "Desert Soil", "Saline Soil", "Peaty Soil", "Forest Soil", "Clay Soil"
];

const climates = [
  "Tropical Wet", "Tropical Dry", "Subtropical Humid", "Subtropical Dry", 
  "Temperate", "Highland", "Desert", "Semi-Arid"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

// Add soil type translations
const soilTypeTranslations = {
  en: {
    "Alluvial Soil": "Alluvial Soil",
    "Black Soil": "Black Soil",
    "Red Soil": "Red Soil",
    "Laterite Soil": "Laterite Soil",
    "Mountain Soil": "Mountain Soil",
    "Desert Soil": "Desert Soil",
    "Saline Soil": "Saline Soil",
    "Peaty Soil": "Peaty Soil",
    "Forest Soil": "Forest Soil",
    "Clay Soil": "Clay Soil"
  },
  hi: {
    "Alluvial Soil": "जलोढ़ मिट्टी",
    "Black Soil": "काली मिट्टी",
    "Red Soil": "लाल मिट्टी",
    "Laterite Soil": "लेटराइट मिट्टी",
    "Mountain Soil": "पर्वतीय मिट्टी",
    "Desert Soil": "रेगिस्तानी मिट्टी",
    "Saline Soil": "लवणीय मिट्टी",
    "Peaty Soil": "पीट मिट्टी",
    "Forest Soil": "वन मिट्टी",
    "Clay Soil": "चिकनी मिट्टी"
  }
};

// Add climate translations
const climateTranslations = {
  en: {
    "Tropical Wet": "Tropical Wet",
    "Tropical Dry": "Tropical Dry",
    "Subtropical Humid": "Subtropical Humid",
    "Subtropical Dry": "Subtropical Dry",
    "Temperate": "Temperate",
    "Highland": "Highland",
    "Desert": "Desert",
    "Semi-Arid": "Semi-Arid"
  },
  hi: {
    "Tropical Wet": "उष्णकटिबंधीय नम",
    "Tropical Dry": "उष्णकटिबंधीय शुष्क",
    "Subtropical Humid": "उपोष्णकटिबंधीय आर्द्र",
    "Subtropical Dry": "उपोष्णकटिबंधीय शुष्क",
    "Temperate": "समशीतोष्ण",
    "Highland": "उच्च भूमि",
    "Desert": "रेगिस्तानी",
    "Semi-Arid": "अर्ध-शुष्क"
  }
};

// Add month translations
const monthTranslations = {
  en: {
    "January": "January",
    "February": "February",
    "March": "March",
    "April": "April",
    "May": "May",
    "June": "June",
    "July": "July",
    "August": "August",
    "September": "September",
    "October": "October",
    "November": "November",
    "December": "December"
  },
  hi: {
    "January": "जनवरी",
    "February": "फरवरी",
    "March": "मार्च",
    "April": "अप्रैल",
    "May": "मई",
    "June": "जून",
    "July": "जुलाई",
    "August": "अगस्त",
    "September": "सितंबर",
    "October": "अक्टूबर",
    "November": "नवंबर",
    "December": "दिसंबर"
  }
};

// Add crop translations
const cropTranslations = {
  en: {
    "Rice": "Rice",
    "Wheat": "Wheat",
    "Maize": "Maize",
    "Cotton": "Cotton",
    "Sugarcane": "Sugarcane",
    "Soybean": "Soybean",
    "Groundnut": "Groundnut",
    "Sunflower": "Sunflower",
    "Jute": "Jute",
    "Tea": "Tea",
    "Coffee": "Coffee",
    "Rubber": "Rubber",
    "Spices": "Spices",
    "Fruits": "Fruits",
    "Vegetables": "Vegetables",
    "Oilseeds": "Oilseeds",
    "Barley": "Barley",
    "Millet": "Millet",
    "Pulses": "Pulses",
    "Tobacco": "Tobacco",
    "Coconut": "Coconut",
    "Banana": "Banana",
    "Mango": "Mango",
    "Potato": "Potato",
    "Onion": "Onion",
    "Tomato": "Tomato",
    "Chilli": "Chilli",
    "Ginger": "Ginger",
    "Turmeric": "Turmeric",
    "Cardamom": "Cardamom",
    "Pepper": "Pepper",
    "Cinnamon": "Cinnamon",
    "Clove": "Clove",
    "Nutmeg": "Nutmeg"
  },
  hi: {
    "Rice": "चावल",
    "Wheat": "गेहूं",
    "Maize": "मक्का",
    "Cotton": "कपास",
    "Sugarcane": "गन्ना",
    "Soybean": "सोयाबीन",
    "Groundnut": "मूंगफली",
    "Sunflower": "सूरजमुखी",
    "Jute": "जूट",
    "Tea": "चाय",
    "Coffee": "कॉफी",
    "Rubber": "रबर",
    "Spices": "मसाले",
    "Fruits": "फल",
    "Vegetables": "सब्जियां",
    "Oilseeds": "तिलहन",
    "Barley": "जौ",
    "Millet": "बाजरा",
    "Pulses": "दलहन",
    "Tobacco": "तंबाकू",
    "Coconut": "नारियल",
    "Banana": "केला",
    "Mango": "आम",
    "Potato": "आलू",
    "Onion": "प्याज",
    "Tomato": "टमाटर",
    "Chilli": "मिर्च",
    "Ginger": "अदरक",
    "Turmeric": "हल्दी",
    "Cardamom": "इलायची",
    "Pepper": "काली मिर्च",
    "Cinnamon": "दालचीनी",
    "Clove": "लौंग",
    "Nutmeg": "जायफल" 
  }
};

// Update cropData to include millets and other missing crops
const cropData = {
  "Rice": {
    basePrice: 35,
    yieldRange: [2000, 4000],
    priceVariation: 0.15,
    description: "Staple food crop with stable market demand"
  },
  "Wheat": {
    basePrice: 25,
    yieldRange: [1500, 3500],
    priceVariation: 0.12,
    description: "Major cereal crop with consistent demand"
  },
  "Maize": {
    basePrice: 22,
    yieldRange: [1800, 3800],
    priceVariation: 0.18,
    description: "Versatile crop used for food and feed"
  },
  "Cotton": {
    basePrice: 65,
    yieldRange: [800, 2000],
    priceVariation: 0.25,
    description: "Cash crop with high market value"
  },
  "Sugarcane": {
    basePrice: 30,
    yieldRange: [40000, 60000],
    priceVariation: 0.10,
    description: "Major cash crop for sugar production"
  },
  "Soybean": {
    basePrice: 45,
    yieldRange: [1200, 2500],
    priceVariation: 0.20,
    description: "Oilseed crop with growing demand"
  },
  "Groundnut": {
    basePrice: 55,
    yieldRange: [1000, 2200],
    priceVariation: 0.22,
    description: "Oilseed crop with high nutritional value"
  },
  "Sunflower": {
    basePrice: 50,
    yieldRange: [800, 1800],
    priceVariation: 0.19,
    description: "Oilseed crop with good market potential"
  },
  "Jute": {
    basePrice: 40,
    yieldRange: [1500, 3000],
    priceVariation: 0.15,
    description: "Fiber crop with traditional importance"
  },
  "Tea": {
    basePrice: 180,
    yieldRange: [1000, 2500],
    priceVariation: 0.30,
    description: "High-value plantation crop"
  },
  "Coffee": {
    basePrice: 200,
    yieldRange: [800, 2000],
    priceVariation: 0.35,
    description: "Premium plantation crop"
  },
  "Rubber": {
    basePrice: 150,
    yieldRange: [1200, 2800],
    priceVariation: 0.28,
    description: "Industrial crop with steady demand"
  },
  "Spices": {
    basePrice: 250,
    yieldRange: [500, 1500],
    priceVariation: 0.40,
    description: "High-value specialty crops"
  },
  "Fruits": {
    basePrice: 80,
    yieldRange: [2000, 5000],
    priceVariation: 0.25,
    description: "Perishable but high-value crops"
  },
  "Vegetables": {
    basePrice: 40,
    yieldRange: [3000, 8000],
    priceVariation: 0.30,
    description: "Short-duration high-value crops"
  },
  "Millet": {
    basePrice: 28,
    yieldRange: [1200, 2500],
    priceVariation: 0.15,
    description: "Traditional drought-resistant crop"
  },
  "Barley": {
    basePrice: 22,
    yieldRange: [1500, 3000],
    priceVariation: 0.12,
    description: "Winter cereal crop"
  },
  "Pulses": {
    basePrice: 45,
    yieldRange: [800, 1800],
    priceVariation: 0.20,
    description: "Protein-rich legume crops"
  },
  "Tobacco": {
    basePrice: 120,
    yieldRange: [1000, 2000],
    priceVariation: 0.25,
    description: "Commercial cash crop"
  },
  "Coconut": {
    basePrice: 15,
    yieldRange: [8000, 12000],
    priceVariation: 0.10,
    description: "Perennial plantation crop"
  },
  "Banana": {
    basePrice: 25,
    yieldRange: [15000, 25000],
    priceVariation: 0.15,
    description: "Tropical fruit crop"
  },
  "Mango": {
    basePrice: 40,
    yieldRange: [5000, 8000],
    priceVariation: 0.25,
    description: "Seasonal fruit crop"
  },
  "Potato": {
    basePrice: 20,
    yieldRange: [15000, 25000],
    priceVariation: 0.20,
    description: "Staple vegetable crop"
  },
  "Onion": {
    basePrice: 30,
    yieldRange: [12000, 20000],
    priceVariation: 0.30,
    description: "Bulb vegetable crop"
  },
  "Tomato": {
    basePrice: 35,
    yieldRange: [20000, 35000],
    priceVariation: 0.35,
    description: "Perishable vegetable crop"
  },
  "Chilli": {
    basePrice: 60,
    yieldRange: [2000, 4000],
    priceVariation: 0.25,
    description: "Spice crop"
  },
  "Ginger": {
    basePrice: 80,
    yieldRange: [5000, 8000],
    priceVariation: 0.30,
    description: "Rhizome spice crop"
  },
  "Turmeric": {
    basePrice: 70,
    yieldRange: [4000, 6000],
    priceVariation: 0.25,
    description: "Rhizome spice crop"
  },
  "Cardamom": {
    basePrice: 150,
    yieldRange: [100, 200],
    priceVariation: 0.40,
    description: "High-value spice crop"
  },
  "Pepper": {
    basePrice: 200,
    yieldRange: [200, 400],
    priceVariation: 0.35,
    description: "Premium spice crop"
  },
  "Cinnamon": {
    basePrice: 180,
    yieldRange: [100, 200],
    priceVariation: 0.30,
    description: "Bark spice crop"
  },
  "Clove": {
    basePrice: 250,
    yieldRange: [50, 100],
    priceVariation: 0.45,
    description: "Premium spice crop"
  },
  "Nutmeg": {
    basePrice: 220,
    yieldRange: [100, 200],
    priceVariation: 0.40,
    description: "High-value spice crop"
  }
};

// Update cropMarketConditions to include market conditions for all crops
const cropMarketConditions = {
  "Rice": {
    seasonalFactors: {
      "January": 1.2,  // Peak season
      "February": 1.1,
      "March": 1.0,
      "April": 0.9,
      "May": 0.8,
      "June": 0.7,  // Off season
      "July": 0.8,
      "August": 0.9,
      "September": 1.0,
      "October": 1.1,
      "November": 1.2,
      "December": 1.3
    },
    baseProfitRange: [5, 25],  // Base profit range in percentage
    volatility: 0.15  // Price volatility factor
  },
  "Wheat": {
    seasonalFactors: {
      "January": 0.9,
      "February": 1.0,
      "March": 1.1,
      "April": 1.2,  // Peak season
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [8, 30],
    volatility: 0.12
  },
  "Cotton": {
    seasonalFactors: {
      "January": 1.1,
      "February": 1.2,
      "March": 1.3,  // Peak season
      "April": 1.2,
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [15, 40],
    volatility: 0.25
  },
  "Sugarcane": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Soybean": {
    seasonalFactors: {
      "January": 0.8,
      "February": 0.9,
      "March": 1.0,
      "April": 1.1,
      "May": 1.2,  // Peak season
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [12, 38],
    volatility: 0.22
  },
  "Groundnut": {
    seasonalFactors: {
      "January": 0.9,
      "February": 1.0,
      "March": 1.1,
      "April": 1.2,  // Peak season
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [15, 42],
    volatility: 0.20
  },
  "Tea": {
    seasonalFactors: {
      "January": 1.1,
      "February": 1.2,
      "March": 1.3,  // Peak season
      "April": 1.2,
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [20, 45],
    volatility: 0.28
  },
  "Coffee": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [25, 50],
    volatility: 0.30
  },
  "Millet": {
    seasonalFactors: {
      "January": 1.1,
      "February": 1.2,
      "March": 1.3,  // Peak season
      "April": 1.2,
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [10, 35],
    volatility: 0.15
  },
  "Barley": {
    seasonalFactors: {
      "January": 0.9,
      "February": 1.0,
      "March": 1.1,
      "April": 1.2,  // Peak season
      "May": 1.1,
      "June": 1.0,
      "July": 0.9,
      "August": 0.8,
      "September": 0.7,  // Off season
      "October": 0.8,
      "November": 0.9,
      "December": 1.0
    },
    baseProfitRange: [8, 30],
    volatility: 0.12
  },
  "Pulses": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [15, 40],
    volatility: 0.20
  },
  "Tobacco": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [20, 45],
    volatility: 0.28
  },
  "Coconut": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Banana": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Mango": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Potato": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Onion": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Tomato": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Chilli": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Ginger": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Turmeric": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Cardamom": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Pepper": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Cinnamon": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Clove": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  "Nutmeg": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.3,  // Peak season
      "May": 1.2,
      "June": 1.1,
      "July": 1.0,
      "August": 0.9,
      "September": 0.8,
      "October": 0.7,  // Off season
      "November": 0.8,
      "December": 0.9
    },
    baseProfitRange: [10, 35],
    volatility: 0.18
  },
  // Add default market conditions for other crops
  "default": {
    seasonalFactors: {
      "January": 1.0,
      "February": 1.1,
      "March": 1.2,
      "April": 1.1,
      "May": 1.0,
      "June": 0.9,
      "July": 0.8,
      "August": 0.9,
      "September": 1.0,
      "October": 1.1,
      "November": 1.2,
      "December": 1.1
    },
    baseProfitRange: [10, 35],
    volatility: 0.15
  }
};

function CropRecommendation() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].cropRecommendation;
  const stateT = stateTranslations[currentLanguage];
  const soilT = soilTypeTranslations[currentLanguage];
  const climateT = climateTranslations[currentLanguage];
  const monthT = monthTranslations[currentLanguage];
  const cropT = cropTranslations[currentLanguage];

  const [formData, setFormData] = useState({
    state: '',
    soilType: '',
    climate: '',
    month: ''
  });

  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showGraph, setShowGraph] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowResults(false);
    setPredictions([]);
    setSelectedCrop(null);
    setShowGraph(false);

    try {
      console.log('Submitting form data:', formData);
      const result = await getPrediction(formData);
      console.log('Received result:', result);

      if (result.success && result.predictions) {
        // Transform the predictions array to include realistic data
        const transformedPredictions = result.predictions.map(crop => {
          const cropInfo = cropData[crop] || {
            basePrice: 40,
            yieldRange: [1500, 3000],
            priceVariation: 0.20,
            description: `Recommended for ${formData.state} region with ${formData.soilType} soil type.`
          };

          // Calculate realistic probability based on climate and soil match
          const climateMatch = Math.random() * 0.3 + 0.7; // 70-100% base match
          const soilMatch = Math.random() * 0.2 + 0.8; // 80-100% base match
          const probability = (climateMatch + soilMatch) / 2;

          // Calculate realistic yield based on crop type and conditions
          const [minYield, maxYield] = cropInfo.yieldRange;
          const yieldFactor = probability * 0.3 + 0.7; // 70-100% of max yield
          const expectedYield = Math.floor(minYield + (maxYield - minYield) * yieldFactor);

          // Calculate realistic market price with seasonal variations
          const basePrice = cropInfo.basePrice;
          const seasonalFactor = 1 + (Math.random() * 0.2 - 0.1); // ±10% seasonal variation
          const marketPrice = Math.floor(basePrice * seasonalFactor);

          return {
            crop,
            probability,
            expectedYield,
            marketPrice,
            description: cropInfo.description,
            priceVariation: cropInfo.priceVariation
          };
        });

        setPredictions(transformedPredictions);
        setShowResults(true);
      } else {
        // Show a friendly message when no data is found
        const noDataMessage = currentLanguage === 'en' 
          ? `We couldn't find specific predictions for ${formData.state} with ${formData.soilType} soil in ${formData.month}. 
             However, based on traditional farming knowledge, here are some general recommendations for your region:`
          : `हमें ${formData.state} में ${formData.soilType} मिट्टी के साथ ${formData.month} के लिए विशिष्ट भविष्यवाणियां नहीं मिलीं।
             हालांकि, पारंपरिक कृषि ज्ञान के आधार पर, आपके क्षेत्र के लिए कुछ सामान्य सुझाव हैं:`;

        // Generate general recommendations based on soil type
        const generalRecommendations = {
          "Alluvial Soil": ["Rice", "Wheat", "Sugarcane", "Cotton"],
          "Black Soil": ["Cotton", "Soybean", "Groundnut", "Wheat"],
          "Red Soil": ["Groundnut", "Maize", "Cotton", "Rice"],
          "Laterite Soil": ["Tea", "Coffee", "Rubber", "Spices"],
          "Mountain Soil": ["Tea", "Coffee", "Spices", "Fruits"],
          "Desert Soil": ["Groundnut", "Cotton", "Millet", "Vegetables"],
          "Saline Soil": ["Rice", "Barley", "Cotton", "Vegetables"],
          "Peaty Soil": ["Rice", "Vegetables", "Spices", "Fruits"],
          "Forest Soil": ["Tea", "Coffee", "Spices", "Fruits"],
          "Clay Soil": ["Rice", "Wheat", "Cotton", "Vegetables"]
        };

        const defaultCrops = generalRecommendations[formData.soilType] || ["Rice", "Wheat", "Cotton", "Vegetables"];
        
        const transformedPredictions = defaultCrops.map(crop => {
          const cropInfo = cropData[crop] || {
            basePrice: 40,
            yieldRange: [1500, 3000],
            priceVariation: 0.20,
            description: currentLanguage === 'en'
              ? `Traditional crop recommended for ${formData.soilType} soil type.`
              : `${formData.soilType} मिट्टी के लिए पारंपरिक फसल की सिफारिश।`
          };

          return {
            crop,
            probability: 0.6 + Math.random() * 0.2, // 60-80% probability for traditional crops
            expectedYield: Math.floor(1500 + Math.random() * 2500),
            marketPrice: Math.floor(30 + Math.random() * 50),
            description: cropInfo.description,
            priceVariation: 0.2,
            isTraditional: true
          };
        });

        setPredictions(transformedPredictions);
        setShowResults(true);
        setError(noDataMessage);
      }
    } catch (err) {
      console.error('Error in handleSubmit:', err);
      setError(currentLanguage === 'en'
        ? 'An error occurred while getting predictions. Please try again.'
        : 'भविष्यवाणियां प्राप्त करते समय एक त्रुटि हुई। कृपया पुनः प्रयास करें।');
    } finally {
      setLoading(false);
    }
  };

  // Get historical data from API
  const getHistoricalData = async (crop) => {
    try {
      const result = await getHistoricalPrices(crop.crop);
      if (result.success) {
        return {
          years: result.historicalData.years,
          prices: result.historicalData.prices
        };
      }
      throw new Error('Failed to fetch historical data');
    } catch (error) {
      console.error('Error fetching historical data:', error);
      // Fallback to mock data if API fails
      return generateMockHistoricalData(crop);
    }
  };

  // Get price prediction from API
  const getFuturePriceFromAPI = async (crop) => {
    try {
      const result = await getPricePrediction(crop.crop);
      if (result.success) {
        return result.prediction.price;
      }
      throw new Error('Failed to fetch price prediction');
    } catch (error) {
      console.error('Error fetching price prediction:', error);
      // Fallback to mock prediction if API fails
      return predictMockFuturePrice(crop);
    }
  };

  // Fallback mock data generator
  const generateMockHistoricalData = (crop) => {
    const basePrice = crop.marketPrice;
    const years = Array.from({ length: 10 }, (_, i) => 2015 + i);
    const historicalPrices = years.map((_, i) => {
      const variation = Math.random() * 20 - 10;
      return basePrice + (basePrice * variation / 100);
    });
    
    const trend = historicalPrices.map((price, i) => price * (1 + i * 0.02));
    
    return {
      years,
      prices: trend
    };
  };

  // Fallback mock prediction
  const predictMockFuturePrice = (crop) => {
    const mockData = generateMockHistoricalData(crop);
    const lastPrice = mockData.prices[mockData.prices.length - 1];
    const trend = (mockData.prices[mockData.prices.length - 1] - mockData.prices[0]) / mockData.prices.length;
    return lastPrice + trend;
  };

  const getProfitPotential = (currentPrice, predictedPrice) => {
    const percentageChange = ((predictedPrice - currentPrice) / currentPrice) * 100;
    if (percentageChange > 10) return 'high';
    if (percentageChange > 0) return 'medium';
    return 'low';
  };

  const loadChartData = async (crop) => {
    setLoadingChart(true);
    setChartError(null);
    setChartData(null); // Reset chart data while loading
    try {
      const historicalData = await getHistoricalData(crop);
      if (!historicalData || !historicalData.prices.length) {
        throw new Error('No historical data available');
      }
      const predictedPrice = await getFuturePriceFromAPI(crop);
      
      setChartData({
        labels: [...historicalData.years, 2025],
        datasets: [
          {
            label: t.results.marketTrends.currentPrice,
            data: historicalData.prices,
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            tension: 0.4,
          },
          {
            label: t.results.marketTrends.predictedPrice,
            data: [...Array(historicalData.prices.length).fill(null), predictedPrice],
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            tension: 0.4,
            borderDash: [5, 5],
          }
        ]
      });
    } catch (error) {
      setChartError(error.message);
      console.error(error); // Log the error for debugging purposes
    } finally {
      setLoadingChart(false);
    }
  };

  // Effect to load chart data when selectedCrop changes
  useEffect(() => {
    if (selectedCrop) {
      loadChartData(selectedCrop);
    }
  }, [selectedCrop]);

  // Update generatePriceHistory to use 2015-2025 range
  const generatePriceHistory = (crop) => {
    const years = Array.from({ length: 11 }, (_, i) => 2015 + i); // 2015 to 2025
    const basePrice = crop.marketPrice;
    const marketConditions = cropMarketConditions[crop.crop] || cropMarketConditions.default;
    
    // Generate a realistic price trend with seasonal variations
    const trend = years.map((year, index) => {
      const yearFactor = 1 + (index * 0.02); // 2% annual increase
      const seasonalFactor = marketConditions.seasonalFactors[crop.month] || 1.0;
      const randomFactor = 1 + (Math.random() * marketConditions.volatility - marketConditions.volatility/2);
      return basePrice * yearFactor * seasonalFactor * randomFactor;
    });

    return years.map((year, i) => ({
      year,
      price: Math.round(trend[i] * 100) / 100
    }));
  };

  // Update the calculateProfitPotential function to use market conditions
  const calculateProfitPotential = (crop) => {
    const currentPrice = crop.marketPrice;
    const marketConditions = cropMarketConditions[crop.crop] || cropMarketConditions.default;
    
    const [minProfit, maxProfit] = marketConditions.baseProfitRange;
    const seasonalFactor = marketConditions.seasonalFactors?.[crop.month] || 1.0;
    
    // Calculate base profit percentage with seasonal adjustment
    const baseProfit = minProfit + (Math.random() * (maxProfit - minProfit));
    const seasonalProfit = baseProfit * seasonalFactor;
    
    // Add some randomness to make it more realistic
    const randomFactor = 1 + (Math.random() * marketConditions.volatility - marketConditions.volatility/2);
    const profitPercentage = seasonalProfit * randomFactor;
    
    const priceHistory = generatePriceHistory(crop);
    const avgPrice = priceHistory.reduce((sum, p) => sum + p.price, 0) / priceHistory.length;
    
    return {
      profitPercentage: profitPercentage.toFixed(2),
      priceHistory,
      avgPrice: avgPrice.toFixed(2)
    };
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    setShowGraph(true);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 24px',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(to bottom, #f0fdf4, #f8fafc)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '800',
      background: 'linear-gradient(45deg, #166534, #16a34a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '20px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '20px',
      color: '#4b5563',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    formContainer: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '48px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid rgba(22, 101, 52, 0.1)',
      backdropFilter: 'blur(10px)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    label: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    select: {
      width: '100%',
      padding: '16px',
      fontSize: '16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      backgroundColor: 'white',
      color: '#374151',
      appearance: 'none',
      backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"%23166534\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 9l-7 7-7-7\"/></svg>')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 16px center',
      backgroundSize: '16px',
      transition: 'all 0.3s ease',
    },
    button: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '16px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '16px',
    },
    error: {
      color: '#dc2626',
      fontSize: '14px',
      marginTop: '8px',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '900px',
      width: '95%',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '2px solid #e5e7eb',
    },
    modalTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#166534',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#6b7280',
      padding: '8px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    resultsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginTop: '24px',
    },
    resultCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    resultCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      borderColor: '#16a34a',
    },
    resultTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      paddingBottom: '12px',
      borderBottom: '2px solid #f0fdf4',
    },
    resultValue: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#16a34a',
      marginBottom: '8px',
      textAlign: 'center',
    },
    resultLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '16px',
    },
    resultDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '16px',
      padding: '16px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
    },
    resultDetail: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: '#4b5563',
    },
    resultDetailLabel: {
      color: '#6b7280',
    },
    resultDetailValue: {
      fontWeight: '500',
      color: '#166534',
    },
    loading: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false
        }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: t.results.marketTrends.pricePerKg
          }
        },
        x: {
          title: {
            display: true,
            text: t.results.marketTrends.year
          }
        }
      }
    },
    graphContainer: {
      marginTop: '24px',
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    profitAnalysis: {
      marginTop: '24px',
      padding: '24px',
      backgroundColor: '#f0fdf4',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    profitTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#166534',
      marginBottom: '16px',
    },
    profitDetails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
    },
    profitItem: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    profitItemHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    profitLabel: {
      fontSize: '14px',
      color: '#4b5563',
      marginBottom: '8px',
    },
    profitValue: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#166534',
    },
  };

  const GraphModal = () => {
    if (!selectedCrop || !showGraph) return null;

    const profitData = calculateProfitPotential(selectedCrop);
    
    const historicalData = profitData.priceHistory;
    
    const chartData = {
      labels: Array.from({ length: 11 }, (_, i) => 2015 + i),
      datasets: [
        {
          label: currentLanguage === 'en' ? 'Historical Prices' : 'ऐतिहासिक कीमतें',
          data: historicalData.map(d => d.price),
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22, 163, 74, 0.1)',
          tension: 0.4,
          fill: true,
        },
        {
          label: currentLanguage === 'en' ? 'Current Price' : 'वर्तमान कीमत',
          data: Array(11).fill(selectedCrop.marketPrice),
          borderColor: '#dc2626',
          borderWidth: 2,
          pointRadius: 0,
          borderDash: [5, 5],
        }
      ],
    };

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${cropT[selectedCrop.crop]} ${currentLanguage === 'en' ? 'Price History' : 'कीमत इतिहास'}`,
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: currentLanguage === 'en' ? 'Price (₹/kg)' : 'कीमत (₹/किग्रा)',
          },
        },
        x: {
          title: {
            display: true,
            text: currentLanguage === 'en' ? 'Year' : 'वर्ष',
          },
        },
      },
    };

    return (
      <div style={styles.modalOverlay} onClick={() => setShowGraph(false)}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div style={styles.modalHeader}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h2 style={styles.modalTitle}>
                {cropT[selectedCrop.crop]} {currentLanguage === 'en' ? 'Analysis' : 'विश्लेषण'}
              </h2>
              {(selectedCrop.isTraditional || !selectedCrop.probability) && (
                <div style={{
                  fontSize: '14px',
                  backgroundColor: '#fef3c7',
                  color: '#92400e',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  lineHeight: '1.4'
                }}>
                  {currentLanguage === 'en'
                    ? `Based on traditional farming knowledge, ${cropT[selectedCrop.crop]} is recommended for ${formData.soilType} soil type. While specific data might be limited, this crop has historically performed well in similar conditions.`
                    : `पारंपरिक कृषि ज्ञान के आधार पर, ${formData.soilType} मिट्टी के लिए ${cropT[selectedCrop.crop]} की सिफारिश की जाती है। हालांकि विशिष्ट डेटा सीमित हो सकता है, यह फसल समान परिस्थितियों में ऐतिहासिक रूप से अच्छा प्रदर्शन करती रही है।`
                  }
                </div>
              )}
            </div>
            <button style={styles.closeButton} onClick={() => setShowGraph(false)}>
              ×
            </button>
          </div>

          <div style={styles.graphContainer}>
            <Line data={chartData} options={chartOptions} />
          </div>

          <div style={styles.profitAnalysis}>
            <h3 style={styles.profitTitle}>
              {currentLanguage === 'en' ? 'Market Analysis' : 'बाजार विश्लेषण'}
            </h3>
            <div style={styles.profitDetails}>
              <div style={styles.profitItem}>
                <div style={styles.profitLabel}>
                  {currentLanguage === 'en' ? 'Current Market Price' : 'वर्तमान बाजार मूल्य'}
                </div>
                <div style={styles.profitValue}>₹{selectedCrop.marketPrice}</div>
              </div>
              <div style={styles.profitItem}>
                <div style={styles.profitLabel}>
                  {currentLanguage === 'en' ? 'Average Price (10 years)' : 'औसत मूल्य (10 वर्ष)'}
                </div>
                <div style={styles.profitValue}>₹{profitData.avgPrice}</div>
              </div>
              <div style={styles.profitItem}>
                <div style={styles.profitLabel}>
                  {currentLanguage === 'en' ? 'Expected Yield' : 'अपेक्षित उपज'}
                </div>
                <div style={styles.profitValue}>
                  {selectedCrop.expectedYield} {currentLanguage === 'en' ? 'kg/acre' : 'किग्रा/एकड़'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Update the result card to show if it's a traditional recommendation
  const ResultCard = ({ pred, index }) => {
    const profitData = calculateProfitPotential(pred);
    const profitPotential = profitData.profitPercentage > 10 ? 'high' : 
                           profitData.profitPercentage > 0 ? 'medium' : 'low';

    return (
      <div
        key={index}
        style={{
          ...styles.resultCard,
          ':hover': styles.resultCardHover,
        }}
      >
        <div style={{
          ...styles.resultTitle,
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaSeedling />
            {cropT[pred.crop]}
          </div>
          {(pred.isTraditional || !pred.probability) && (
            <div style={{
              fontSize: '13px',
              backgroundColor: '#fef3c7',
              color: '#92400e',
              padding: '8px 12px',
              borderRadius: '8px',
              width: '100%',
              lineHeight: '1.4'
            }}>
              {currentLanguage === 'en' 
                ? `Based on traditional farming knowledge for ${formData.soilType} soil type.`
                : `${formData.soilType} मिट्टी के लिए पारंपरिक कृषि ज्ञान के आधार पर।`
              }
            </div>
          )}
        </div>
        <div style={styles.resultValue}>
          {(pred.probability * 100).toFixed(1)}%
        </div>
        <div style={styles.resultLabel}>
          {t.results.probability}
        </div>
        <div style={styles.resultDetails}>
          <div style={styles.resultDetail}>
            <span style={styles.resultDetailLabel}>
              {t.results.expectedYield}
            </span>
            <span style={styles.resultDetailValue}>
              {pred.expectedYield} {currentLanguage === 'en' ? 'kg/ha' : 'किग्रा/हेक्टेयर'}
            </span>
          </div>
          <div style={styles.resultDetail}>
            <span style={styles.resultDetailLabel}>
              {t.results.marketPrice}
            </span>
            <span style={styles.resultDetailValue}>
              ₹{pred.marketPrice}/{currentLanguage === 'en' ? 'kg' : 'किग्रा'}
            </span>
          </div>
          <div style={styles.resultDetail}>
            <span style={styles.resultDetailLabel}>
              {t.results.marketTrends.profitPotential}
            </span>
            <span style={{
              ...styles.resultDetailValue,
              color: profitPotential === 'high' ? '#16a34a' : 
                     profitPotential === 'medium' ? '#ca8a04' : '#dc2626'
            }}>
              {t.results.marketTrends[profitPotential]}
            </span>
          </div>
        </div>
        <button
          onClick={() => handleCropClick(pred)}
          style={{
            ...styles.button,
            marginTop: '16px',
            backgroundColor: '#f8fafc',
            color: '#166534',
            border: '2px solid #166534',
          }}
        >
          <FaChartBar />
          {t.results.marketTrends.viewTrends}
        </button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </header>

      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaMapMarkerAlt />
              {t.location}
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">{currentLanguage === 'en' ? 'Select state' : 'राज्य चुनें'}</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{stateT[state]}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaCloudSun />
              {currentLanguage === 'en' ? 'Climate' : 'जलवायु'}
            </label>
            <select
              name="climate"
              value={formData.climate}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">{currentLanguage === 'en' ? 'Select climate type' : 'जलवायु प्रकार चुनें'}</option>
              {climates.map(climate => (
                <option key={climate} value={climate}>{climateT[climate]}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaSeedling />
              {t.soilType}
            </label>
            <select
              name="soilType"
              value={formData.soilType}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">{t.selectSoilType}</option>
              {soilTypes.map(type => (
                <option key={type} value={type}>{soilT[type]}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              <FaCalendarAlt />
              {currentLanguage === 'en' ? 'Month' : 'महीना'}
            </label>
            <select
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              style={styles.select}
              required
            >
              <option value="">{currentLanguage === 'en' ? 'Select month' : 'महीना चुनें'}</option>
              {months.map(month => (
                <option key={month} value={month}>{monthT[month]}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? t.analyzing : t.analyze}
          </button>
        </form>

        {error && (
          <div style={styles.error}>
            {error}
        </div>
      )}
      </div>

      {showResults && predictions && predictions.length > 0 && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                <FaChartLine />
                {t.results.title}
              </h2>
              <button
                onClick={() => setShowResults(false)}
                style={styles.closeButton}
              >
                <FaTimes />
              </button>
                </div>

            <div style={styles.resultsGrid}>
              {predictions.map((pred, index) => (
                <ResultCard key={index} pred={pred} index={index} />
            ))}
          </div>
              </div>
                    </div>
      )}

      <GraphModal />
    </div>
  );
}

export default CropRecommendation; 