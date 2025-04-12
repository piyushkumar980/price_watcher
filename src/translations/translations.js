export const translations = {
  en: {
    // Home page translations
    home: {
      hero: {
        slide1: {
          title: "FARM SMARTER",
          subtitle: "Use data-driven insights to optimize your farming operations and increase yields"
        },
        slide2: {
          title: "GROW SMARTER",
          subtitle: "Get detailed insights about crops, including soil requirements, growing periods, and expert cultivation tips for better yields"
        },
        slide3: {
          title: "MAXIMIZE PROFITS",
          subtitle: "Get real-time market prices and connect directly with premium buyers for better returns"
        }
      },
      features: {
        title: "Why Choose PriceWatcher?",
        smartAnalytics: {
          title: "Smart Price Analytics",
          description: "Access real-time market prices, historical trends, and predictive analytics to make informed decisions about when to sell your crops for maximum profit."
        },
        cropIntelligence: {
          title: "Crop Intelligence",
          description: "Get personalized crop recommendations based on your soil type, local climate patterns, and market demand to optimize your farming strategy."
        },
        marketAccess: {
          title: "Direct Market Access",
          description: "Connect directly with pre-verified buyers, eliminate middlemen, and secure better prices for your agricultural produce through our trusted network."
        }
      },
      vision: {
        title: "Our Vision",
        description: "We are committed to revolutionizing agriculture by providing farmers with data-driven insights and smart solutions. Our mission is to help you make informed decisions about crop selection based on your local conditions - soil type, climate, and seasonal patterns. We understand that every region is unique, which is why we provide personalized recommendations to maximize your yields and profits.",
        cards: {
          recommendations: {
            title: "Smart Recommendations",
            description: "Our advanced algorithms analyze your local conditions to suggest the most profitable crops for your region, helping you make data-driven farming decisions."
          },
          information: {
            title: "Comprehensive Information",
            description: "Access detailed information about crops, including growing guides, disease management, and best practices to ensure optimal yields."
          },
          connectivity: {
            title: "Market Connectivity",
            description: "Connect directly with buyers in your area, ensuring you get the best prices for your produce and maximizing your farming profits."
          }
        }
      },
      cta: {
        title: "Ready to Transform Your Farming Business?",
        description: "Join thousands of successful farmers who are already using PriceWatcher to increase their profits and make smarter agricultural decisions.",
        button: "Get Started Now"
      }
    },
    // Crop Information page translations
    cropInformation: {
      title: "Find Detailed Crop Information",
      subtitle: "Select a crop to view detailed information about its cultivation, requirements, and management practices",
      selectCrop: "Select a Crop",
      selectPlaceholder: "Choose a crop...",
      viewDetails: "View Details",
      crops: {
        // Cereals
        "Rice": "Rice",
        "Wheat": "Wheat",
        "Maize": "Maize",
        "Jowar": "Jowar",
        "Pearl Millet": "Pearl Millet",
        "Ragi": "Ragi",
        "Barley": "Barley",
        "Sorghum": "Sorghum",
        // Pulses
        "Chickpea": "Chickpea",
        "Pigeon Pea": "Pigeon Pea",
        "Green Gram": "Green Gram",
        "Black Gram": "Black Gram",
        "Lentil": "Lentil",
        "Cowpea": "Cowpea",
        "Horse Gram": "Horse Gram",
        // Oilseeds
        "Soybean": "Soybean",
        "Groundnut": "Groundnut",
        "Mustard": "Mustard",
        "Sunflower": "Sunflower",
        "Safflower": "Safflower",
        "Sesame": "Sesame",
        "Castor": "Castor",
        // Cash Crops
        "Cotton": "Cotton",
        "Sugarcane": "Sugarcane",
        "Jute": "Jute",
        "Tobacco": "Tobacco",
        // Vegetables
        "Potato": "Potato",
        "Tomato": "Tomato",
        "Onion": "Onion",
        "Cauliflower": "Cauliflower",
        "Cabbage": "Cabbage",
        "Brinjal": "Brinjal",
        "Okra": "Okra",
        "Peas": "Peas",
        "Carrot": "Carrot",
        // Fruits
        "Mango": "Mango",
        "Banana": "Banana",
        "Papaya": "Papaya",
        "Watermelon": "Watermelon",
        "Pomegranate": "Pomegranate",
        "Guava": "Guava",
        // Spices
        "Turmeric": "Turmeric",
        "Ginger": "Ginger",
        "Cardamom": "Cardamom",
        "Black Pepper": "Black Pepper",
        "Coriander": "Coriander",
        "Cumin": "Cumin",
        // Others
        "Sweet Potato": "Sweet Potato",
        "Elephant Foot Yam": "Elephant Foot Yam"
      }
    },
    // Crop Recommendation page translations
    cropRecommendation: {
      title: "Get Crop Recommendations",
      subtitle: "Enter your farm details to get personalized crop recommendations",
      location: "Location",
      soilType: "Soil Type",
      selectSoilType: "Select soil type",
      soilTypes: {
        "Alluvial Soil": "Alluvial Soil",
        "Black Soil": "Black Soil",
        "Red Soil": "Red Soil",
        "Laterite Soil": "Laterite Soil",
        "Desert Soil": "Desert Soil",
        "Mountain Soil": "Mountain Soil",
        "Saline Soil": "Saline Soil",
        "Peaty Soil": "Peaty Soil",
        "Forest Soil": "Forest Soil",
        "Sandy Soil": "Sandy Soil",
        "Clay Soil": "Clay Soil",
        "Loamy Soil": "Loamy Soil"
      },
      analyze: "Analyze",
      analyzing: "Analyzing...",
      results: {
        title: "Recommended Crops",
        probability: "Suitability Score",
        expectedYield: "Expected Yield",
        marketPrice: "Market Price",
        marketTrends: {
          title: "Market Price Trends",
          subtitle: "Historical price trends and future predictions",
          pricePerKg: "Price (₹/kg)",
          year: "Year",
          currentPrice: "Current Price",
          predictedPrice: "Predicted Price",
          profitPotential: "Profit Potential",
          high: "High",
          medium: "Medium",
          low: "Low",
          viewTrends: "View Price Trends",
          loading: "Loading market data...",
          error: "Failed to load market data. Please try again."
        }
      }
    },
    // Sell Crops page translations
    sellCrops: {
      title: "Find Crop Buyers",
      subtitle: "Connect with verified buyers in your area",
      form: {
        title: "Search Buyers",
        subtitle: "Enter your requirements to find suitable buyers",
        location: "Location",
        locationPlaceholder: "Enter city or district",
        crop: "Crop Type",
        cropPlaceholder: "Enter crop name",
        rating: "Minimum Rating",
        stars: "Stars",
        anyRating: "Any Rating",
        minPrice: "Minimum Price (₹/kg)",
        maxPrice: "Maximum Price (₹/kg)",
        minPricePlaceholder: "Enter min price",
        maxPricePlaceholder: "Enter max price",
        submit: "Search Buyers",
        searching: "Searching..."
      },
      results: {
        noBuyers: "No buyers found matching your criteria. Please try different search parameters.",
        interestedCrops: "Interested in",
        priceRange: "Price Range",
        buyersIn: "Buyers in",
        contact: "Contact Information",
        rating: "Rating",
        crops: "Crops Interested In",
        close: "Close"
      },
      modal: {
        title: "Buyer Details",
        contact: "Contact Information",
        crops: "Interested Crops",
        close: "Close"
      }
    },
    informativeContent: {
      title: "Resources & Community",
      resources: {
        title: "Farmer Resources",
        description: "Access market reports, research papers, and valuable agricultural insights to make informed decisions about your farming practices."
      },
      community: {
        title: "Farmer Community",
        description: "Connect with fellow farmers, participate in meetups, and share knowledge to grow together in your farming journey."
      }
    },
    smartFarming: {
      title: "Smart Farming Technologies",
      sections: {
        overview: {
          title: "Overview",
          content: "Smart farming integrates modern technology with traditional agricultural practices to improve efficiency, productivity, and sustainability. This approach uses various digital tools and data-driven solutions to optimize farming operations."
        },
        technologies: {
          title: "Key Technologies",
          content: "Smart farming utilizes various technologies including IoT sensors, drones, GPS systems, and automated machinery. These tools help farmers monitor crop health, soil conditions, and weather patterns in real-time."
        },
        applications: {
          title: "Applications",
          content: "From precision irrigation to automated pest control, smart farming applications help farmers make data-driven decisions. Mobile apps and cloud platforms enable remote monitoring and management of farm operations."
        },
        benefits: {
          title: "Benefits",
          content: "Smart farming leads to increased crop yields, reduced resource waste, and better environmental sustainability. It also helps farmers save time and labor while making more informed decisions."
        }
      }
    },
    cropManagement: {
      title: "Crop Management Guide",
      sections: {
        planting: {
          title: "Planting Techniques",
          content: "Learn about optimal planting methods, seed selection, and timing for different crops. Understand soil preparation, spacing requirements, and best practices for successful germination."
        },
        irrigation: {
          title: "Irrigation Management",
          content: "Discover efficient irrigation techniques, water requirements for different crops, and modern irrigation systems. Learn about scheduling, monitoring, and water conservation methods."
        },
        pestControl: {
          title: "Pest and Disease Control",
          content: "Identify common pests and diseases, understand their life cycles, and learn about integrated pest management strategies. Explore both chemical and organic control methods."
        },
        seasonal: {
          title: "Seasonal Care",
          content: "Get detailed guidance on crop care throughout different seasons. Learn about temperature management, seasonal challenges, and adaptation strategies for changing weather conditions."
        },
        monitoring: {
          title: "Crop Monitoring",
          content: "Understand how to monitor crop health, growth stages, and development. Learn about using technology and traditional methods for effective crop monitoring."
        }
      }
    },
    marketReports: {
      title: "Market Analysis Reports",
      sections: {
        priceAnalysis: {
          title: "Price Analysis",
          content: "Comprehensive analysis of current market prices, historical trends, and future predictions for various agricultural commodities."
        },
        seasonalTrends: {
          title: "Seasonal Trends",
          content: "Detailed reports on seasonal price fluctuations, demand patterns, and market behavior across different agricultural seasons."
        },
        regionalAnalysis: {
          title: "Regional Market Analysis",
          content: "In-depth analysis of market conditions, price variations, and trading patterns across different regions and markets."
        },
        cropSpecific: {
          title: "Crop-Specific Reports",
          content: "Specialized reports focusing on specific crops, including production trends, market demand, and price forecasts."
        }
      }
    },
    researchPapers: {
      title: "Agricultural Research Papers",
      papers: {
        1: {
          title: "Sustainable Farming Practices in Modern Agriculture",
          author: "Dr. Rajesh Kumar",
          abstract: "A comprehensive study on sustainable farming methods and their impact on crop yield and environmental conservation."
        },
        2: {
          title: "Climate Change Adaptation Strategies for Farmers",
          author: "Dr. Priya Sharma",
          abstract: "Research on effective strategies for farmers to adapt to changing climate conditions and maintain productivity."
        },
        3: {
          title: "Smart Irrigation Systems: Efficiency and Implementation",
          author: "Dr. Amit Patel",
          abstract: "Analysis of modern irrigation technologies and their effectiveness in water conservation and crop management."
        },
        4: {
          title: "Organic Farming: Methods and Market Potential",
          author: "Dr. Meera Singh",
          abstract: "Study on organic farming techniques and their economic viability in current market conditions."
        }
      }
    },
    farmerMeetups: {
      title: "Farmer Meetups and Events",
      sections: {
        about: {
          title: "About Our Meetups",
          content:
            "Join our community of farmers for regular meetups where you can share experiences, learn new techniques, and network with fellow farmers.\n\n" +
            "Our farmer meetups are designed to foster collaboration and knowledge sharing among farming communities. These events provide a platform for open dialogue, new ideas, and practical demonstrations led by experts and experienced farmers.\n\n" +
            "Whether you're a smallholder or commercial farmer, our meetups are a space to connect with others, discuss common challenges, and discover innovative approaches to improve productivity and sustainability in agriculture.\n\n" +
            "We host regular farmer meetups across various regions, offering a space for farmers to exchange wisdom, discover government schemes, and stay updated on market trends and agri-tech advancements."
        },
        benefits: {
          title: "Benefits of Participation",
          content:
            "Gain valuable insights, learn from successful farmers, and build a strong network within the farming community.\n\n" +
            "By participating, you gain exposure to the latest farming tools and trends, access government programs, and interact with agri-businesses and service providers to boost your farm’s potential.\n\n" +
            "These meetups empower farmers through peer learning, hands-on training sessions, and the opportunity to raise local farming issues in a collaborative environment.\n\n" +
            "Attendees benefit from expert talks, real-life success stories, live demonstrations, and the chance to collaborate with local and national agricultural organizations."
        },
        upcoming: {
          title: "Upcoming Meetups",
          content:
            "Find information about upcoming farmer meetups, workshops, and networking events in your region.\n\n" +
            "Stay tuned for upcoming events near you! We regularly update our schedule with workshops on organic farming, irrigation techniques, crop diversification, and more.\n\n" +
            "Browse our calendar of events to discover where and when the next meetup will take place. Don't miss out on opportunities to grow your knowledge and your network.\n\n" +
            "Each meetup is carefully curated to address current agricultural challenges and opportunities. Check back often to stay informed about what's happening in your state."
        }
      },
      meetups: {
        1: {
          title: "Smart Farming Workshop",
          location: "Agricultural Research Center",
          date: "15th march 2025",
          time: "10:00 AM - 4:00 PM"
        },
        2: {
          title: "Organic Farming Discussion",
          location: "Community Center",
          date: "22nd may 2025",
          time: "2:00 PM - 6:00 PM"
        },
        3: {
          title: "Market Access Seminar",
          location: "Farmers' Cooperative",
          date: "29th august 2025",
          time: "11:00 AM - 3:00 PM"
        }
      }
    },
    knowledgeSharing: {
      title: "Knowledge Sharing Platform",
      sections: {
        about: {
          title: "About the Platform",
          content: "A dedicated space for farmers to share experiences, ask questions, and learn from each other's successes and challenges."
        },
        guidelines: {
          title: "Community Guidelines",
          content: "Guidelines for respectful and productive discussions, ensuring valuable knowledge sharing within our community."
        },
        discussions: {
          title: "Recent Discussions",
          content: "Browse through ongoing discussions and share your insights with the farming community."
        }
      },
      posts: {
        1: {
          author: "Ramesh Kumar",
          date: "2 days ago",
          content: "Sharing my experience with drip irrigation in wheat farming. The water savings have been remarkable!",
          likes: 24,
          comments: 8
        },
        2: {
          author: "Priya Sharma",
          date: "5 days ago",
          content: "Looking for advice on organic pest control methods for tomato plants. Any suggestions?",
          likes: 15,
          comments: 12
        },
        3: {
          author: "Amit Patel",
          date: "1 week ago",
          content: "Successfully implemented smart farming techniques in my 10-acre farm. Happy to share the results!",
          likes: 42,
          comments: 15
        }
      }
    }
  },
  hi: {
    // Home page translations
    home: {
      hero: {
        slide1: {
          title: "स्मार्ट खेती करें",
          subtitle: "अपनी कृषि संचालन को अनुकूलित करने और उपज बढ़ाने के लिए डेटा-संचालित अंतर्दृष्टि का उपयोग करें"
        },
        slide2: {
          title: "स्मार्ट विकास",
          subtitle: "फसलों के बारे में विस्तृत जानकारी प्राप्त करें, जिसमें मिट्टी की आवश्यकताएं, विकास अवधि और बेहतर उपज के लिए विशेषज्ञ खेती के सुझाव शामिल हैं"
        },
        slide3: {
          title: "लाभ अधिकतम करें",
          subtitle: "वास्तविक समय के बाजार मूल्य प्राप्त करें और बेहतर रिटर्न के लिए प्रीमियम खरीदारों से सीधे जुड़ें"
        }
      },
      features: {
        title: "प्राइसवॉचर क्यों चुनें?",
        smartAnalytics: {
          title: "स्मार्ट मूल्य विश्लेषण",
          description: "अधिकतम लाभ के लिए अपनी फसलों को कब बेचना है, इसके बारे में सूचित निर्णय लेने के लिए वास्तविक समय के बाजार मूल्य, ऐतिहासिक रुझान और भविष्यवाणी विश्लेषण तक पहुंच प्राप्त करें।"
        },
        cropIntelligence: {
          title: "फसल बुद्धिमत्ता",
          description: "अपनी कृषि रणनीति को अनुकूलित करने के लिए अपनी मिट्टी के प्रकार, स्थानीय जलवायु पैटर्न और बाजार की मांग के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें।"
        },
        marketAccess: {
          title: "सीधी बाजार पहुंच",
          description: "पूर्व-सत्यापित खरीदारों से सीधे जुड़ें, बिचौलियों को समाप्त करें और हमारे विश्वसनीय नेटवर्क के माध्यम से अपनी कृषि उपज के लिए बेहतर कीमतें सुरक्षित करें।"
        }
      },
      vision: {
        title: "हमारी दृष्टि",
        description: "हम किसानों को डेटा-संचालित अंतर्दृष्टि और स्मार्ट समाधान प्रदान करके कृषि में क्रांति लाने के लिए प्रतिबद्ध हैं। हमारा मिशन आपको आपकी स्थानीय परिस्थितियों - मिट्टी के प्रकार, जलवायु और मौसमी पैटर्न के आधार पर फसल चयन के बारे में सूचित निर्णय लेने में मदद करना है। हम समझते हैं कि हर क्षेत्र अद्वितीय है, इसलिए हम आपकी उपज और लाभ को अधिकतम करने के लिए व्यक्तिगत सिफारिशें प्रदान करते हैं।",
        cards: {
          recommendations: {
            title: "स्मार्ट सिफारिशें",
            description: "हमारे उन्नत एल्गोरिदम आपके क्षेत्र के लिए सबसे लाभदायक फसलों का सुझाव देने के लिए आपकी स्थानीय परिस्थितियों का विश्लेषण करते हैं, जो आपको डेटा-संचालित कृषि निर्णय लेने में मदद करते हैं।"
          },
          information: {
            title: "व्यापक जानकारी",
            description: "फसलों के बारे में विस्तृत जानकारी तक पहुंच प्राप्त करें, जिसमें विकास गाइड, बीमारी प्रबंधन और इष्टतम उपज सुनिश्चित करने के लिए सर्वोत्तम प्रथाएं शामिल हैं।"
          },
          connectivity: {
            title: "बाजार कनेक्टिविटी",
            description: "अपने क्षेत्र के खरीदारों से सीधे जुड़ें, अपनी उपज के लिए सर्वोत्तम कीमतें सुनिश्चित करें और अपने कृषि लाभ को अधिकतम करें।"
          }
        }
      },
      cta: {
        title: "अपना कृषि व्यवसाय बदलने के लिए तैयार हैं?",
        description: "हजारों सफल किसानों से जुड़ें जो पहले ही अपने लाभ को बढ़ाने और स्मार्ट कृषि निर्णय लेने के लिए प्राइसवॉचर का उपयोग कर रहे हैं।",
        button: "अभी शुरू करें"
      }
    },
    // Crop Information page translations
    cropInformation: {
      title: "विस्तृत फसल जानकारी प्राप्त करें",
      subtitle: "फसल की खेती, आवश्यकताओं और प्रबंधन प्रथाओं के बारे में विस्तृत जानकारी देखने के लिए एक फसल चुनें",
      selectCrop: "फसल चुनें",
      selectPlaceholder: "फसल का चयन करें...",
      viewDetails: "विवरण देखें",
      crops: {
        // Cereals
        "Rice": "धान",
        "Wheat": "गेहूं",
        "Maize": "मक्का",
        "Jowar": "ज्वार",
        "Pearl Millet": "बाजरा",
        "Ragi": "रागी",
        "Barley": "जौ",
        "Sorghum": "ज्वार",
        // Pulses
        "Chickpea": "चना",
        "Pigeon Pea": "अरहर",
        "Green Gram": "मूंग",
        "Black Gram": "उड़द",
        "Lentil": "मसूर",
        "Cowpea": "लोबिया",
        "Horse Gram": "कुल्थी",
        // Oilseeds
        "Soybean": "सोयाबीन",
        "Groundnut": "मूंगफली",
        "Mustard": "सरसों",
        "Sunflower": "सूरजमुखी",
        "Safflower": "कुसुम",
        "Sesame": "तिल",
        "Castor": "अरंडी",
        // Cash Crops
        "Cotton": "कपास",
        "Sugarcane": "गन्ना",
        "Jute": "जूट",
        "Tobacco": "तंबाकू",
        // Vegetables
        "Potato": "आलू",
        "Tomato": "टमाटर",
        "Onion": "प्याज",
        "Cauliflower": "फूलगोभी",
        "Cabbage": "पत्तागोभी",
        "Brinjal": "बैंगन",
        "Okra": "भिंडी",
        "Peas": "मटर",
        "Carrot": "गाजर",
        // Fruits
        "Mango": "आम",
        "Banana": "केला",
        "Papaya": "पपीता",
        "Watermelon": "तरबूज",
        "Pomegranate": "अनार",
        "Guava": "अमरूद",
        // Spices
        "Turmeric": "हल्दी",
        "Ginger": "अदरक",
        "Cardamom": "इलायची",
        "Black Pepper": "काली मिर्च",
        "Coriander": "धनिया",
        "Cumin": "जीरा",
        // Others
        "Sweet Potato": "शकरकंद",
        "Elephant Foot Yam": "जिमीकंद"
      },
      // Modal translations
      modalTitles: {
        cropDetails: "फसल विवरण",
        growingRequirements: "उगाने की आवश्यकताएं",
        bestPractices: "सर्वोत्तम प्रथाएं",
        keyInformation: "प्रमुख जानकारी",
        diseaseManagement: "रोग प्रबंधन",
        economicInformation: "आर्थिक जानकारी",
        investmentDetails: "निवेश विवरण",
        returnsAndProfit: "लाभ और वापसी"
      },
      labels: {
        waterRequirement: "पानी की आवश्यकता",
        temperature: "तापमान",
        growingPeriod: "उगाने की अवधि",
        season: "मौसम",
        soilTypes: "मिट्टी के प्रकार",
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
    },
    // Crop Recommendation page translations
    cropRecommendation: {
      title: "फसल सिफारिशें प्राप्त करें",
      subtitle: "अपने खेत का विवरण दर्ज करें और व्यक्तिगत फसल सिफारिशें प्राप्त करें",
      location: "स्थान",
      soilType: "मिट्टी का प्रकार",
      selectSoilType: "मिट्टी का प्रकार चुनें",
      soilTypes: {
        "Alluvial Soil": "जलोढ़ मिट्टी",
        "Black Soil": "काली मिट्टी",
        "Red Soil": "लाल मिट्टी",
        "Laterite Soil": "लैटराइट मिट्टी",
        "Desert Soil": "मरुस्थलीय मिट्टी",
        "Mountain Soil": "पर्वतीय मिट्टी",
        "Saline Soil": "लवणीय मिट्टी",
        "Peaty Soil": "पीटी मिट्टी",
        "Forest Soil": "वन मिट्टी",
        "Sandy Soil": "बलुई मिट्टी",
        "Clay Soil": "चिकनी मिट्टी",
        "Loamy Soil": "दोमट मिट्टी"
      },
      analyze: "विश्लेषण करें",
      analyzing: "विश्लेषण कर रहे हैं...",
      results: {
        title: "अनुशंसित फसलें",
        probability: "उपयुक्तता स्कोर",
        expectedYield: "अपेक्षित उपज",
        marketPrice: "बाजार मूल्य",
        marketTrends: {
          title: "बाजार मूल्य प्रवृत्तियाँ",
          subtitle: "ऐतिहासिक मूल्य प्रवृत्तियाँ और भविष्य की भविष्यवाणियाँ",
          pricePerKg: "मूल्य (₹/किग्रा)",
          year: "वर्ष",
          currentPrice: "वर्तमान मूल्य",
          predictedPrice: "अनुमानित मूल्य",
          profitPotential: "लाभ की संभावना",
          high: "उच्च",
          medium: "मध्यम",
          low: "निम्न",
          viewTrends: "मूल्य प्रवृत्तियाँ देखें",
          loading: "बाजार डेटा लोड हो रहा है...",
          error: "बाजार डेटा लोड करने में विफल। कृपया पुनः प्रयास करें।"
        }
      }
    },
    // Sell Crops page translations
    sellCrops: {
      title: "फसल खरीदारों को खोजें",
      subtitle: "अपने क्षेत्र के प्रमाणित खरीदारों से जुड़ें",
      form: {
        title: "खरीदार खोजें",
        subtitle: "उपयुक्त खरीदारों को खोजने के लिए अपनी आवश्यकताएं दर्ज करें",
        location: "स्थान",
        locationPlaceholder: "शहर या जिला दर्ज करें",
        crop: "फसल का प्रकार",
        cropPlaceholder: "फसल का नाम दर्ज करें",
        rating: "न्यूनतम रेटिंग",
        stars: "स्टार",
        anyRating: "कोई भी रेटिंग",
        minPrice: "न्यूनतम मूल्य (₹/किग्रा)",
        maxPrice: "अधिकतम मूल्य (₹/किग्रा)",
        minPricePlaceholder: "न्यूनतम मूल्य दर्ज करें",
        maxPricePlaceholder: "अधिकतम मूल्य दर्ज करें",
        submit: "खरीदार खोजें",
        searching: "खोज रहे हैं..."
      },
      results: {
        noBuyers: "आपके मापदंडों से मेल खाने वाले कोई खरीदार नहीं मिले। कृपया अलग खोज मापदंड आज़माएं।",
        interestedCrops: "इन फसलों में रुचि",
        priceRange: "मूल्य सीमा",
        buyersIn: "खरीदार यहाँ",
        contact: "संपर्क जानकारी",
        rating: "रेटिंग",
        crops: "रुचि की फसलें",
        close: "बंद करें"
      },
      modal: {
        title: "खरीदार विवरण",
        contact: "संपर्क जानकारी",
        crops: "रुचि की फसलें",
        close: "बंद करें"
      }
    },
    informativeContent: {
      title: "संसाधन और समुदाय",
      resources: {
        title: "किसान संसाधन",
        description: "अपनी खेती प्रथाओं के बारे में सूचित निर्णय लेने के लिए बाजार रिपोर्ट, शोध पत्र और मूल्यवान कृषि अंतर्दृष्टि तक पहुंच प्राप्त करें।"
      },
      community: {
        title: "किसान समुदाय",
        description: "अन्य किसानों से जुड़ें, मीटअप में भाग लें, और अपनी खेती यात्रा में एक साथ बढ़ने के लिए ज्ञान साझा करें।"
      }
    },
    smartFarming: {
      title: "स्मार्ट फार्मिंग तकनीकें",
      sections: {
        overview: {
          title: "अवलोकन",
          content: "स्मार्ट फार्मिंग आधुनिक तकनीक को पारंपरिक कृषि प्रथाओं के साथ एकीकृत करती है ताकि दक्षता, उत्पादकता और स्थिरता में सुधार हो सके। यह दृष्टिकोण कृषि संचालन को अनुकूलित करने के लिए विभिन्न डिजिटल उपकरणों और डेटा-संचालित समाधानों का उपयोग करता है।"
        },
        technologies: {
          title: "प्रमुख तकनीकें",
          content: "स्मार्ट फार्मिंग में IoT सेंसर, ड्रोन, GPS सिस्टम और स्वचालित मशीनरी सहित विभिन्न तकनीकों का उपयोग किया जाता है। ये उपकरण किसानों को फसल स्वास्थ्य, मिट्टी की स्थिति और मौसम के पैटर्न की वास्तविक समय में निगरानी करने में मदद करते हैं।"
        },
        applications: {
          title: "अनुप्रयोग",
          content: "सटीक सिंचाई से लेकर स्वचालित कीट नियंत्रण तक, स्मार्ट फार्मिंग अनुप्रयोग किसानों को डेटा-संचालित निर्णय लेने में मदद करते हैं। मोबाइल ऐप और क्लाउड प्लेटफॉर्म फार्म संचालन की दूरस्थ निगरानी और प्रबंधन को सक्षम बनाते हैं।"
        },
        benefits: {
          title: "लाभ",
          content: "स्मार्ट फार्मिंग से फसल उपज में वृद्धि, संसाधन अपव्यय में कमी और बेहतर पर्यावरणीय स्थिरता प्राप्त होती है। यह किसानों को समय और श्रम बचाने में भी मदद करता है जबकि अधिक सूचित निर्णय लेने में सहायता करता है।"
        }
      }
    },
    cropManagement: {
      title: "फसल प्रबंधन गाइड",
      sections: {
        planting: {
          title: "रोपण तकनीकें",
          content: "विभिन्न फसलों के लिए इष्टतम रोपण विधियों, बीज चयन और समय के बारे में जानें। सफल अंकुरण के लिए मिट्टी की तैयारी, अंतराल आवश्यकताओं और सर्वोत्तम प्रथाओं को समझें।"
        },
        irrigation: {
          title: "सिंचाई प्रबंधन",
          content: "विभिन्न फसलों के लिए कुशल सिंचाई तकनीकों, पानी की आवश्यकताओं और आधुनिक सिंचाई प्रणालियों के बारे में जानें। अनुसूची, निगरानी और जल संरक्षण विधियों के बारे में जानें।"
        },
        pestControl: {
          title: "कीट और रोग नियंत्रण",
          content: "सामान्य कीटों और रोगों की पहचान करें, उनके जीवन चक्र को समझें, और एकीकृत कीट प्रबंधन रणनीतियों के बारे में जानें। रासायनिक और जैविक नियंत्रण विधियों का अन्वेषण करें।"
        },
        seasonal: {
          title: "मौसमी देखभाल",
          content: "विभिन्न मौसमों में फसल देखभाल के बारे में विस्तृत मार्गदर्शन प्राप्त करें। तापमान प्रबंधन, मौसमी चुनौतियों और बदलती मौसम की स्थितियों के लिए अनुकूलन रणनीतियों के बारे में जानें।"
        },
        monitoring: {
          title: "फसल निगरानी",
          content: "फसल स्वास्थ्य, विकास के चरणों और विकास की निगरानी कैसे करें, यह समझें। प्रभावी फसल निगरानी के लिए प्रौद्योगिकी और पारंपरिक विधियों का उपयोग करने के बारे में जानें।"
        }
      }
    },
    marketReports: {
      title: "बाजार विश्लेषण रिपोर्ट",
      sections: {
        priceAnalysis: {
          title: "मूल्य विश्लेषण",
          content: "विभिन्न कृषि वस्तुओं के लिए वर्तमान बाजार मूल्यों, ऐतिहासिक रुझानों और भविष्य की भविष्यवाणियों का व्यापक विश्लेषण।"
        },
        seasonalTrends: {
          title: "मौसमी रुझान",
          content: "विभिन्न कृषि मौसमों में मौसमी मूल्य उतार-चढ़ाव, मांग पैटर्न और बाजार व्यवहार पर विस्तृत रिपोर्ट।"
        },
        regionalAnalysis: {
          title: "क्षेत्रीय बाजार विश्लेषण",
          content: "विभिन्न क्षेत्रों और बाजारों में बाजार की स्थितियों, मूल्य भिन्नताओं और व्यापार पैटर्न का गहन विश्लेषण।"
        },
        cropSpecific: {
          title: "फसल-विशिष्ट रिपोर्ट",
          content: "विशिष्ट फसलों पर ध्यान केंद्रित करने वाली विशेष रिपोर्टें, जिसमें उत्पादन रुझान, बाजार मांग और मूल्य पूर्वानुमान शामिल हैं।"
        }
      }
    },
    researchPapers: {
      title: "कृषि शोध पत्र",
      papers: {
        1: {
          title: "आधुनिक कृषि में स्थायी खेती प्रथाएं",
          author: "डॉ. राजेश कुमार",
          abstract: "स्थायी खेती विधियों और उनके फसल उपज और पर्यावरण संरक्षण पर प्रभाव का व्यापक अध्ययन।"
        },
        2: {
          title: "किसानों के लिए जलवायु परिवर्तन अनुकूलन रणनीतियां",
          author: "डॉ. प्रिया शर्मा",
          abstract: "बदलती जलवायु परिस्थितियों के अनुकूल होने और उत्पादकता बनाए रखने के लिए किसानों की प्रभावी रणनीतियों पर शोध।"
        },
        3: {
          title: "स्मार्ट सिंचाई प्रणाली: दक्षता और कार्यान्वयन",
          author: "डॉ. अमित पटेल",
          abstract: "आधुनिक सिंचाई प्रौद्योगिकियों और जल संरक्षण और फसल प्रबंधन में उनकी प्रभावशीलता का विश्लेषण।"
        },
        4: {
          title: "जैविक खेती: विधियां और बाजार क्षमता",
          author: "डॉ. मीरा सिंह",
          abstract: "वर्तमान बाजार की स्थितियों में जैविक खेती तकनीकों और उनकी आर्थिक व्यवहार्यता का अध्ययन।"
        }
      }
    },
    farmerMeetups: {
      title: "किसान मीटअप और कार्यक्रम",
      sections: {
        about: {
          title: "हमारे मीटअप्स के बारे में",
          content:
            "हमारे किसान समुदाय से जुड़ें और नियमित मीटअप्स में भाग लें, जहाँ आप अनुभव साझा कर सकते हैं, नई तकनीकों को सीख सकते हैं, और अन्य किसानों के साथ नेटवर्क बना सकते हैं।\n\n" +
            "हमारे किसान मीटअप्स सहयोग और ज्ञान साझा करने को बढ़ावा देने के लिए डिज़ाइन किए गए हैं। ये आयोजन खुली चर्चा, नए विचारों और विशेषज्ञों और अनुभवी किसानों द्वारा नेतृत्व किए गए व्यावहारिक प्रदर्शन का एक मंच प्रदान करते हैं।\n\n" +
            "चाहे आप छोटे किसान हों या बड़े, हमारे मीटअप्स एक ऐसा स्थान हैं जहाँ आप दूसरों से जुड़ सकते हैं, सामान्य चुनौतियों पर चर्चा कर सकते हैं, और कृषि में उत्पादकता और स्थिरता को बढ़ाने के लिए नवाचारपूर्ण दृष्टिकोणों की खोज कर सकते हैं।\n\n" +
            "हम विभिन्न क्षेत्रों में नियमित किसान मीटअप्स आयोजित करते हैं, जो किसानों को ज्ञान साझा करने, सरकारी योजनाओं की जानकारी प्राप्त करने, और बाज़ार के रुझानों और कृषि-तकनीकी उन्नतियों पर अपडेट रहने का अवसर प्रदान करते हैं।"
        },
        benefits: {
          title: "भागीदारी के लाभ",
          content:
            "किमती जानकारी प्राप्त करें, सफल किसानों से सीखें, और किसान समुदाय के भीतर एक मजबूत नेटवर्क बनाएं।\n\n" +
            "भागीदारी करने से आपको नवीनतम कृषि उपकरणों और रुझानों का पता चलता है, सरकारी योजनाओं तक पहुंच मिलती है, और कृषि-व्यवसायों और सेवा प्रदाताओं के साथ बातचीत का अवसर मिलता है, जिससे आपकी कृषि क्षमता में वृद्धि होती है।\n\n" +
            "ये मीटअप्स किसानों को सहकर्मी सीखने, व्यावहारिक प्रशिक्षण सत्रों, और सामूहिक वातावरण में स्थानीय कृषि मुद्दों को उठाने का अवसर प्रदान करते हैं।\n\n" +
            "उपस्थित लोग विशेषज्ञों की बातों, वास्तविक सफलता की कहानियों, लाइव प्रदर्शन और स्थानीय और राष्ट्रीय कृषि संगठनों के साथ सहयोग करने का लाभ उठाते हैं।"
        },
        upcoming: {
          title: "आगामी मीटअप्स",
          content:
            "अपने क्षेत्र में आगामी किसान मीटअप्स, कार्यशालाओं और नेटवर्किंग आयोजनों के बारे में जानकारी प्राप्त करें।\n\n" +
            "अपने पास आने वाले आयोजनों के लिए तैयार रहें! हम नियमित रूप से जैविक खेती, सिंचाई तकनीकों, फसल विविधीकरण, और अधिक पर कार्यशालाओं के साथ अपना कार्यक्रम अद्यतन करते हैं।\n\n" +
            "हमारी कार्यक्रम कैलेंडर को ब्राउज़ करें और यह जानें कि अगला मीटअप कहां और कब होगा। अपने ज्ञान और नेटवर्क को बढ़ाने के अवसरों को न चूकें।\n\n" +
            "हर मीटअप को वर्तमान कृषि चुनौतियों और अवसरों को संबोधित करने के लिए सावधानीपूर्वक तैयार किया गया है। अपनी राज्य में हो रहे घटनाओं के बारे में जानकारी रखने के लिए अक्सर वापस आएं।"
        }
        
      },
      meetups: {
        1: {
          title: "स्मार्ट फार्मिंग कार्यशाला",
          location: "कृषि अनुसंधान केंद्र",
          date: "15 मार्च 2025",
          time: "10:00 AM - 4:00 PM"
        },
        2: {
          title: "जैविक खेती चर्चा",
          location: "समुदाय केंद्र",
          date: "22 मई 2025",
          time: "2:00 PM - 6:00 PM"
        },
        3: {
          title: "बाजार पहुंच संगोष्ठी",
          location: "किसान सहकारी",
          date: "29 अगस्त 2025",
          time: "11:00 AM - 3:00 PM"
        }
      }
      
    },
    knowledgeSharing: {
      title: "ज्ञान साझाकरण मंच",
      sections: {
        about: {
          title: "मंच के बारे में",
          content: "किसानों के लिए एक समर्पित स्थान जहां वे अनुभव साझा कर सकते हैं, प्रश्न पूछ सकते हैं और एक-दूसरे की सफलताओं और चुनौतियों से सीख सकते हैं।"
        },
        guidelines: {
          title: "समुदाय दिशानिर्देश",
          content: "हमारे समुदाय के भीतर मूल्यवान ज्ञान साझाकरण सुनिश्चित करने के लिए सम्मानजनक और उत्पादक चर्चाओं के लिए दिशानिर्देश।"
        },
        discussions: {
          title: "हाल की चर्चाएं",
          content: "चल रही चर्चाओं को ब्राउज़ करें और कृषि समुदाय के साथ अपनी अंतर्दृष्टि साझा करें।"
        }
      },
      posts: {
        1: {
          author: "रमेश कुमार",
          date: "2 दिन पहले",
          content: "गेहूं की खेती में ड्रिप सिंचाई के साथ अपना अनुभव साझा कर रहा हूं। पानी की बचत उल्लेखनीय रही है!",
          likes: 24,
          comments: 8
        },
        2: {
          author: "प्रिया शर्मा",
          date: "5 दिन पहले",
          content: "टमाटर के पौधों के लिए जैविक कीट नियंत्रण विधियों पर सलाह चाहिए। कोई सुझाव?",
          likes: 15,
          comments: 12
        },
        3: {
          author: "अमित पटेल",
          date: "1 सप्ताह पहले",
          content: "अपने 10 एकड़ के खेत में स्मार्ट खेती तकनीकों को सफलतापूर्वक लागू किया। परिणाम साझा करने में खुशी हो रही है!",
          likes: 42,
          comments: 15
        }
      }
    }
  }
}; 