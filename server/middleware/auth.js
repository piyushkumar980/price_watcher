
import CropPrediction from "../models/CropPrediction.js";

// 🔹 Fetch predictions based on user input
export const predictCrop = async ({ state, soilType, month, climate }) => {
  try {
    console.log('🔎 Searching for predictions with:', { state, soilType, month, climate });

    // Trim and standardize input values
    state = state?.trim()?.toLowerCase();
    soilType = soilType?.trim()?.toLowerCase();
    month = month?.trim()?.toLowerCase();
    climate = climate?.trim()?.toLowerCase();

    if (!state || !soilType || !month || !climate) {
      console.warn("⚠️ Missing required fields.");
      return {
        success: false,
        message: "Missing required fields: state, soilType, month, and climate",
      };
    }

    console.log("🚀 Querying MongoDB with:", { state, soilType, month, climate });

    // Query with case-insensitive matching using $regex for state, soilType, month, and climate
    const predictions = await CropPrediction.find({
      state: { $regex: new RegExp(state, 'i') }, // Case-insensitive search for state
      soilType: { $regex: new RegExp(soilType, 'i') }, // Case-insensitive search for soilType
      month: { $regex: new RegExp(month, 'i') }, // Case-insensitive search for month
      climate: { $regex: new RegExp(climate, 'i') } // Case-insensitive search for climate
    }).lean();

    if (!predictions.length) {
      console.warn('⚠️ No matching predictions found');
      return {
        success: false,
        message: "No crop predictions found for the given parameters",
      };
    }

    // Assuming 'predictions' field exists within the found documents
    return {
      success: true,
      predictions: predictions.flatMap((pred) => pred.predictions),
    };

  } catch (error) {
    console.error("🔥 Error during prediction:", error.message);
    return {
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Server error while predicting crops",
    };
  }
};

// 🔹 Fetch prediction history from MongoDB
export const getPredictionHistory = async (req, res) => {
  try {
    console.log("📚 Fetching prediction history...");

    const history = await CropPrediction.find({}, { _id: 0, state: 1, soilType: 1, month: 1, climate: 1 })
      .limit(10)
      .lean();

    res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {
    console.error("🔥 Error during fetching history:", error.message);
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === "development" ? error.message : "Failed to fetch prediction history",
    });
  }
};

// No authentication middleware now
// No need for JWT handling or authorization checks

