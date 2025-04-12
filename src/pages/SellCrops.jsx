import React, { useState } from 'react';
import {
  FaSeedling,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserTie,
  FaTimes,
  FaSearch,
  FaCity,
  FaGlobe
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { searchBuyers } from '../services/api';

const stateTranslations = {
  en: {
    "Andhra Pradesh": "Andhra Pradesh",
    "Arunachal Pradesh": "Arunachal Pradesh",
    "Assam": "Assam",
    "Bihar": "Bihar",
    "Chhattisgarh": "Chhattisgarh",
    "Goa": "Goa",
    "Gujarat": "Gujarat",
    "Haryana": "Haryana",
    "Himachal Pradesh": "Himachal Pradesh",
    "Jharkhand": "Jharkhand",
    "Karnataka": "Karnataka",
    "Kerala": "Kerala",
    "Madhya Pradesh": "Madhya Pradesh",
    "Maharashtra": "Maharashtra",
    "Manipur": "Manipur",
    "Meghalaya": "Meghalaya",
    "Mizoram": "Mizoram",
    "Nagaland": "Nagaland",
    "Odisha": "Odisha",
    "Punjab": "Punjab",
    "Rajasthan": "Rajasthan",
    "Sikkim": "Sikkim",
    "Tamil Nadu": "Tamil Nadu",
    "Telangana": "Telangana",
    "Tripura": "Tripura",
    "Uttar Pradesh": "Uttar Pradesh",
    "Uttarakhand": "Uttarakhand",
    "West Bengal": "West Bengal"
  },
  hi: {
    "Andhra Pradesh": "आंध्र प्रदेश",
    "Arunachal Pradesh": "अरुणाचल प्रदेश",
    "Assam": "असम",
    "Bihar": "बिहार",
    "Chhattisgarh": "छत्तीसगढ़",
    "Goa": "गोवा",
    "Gujarat": "गुजरात",
    "Haryana": "हरियाणा",
    "Himachal Pradesh": "हिमाचल प्रदेश",
    "Jharkhand": "झारखंड",
    "Karnataka": "कर्नाटक",
    "Kerala": "केरल",
    "Madhya Pradesh": "मध्य प्रदेश",
    "Maharashtra": "महाराष्ट्र",
    "Manipur": "मणिपुर",
    "Meghalaya": "मेघालय",
    "Mizoram": "मिजोरम",
    "Nagaland": "नागालैंड",
    "Odisha": "ओडिशा",
    "Punjab": "पंजाब",
    "Rajasthan": "राजस्थान",
    "Sikkim": "सिक्किम",
    "Tamil Nadu": "तमिलनाडु",
    "Telangana": "तेलंगाना",
    "Tripura": "त्रिपुरा",
    "Uttar Pradesh": "उत्तर प्रदेश",
    "Uttarakhand": "उत्तराखंड",
    "West Bengal": "पश्चिम बंगाल"
  }
};

const cropTranslations = {
  hi: {
    wheat: "गेहूं",
    rice: "चावल",
    maize: "मक्का",
    sugarcane: "गन्ना",
    pulses: "दालें",
    cotton: "कपास",
    vegetables: "सब्जियाँ",
    fruits: "फल"
  }
};

const stateCapitals = {
  "Andhra Pradesh": "Amaravati",
  "Arunachal Pradesh": "Itanagar",
  "Assam": "Dispur",
  "Bihar": "Patna",
  "Chhattisgarh": "Raipur",
  "Goa": "Panaji",
  "Gujarat": "Gandhinagar",
  "Haryana": "Chandigarh",
  "Himachal Pradesh": "Shimla",
  "Jharkhand": "Ranchi",
  "Karnataka": "Bengaluru",
  "Kerala": "Thiruvananthapuram",
  "Madhya Pradesh": "Bhopal",
  "Maharashtra": "Mumbai",
  "Manipur": "Imphal",
  "Meghalaya": "Shillong",
  "Mizoram": "Aizawl",
  "Nagaland": "Kohima",
  "Odisha": "Bhubaneswar",
  "Punjab": "Chandigarh",
  "Rajasthan": "Jaipur",
  "Sikkim": "Gangtok",
  "Tamil Nadu": "Chennai",
  "Telangana": "Hyderabad",
  "Tripura": "Agartala",
  "Uttar Pradesh": "Lucknow",
  "Uttarakhand": "Dehradun",
  "West Bengal": "Kolkata"
};

const indianStates = Object.keys(stateCapitals);

function SellCrops() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].sellCrops;
  const stateT = stateTranslations[currentLanguage];

  const [formData, setFormData] = useState({ state: '', capital: '' });
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    if (name === 'state') {
      updated.capital = stateCapitals[value] || '';
    }
    setFormData(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBuyers([]);
    setError(null);

    try {
      const res = await searchBuyers({ state: formData.state });
      if (res.success && res.buyers.length > 0) {
        setBuyers(res.buyers);
      } else {
        setError(currentLanguage === 'en'
          ? 'No buyers found in your area. Please try a different state.'
          : 'आपके क्षेत्र में कोई खरीदार नहीं मिला। कृपया कोई अन्य राज्य आज़माएं।');
      }
    } catch (err) {
      setError(currentLanguage === 'en'
        ? 'An error occurred while searching for buyers.'
        : 'खरीदारों की खोज में त्रुटि हुई।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#166534' }}>{t.title}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{
          backgroundColor: '#f0fdf4',
          borderRadius: '20px',
          padding: '45px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
        }}>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
              <FaMapMarkerAlt />
              {currentLanguage === 'en' ? 'State' : 'राज्य'}
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '6px' }}
            >
              <option value="">{currentLanguage === 'en' ? 'Select state' : 'राज्य चुनें'}</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{stateT[state]}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
              <FaCity />
              {currentLanguage === 'en' ? 'Capital' : 'राजधानी'}
            </label>
            <input
              type="text"
              name="capital"
              value={formData.capital}
              readOnly
              style={{ width: '96%', padding: '12px', borderRadius: '8px', marginTop: '6px', backgroundColor: '#f0f0f0' }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#16a34a',
            color: 'white',
            padding: '14px',
            borderRadius: '10px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          <FaSearch />
          {loading ? (currentLanguage === 'en' ? 'Searching...' : 'खोज रहे हैं...') : (currentLanguage === 'en' ? 'Find Buyers' : 'खरीदार खोजें')}
        </button>

        {error && <div style={{ color: 'red', backgroundColor: '#fef2f2', padding: '12px', borderRadius: '8px' }}>{error}</div>}
      </form>

      {buyers.length > 0 && (
        <div style={{ marginTop: '40px', backgroundColor: '#f0fdf4', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ color: '#166534', fontSize: '24px' }}>
              {currentLanguage === 'en' ? `Buyers in ${formData.state}` : `${stateT[formData.state]} में खरीदार`}
            </h2>
            <button onClick={() => setBuyers([])} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
              <FaTimes />
            </button>
          </div>

          {buyers.map((buyer, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#166534', marginBottom: '10px' }}>{buyer.name}</h3>
              {buyer.location && <p><FaMapMarkerAlt /> {buyer.location}</p>}
              {buyer.website && (
                <p>
                  <FaGlobe />{' '}
                  <a href={buyer.website} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
                    {buyer.website}
                  </a>
                </p>
              )}
              {buyer.contact && <p><FaUserTie /> {buyer.contact}</p>}
              {buyer.phone && <p><FaPhone /> {buyer.phone}</p>}
              {buyer.email && <p><FaEnvelope /> {buyer.email}</p>}
              {buyer.address && <p><FaMapMarkerAlt /> {buyer.address}</p>}

              <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Array.isArray(buyer.crops) && buyer.crops.map((crop, i) => (
                  <span key={i} style={{ backgroundColor: '#dcfce7', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', color: '#166534' }}>
                    {currentLanguage === 'en' ? crop : cropTranslations.hi[crop] || crop}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SellCrops;
