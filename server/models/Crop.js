import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
  State: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  Climate: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  Soil: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  Month: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  Crops: {
    type: String,  // Stored as comma-separated string
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

// Case-insensitive indexes
cropSchema.index({ State: 'text', Climate: 'text', Soil: 'text', Month: 'text' });

// Data normalization
cropSchema.pre('save', function(next) {
  this.State = this.State?.trim()?.toLowerCase();
  this.Climate = this.Climate?.trim()?.toLowerCase();
  this.Soil = this.Soil?.trim()?.toLowerCase();
  this.Month = this.Month?.trim()?.toLowerCase();
  this.Crops = this.Crops?.trim();
  next();
});

const Crop = mongoose.model('Crop', cropSchema);
export default Crop;