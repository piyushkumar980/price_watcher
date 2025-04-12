import CropPrediction from "../models/CropPrediction.js";

// 🔹 Predict crops based on user input
export const predictCrop = async ({ state, soilType, month, climate }) => {
  try {
    console.log('🔎 Searching for predictions with:', { state, soilType, month, climate });

    // ✅ Validate input
    if (!state || !soilType || !month || !climate) {
      console.warn("⚠️ Missing required fields.");
      return {
        success: false,
        message: "All fields (state, soilType, month, climate) are required",
      };
    }

    // ✅ Standardize input values (trim & lowercase)
    const query = {
      state: { $regex: new RegExp(`^${state.trim()}$`, 'i') },
      soilType: { $regex: new RegExp(`^${soilType.trim()}$`, 'i') },
      month: { $regex: new RegExp(`^${month.trim()}$`, 'i') },
      climate: { $regex: new RegExp(`^${climate.trim()}$`, 'i') }
    };

    console.log("🚀 Querying MongoDB with:", query);

    // ✅ Fetch matching predictions
    const predictions = await CropPrediction.find(query).lean();

    if (!predictions.length) {
      console.warn('⚠️ No matching predictions found');
      return {
        success: false,
        message: "No crop predictions found for the given parameters",
      };
    }

    // ✅ Extract crops from all matching results
    const cropsList = predictions.flatMap(pred => pred.crops || []);

    return {
      success: true,
      crops: [...new Set(cropsList)], // Remove duplicates
    };

  } catch (error) {
    console.error("🔥 Error during prediction:", error.message);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Server error while predicting crops",
    };
  }
};

// 🔹 Fetch recent prediction history from MongoDB
export const getPredictionHistory = async (req, res) => {
  try {
    console.log("📚 Fetching prediction history...");

    // ✅ Get latest 10 prediction records (excluding _id)
    const history = await CropPrediction.find({}, { _id: 0, state: 1, soilType: 1, month: 1, climate: 1, crops: 1 })
      .sort({ _id: -1 }) // Sort by latest
      .limit(10)
      .lean();

    res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {
    console.error("🔥 Error fetching history:", error.message);
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed to fetch prediction history",
    });
  }
};
