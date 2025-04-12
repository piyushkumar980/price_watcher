import { API_CONFIG } from '../config/api';
import axios from 'axios';

// Axios instance with retry logic
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Retry logic for API calls
const retryRequest = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    console.error('API call failed:', error.response?.data || error.message);
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retryRequest(fn, retries - 1, delay * 2);
  }
};

// Comprehensive crop database with real combinations
export const CROP_RECOMMENDATIONS = {
    "Maharashtra": {
      "Black Soil": {
        "Tropical Dry": {
          "January": [
            {
              name: "Chickpea",
              waterRequirement: "400-500mm per season",
              growingPeriod: "100-120 days",
              expectedYield: "15-20 quintals/hectare",
              bestPractices: [
                "Maintain soil moisture during flowering",
                "Apply phosphorus-rich fertilizers",
                "Regular weeding in initial stages",
                "Monitor for pod borer"
              ]
            },
            {
              name: "Wheat",
              waterRequirement: "450-650mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "35-40 quintals/hectare",
              bestPractices: [
                "Timely sowing in November-December",
                "Proper irrigation scheduling",
                "Nitrogen application in splits",
                "Regular monitoring for rust disease"
              ]
            }
          ],
          "June": [
            {
              name: "Cotton",
              waterRequirement: "700-1300mm per season",
              growingPeriod: "150-180 days",
              expectedYield: "20-25 quintals/hectare",
              bestPractices: [
                "Proper spacing between plants",
                "Integrated pest management",
                "Regular monitoring for bollworms",
                "Timely picking of cotton bolls"
              ]
            },
            {
              name: "Soybean",
              waterRequirement: "450-700mm per season",
              growingPeriod: "90-120 days",
              expectedYield: "25-30 quintals/hectare",
              bestPractices: [
                "Seed treatment before sowing",
                "Maintain proper drainage",
                "Weed management in early stages",
                "Monitor for yellow mosaic virus"
              ]
            }
          ],
          "October": [
            {
              name: "Jowar",
              waterRequirement: "350-450mm per season",
              growingPeriod: "100-120 days",
              expectedYield: "20-25 quintals/hectare",
              bestPractices: [
                "Proper seed treatment",
                "Timely sowing",
                "Bird control measures",
                "Harvest at physiological maturity"
              ]
            },
            {
              name: "Safflower",
              waterRequirement: "300-400mm per season",
              growingPeriod: "120-130 days",
              expectedYield: "10-12 quintals/hectare",
              bestPractices: [
                "Deep ploughing",
                "Proper spacing",
                "Weed management",
                "Pest monitoring"
              ]
            }
          ]
        },
        "Semi-Arid": {
          "July": [
            {
              name: "Pearl Millet",
              waterRequirement: "400-600mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "22-25 quintals/hectare",
              bestPractices: [
                "Line sowing",
                "Proper spacing",
                "Timely weeding",
                "Disease monitoring"
              ]
            },
            {
              name: "Pigeon Pea",
              waterRequirement: "600-700mm per season",
              growingPeriod: "150-180 days",
              expectedYield: "15-18 quintals/hectare",
              bestPractices: [
                "Deep ploughing",
                "Seed treatment",
                "Pest monitoring",
                "Proper storage"
              ]
            }
          ],
          "November": [
            {
              name: "Mustard",
              waterRequirement: "250-400mm per season",
              growingPeriod: "110-120 days",
              expectedYield: "12-15 quintals/hectare",
              bestPractices: [
                "Proper seed rate",
                "Timely irrigation",
                "Pest management",
                "Harvesting at right stage"
              ]
            },
            {
              name: "Lentil",
              waterRequirement: "300-350mm per season",
              growingPeriod: "120-130 days",
              expectedYield: "10-12 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Line sowing",
                "Weed management",
                "Proper harvesting"
              ]
            }
          ]
        }
      },
      "Red Soil": {
        "Subtropical Humid": {
          "July": [
            {
              name: "Rice",
              waterRequirement: "1200-1600mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "40-45 quintals/hectare",
              bestPractices: [
                "Proper leveling of field",
                "Timely transplanting",
                "Regular monitoring of water level",
                "Integrated pest management"
              ]
            },
            {
              name: "Groundnut",
              waterRequirement: "500-700mm per season",
              growingPeriod: "100-120 days",
              expectedYield: "15-20 quintals/hectare",
              bestPractices: [
                "Seed treatment with fungicides",
                "Maintain soil moisture",
                "Gypsum application at flowering",
                "Timely harvesting"
              ]
            }
          ],
          "February": [
            {
              name: "Summer Moong",
              waterRequirement: "250-300mm per season",
              growingPeriod: "65-70 days",
              expectedYield: "8-10 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Proper spacing",
                "Light irrigation",
                "Timely harvesting"
              ]
            },
            {
              name: "Watermelon",
              waterRequirement: "400-500mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "250-300 quintals/hectare",
              bestPractices: [
                "Proper spacing",
                "Mulching",
                "Regular irrigation",
                "Pest control"
              ]
            }
          ]
        },
        "Tropical Wet": {
          "June": [
            {
              name: "Turmeric",
              waterRequirement: "1500-2000mm per season",
              growingPeriod: "240-270 days",
              expectedYield: "200-250 quintals/hectare",
              bestPractices: [
                "Raised bed planting",
                "Proper spacing",
                "Mulching",
                "Disease management"
              ]
            },
            {
              name: "Ginger",
              waterRequirement: "1500-2000mm per season",
              growingPeriod: "210-240 days",
              expectedYield: "150-200 quintals/hectare",
              bestPractices: [
                "Raised bed preparation",
                "Seed treatment",
                "Mulching",
                "Disease management"
              ]
            }
          ],
          "September": [
            {
              name: "Sweet Potato",
              waterRequirement: "500-600mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "200-250 quintals/hectare",
              bestPractices: [
                "Ridge planting",
                "Proper spacing",
                "Weed management",
                "Timely harvesting"
              ]
            },
            {
              name: "Elephant Foot Yam",
              waterRequirement: "1000-1500mm per season",
              growingPeriod: "240-270 days",
              expectedYield: "350-400 quintals/hectare",
              bestPractices: [
                "Pit planting",
                "Organic manure application",
                "Mulching",
                "Disease management"
              ]
            }
          ]
        }
      },
      "Alluvial Soil": {
        "Subtropical Humid": {
          "March": [
            {
              name: "Jute",
              waterRequirement: "1500-2000mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "25-30 quintals/hectare",
              bestPractices: [
                "Line sowing",
                "Proper spacing",
                "Regular irrigation",
                "Timely harvesting"
              ]
            },
            {
              name: "Maize",
              waterRequirement: "500-800mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "45-50 quintals/hectare",
              bestPractices: [
                "Proper seed rate",
                "Timely weeding",
                "Nitrogen management",
                "Disease monitoring"
              ]
            }
          ],
          "August": [
            {
              name: "Potato",
              waterRequirement: "500-700mm per season",
              growingPeriod: "90-120 days",
              expectedYield: "200-250 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Ridge planting",
                "Earthing up",
                "Disease management"
              ]
            },
            {
              name: "Cauliflower",
              waterRequirement: "400-500mm per season",
              growingPeriod: "90-120 days",
              expectedYield: "150-200 quintals/hectare",
              bestPractices: [
                "Nursery management",
                "Proper spacing",
                "Regular irrigation",
                "Pest control"
              ]
            }
          ]
        }
      }
    },
    "Karnataka": {
      "Red Soil": {
        "Tropical Wet": {
          "June": [
            {
              name: "Paddy",
              waterRequirement: "1200-1600mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "45-50 quintals/hectare",
              bestPractices: [
                "Proper nursery management",
                "Timely transplanting",
                "Regular weeding",
                "Proper water management"
              ]
            },
            {
              name: "Sugarcane",
              waterRequirement: "2000-2500mm per season",
              growingPeriod: "360-420 days",
              expectedYield: "800-900 quintals/hectare",
              bestPractices: [
                "Proper field preparation",
                "Use of disease-free setts",
                "Timely earthing up",
                "Regular irrigation"
              ]
            }
          ],
          "October": [
            {
              name: "Ragi",
              waterRequirement: "350-500mm per season",
              growingPeriod: "90-120 days",
              expectedYield: "20-25 quintals/hectare",
              bestPractices: [
                "Line sowing for better yield",
                "Proper spacing",
                "Timely weeding",
                "Balanced fertilizer application"
              ]
            },
            {
              name: "Green Gram",
              waterRequirement: "300-450mm per season",
              growingPeriod: "65-70 days",
              expectedYield: "8-10 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Proper drainage",
                "Pest monitoring",
                "Timely harvesting"
              ]
            }
          ]
        },
        "Black Soil": {
          "Semi-Arid": {
            "July": [
              {
                name: "Jowar",
                waterRequirement: "400-450mm per season",
                growingPeriod: "100-110 days",
                expectedYield: "25-30 quintals/hectare",
                bestPractices: [
                  "Proper seed treatment",
                  "Timely sowing",
                  "Bird control measures",
                  "Harvest at physiological maturity"
                ]
              },
              {
                name: "Sunflower",
                waterRequirement: "500-750mm per season",
                growingPeriod: "90-100 days",
                expectedYield: "15-20 quintals/hectare",
                bestPractices: [
                  "Proper spacing",
                  "Boron application",
                  "Bird control",
                  "Timely harvesting"
                ]
              },
              {
                name: "Pigeon Pea",
                waterRequirement: "600-700mm per season",
                growingPeriod: "150-180 days",
                expectedYield: "15-18 quintals/hectare",
                bestPractices: [
                  "Deep ploughing",
                  "Seed treatment",
                  "Pest monitoring",
                  "Proper storage"
                ]
              }
            ]
          }
        }
      }
    },
    "Bihar": {
      "Alluvial Soil": {
        "Subtropical Humid": {
          "January": [
            {
              name: "Wheat",
              waterRequirement: "450-650mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "35-40 quintals/hectare",
              bestPractices: [
                "Timely sowing in November-December",
                "Proper irrigation scheduling",
                "Nitrogen application in splits",
                "Regular monitoring for rust disease"
              ]
            },
            {
              name: "Mustard",
              waterRequirement: "250-400mm per season",
              growingPeriod: "110-120 days",
              expectedYield: "12-15 quintals/hectare",
              bestPractices: [
                "Proper seed rate",
                "Timely irrigation",
                "Pest management",
                "Harvesting at right stage"
              ]
            }
          ],
          "June": [
            {
              name: "Rice",
              waterRequirement: "1200-1600mm per season",
              growingPeriod: "120-150 days",
              expectedYield: "40-45 quintals/hectare",
              bestPractices: [
                "Proper leveling of field",
                "Timely transplanting",
                "Regular monitoring of water level",
                "Integrated pest management"
              ]
            },
            {
              name: "Maize",
              waterRequirement: "500-800mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "45-50 quintals/hectare",
              bestPractices: [
                "Proper seed rate",
                "Timely weeding",
                "Nitrogen management",
                "Disease monitoring"
              ]
            }
          ],
          "October": [
            {
              name: "Potato",
              waterRequirement: "500-700mm per season",
              growingPeriod: "90-120 days",
              expectedYield: "200-250 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Ridge planting",
                "Earthing up",
                "Disease management"
              ]
            },
            {
              name: "Lentil",
              waterRequirement: "300-350mm per season",
              growingPeriod: "120-130 days",
              expectedYield: "10-12 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Line sowing",
                "Weed management",
                "Proper harvesting"
              ]
            }
          ]
        },
        "Tropical Wet": {
          "July": [
            {
              name: "Sugarcane",
              waterRequirement: "2000-2500mm per season",
              growingPeriod: "360-420 days",
              expectedYield: "800-900 quintals/hectare",
              bestPractices: [
                "Proper field preparation",
                "Use of disease-free setts",
                "Timely earthing up",
                "Regular irrigation"
              ]
            },
            {
              name: "Turmeric",
              waterRequirement: "1500-2000mm per season",
              growingPeriod: "240-270 days",
              expectedYield: "200-250 quintals/hectare",
              bestPractices: [
                "Raised bed planting",
                "Proper spacing",
                "Mulching",
                "Disease management"
              ]
            }
          ],
          "November": [
            {
              name: "Chickpea",
              waterRequirement: "400-500mm per season",
              growingPeriod: "100-120 days",
              expectedYield: "15-20 quintals/hectare",
              bestPractices: [
                "Maintain soil moisture during flowering",
                "Apply phosphorus-rich fertilizers",
                "Regular weeding in initial stages",
                "Monitor for pod borer"
              ]
            },
            {
              name: "Barley",
              waterRequirement: "300-400mm per season",
              growingPeriod: "110-120 days",
              expectedYield: "20-25 quintals/hectare",
              bestPractices: [
                "Timely sowing",
                "Proper irrigation",
                "Nitrogen management",
                "Disease monitoring"
              ]
            }
          ]
        }
      },
      "Red Soil": {
        "Subtropical Humid": {
          "February": [
            {
              name: "Summer Moong",
              waterRequirement: "250-300mm per season",
              growingPeriod: "65-70 days",
              expectedYield: "8-10 quintals/hectare",
              bestPractices: [
                "Seed treatment",
                "Proper spacing",
                "Light irrigation",
                "Timely harvesting"
              ]
            },
            {
              name: "Watermelon",
              waterRequirement: "400-500mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "250-300 quintals/hectare",
              bestPractices: [
                "Proper spacing",
                "Mulching",
                "Regular irrigation",
                "Pest control"
              ]
            }
          ],
          "August": [
            {
              name: "Groundnut",
              waterRequirement: "500-700mm per season",
              growingPeriod: "100-120 days",
              expectedYield: "15-20 quintals/hectare",
              bestPractices: [
                "Seed treatment with fungicides",
                "Maintain soil moisture",
                "Gypsum application at flowering",
                "Timely harvesting"
              ]
            },
            {
              name: "Sesame",
              waterRequirement: "300-400mm per season",
              growingPeriod: "90-100 days",
              expectedYield: "5-7 quintals/hectare",
              bestPractices: [
                "Proper spacing",
                "Light irrigation",
                "Weed management",
                "Timely harvesting"
              ]
            }
          ]
        }
      }
    }
  };



// Function to get crop recommendations
export const getAICropRecommendations = async (data) => {
  try {
    const response = await apiClient.post(API_CONFIG.ENDPOINTS.PREDICT, data);
    return {
      success: true,
      predictions: response.data.predictions
    };
  } catch (error) {
    console.error('Failed to get AI recommendations:', error);
    return {
      success: false,
      error: error.message || 'Failed to get crop recommendations'
    };
  }
};

// Function to get price history
export const getPriceHistory = async (crop) => {
  const basePrice = {
    "Rice": 2000,
    "Wheat": 2200,
    "Cotton": 6000,
    "Sugarcane": 350,
    "Groundnut": 5500,
    "Soybean": 4000,
    "Chickpea": 5000,
    "Jowar": 2800,
    "Sunflower": 6200,
    "Ragi": 3300,
    "Green Gram": 7500,
    "Pigeon Pea": 6600,
    "Paddy": 1900,
    "Pearl Millet": 2400,
    "Mustard": 5000,
    "Lentil": 5500,
    "Watermelon": 2000,
    "Turmeric": 7500,
    "Ginger": 8000,
    "Sweet Potato": 2000,
    "Elephant Foot Yam": 3000,
    "Jute": 4500,
    "Maize": 2000,
    "Potato": 1800,
    "Cauliflower": 2500,
    "Safflower": 4800
  }[crop] || 3000;

  const years = Array.from({length: 10}, (_, i) => 2014 + i);
  const prices = years.map((_, index) => {
    const trend = index * (basePrice * 0.05);
    const variation = (Math.random() - 0.5) * basePrice * 0.1;
    return Math.round(basePrice + trend + variation);
  });

  return {
    years,
    prices
  };
};

export const getCurrentMarketPrice = async (crop) => {
  try {
    const response = await retryRequest(() => 
      apiClient.get(API_CONFIG.ENDPOINTS.MARKET_PRICES, {
        params: {
          'api-key': API_CONFIG.AGRIMARKET_API_KEY,
          format: 'json',
          limit: 10,
          offset: 0,
          filters: JSON.stringify([{
            field: 'commodity',
            operator: 'eq',
            value: crop
          }])
        }
      })
    );

    if (!response.data?.records) {
      console.error('API Response:', response.data);
      throw new Error('Invalid response from Market Prices API');
    }

    const records = response.data.records;
    if (records.length === 0) {
      throw new Error(`No current price data available for ${crop}`);
    }

    return processCurrentPrices(records);
  } catch (error) {
    console.error('Error getting current market price:', error);
    if (error.response?.status === 403) {
      throw new Error('Invalid API key for data.gov.in. Please check your configuration.');
    }
    throw new Error(error.message || 'Failed to get current market prices');
  }
};

// Helper function to process historical data
const processHistoricalData = (records) => {
  try {
    // Sort records by date
    const sortedRecords = records.sort((a, b) => 
      new Date(a.arrival_date) - new Date(b.arrival_date)
    );

    // Group by year and calculate average prices
    const yearlyData = sortedRecords.reduce((acc, record) => {
      const year = new Date(record.arrival_date).getFullYear();
      if (!acc[year]) {
        acc[year] = {
          sum: 0,
          count: 0
        };
      }
      const price = parseFloat(record.modal_price);
      if (!isNaN(price) && price > 0) {
        acc[year].sum += price;
        acc[year].count += 1;
      }
      return acc;
    }, {});

    // Calculate yearly averages
    const years = Object.keys(yearlyData).sort();
    const prices = years.map(year => 
      yearlyData[year].count > 0 ? yearlyData[year].sum / yearlyData[year].count : 0
    );

    return { years, prices };
  } catch (error) {
    console.error('Error processing historical data:', error);
    throw new Error('Failed to process historical price data');
  }
};

// Helper function to process current prices
const processCurrentPrices = (records) => {
  try {
    // Filter out invalid prices and calculate average
    const validPrices = records
      .map(r => parseFloat(r.modal_price))
      .filter(price => !isNaN(price) && price > 0);

    if (validPrices.length === 0) {
      throw new Error('No valid price data available');
    }

    const currentPrice = validPrices.reduce((sum, price) => sum + price, 0) / validPrices.length;

    // Use enhanced prediction for future price
    const predictedPrice = predictPrice(records);

    return {
      currentPrice,
      predictedPrice,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error processing current prices:', error);
    throw new Error('Failed to process current price data');
  }
};

// Helper function to predict future price using enhanced linear regression
const predictPrice = (records) => {
  try {
    const validPrices = records
      .map(r => ({
        price: parseFloat(r.modal_price),
        date: new Date(r.arrival_date).getTime()
      }))
      .filter(item => !isNaN(item.price) && item.price > 0 && !isNaN(item.date));

    if (validPrices.length < 2) {
      throw new Error('Insufficient data for price prediction');
    }

    // Normalize dates to days from first record
    const firstDate = Math.min(...validPrices.map(item => item.date));
    const xValues = validPrices.map(item => (item.date - firstDate) / (1000 * 60 * 60 * 24));
    const prices = validPrices.map(item => item.price);

    // Calculate linear regression coefficients
    const n = prices.length;
    const sumX = xValues.reduce((a, b) => a + b, 0);
    const sumY = prices.reduce((a, b) => a + b, 0);
    const sumXY = xValues.reduce((acc, x, i) => acc + x * prices[i], 0);
    const sumXX = xValues.reduce((acc, x) => acc + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Predict price for 30 days in the future
    const futureDays = Math.max(...xValues) + 30;
    return intercept + slope * futureDays;
  } catch (error) {
    console.error('Error predicting price:', error);
    // Return the latest price as fallback
    return records[0]?.modal_price || 0;
  }
}; 