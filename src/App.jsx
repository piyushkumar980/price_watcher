import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CropRecommendation from './pages/CropRecommendation';
import CropInformation from './pages/CropInformation';
import SellCrops from './pages/SellCrops';
import InformativeContent from './components/InformativeContent';
import SmartFarming from './pages/learning/SmartFarming';
import CropManagement from './pages/learning/CropManagement';
import MarketReports from './pages/resources/MarketReports';
import ResearchPapers from './pages/resources/ResearchPapers';
import FarmerMeetups from './pages/community/FarmerMeetups';
import KnowledgeSharing from './pages/community/KnowledgeSharing';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recommendation" element={<CropRecommendation />} />
              <Route path="/crops" element={<CropInformation />} />
              <Route path="/sell" element={<SellCrops />} />
              <Route path="/resources" element={<InformativeContent />} />
              <Route path="/learning/smart-farming" element={<SmartFarming />} />
              <Route path="/learning/crop-management" element={<CropManagement />} />
              <Route path="/resources/market-reports" element={<MarketReports />} />
              <Route path="/resources/research-papers" element={<ResearchPapers />} />
              <Route path="/community/farmer-meetups" element={<FarmerMeetups />} />
              <Route path="/community/knowledge-sharing" element={<KnowledgeSharing />} />
            </Routes>
          </main>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
