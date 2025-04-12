import mongoose from "mongoose";

const cropPredictionSchema = new mongoose.Schema(
  {
    State: {
      type: String,
      required: true,
      trim: true,
    },
    Soil: {
      type: String,
      required: true,
      trim: true,
    },
    Month: {
      type: String,
      required: true,
      trim: true,
    },
    Climate: {
      type: String,
      required: true,
      trim: true,
    },
    Crops: {
      type: String,
      required: true,
      trim: true, // Crops stored as a comma-separated string
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
  }
);

// ✅ Index for fast queries & prevent duplicate entries
cropPredictionSchema.index({ State: 1, Soil: 1, Month: 1, Climate: 1 }, { unique: true });

// ✅ Explicitly connect to the correct database and collection
const CropPrediction = mongoose.model("CropPrediction", cropPredictionSchema, "Crop_Recommendation");

export default CropPrediction;
