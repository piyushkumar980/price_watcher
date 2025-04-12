import express from "express";
import Buyer from "../models/Buyer.js"; // Make sure this path is correct

const router = express.Router();

/**
 * @route   GET /api/buyers?state=Gujarat
 * @desc    Get buyers by state (case-insensitive)
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const { state } = req.query;

    if (!state?.trim()) {
      return res.status(400).json({ success: false, message: "State is required" });
    }

    const buyers = await Buyer.find({
      state: new RegExp(`^${state.trim()}`, "i"), // Case-insensitive regex match
    });

    if (buyers.length === 0) {
      return res.status(404).json({ success: false, message: "No buyers found for this state" });
    }

    res.status(200).json({ success: true, buyers });
  } catch (error) {
    console.error("❌ Error fetching buyers:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
