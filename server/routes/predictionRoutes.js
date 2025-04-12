import express from "express";
import CropPrediction from "../models/CropPrediction.js"; // Import MongoDB model
import { getPredictionHistory } from "../controllers/predictionController.js";

const router = express.Router();

// ✅ Utility function: Convert input to Title Case
const toTitleCase = (str) => str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

// ✅ Normalize input fields before querying
const normalizeInput = (data) => ({
    state: toTitleCase(data.state || ""),
    soilType: toTitleCase(data.soilType || ""),
    month: toTitleCase(data.month || ""),
    climate: toTitleCase(data.climate || "")
});

// ✅ Async error-handling wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// ✅ 🔹 POST /api/predict - Predict crops based on user input
router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { state, soilType, month, climate } = normalizeInput(req.body);

        if (!state || !soilType || !month || !climate) {
            return res.status(400).json({ success: false, message: "State, soilType, month, and climate are required!" });
        }

        console.log("🔍 Searching for crops with:", { state, soilType, month, climate });

        const query = {
            State: { $regex: `^${state}$`, $options: "i" },
            Soil: { $regex: `^${soilType}$`, $options: "i" },
            Month: { $regex: `^${month}$`, $options: "i" },
            Climate: { $regex: `^${climate}$`, $options: "i" },
        };

        const cropPredictions = await CropPrediction.find(query).lean();

        if (!cropPredictions.length) {
            console.log("❌ No crop predictions found.");
            return res.status(404).json({ success: false, message: "No matching predictions found." });
        }

        // ✅ Extract Crops from MongoDB (comma-separated)
        const cropNames = [...new Set(cropPredictions.flatMap(pred => pred.Crops.split(",").map(crop => crop.trim())))];

        console.log("✅ Found Crops:", cropNames);
        return res.json({ success: true, crops: cropNames });
    })
);

// ✅ 🔹 GET /api/predict/crop-predictions - Fetch crops based on query parameters
router.get(
    "/crop-predictions",
    asyncHandler(async (req, res) => {
        const { state, soilType, month, climate } = normalizeInput(req.query);

        if (!state || !soilType || !month || !climate) {
            return res.status(400).json({ success: false, message: "State, soilType, month, and climate are required!" });
        }

        console.log("🔍 Searching for crops with:", { state, soilType, month, climate });

        const query = {
            State: { $regex: `^${state}$`, $options: "i" },
            Soil: { $regex: `^${soilType}$`, $options: "i" },
            Month: { $regex: `^${month}$`, $options: "i" },
            Climate: { $regex: `^${climate}$`, $options: "i" },
        };

        const cropPredictions = await CropPrediction.find(query).lean();

        if (!cropPredictions.length) {
            return res.status(404).json({ success: false, message: "No crop predictions found for this combination." });
        }

        // ✅ Extract Crops from MongoDB (comma-separated)
        const cropNames = [...new Set(cropPredictions.flatMap(pred => pred.Crops.split(",").map(crop => crop.trim())))];

        return res.json({ success: true, crops: cropNames });
    })
);

// ✅ 🔹 GET /api/predict/history - Fetch prediction history
router.get(
    "/history",
    asyncHandler(async (req, res) => {
        const result = await getPredictionHistory(req, res);
        res.status(result.success ? 200 : 404).json(result);
    })
);

// ✅ 🔹 GET /api/predict/all-predictions - Fetch all stored crop predictions
router.get(
    "/all-predictions",
    asyncHandler(async (req, res) => {
        try {
            const allPredictions = await CropPrediction.find({}).lean();
            return res.json({ success: true, data: allPredictions });
        } catch (err) {
            console.error("🔥 Error fetching all predictions:", err);
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    })
);

// ✅ Centralized error handler
router.use((err, req, res, next) => {
    console.error("🔥 Error:", err);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
});

export default router;
