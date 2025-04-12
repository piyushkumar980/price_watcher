import express from 'express';
import CropPrediction from '../models/CropPrediction.js';

const router = express.Router();

// Route to fetch crop prediction data
router.get("/crop-predictions", async (req, res) => {
  const { state, soilType, month, climate, page = 1, limit = 10 } = req.query;  // Destructure query params with defaults

  // Validate that the necessary parameters are present
  if (!state || !soilType || !month || !climate) {
    return res.status(400).json({ message: "State, soilType, month, and climate are required!" });
  }

  // Normalize input to lower case and trim spaces
  const normalizedState = state.trim().toLowerCase();
  const normalizedSoilType = soilType.trim().toLowerCase();
  const normalizedMonth = month.trim().toLowerCase();
  const normalizedClimate = climate.trim().toLowerCase();

  try {
    // Build case-insensitive query
    const query = {
      state: new RegExp(`^${normalizedState}$`, "i"),
      soilType: new RegExp(`^${normalizedSoilType}$`, "i"),
      month: new RegExp(`^${normalizedMonth}$`, "i"),
      climate: new RegExp(`^${normalizedClimate}$`, "i")
    };

    // Pagination settings
    const skip = (page - 1) * limit;

    // Query MongoDB for matching crop predictions with pagination
    const cropPredictions = await CropPrediction.find(query)
      .skip(skip)
      .limit(Number(limit))
      .lean();

    // If no data is found
    if (!cropPredictions.length) {
      return res.status(404).json({ message: "No crop predictions found for this combination." });
    }

    // Extract unique crop names
    const cropNames = [...new Set(cropPredictions.flatMap(pred => pred.predictions.map(p => p.crop)))] ;

    // Return the data
    return res.json({ success: true, crops: cropNames, page, limit });

  } catch (err) {
    console.error("🔥 Error fetching crop predictions:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
