// import React, { useState } from 'react';
// import { FaSeedling, FaWater, FaCalendarAlt, FaChartLine, FaList, FaInfoCircle, FaDownload, FaEye, FaTimes, FaSearch, FaRupeeSign, FaPercentage, FaThermometerHalf, FaClock, FaBug, FaMoneyBillWave } from 'react-icons/fa';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { useLanguage } from '../context/LanguageContext';
// import { translations } from '../translations/translations';
// import { cropDetailsTranslations } from '../data/cropDetailsTranslations';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title, 
//   Tooltip,
//   Legend
// );

// const crops = [
//   // Cereals
//   "Rice", "Wheat", "Maize", "Jowar", "Pearl Millet", "Ragi", "Barley", "Sorghum",
//   // Pulses
//   "Chickpea", "Pigeon Pea", "Green Gram", "Black Gram", "Lentil", "Cowpea", "Horse Gram",
//   // Oilseeds
//   "Soybean", "Groundnut", "Mustard", "Sunflower", "Safflower", "Sesame", "Castor",
//   // Cash Crops
//   "Cotton", "Sugarcane", "Jute", "Tobacco",
//   // Vegetables
//   "Potato", "Tomato", "Onion", "Cauliflower", "Cabbage", "Brinjal", "Okra", "Peas", "Carrot",
//   // Fruits
//   "Mango", "Banana", "Papaya", "Watermelon", "Pomegranate", "Guava",
//   // Spices
//   "Turmeric", "Ginger", "Cardamom", "Black Pepper", "Coriander", "Cumin",
//   // Others
//   "Sweet Potato", "Elephant Foot Yam"
// ];

// const cropDetails = {
//   "Rice": {
//     waterRequirement: "1200-1600mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "40-45 quintals/hectare",
//     soilTypes: ["Alluvial Soil", "Clay Soil", "Black Soil"],
//     idealTemperature: "22-32°C",
//     bestPractices: [
//       "Proper leveling of field",
//       "Timely transplanting",
//       "Regular monitoring of water level",
//       "Integrated pest management",
//       "Proper nutrient management",
//       "Weed control"
//     ],
//     diseases: [
//       "Blast",
//       "Bacterial Leaf Blight",
//       "Sheath Blight",
//       "Brown Spot"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif", "Rabi (in some regions)"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "40-50 kg/ha"
//     }
//   },
//   "Wheat": {
//     waterRequirement: "450-650mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "35-40 quintals/hectare",
//     soilTypes: ["Loamy Soil", "Clay Loam", "Black Soil"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Timely sowing",
//       "Proper seed treatment",
//       "Adequate irrigation at critical stages",
//       "Weed management",
//       "Disease monitoring",
//       "Balanced fertilization"
//     ],
//     diseases: [
//       "Rust",
//       "Loose Smut",
//       "Powdery Mildew",
//       "Karnal Bunt"
//     ],
//     marketValue: "High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "120-150 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "40-60 kg/ha"
//     }
//   },
//   "Maize": {
//     waterRequirement: "500-800mm per season",
//     growingPeriod: "90-130 days",
//     expectedYield: "25-30 quintals/hectare",
//     soilTypes: ["Well-drained Loamy", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely weeding",
//       "Regular irrigation",
//       "Pest monitoring",
//       "Adequate fertilization",
//       "Harvesting at right maturity"
//     ],
//     diseases: [
//       "Leaf Blight",
//       "Stalk Rot",
//       "Ear Rot",
//       "Downy Mildew"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "120-150 kg/ha",
//       "Phosphorus": "60-70 kg/ha",
//       "Potassium": "40-60 kg/ha"
//     }
//   },
//   "Cotton": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "150-180 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Boll Rot",
//       "Leaf Curl Virus",
//       "Fusarium Wilt",
//       "Alternaria Leaf Spot"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "50-60 kg/ha"
//     }
//   },
//   "Potato": {
//     waterRequirement: "500-700mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "200-300 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Late Blight",
//       "Early Blight",
//       "Black Scurf",
//       "Common Scab"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Mango": {
//     waterRequirement: "800-1000mm per season",
//     growingPeriod: "5-6 years to bear fruit",
//     expectedYield: "8-10 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely pruning",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Anthracnose",
//       "Powdery Mildew",
//       "Die Back",
//       "Bacterial Canker"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Sugarcane": {
//     waterRequirement: "1500-2500mm per season",
//     growingPeriod: "10-12 months",
//     expectedYield: "700-1000 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Red Rot",
//       "Smut",
//       "Rust",
//       "Wilt"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "200-250 kg/ha",
//       "Phosphorus": "100-120 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Tomato": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "300-400 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely transplanting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Early Blight",
//       "Late Blight",
//       "Fusarium Wilt",
//       "Bacterial Wilt"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Turmeric": {
//     waterRequirement: "1500-2000mm per season",
//     growingPeriod: "7-9 months",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Red Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Blotch",
//       "Rhizome Rot",
//       "Leaf Spot",
//       "Wilt"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Onion": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Purple Blotch",
//       "Stemphylium Blight",
//       "Downy Mildew",
//       "Basal Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Groundnut": {
//     waterRequirement: "500-600mm per season",
//     growingPeriod: "100-130 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Sandy Loam", "Well-drained Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Spot",
//       "Rust",
//       "Collar Rot",
//       "Bud Necrosis"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Banana": {
//     waterRequirement: "1800-2000mm per year",
//     growingPeriod: "12-15 months",
//     expectedYield: "400-500 quintals/hectare",
//     soilTypes: ["Deep Rich Loamy", "Well-drained Soil"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper sucker selection",
//       "Adequate spacing",
//       "Propping of plants",
//       "Regular de-suckering",
//       "Bunch management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Panama Wilt",
//       "Sigatoka Leaf Spot",
//       "Bunchy Top",
//       "Root Rot"
//     ],
//     marketValue: "High",
//     seasons: ["Year-round planting possible"],
//     fertilizers: {
//       "Nitrogen": "200-250 kg/ha",
//       "Phosphorus": "80-100 kg/ha",
//       "Potassium": "300-350 kg/ha"
//     }
//   },
//   "Ginger": {
//     waterRequirement: "1500-2000mm per season",
//     growingPeriod: "8-10 months",
//     expectedYield: "150-200 quintals/hectare",
//     soilTypes: ["Sandy Loam", "Red Lateritic Soil"],
//     idealTemperature: "25-30°C",
//     bestPractices: [
//       "Quality rhizome selection",
//       "Proper bed preparation",
//       "Mulching",
//       "Disease management",
//       "Proper drainage",
//       "Careful harvesting"
//     ],
//     diseases: [
//       "Soft Rot",
//       "Bacterial Wilt",
//       "Leaf Spot",
//       "Rhizome Rot"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Cauliflower": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular irrigation",
//       "Timely transplanting",
//       "Disease monitoring",
//       "Nutrient management",
//       "Curd protection"
//     ],
//     diseases: [
//       "Black Rot",
//       "Downy Mildew",
//       "Club Root",
//       "Alternaria Leaf Spot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "120-150 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Soybean": {
//     waterRequirement: "450-700mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Well-drained Loamy", "Black Soil"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Seed treatment",
//       "Proper spacing",
//       "Weed management",
//       "Disease monitoring",
//       "Timely harvesting",
//       "Proper storage"
//     ],
//     diseases: [
//       "Rust",
//       "Yellow Mosaic",
//       "Bacterial Pustule",
//       "Pod Blight"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "20-30 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "40-60 kg/ha"
//     }
//   },
//   "Watermelon": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "90-110 days",
//     expectedYield: "300-350 quintals/hectare",
//     soilTypes: ["Sandy Loam", "Well-drained Soil"],
//     idealTemperature: "24-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular irrigation",
//       "Mulching",
//       "Pest monitoring",
//       "Fruit protection",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Anthracnose",
//       "Powdery Mildew",
//       "Fusarium Wilt",
//       "Gummy Stem Blight"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Spring-Summer"],
//     fertilizers: {
//       "Nitrogen": "80-100 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "50-60 kg/ha"
//     }
//   },
//   "Jowar": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Well-drained Loamy", "Black Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Disease monitoring",
//       "Nutrient management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Grain Mold",
//       "Anthracnose",
//       "Downy Mildew",
//       "Leaf Blight"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "60-80 kg/ha",
//       "Phosphorus": "30-40 kg/ha",
//       "Potassium": "30-40 kg/ha"
//     }
//   },
//   "Pearl Millet": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "80-110 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Sandy Loam", "Light Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Disease monitoring",
//       "Nutrient management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Downy Mildew",
//       "Ergot",
//       "Smut",
//       "Rust"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "40-50 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Ragi": {
//     waterRequirement: "500-700mm per season",
//     growingPeriod: "100-120 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Red Loam", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Disease monitoring",
//       "Nutrient management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Blast",
//       "Leaf Spot",
//       "Downy Mildew",
//       "Smut"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "40-50 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Barley": {
//     waterRequirement: "300-500mm per season",
//     growingPeriod: "110-130 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Loamy Soil", "Well-drained Soil"],
//     idealTemperature: "12-25°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed management",
//       "Disease monitoring",
//       "Nutrient management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Powdery Mildew",
//       "Rust",
//       "Leaf Blight",
//       "Smut"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "40-60 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Sorghum": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-32°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Disease monitoring",
//       "Nutrient management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Grain Mold",
//       "Anthracnose",
//       "Downy Mildew",
//       "Striga Infestation"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "60-80 kg/ha",
//       "Phosphorus": "30-40 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Chickpea": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Wilt",
//       "Ascochyta Blight",
//       "Botrytis Gray Mold",
//       "Root Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Pigeon Pea": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "150-180 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Wilt",
//       "Sterility Mosaic",
//       "Phytophthora Blight",
//       "Pod Borer"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Green Gram": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "60-90 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Yellow Mosaic Virus",
//       "Powdery Mildew",
//       "Cercospora Leaf Spot",
//       "Root Rot"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Blackgram": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "80-100 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Yellow Mosaic Virus",
//       "Powdery Mildew",
//       "Cercospora Leaf Spot",
//       "Root Rot"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Lentil": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "110-130 days",
//     expectedYield: "10-12 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "18-30°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Wilt",
//       "Rust",
//       "Ascochyta Blight",
//       "Root Rot"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Cowpea": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "70-90 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Anthracnose",
//       "Powdery Mildew",
//       "Root Rot",
//       "Yellow Mosaic Virus"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Horsegram": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "8-10 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed treatment",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Spot",
//       "Root Rot",
//       "Powdery Mildew",
//       "Rust"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "30-40 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Groundnut": {
//     waterRequirement: "500-600mm per season",
//     growingPeriod: "100-130 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Sandy Loam", "Well-drained Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Spot",
//       "Rust",
//       "Collar Rot",
//       "Bud Necrosis"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Mustard": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "90-110 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "White Rust",
//       "Alternaria Blight",
//       "Downy Mildew",
//       "Powdery Mildew"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "40-60 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Sunflower": {
//     waterRequirement: "500-600mm per season",
//     growingPeriod: "90-100 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Downy Mildew",
//       "Rust",
//       "Alternaria Blight",
//       "Head Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "60-80 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "40-50 kg/ha"
//     }
//   },
//   "Safflower": {
//     waterRequirement: "400-500mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Alternaria Leaf Spot",
//       "Rust",
//       "Powdery Mildew",
//       "Wilt"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "40-50 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Sesame": {
//     waterRequirement: "300-500mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "5-7 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Phyllody",
//       "Powdery Mildew",
//       "Leaf Spot",
//       "Wilt"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "20-30 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Castor": {
//     waterRequirement: "500-600mm per season",
//     growingPeriod: "150-180 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Fusarium Wilt",
//       "Leaf Spot",
//       "Powdery Mildew",
//       "Capsule Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "40-50 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Cotton": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "150-180 days",
//     expectedYield: "20-25 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Boll Rot",
//       "Leaf Curl Virus",
//       "Fusarium Wilt",
//       "Alternaria Leaf Spot"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "50-60 kg/ha"
//     }
//   },
//   "Sugarcane": {
//     waterRequirement: "1500-2500mm per season",
//     growingPeriod: "10-12 months",
//     expectedYield: "700-1000 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Red Rot",
//       "Smut",
//       "Rust",
//       "Wilt"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "200-250 kg/ha",
//       "Phosphorus": "100-120 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Jute": {
//     waterRequirement: "1500-2000mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "25-30 quintals/hectare",
//     soilTypes: ["Alluvial Soil", "Well-drained Loamy Soil"],
//     idealTemperature: "24-37°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Stem Rot",
//       "Leaf Spot",
//       "Root Rot",
//       "Anthracnose"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "40-60 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Tobacco": {
//     waterRequirement: "500-600mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "15-20 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Black Shank",
//       "Blue Mold",
//       "Leaf Spot",
//       "Mosaic Virus"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "60-80 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Potato": {
//     waterRequirement: "500-700mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "200-300 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Late Blight",
//       "Early Blight",
//       "Black Scurf",
//       "Common Scab"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Tomato": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "300-400 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely transplanting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Early Blight",
//       "Late Blight",
//       "Fusarium Wilt",
//       "Bacterial Wilt"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Onion": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Purple Blotch",
//       "Stemphylium Blight",
//       "Downy Mildew",
//       "Basal Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Cabbage": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "300-400 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Black Rot",
//       "Clubroot",
//       "Downy Mildew",
//       "Alternaria Leaf Spot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "120-150 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Brinjal": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "250-300 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Fusarium Wilt",
//       "Bacterial Wilt",
//       "Phomopsis Blight",
//       "Fruit Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "50-60 kg/ha"
//     }
//   },
//   "Okra": {
//     waterRequirement: "400-600mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "100-150 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Yellow Vein Mosaic Virus",
//       "Powdery Mildew",
//       "Fusarium Wilt",
//       "Damping Off"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Rabi"],
//     fertilizers: {
//       "Nitrogen": "80-100 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "40-50 kg/ha"
//     }
//   },
//   "Peas": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "80-100 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Powdery Mildew",
//       "Rust",
//       "Fusarium Wilt",
//       "Ascochyta Blight"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-25 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Carrot": {
//     waterRequirement: "400-500mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "15-25°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Blight",
//       "Root Knot Nematode",
//       "Alternaria Blight",
//       "Powdery Mildew"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "80-100 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Mango": {
//     waterRequirement: "800-1000mm per season",
//     growingPeriod: "5-6 years to bear fruit",
//     expectedYield: "8-10 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular pruning",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Anthracnose",
//       "Powdery Mildew",
//       "Mango Malformation",
//       "Bacterial Canker"
//     ],
//     marketValue: "High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "60-80 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Papaya": {
//     waterRequirement: "1000-1500mm per season",
//     growingPeriod: "6-9 months to bear fruit",
//     expectedYield: "30-40 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular irrigation",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Papaya Ring Spot Virus",
//       "Powdery Mildew",
//       "Anthracnose",
//       "Root Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Throughout the year"],
//     fertilizers: {
//       "Nitrogen": "200-250 kg/ha",
//       "Phosphorus": "100-150 kg/ha",
//       "Potassium": "200-250 kg/ha"
//     }
//   },
//   "Pomegranate": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "3-4 years to bear fruit",
//     expectedYield: "15-20 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular pruning",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Bacterial Blight",
//       "Fruit Spot",
//       "Leaf Spot",
//       "Wilt"
//     ],
//     marketValue: "High",
//     seasons: ["Throughout the year"],
//     fertilizers: {
//       "Nitrogen": "600-800 g/plant/year",
//       "Phosphorus": "200-300 g/plant/year",
//       "Potassium": "600-800 g/plant/year"
//     }
//   },
//   "Guava": {
//     waterRequirement: "1000-1200mm per season",
//     growingPeriod: "2-3 years to bear fruit",
//     expectedYield: "20-25 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "23-28°C",
//     bestPractices: [
//       "Proper spacing",
//       "Regular pruning",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Wilt",
//       "Anthracnose",
//       "Fruit Canker",
//       "Leaf Spot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Throughout the year"],
//     fertilizers: {
//       "Nitrogen": "600-800 g/plant/year",
//       "Phosphorus": "200-300 g/plant/year",
//       "Potassium": "600-800 g/plant/year"
//     }
//   },
//   "Turmeric": {
//     waterRequirement: "1500-2000mm per season",
//     growingPeriod: "7-9 months",
//     expectedYield: "20-25 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed selection",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Spot",
//       "Rhizome Rot",
//       "Leaf Blotch",
//       "Nematode Infestation"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "60-80 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Cardamom": {
//     waterRequirement: "1500-3000mm per season",
//     growingPeriod: "2-3 years to bear fruit",
//     expectedYield: "100-150 kg/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Forest Soil"],
//     idealTemperature: "10-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Shade management",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Capsule Rot",
//       "Leaf Blight",
//       "Rhizome Rot",
//       "Nematode Infestation"
//     ],
//     marketValue: "High",
//     seasons: ["Throughout the year"],
//     fertilizers: {
//       "Nitrogen": "75-100 kg/ha",
//       "Phosphorus": "50-75 kg/ha",
//       "Potassium": "100-150 kg/ha"
//     }
//   },
//   "Black Pepper": {
//     waterRequirement: "2000-3000mm per season",
//     growingPeriod: "3-4 years to bear fruit",
//     expectedYield: "500-1000 kg/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Clay Loam"],
//     idealTemperature: "10-40°C",
//     bestPractices: [
//       "Proper spacing",
//       "Support system",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Foot Rot",
//       "Pollu Disease",
//       "Leaf Blight",
//       "Spike Shedding"
//     ],
//     marketValue: "High",
//     seasons: ["Throughout the year"],
//     fertilizers: {
//       "Nitrogen": "100-150 kg/ha",
//       "Phosphorus": "50-75 kg/ha",
//       "Potassium": "150-200 kg/ha"
//     }
//   },
//   "Coriander": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "10-15 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Powdery Mildew",
//       "Stem Gall",
//       "Wilt",
//       "Leaf Spot"
//     ],
//     marketValue: "Medium",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-30 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Cumin": {
//     waterRequirement: "300-400mm per season",
//     growingPeriod: "120-150 days",
//     expectedYield: "5-7 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-30°C",
//     bestPractices: [
//       "Proper seed rate",
//       "Timely sowing",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Wilt",
//       "Powdery Mildew",
//       "Alternaria Blight",
//       "Fusarium Wilt"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Rabi"],
//     fertilizers: {
//       "Nitrogen": "20-30 kg/ha",
//       "Phosphorus": "20-30 kg/ha",
//       "Potassium": "20-30 kg/ha"
//     }
//   },
//   "Sweet Potato": {
//     waterRequirement: "600-800mm per season",
//     growingPeriod: "90-120 days",
//     expectedYield: "200-250 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Spot",
//       "Stem Rot",
//       "Root Rot",
//       "Nematode Infestation"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "50-60 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "60-80 kg/ha"
//     }
//   },
//   "Elephant Foot Yam": {
//     waterRequirement: "1000-1500mm per season",
//     growingPeriod: "8-10 months",
//     expectedYield: "20-25 tonnes/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper spacing",
//       "Timely planting",
//       "Weed control",
//       "Balanced fertilization",
//       "Pest management",
//       "Timely harvesting"
//     ],
//     diseases: [
//       "Leaf Blight",
//       "Tuber Rot",
//       "Nematode Infestation",
//       "Wilt"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif"],
//     fertilizers: {
//       "Nitrogen": "100-120 kg/ha",
//       "Phosphorus": "50-60 kg/ha",
//       "Potassium": "100-120 kg/ha"
//     }
//   },
//   "Black Gram": {
//     waterRequirement: "350-500mm per season",
//     growingPeriod: "90-100 days",
//     expectedYield: "8-10 quintals/hectare",
//     soilTypes: ["Well-drained Loamy Soil", "Sandy Loam", "Clay Loam"],
//     idealTemperature: "25-35°C",
//     bestPractices: [
//       "Proper seed treatment with Rhizobium culture",
//       "Line sowing with proper spacing",
//       "Timely weed management",
//       "Integrated pest management",
//       "Proper drainage system",
//       "Harvesting at right maturity"
//     ],
//     diseases: [
//       "Yellow Mosaic Virus",
//       "Leaf Crinkle",
//       "Powdery Mildew",
//       "Cercospora Leaf Spot",
//       "Root Rot"
//     ],
//     marketValue: "Medium to High",
//     seasons: ["Kharif", "Rabi (in some regions)"],
//     fertilizers: {
//       "Nitrogen": "15-20 kg/ha",
//       "Phosphorus": "40-50 kg/ha",
//       "Potassium": "20-25 kg/ha"
//     }
//   },
//   "Horse Gram": {
//     waterRequirement: "250-350mm per season",
//     growingPeriod: "120-130 days",
//     expectedYield: "8-12 quintals/hectare",
//     soilTypes: ["Red Soil", "Sandy Loam", "Black Soil"],
//     idealTemperature: "20-30°C",
//     bestPractices: [
//       "Seed treatment with fungicides",
//       "Line sowing with optimal spacing",
//       "Minimal irrigation required",
//       "Intercultural operations",
//       "Drought resistant crop management",
//       "Timely harvesting when pods turn brown"
//     ],
//     diseases: [
//       "Powdery Mildew",
//       "Rust",
//       "Anthracnose",
//       "Leaf Spot",
//       "Root Rot"
//     ],
//     marketValue: "Medium",
//     seasons: ["Kharif", "Late Kharif"],
//     fertilizers: {
//       "Nitrogen": "15-20 kg/ha",
//       "Phosphorus": "30-40 kg/ha",
//       "Potassium": "15-20 kg/ha"
//     }
//   }
// };

// // Add styles object before the CropInformation function
// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '40px 20px',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '48px',
//   },
//   title: {
//     fontSize: '36px',
//     fontWeight: '700',
//     color: '#166534',
//     marginBottom: '16px',
//   },
//   subtitle: {
//     fontSize: '18px',
//     color: '#4b5563',
//     maxWidth: '600px',
//     margin: '0 auto',
//     lineHeight: '1.6',
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     borderRadius: '16px',
//     padding: '32px',
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
//     maxWidth: '600px',
//     margin: '0 auto 40px',
//     border: '1px solid rgba(22, 101, 52, 0.1)',
//   },
//   formGroup: {
//     marginBottom: '24px',
//   },
//   label: {
//     display: 'block',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#374151',
//     marginBottom: '8px',
//   },
//   select: {
//     width: '100%',
//     padding: '12px 16px',
//     fontSize: '16px',
//     border: '2px solid #e5e7eb',
//     borderRadius: '8px',
//     backgroundColor: '#f9fafb',
//     color: '#1f2937',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     appearance: 'none',
//     backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23374151%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right 16px top 50%',
//     backgroundSize: '12px auto',
//     '&:hover': {
//       borderColor: '#16a34a',
//       backgroundColor: '#f0fdf4',
//     },
//     '&:focus': {
//       outline: 'none',
//       borderColor: '#16a34a',
//       boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.1)',
//     },
//   },
//   button: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     width: '100%',
//     padding: '14px 24px',
//     backgroundColor: '#16a34a',
//     color: 'white',
//     fontSize: '16px',
//     fontWeight: '600',
//     borderRadius: '8px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2)',
//     '&:hover': {
//       backgroundColor: '#15803d',
//       transform: 'translateY(-2px)',
//       boxShadow: '0 6px 12px -2px rgba(22, 163, 74, 0.3)',
//     },
//     '&:focus': {
//       outline: 'none',
//       boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.3)',
//     },
//     '&:disabled': {
//       backgroundColor: '#d1d5db',
//       cursor: 'not-allowed',
//       transform: 'none',
//     },
//   },
//   searchIcon: {
//     fontSize: '20px',
//   },
// };

// // Move CropDetailsModal outside of CropInformation
// const CropDetailsModal = ({ isOpen, onClose, selectedCrop, currentLanguage, translations }) => {
//   if (!isOpen || !selectedCrop) return null;

//   const t = translations[currentLanguage].cropInformation;
//   const details = cropDetails[selectedCrop]; // Get crop details using selectedCrop

//   if (!details) return null;

//   const modalStyle = {
//     position: 'fixed',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     padding: '20px'
//   };

//   const contentStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '15px',
//     maxWidth: '1000px',
//     width: '90%',
//     maxHeight: '90vh',
//     overflowY: 'auto',
//     position: 'relative',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '20px',
//     marginTop: '20px'
//   };

//   const cardStyle = {
//     padding: '20px',
//     borderRadius: '10px',
//     backgroundColor: '#f8f9fa',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
//   };

//   const economicCardStyle = {
//     ...cardStyle,
//     backgroundColor: '#e8f5e9',
//     gridColumn: '1 / -1'
//   };

//   const titleStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     color: '#2c3e50',
//     textAlign: 'center'
//   };

//   const sectionTitleStyle = {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     marginBottom: '15px',
//     color: '#34495e',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px'
//   };

//   const listStyle = {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0
//   };

//   const listItemStyle = {
//     padding: '8px 0',
//     borderBottom: '1px solid #eee',
//     fontSize: '16px',
//     color: '#555'
//   };

//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '15px',
//     right: '15px',
//     background: 'none',
//     border: 'none',
//     fontSize: '24px',
//     cursor: 'pointer',
//     color: '#666'
//   };

//   const getTranslation = (category, text) => {
//     if (currentLanguage === 'en') return text;
    
//     if (currentLanguage === 'hi' && cropDetailsTranslations?.hi?.[category]?.[text]) {
//       return cropDetailsTranslations.hi[category][text];
//     }
//     return text;
//   };

//   const getLabel = (key) => {
//     const labels = {
//       en: {
//         waterRequirement: "Water Requirement",
//         temperature: "Temperature",
//         soilTypes: "Soil Types",
//         growingPeriod: "Growing Period",
//         season: "Season",
//         expectedYield: "Expected Yield",
//         marketValue: "Market Value",
//         investment: {
//           seeds: "Seeds",
//           fertilizers: "Fertilizers",
//           pesticides: "Pesticides",
//           irrigation: "Irrigation",
//           labor: "Labor"
//         },
//         returns: {
//           expectedYield: "Expected Yield",
//           marketRate: "Market Rate",
//           grossReturns: "Gross Returns",
//           netProfit: "Net Profit",
//           profitMargin: "Profit Margin"
//         }
//       },
//       hi: {
//         waterRequirement: "पानी की आवश्यकता",
//         temperature: "तापमान",
//         soilTypes: "मिट्टी के प्रकार",
//         growingPeriod: "उगाने की अवधि",
//         season: "मौसम",
//         expectedYield: "अपेक्षित उपज",
//         marketValue: "बाजार मूल्य",
//         investment: {
//           seeds: "बीज",
//           fertilizers: "उर्वरक",
//           pesticides: "कीटनाशक",
//           irrigation: "सिंचाई",
//           labor: "श्रमिक"
//         },
//         returns: {
//           expectedYield: "अपेक्षित उपज",
//           marketRate: "बाजार दर",
//           grossReturns: "सकल लाभ",
//           netProfit: "शुद्ध लाभ",
//           profitMargin: "लाभ मार्जिन"
//         }
//       }
//     };

//     return labels[currentLanguage][key] || key;
//   };

//   const getSectionTitle = (key) => {
//     const titles = {
//       en: {
//         cropDetails: "Crop Details",
//         growingRequirements: "Growing Requirements",
//         bestPractices: "Best Practices",
//         keyInformation: "Key Information",
//         diseaseManagement: "Disease Management",
//         economicInformation: "Economic Information",
//         investmentDetails: "Investment Details",
//         returnsAndProfit: "Returns & Profit"
//       },
//       hi: {
//         cropDetails: "फसल विवरण",
//         growingRequirements: "उगाने की आवश्यकताएं",
//         bestPractices: "सर्वोत्तम प्रथाएं",
//         keyInformation: "प्रमुख जानकारी",
//         diseaseManagement: "रोग प्रबंधन",
//         economicInformation: "आर्थिक जानकारी",
//         investmentDetails: "निवेश विवरण",
//         returnsAndProfit: "लाभ और वापसी"
//       }
//     };

//     return titles[currentLanguage][key] || key;
//   };

//   // Economic information with translations
//   const economicInfo = {
//     investment: {
//       seeds: currentLanguage === 'hi' ? "₹2,000-3,000 प्रति एकड़" : "₹2,000-3,000 per acre",
//       fertilizers: currentLanguage === 'hi' ? "₹4,000-6,000 प्रति एकड़" : "₹4,000-6,000 per acre",
//       pesticides: currentLanguage === 'hi' ? "₹2,000-4,000 प्रति एकड़" : "₹2,000-4,000 per acre",
//       irrigation: currentLanguage === 'hi' ? "₹3,000-5,000 प्रति एकड़" : "₹3,000-5,000 per acre",
//       labor: currentLanguage === 'hi' ? "₹8,000-12,000 प्रति एकड़" : "₹8,000-12,000 per acre"
//     },
//     returns: {
//       expectedYield: getTranslation('expectedYield', details.expectedYield),
//       marketRate: currentLanguage === 'hi' ? "₹2,000-3,000 प्रति क्विंटल" : "₹2,000-3,000 per quintal",
//       grossReturns: currentLanguage === 'hi' ? "₹40,000-60,000 प्रति एकड़" : "₹40,000-60,000 per acre",
//       netProfit: currentLanguage === 'hi' ? "₹20,000-30,000 प्रति एकड़" : "₹20,000-30,000 per acre",
//       profitMargin: currentLanguage === 'hi' ? "40-50% लाभ" : "40-50% profit"
//     }
//   };

//   return (
//     <div style={modalStyle} onClick={onClose}>
//       <div style={contentStyle} onClick={e => e.stopPropagation()}>
//         <button style={closeButtonStyle} onClick={onClose}>&times;</button>
//         <h2 style={titleStyle}>{getSectionTitle('cropDetails')}</h2>
        
//         <div style={gridStyle}>
//           {/* Growing Requirements */}
//           <div style={cardStyle}>
//             <h3 style={sectionTitleStyle}>
//               <FaWater />
//               {getSectionTitle('growingRequirements')}
//             </h3>
//             <ul style={listStyle}>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('waterRequirement')}:</strong><br />
//                 {getTranslation('waterRequirements', details.waterRequirement)}
//               </li>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('temperature')}:</strong><br />
//                 {getTranslation('temperature', details.idealTemperature)}
//               </li>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('soilTypes')}:</strong><br />
//                 {details.soilTypes.join(', ')}
//               </li>
//             </ul>
//           </div>

//           {/* Best Practices */}
//           <div style={cardStyle}>
//             <h3 style={sectionTitleStyle}>
//               <FaSeedling />
//               {getSectionTitle('bestPractices')}
//             </h3>
//             <ul style={listStyle}>
//               {details.bestPractices.map((practice, index) => (
//                 <li key={index} style={listItemStyle}>
//                   {getTranslation('bestPractices', practice)}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Key Information */}
//           <div style={cardStyle}>
//             <h3 style={sectionTitleStyle}>
//               <FaClock />
//               {getSectionTitle('keyInformation')}
//             </h3>
//             <ul style={listStyle}>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('growingPeriod')}:</strong><br />
//                 {getTranslation('growingPeriod', details.growingPeriod)}
//               </li>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('season')}:</strong><br />
//                 {details.seasons.map(season => getTranslation('seasons', season)).join(', ')}
//               </li>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('expectedYield')}:</strong><br />
//                 {getTranslation('expectedYield', details.expectedYield)}
//               </li>
//               <li style={listItemStyle}>
//                 <strong>{getLabel('marketValue')}:</strong><br />
//                 {getTranslation('marketValue', details.marketValue)}
//               </li>
//             </ul>
//           </div>

//           {/* Disease Management */}
//           <div style={cardStyle}>
//             <h3 style={sectionTitleStyle}>
//               <FaBug />
//               {getSectionTitle('diseaseManagement')}
//             </h3>
//             <ul style={listStyle}>
//               {details.diseases.map((disease, index) => (
//                 <li key={index} style={listItemStyle}>
//                   {getTranslation('diseases', disease)}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Economic Information */}
//           <div style={economicCardStyle}>
//             <h3 style={sectionTitleStyle}>
//               <FaMoneyBillWave />
//               {getSectionTitle('economicInformation')}
//             </h3>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//               {/* Investment Details */}
//               <div>
//                 <h4 style={{ ...sectionTitleStyle, fontSize: '16px' }}>
//                   <FaRupeeSign />
//                   {getSectionTitle('investmentDetails')}
//                 </h4>
//                 <ul style={listStyle}>
//                   {Object.entries(economicInfo.investment).map(([key, value]) => (
//                     <li key={key} style={listItemStyle}>
//                       <strong>{getLabel(`investment.${key}`)}:</strong><br />
//                       {value}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               {/* Returns and Profit */}
//               <div>
//                 <h4 style={{ ...sectionTitleStyle, fontSize: '16px' }}>
//                   <FaChartLine />
//                   {getSectionTitle('returnsAndProfit')}
//                 </h4>
//                 <ul style={listStyle}>
//                   {Object.entries(economicInfo.returns).map(([key, value]) => (
//                     <li key={key} style={listItemStyle}>
//                       <strong>{getLabel(`returns.${key}`)}:</strong><br />
//                       {value}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function CropInformation() {
//   const [selectedCrop, setSelectedCrop] = useState('');
//   const [showDetails, setShowDetails] = useState(false);
//   const { currentLanguage } = useLanguage();
//   const t = translations[currentLanguage].cropInformation;

//   // Function to get translated crop name
//   const getTranslatedCropName = (cropName) => {
//     return t.crops[cropName] || cropName;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedCrop && cropDetails[selectedCrop]) {
//       setShowDetails(true);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>{t.title}</h1>
//         <p style={styles.subtitle}>{t.subtitle}</p>
//       </div>

//       <form onSubmit={handleSubmit} style={styles.formContainer}>
//         <div style={styles.formGroup}>
//           <label htmlFor="cropSelect" style={styles.label}>
//             {t.selectCrop}
//           </label>
//           <select
//             id="cropSelect"
//             value={selectedCrop}
//             onChange={(e) => setSelectedCrop(e.target.value)}
//             style={styles.select}
//             required
//           >
//             <option value="">{t.selectPlaceholder}</option>
//             {crops.map((crop) => (
//               <option key={crop} value={crop}>
//                 {getTranslatedCropName(crop)}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button
//           type="submit"
//           style={styles.button}
//           disabled={!selectedCrop}
//         >
//           <FaSearch style={styles.searchIcon} />
//           {t.viewDetails}
//         </button>
//       </form>

//       <CropDetailsModal
//         isOpen={showDetails}
//         onClose={() => setShowDetails(false)}
//         selectedCrop={selectedCrop}
//         currentLanguage={currentLanguage}
//         translations={translations}
//       />
//     </div>
//   );
// }

// export default CropInformation;




























































































































import React, { useState } from 'react';
import { FaSeedling, FaWater, FaCalendarAlt, FaChartLine, FaList, FaInfoCircle, FaDownload, FaEye, FaTimes, FaSearch, FaRupeeSign, FaPercentage, FaThermometerHalf, FaClock, FaBug, FaMoneyBillWave } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { cropDetailsTranslations } from '../data/cropDetailsTranslations';

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

const crops = [
  // Cereals
  "Rice", "Wheat", "Maize", "Jowar", "Pearl Millet", "Ragi", "Barley", "Sorghum",
  // Pulses
  "Chickpea", "Pigeon Pea", "Green Gram", "Black Gram", "Lentil", "Cowpea", "Horse Gram",
  // Oilseeds
  "Soybean", "Groundnut", "Mustard", "Sunflower", "Safflower", "Sesame", "Castor",
  // Cash Crops
  "Cotton", "Sugarcane", "Jute", "Tobacco",
  // Vegetables
  "Potato", "Tomato", "Onion", "Cauliflower", "Cabbage", "Brinjal", "Okra", "Peas", "Carrot",
  // Fruits
  "Mango", "Banana", "Papaya", "Watermelon", "Pomegranate", "Guava",
  // Spices
  "Turmeric", "Ginger", "Cardamom", "Black Pepper", "Coriander", "Cumin",
  // Others
  "Sweet Potato", "Elephant Foot Yam"
];

const cropDetails = {
  "Rice": {
    waterRequirement: "1200-1600mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "40-45 quintals/hectare",
    soilTypes: ["Alluvial Soil", "Clay Soil", "Black Soil"],
    idealTemperature: "22-32°C",
    bestPractices: [
      "Proper leveling of field",
      "Timely transplanting",
      "Regular monitoring of water level",
      "Integrated pest management",
      "Proper nutrient management",
      "Weed control"
    ],
    diseases: [
      "Blast",
      "Bacterial Leaf Blight",
      "Sheath Blight",
      "Brown Spot"
    ],
    marketValue: "High",
    seasons: ["Kharif", "Rabi (in some regions)"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "40-50 kg/ha"
    }
  },
  "Wheat": {
    waterRequirement: "450-650mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "35-40 quintals/hectare",
    soilTypes: ["Loamy Soil", "Clay Loam", "Black Soil"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Timely sowing",
      "Proper seed treatment",
      "Adequate irrigation at critical stages",
      "Weed management",
      "Disease monitoring",
      "Balanced fertilization"
    ],
    diseases: [
      "Rust",
      "Loose Smut",
      "Powdery Mildew",
      "Karnal Bunt"
    ],
    marketValue: "High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "120-150 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "40-60 kg/ha"
    }
  },
  "Maize": {
    waterRequirement: "500-800mm per season",
    growingPeriod: "90-130 days",
    expectedYield: "25-30 quintals/hectare",
    soilTypes: ["Well-drained Loamy", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely weeding",
      "Regular irrigation",
      "Pest monitoring",
      "Adequate fertilization",
      "Harvesting at right maturity"
    ],
    diseases: [
      "Leaf Blight",
      "Stalk Rot",
      "Ear Rot",
      "Downy Mildew"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "120-150 kg/ha",
      "Phosphorus": "60-70 kg/ha",
      "Potassium": "40-60 kg/ha"
    }
  },
  "Cotton": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "150-180 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Boll Rot",
      "Leaf Curl Virus",
      "Fusarium Wilt",
      "Alternaria Leaf Spot"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "50-60 kg/ha"
    }
  },
  "Potato": {
    waterRequirement: "500-700mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "200-300 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper seed selection",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Late Blight",
      "Early Blight",
      "Black Scurf",
      "Common Scab"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Mango": {
    waterRequirement: "800-1000mm per season",
    growingPeriod: "5-6 years to bear fruit",
    expectedYield: "8-10 tonnes/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely pruning",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Anthracnose",
      "Powdery Mildew",
      "Die Back",
      "Bacterial Canker"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Sugarcane": {
    waterRequirement: "1500-2500mm per season",
    growingPeriod: "10-12 months",
    expectedYield: "700-1000 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Black Cotton Soil"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Red Rot",
      "Smut",
      "Rust",
      "Wilt"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "200-250 kg/ha",
      "Phosphorus": "100-120 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Tomato": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "300-400 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely transplanting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Early Blight",
      "Late Blight",
      "Fusarium Wilt",
      "Bacterial Wilt"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Turmeric": {
    waterRequirement: "1500-2000mm per season",
    growingPeriod: "7-9 months",
    expectedYield: "200-250 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Red Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed selection",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Blotch",
      "Rhizome Rot",
      "Leaf Spot",
      "Wilt"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Onion": {
    waterRequirement: "350-500mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "200-250 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed selection",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Purple Blotch",
      "Stemphylium Blight",
      "Downy Mildew",
      "Basal Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Groundnut": {
    waterRequirement: "500-600mm per season",
    growingPeriod: "100-130 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Sandy Loam", "Well-drained Soil"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Spot",
      "Rust",
      "Collar Rot",
      "Bud Necrosis"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Banana": {
    waterRequirement: "1800-2000mm per year",
    growingPeriod: "12-15 months",
    expectedYield: "400-500 quintals/hectare",
    soilTypes: ["Deep Rich Loamy", "Well-drained Soil"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper sucker selection",
      "Adequate spacing",
      "Propping of plants",
      "Regular de-suckering",
      "Bunch management",
      "Timely harvesting"
    ],
    diseases: [
      "Panama Wilt",
      "Sigatoka Leaf Spot",
      "Bunchy Top",
      "Root Rot"
    ],
    marketValue: "High",
    seasons: ["Year-round planting possible"],
    fertilizers: {
      "Nitrogen": "200-250 kg/ha",
      "Phosphorus": "80-100 kg/ha",
      "Potassium": "300-350 kg/ha"
    }
  },
  "Ginger": {
    waterRequirement: "1500-2000mm per season",
    growingPeriod: "8-10 months",
    expectedYield: "150-200 quintals/hectare",
    soilTypes: ["Sandy Loam", "Red Lateritic Soil"],
    idealTemperature: "25-30°C",
    bestPractices: [
      "Quality rhizome selection",
      "Proper bed preparation",
      "Mulching",
      "Disease management",
      "Proper drainage",
      "Careful harvesting"
    ],
    diseases: [
      "Soft Rot",
      "Bacterial Wilt",
      "Leaf Spot",
      "Rhizome Rot"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  },
  "Cauliflower": {
    waterRequirement: "350-500mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "200-250 quintals/hectare",
    soilTypes: ["Well-drained Loamy", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper spacing",
      "Regular irrigation",
      "Timely transplanting",
      "Disease monitoring",
      "Nutrient management",
      "Curd protection"
    ],
    diseases: [
      "Black Rot",
      "Downy Mildew",
      "Club Root",
      "Alternaria Leaf Spot"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "120-150 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "60-80 kg/ha"
    }
  },
  "Soybean": {
    waterRequirement: "450-700mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Well-drained Loamy", "Black Soil"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Seed treatment",
      "Proper spacing",
      "Weed management",
      "Disease monitoring",
      "Timely harvesting",
      "Proper storage"
    ],
    diseases: [
      "Rust",
      "Yellow Mosaic",
      "Bacterial Pustule",
      "Pod Blight"
    ],
    marketValue: "High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "20-30 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "40-60 kg/ha"
    }
  },
  "Watermelon": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "90-110 days",
    expectedYield: "300-350 quintals/hectare",
    soilTypes: ["Sandy Loam", "Well-drained Soil"],
    idealTemperature: "24-30°C",
    bestPractices: [
      "Proper spacing",
      "Regular irrigation",
      "Mulching",
      "Pest monitoring",
      "Fruit protection",
      "Timely harvesting"
    ],
    diseases: [
      "Anthracnose",
      "Powdery Mildew",
      "Fusarium Wilt",
      "Gummy Stem Blight"
    ],
    marketValue: "Medium to High",
    seasons: ["Spring-Summer"],
    fertilizers: {
      "Nitrogen": "80-100 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "50-60 kg/ha"
    }
  },
  "Jowar": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Well-drained Loamy", "Black Soil"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Disease monitoring",
      "Nutrient management",
      "Timely harvesting"
    ],
    diseases: [
      "Grain Mold",
      "Anthracnose",
      "Downy Mildew",
      "Leaf Blight"
    ],
    marketValue: "Medium",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "60-80 kg/ha",
      "Phosphorus": "30-40 kg/ha",
      "Potassium": "30-40 kg/ha"
    }
  },
  "Pearl Millet": {
    waterRequirement: "350-500mm per season",
    growingPeriod: "80-110 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Sandy Loam", "Light Soil"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Disease monitoring",
      "Nutrient management",
      "Timely harvesting"
    ],
    diseases: [
      "Downy Mildew",
      "Ergot",
      "Smut",
      "Rust"
    ],
    marketValue: "Medium",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "40-50 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Ragi": {
    waterRequirement: "500-700mm per season",
    growingPeriod: "100-120 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Red Loam", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Disease monitoring",
      "Nutrient management",
      "Timely harvesting"
    ],
    diseases: [
      "Blast",
      "Leaf Spot",
      "Downy Mildew",
      "Smut"
    ],
    marketValue: "Medium",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "40-50 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Barley": {
    waterRequirement: "300-500mm per season",
    growingPeriod: "110-130 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Loamy Soil", "Well-drained Soil"],
    idealTemperature: "12-25°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed management",
      "Disease monitoring",
      "Nutrient management",
      "Timely harvesting"
    ],
    diseases: [
      "Powdery Mildew",
      "Rust",
      "Leaf Blight",
      "Smut"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "40-60 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Sorghum": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "20-25 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-32°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Disease monitoring",
      "Nutrient management",
      "Timely harvesting"
    ],
    diseases: [
      "Grain Mold",
      "Anthracnose",
      "Downy Mildew",
      "Striga Infestation"
    ],
    marketValue: "Medium",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "60-80 kg/ha",
      "Phosphorus": "30-40 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Chickpea": {
    waterRequirement: "350-500mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Wilt",
      "Ascochyta Blight",
      "Botrytis Gray Mold",
      "Root Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Pigeon Pea": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "150-180 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Wilt",
      "Sterility Mosaic",
      "Phytophthora Blight",
      "Pod Borer"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Green Gram": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "60-90 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Yellow Mosaic Virus",
      "Powdery Mildew",
      "Cercospora Leaf Spot",
      "Root Rot"
    ],
    marketValue: "Medium",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Black Gram": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "80-100 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Yellow Mosaic Virus",
      "Powdery Mildew",
      "Cercospora Leaf Spot",
      "Root Rot"
    ],
    marketValue: "Medium",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Lentil": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "110-130 days",
    expectedYield: "10-12 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "18-30°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Wilt",
      "Rust",
      "Ascochyta Blight",
      "Root Rot"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Cowpea": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "70-90 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Anthracnose",
      "Powdery Mildew",
      "Root Rot",
      "Yellow Mosaic Virus"
    ],
    marketValue: "Medium",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Horse Gram": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "8-10 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed treatment",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Spot",
      "Root Rot",
      "Powdery Mildew",
      "Rust"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "30-40 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Mustard": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "90-110 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "White Rust",
      "Alternaria Blight",
      "Downy Mildew",
      "Powdery Mildew"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "40-60 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Sunflower": {
    waterRequirement: "500-600mm per season",
    growingPeriod: "90-100 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Downy Mildew",
      "Rust",
      "Alternaria Blight",
      "Head Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "60-80 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "40-50 kg/ha"
    }
  },
  "Safflower": {
    waterRequirement: "400-500mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Alternaria Leaf Spot",
      "Rust",
      "Powdery Mildew",
      "Wilt"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "40-50 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Sesame": {
    waterRequirement: "300-500mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "5-7 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Phyllody",
      "Powdery Mildew",
      "Leaf Spot",
      "Wilt"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "20-30 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Castor": {
    waterRequirement: "500-600mm per season",
    growingPeriod: "150-180 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Fusarium Wilt",
      "Leaf Spot",
      "Powdery Mildew",
      "Capsule Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "40-50 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Jute": {
    waterRequirement: "1500-2000mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "25-30 quintals/hectare",
    soilTypes: ["Alluvial Soil", "Well-drained Loamy Soil"],
    idealTemperature: "24-37°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Stem Rot",
      "Leaf Spot",
      "Root Rot",
      "Anthracnose"
    ],
    marketValue: "Medium",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "40-60 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Tobacco": {
    waterRequirement: "500-600mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "15-20 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Black Shank",
      "Blue Mold",
      "Leaf Spot",
      "Mosaic Virus"
    ],
    marketValue: "High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "60-80 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "60-80 kg/ha"
    }
  },
  "Cabbage": {
    waterRequirement: "350-500mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "300-400 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper spacing",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Black Rot",
      "Clubroot",
      "Downy Mildew",
      "Alternaria Leaf Spot"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "120-150 kg/ha",
      "Phosphorus": "60-80 kg/ha",
      "Potassium": "60-80 kg/ha"
    }
  },
  "Brinjal": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "250-300 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Fusarium Wilt",
      "Bacterial Wilt",
      "Phomopsis Blight",
      "Fruit Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "50-60 kg/ha"
    }
  },
  "Okra": {
    waterRequirement: "400-600mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "100-150 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Yellow Vein Mosaic Virus",
      "Powdery Mildew",
      "Fusarium Wilt",
      "Damping Off"
    ],
    marketValue: "Medium",
    seasons: ["Kharif", "Rabi"],
    fertilizers: {
      "Nitrogen": "80-100 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "40-50 kg/ha"
    }
  },
  "Peas": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "80-100 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Powdery Mildew",
      "Rust",
      "Fusarium Wilt",
      "Ascochyta Blight"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-25 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Carrot": {
    waterRequirement: "400-500mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "200-250 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "15-25°C",
    bestPractices: [
      "Proper spacing",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Blight",
      "Root Knot Nematode",
      "Alternaria Blight",
      "Powdery Mildew"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "80-100 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "60-80 kg/ha"
    }
  },
  "Papaya": {
    waterRequirement: "1000-1500mm per season",
    growingPeriod: "6-9 months to bear fruit",
    expectedYield: "30-40 tonnes/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-30°C",
    bestPractices: [
      "Proper spacing",
      "Regular irrigation",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Papaya Ring Spot Virus",
      "Powdery Mildew",
      "Anthracnose",
      "Root Rot"
    ],
    marketValue: "Medium to High",
    seasons: ["Throughout the year"],
    fertilizers: {
      "Nitrogen": "200-250 kg/ha",
      "Phosphorus": "100-150 kg/ha",
      "Potassium": "200-250 kg/ha"
    }
  },
  "Pomegranate": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "3-4 years to bear fruit",
    expectedYield: "15-20 tonnes/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Regular pruning",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Bacterial Blight",
      "Fruit Spot",
      "Leaf Spot",
      "Wilt"
    ],
    marketValue: "High",
    seasons: ["Throughout the year"],
    fertilizers: {
      "Nitrogen": "600-800 g/plant/year",
      "Phosphorus": "200-300 g/plant/year",
      "Potassium": "600-800 g/plant/year"
    }
  },
  "Guava": {
    waterRequirement: "1000-1200mm per season",
    growingPeriod: "2-3 years to bear fruit",
    expectedYield: "20-25 tonnes/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "23-28°C",
    bestPractices: [
      "Proper spacing",
      "Regular pruning",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Wilt",
      "Anthracnose",
      "Fruit Canker",
      "Leaf Spot"
    ],
    marketValue: "Medium to High",
    seasons: ["Throughout the year"],
    fertilizers: {
      "Nitrogen": "600-800 g/plant/year",
      "Phosphorus": "200-300 g/plant/year",
      "Potassium": "600-800 g/plant/year"
    }
  },
  "Cardamom": {
    waterRequirement: "1500-3000mm per season",
    growingPeriod: "2-3 years to bear fruit",
    expectedYield: "100-150 kg/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Forest Soil"],
    idealTemperature: "10-35°C",
    bestPractices: [
      "Proper spacing",
      "Shade management",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Capsule Rot",
      "Leaf Blight",
      "Rhizome Rot",
      "Nematode Infestation"
    ],
    marketValue: "High",
    seasons: ["Throughout the year"],
    fertilizers: {
      "Nitrogen": "75-100 kg/ha",
      "Phosphorus": "50-75 kg/ha",
      "Potassium": "100-150 kg/ha"
    }
  },
  "Black Pepper": {
    waterRequirement: "2000-3000mm per season",
    growingPeriod: "3-4 years to bear fruit",
    expectedYield: "500-1000 kg/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Clay Loam"],
    idealTemperature: "10-40°C",
    bestPractices: [
      "Proper spacing",
      "Support system",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Foot Rot",
      "Pollu Disease",
      "Leaf Blight",
      "Spike Shedding"
    ],
    marketValue: "High",
    seasons: ["Throughout the year"],
    fertilizers: {
      "Nitrogen": "100-150 kg/ha",
      "Phosphorus": "50-75 kg/ha",
      "Potassium": "150-200 kg/ha"
    }
  },
  "Coriander": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "10-15 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Powdery Mildew",
      "Stem Gall",
      "Wilt",
      "Leaf Spot"
    ],
    marketValue: "Medium",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-30 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Cumin": {
    waterRequirement: "300-400mm per season",
    growingPeriod: "120-150 days",
    expectedYield: "5-7 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-30°C",
    bestPractices: [
      "Proper seed rate",
      "Timely sowing",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Wilt",
      "Powdery Mildew",
      "Alternaria Blight",
      "Fusarium Wilt"
    ],
    marketValue: "Medium to High",
    seasons: ["Rabi"],
    fertilizers: {
      "Nitrogen": "20-30 kg/ha",
      "Phosphorus": "20-30 kg/ha",
      "Potassium": "20-30 kg/ha"
    }
  },
  "Sweet Potato": {
    waterRequirement: "600-800mm per season",
    growingPeriod: "90-120 days",
    expectedYield: "200-250 quintals/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "20-30°C",
    bestPractices: [
      "Proper spacing",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Spot",
      "Stem Rot",
      "Root Rot",
      "Nematode Infestation"
    ],
    marketValue: "Medium",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "50-60 kg/ha",
      "Phosphorus": "40-50 kg/ha",
      "Potassium": "60-80 kg/ha"
    }
  },
  "Elephant Foot Yam": {
    waterRequirement: "1000-1500mm per season",
    growingPeriod: "8-10 months",
    expectedYield: "20-25 tonnes/hectare",
    soilTypes: ["Well-drained Loamy Soil", "Sandy Loam"],
    idealTemperature: "25-35°C",
    bestPractices: [
      "Proper spacing",
      "Timely planting",
      "Weed control",
      "Balanced fertilization",
      "Pest management",
      "Timely harvesting"
    ],
    diseases: [
      "Leaf Blight",
      "Tuber Rot",
      "Nematode Infestation",
      "Wilt"
    ],
    marketValue: "Medium to High",
    seasons: ["Kharif"],
    fertilizers: {
      "Nitrogen": "100-120 kg/ha",
      "Phosphorus": "50-60 kg/ha",
      "Potassium": "100-120 kg/ha"
    }
  }
};

// Add styles object before the CropInformation function
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#166534',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#4b5563',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto 40px',
    border: '1px solid rgba(22, 101, 52, 0.1)',
  },
  formGroup: {
    marginBottom: '24px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  },
  select: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    backgroundColor: '#f9fafb',
    color: '#1f2937',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23374151%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px top 50%',
    backgroundSize: '12px auto',
    '&:hover': {
      borderColor: '#16a34a',
      backgroundColor: '#f0fdf4',
    },
    '&:focus': {
      outline: 'none',
      borderColor: '#16a34a',
      boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.1)',
    },
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '14px 24px',
    backgroundColor: '#16a34a',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2)',
    '&:hover': {
      backgroundColor: '#15803d',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px -2px rgba(22, 163, 74, 0.3)',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.3)',
    },
    '&:disabled': {
      backgroundColor: '#d1d5db',
      cursor: 'not-allowed',
      transform: 'none',
    },
  },
  searchIcon: {
    fontSize: '20px',
  },
};

// Move CropDetailsModal outside of CropInformation
const CropDetailsModal = ({ isOpen, onClose, selectedCrop, currentLanguage, translations }) => {
  if (!isOpen || !selectedCrop) return null;

  const t = translations[currentLanguage].cropInformation;
  const details = cropDetails[selectedCrop]; // Get crop details using selectedCrop

  if (!details) return null;

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '1000px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  };

  const economicCardStyle = {
    ...cardStyle,
    backgroundColor: '#e8f5e9',
    gridColumn: '1 / -1'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#34495e',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    fontSize: '16px',
    color: '#555'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#666'
  };

  const getTranslation = (category, text) => {
    if (currentLanguage === 'en') return text;
    
    if (currentLanguage === 'hi' && cropDetailsTranslations?.hi?.[category]?.[text]) {
      return cropDetailsTranslations.hi[category][text];
    }
    return text;
  };

  const getLabel = (key) => {
    const labels = {
      en: {
        waterRequirement: "Water Requirement",
        temperature: "Temperature",
        soilTypes: "Soil Types",
        growingPeriod: "Growing Period",
        season: "Season",
        expectedYield: "Expected Yield",
        marketValue: "Market Value",
        investment: {
          seeds: "Seeds",
          fertilizers: "Fertilizers",
          pesticides: "Pesticides",
          irrigation: "Irrigation",
          labor: "Labor"
        },
        returns: {
          expectedYield: "Expected Yield",
          marketRate: "Market Rate",
          grossReturns: "Gross Returns",
          netProfit: "Net Profit",
          profitMargin: "Profit Margin"
        }
      },
      hi: {
        waterRequirement: "पानी की आवश्यकता",
        temperature: "तापमान",
        soilTypes: "मिट्टी के प्रकार",
        growingPeriod: "उगाने की अवधि",
        season: "मौसम",
        expectedYield: "अपेक्षित उपज",
        marketValue: "बाजार मूल्य",
        investment: {
          seeds: "बीज",
          fertilizers: "उर्वरक",
          pesticides: "कीटनाशक",
          irrigation: "सिंचाई",
          labor: "श्रमिक"
        },
        returns: {
          expectedYield: "अपेक्षित उपज",
          marketRate: "बाजार दर",
          grossReturns: "सकल लाभ",
          netProfit: "शुद्ध लाभ",
          profitMargin: "लाभ मार्जिन"
        }
      }
    };

    return labels[currentLanguage][key] || key;
  };

  const getSectionTitle = (key) => {
    const titles = {
      en: {
        cropDetails: "Crop Details",
        growingRequirements: "Growing Requirements",
        bestPractices: "Best Practices",
        keyInformation: "Key Information",
        diseaseManagement: "Disease Management",
        economicInformation: "Economic Information",
        investmentDetails: "Investment Details",
        returnsAndProfit: "Returns & Profit"
      },
      hi: {
        cropDetails: "फसल विवरण",
        growingRequirements: "उगाने की आवश्यकताएं",
        bestPractices: "सर्वोत्तम प्रथाएं",
        keyInformation: "प्रमुख जानकारी",
        diseaseManagement: "रोग प्रबंधन",
        economicInformation: "आर्थिक जानकारी",
        investmentDetails: "निवेश विवरण",
        returnsAndProfit: "लाभ और वापसी"
      }
    };

    return titles[currentLanguage][key] || key;
  };

  // Economic information with translations
  const economicInfo = {
    investment: {
      seeds: currentLanguage === 'hi' ? "₹2,000-3,000 प्रति एकड़" : "₹2,000-3,000 per acre",
      fertilizers: currentLanguage === 'hi' ? "₹4,000-6,000 प्रति एकड़" : "₹4,000-6,000 per acre",
      pesticides: currentLanguage === 'hi' ? "₹2,000-4,000 प्रति एकड़" : "₹2,000-4,000 per acre",
      irrigation: currentLanguage === 'hi' ? "₹3,000-5,000 प्रति एकड़" : "₹3,000-5,000 per acre",
      labor: currentLanguage === 'hi' ? "₹8,000-12,000 प्रति एकड़" : "₹8,000-12,000 per acre"
    },
    returns: {
      expectedYield: getTranslation('expectedYield', details.expectedYield),
      marketRate: currentLanguage === 'hi' ? "₹2,000-3,000 प्रति क्विंटल" : "₹2,000-3,000 per quintal",
      grossReturns: currentLanguage === 'hi' ? "₹40,000-60,000 प्रति एकड़" : "₹40,000-60,000 per acre",
      netProfit: currentLanguage === 'hi' ? "₹20,000-30,000 प्रति एकड़" : "₹20,000-30,000 per acre",
      profitMargin: currentLanguage === 'hi' ? "40-50% लाभ" : "40-50% profit"
    }
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        <h2 style={titleStyle}>{getSectionTitle('cropDetails')}</h2>
        
        <div style={gridStyle}>
          {/* Growing Requirements */}
          <div style={cardStyle}>
            <h3 style={sectionTitleStyle}>
              <FaWater />
              {getSectionTitle('growingRequirements')}
            </h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong>{getLabel('waterRequirement')}:</strong><br />
                {getTranslation('waterRequirements', details.waterRequirement)}
              </li>
              <li style={listItemStyle}>
                <strong>{getLabel('temperature')}:</strong><br />
                {getTranslation('temperature', details.idealTemperature)}
              </li>
              <li style={listItemStyle}>
                <strong>{getLabel('soilTypes')}:</strong><br />
                {details.soilTypes.join(', ')}
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div style={cardStyle}>
            <h3 style={sectionTitleStyle}>
              <FaSeedling />
              {getSectionTitle('bestPractices')}
            </h3>
            <ul style={listStyle}>
              {details.bestPractices.map((practice, index) => (
                <li key={index} style={listItemStyle}>
                  {getTranslation('bestPractices', practice)}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Information */}
          <div style={cardStyle}>
            <h3 style={sectionTitleStyle}>
              <FaClock />
              {getSectionTitle('keyInformation')}
            </h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <strong>{getLabel('growingPeriod')}:</strong><br />
                {getTranslation('growingPeriod', details.growingPeriod)}
              </li>
              <li style={listItemStyle}>
                <strong>{getLabel('season')}:</strong><br />
                {details.seasons.map(season => getTranslation('seasons', season)).join(', ')}
              </li>
              <li style={listItemStyle}>
                <strong>{getLabel('expectedYield')}:</strong><br />
                {getTranslation('expectedYield', details.expectedYield)}
              </li>
              <li style={listItemStyle}>
                <strong>{getLabel('marketValue')}:</strong><br />
                {getTranslation('marketValue', details.marketValue)}
              </li>
            </ul>
          </div>

          {/* Disease Management */}
          <div style={cardStyle}>
            <h3 style={sectionTitleStyle}>
              <FaBug />
              {getSectionTitle('diseaseManagement')}
            </h3>
            <ul style={listStyle}>
              {details.diseases.map((disease, index) => (
                <li key={index} style={listItemStyle}>
                  {getTranslation('diseases', disease)}
                </li>
              ))}
            </ul>
          </div>

          {/* Economic Information */}
          <div style={economicCardStyle}>
            <h3 style={sectionTitleStyle}>
              <FaMoneyBillWave />
              {getSectionTitle('economicInformation')}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Investment Details */}
              <div>
                <h4 style={{ ...sectionTitleStyle, fontSize: '16px' }}>
                  <FaRupeeSign />
                  {getSectionTitle('investmentDetails')}
                </h4>
                <ul style={listStyle}>
                  {Object.entries(economicInfo.investment).map(([key, value]) => (
                    <li key={key} style={listItemStyle}>
                      <strong>{getLabel(`investment.${key}`)}:</strong><br />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Returns and Profit */}
              <div>
                <h4 style={{ ...sectionTitleStyle, fontSize: '16px' }}>
                  <FaChartLine />
                  {getSectionTitle('returnsAndProfit')}
                </h4>
                <ul style={listStyle}>
                  {Object.entries(economicInfo.returns).map(([key, value]) => (
                    <li key={key} style={listItemStyle}>
                      <strong>{getLabel(`returns.${key}`)}:</strong><br />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CropInformation() {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].cropInformation;

  // Function to get translated crop name
  const getTranslatedCropName = (cropName) => {
    return t.crops[cropName] || cropName;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCrop && cropDetails[selectedCrop]) {
      setShowDetails(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.formGroup}>
          <label htmlFor="cropSelect" style={styles.label}>
            {t.selectCrop}
          </label>
          <select
            id="cropSelect"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            style={styles.select}
            required
          >
            <option value="">{t.selectPlaceholder}</option>
            {crops.map((crop) => (
              <option key={crop} value={crop}>
                {getTranslatedCropName(crop)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          style={styles.button}
          disabled={!selectedCrop}
        >
          <FaSearch style={styles.searchIcon} />
          {t.viewDetails}
        </button>
      </form>

      <CropDetailsModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        selectedCrop={selectedCrop}
        currentLanguage={currentLanguage}
        translations={translations}
      />
    </div>
  );
}

export default CropInformation;