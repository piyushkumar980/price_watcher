const API_BASE_URL = 'https://price-watcher.onrender.com/api'; // Make sure backend is running here

export const getPrediction = async (formData) => {
  try {
    console.log('🚀 Submitting form data:', formData);

    const { state, climate, soilType, month } = formData;

    if (!state?.trim() || !climate?.trim() || !soilType?.trim() || !month?.trim()) {
      throw new Error('❌ All fields must contain valid values');
    }

    const requestData = {
      state: state.trim(),
      climate: climate.trim(),
      soilType: soilType.trim(),
      month: month.trim(),
    };

    console.log("🔍 Sending API Request with:", requestData);

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ API Error Response:", data);
      throw new Error(data.message || '❌ Failed to get predictions');
    }

    console.log('✅ Prediction Result:', data);

    return {
      success: true,
      predictions: data.predictions || data.crops || [],
      message: data.message || '✅ Prediction successful',
    };

  } catch (error) {
    console.error('🔥 API Error:', error.message);
    return { success: false, error: error.message || '❌ Request failed. Please try again.' };
  }
};

/**
 * ✅ Get buyers from your MongoDB database based on the selected state
 * @param {Object} filter - { state: "Gujarat" }
 */
export const searchBuyers = async ({ state }) => {
  try {
    if (!state?.trim()) {
      throw new Error('State is required');
    }

    const response = await fetch(`${API_BASE_URL}/buyers?state=${encodeURIComponent(state.trim())}`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch buyers');
    }

    return {
      success: true,
      buyers: data.buyers || [],
    };
  } catch (error) {
    console.error('❌ Error fetching buyers:', error.message);
    return {
      success: false,
      error: error.message || 'Failed to fetch buyers',
    };
  }
};
