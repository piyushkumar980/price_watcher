import Buyer from '../models/Buyer.js';

// Get all buyers with pagination
export const getBuyers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const buyers = await Buyer.find({ verified: true })
      .skip(skip)
      .limit(limit)
      .sort({ rating: -1 });

    const total = await Buyer.countDocuments({ verified: true });

    res.json({
      success: true,
      buyers,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error fetching buyers'
    });
  }
};

// Search buyers by criteria
export const searchBuyers = async (req, res) => {
  try {
    const {
      location,
      crop,
      minPrice,
      maxPrice,
      rating
    } = req.query;

    let query = { verified: true };

    if (location) {
      query.location = new RegExp(location, 'i');
    }

    if (crop) {
      query.interestedCrops = crop;
    }

    if (minPrice || maxPrice) {
      query.priceRange = {};
      if (minPrice) query.priceRange.$gte = parseInt(minPrice);
      if (maxPrice) query.priceRange.$lte = parseInt(maxPrice);
    }

    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }

    const buyers = await Buyer.find(query)
      .sort({ rating: -1 })
      .limit(20);

    res.json({
      success: true,
      buyers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error searching buyers'
    });
  }
};

// Get specific buyer
export const getBuyerById = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.params.id);
    if (!buyer) {
      return res.status(404).json({
        success: false,
        error: 'Buyer not found'
      });
    }

    res.json({
      success: true,
      buyer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error fetching buyer'
    });
  }
};

// Create new buyer
export const createBuyer = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      interestedCrops,
      priceRange
    } = req.body;

    const buyer = new Buyer({
      name,
      email,
      phone,
      location,
      interestedCrops,
      priceRange
    });

    await buyer.save();

    res.status(201).json({
      success: true,
      buyer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error creating buyer'
    });
  }
};

// Update buyer
export const updateBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!buyer) {
      return res.status(404).json({
        success: false,
        error: 'Buyer not found'
      });
    }

    res.json({
      success: true,
      buyer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error updating buyer'
    });
  }
};

// Delete buyer
export const deleteBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.findByIdAndDelete(req.params.id);

    if (!buyer) {
      return res.status(404).json({
        success: false,
        error: 'Buyer not found'
      });
    }

    res.json({
      success: true,
      message: 'Buyer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error deleting buyer'
    });
  }
}; 