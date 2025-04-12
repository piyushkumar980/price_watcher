import express from 'express';
import CropPrediction from '../models/CropPrediction.js';

const router = express.Router();

router.post('/predict', async (req, res) => {
  try {
    console.log('Received request body:', req.body);

    // Accept both 'soil' and 'soilType' for backward compatibility
    const soil = req.body.soil || req.body.soilType;
    const { state, climate, month } = req.body;

    if (!state || !climate || !soil || !month) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: state, climate, soil/soilType, month'
      });
    }

    const prediction = await CropPrediction.findOne({
      state: new RegExp(`^${state}$`, 'i'),
      climate: new RegExp(`^${climate}$`, 'i'),
      soilType: new RegExp(`^${soil}$`, 'i'),
      month: new RegExp(`^${month}$`, 'i')
    });

    if (!prediction) {
      return res.status(404).json({
        success: false,
        error: 'No matching predictions found'
      });
    }

    return res.json({
      success: true,
      predictions: prediction.predictions,
      message: 'Successfully retrieved predictions'
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

export default router;