import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling

import Home from './pages/Home';

import whatsappImage from './assets/whatsapp_733585.png'; // Import WhatsApp image
import EmbryoScopeDetails from './pages/EmbryoScopeDetails';
import EmbryoGlueDetails from './pages/EmbryoGlueDetails';
import EggSpindleDetails from './pages/EggSpindleDetails';
import LearnAboutFertility from './pages/LearnAboutFertility';
import HelpToGetPregnant from './pages/HelpToGetPregnant';
import StartIVFTreatment from './pages/StartIVFTreatment';
import SecondOpinion from './pages/SecondOpinion';
import PreserveMyFertility from './pages/PreserveMyFertility';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/newlife" element={<Home />} />
          <Route path="/newlifeivf" element={<Home />} />
          <Route path="/embryoscope" element={<EmbryoScopeDetails />} />
          <Route path="/embryoglue" element={<EmbryoGlueDetails />} />
          <Route path="/eggspindle" element={<EggSpindleDetails />} />
          <Route path="/understand-fertility" element={<LearnAboutFertility />} />
          <Route path="/help-to-get-pregnant" element={<HelpToGetPregnant />} />
          <Route path="/start-ivf-treatment" element={<StartIVFTreatment />} />
          <Route path="/get-second-opinion" element={<SecondOpinion />} />
          <Route path="/preserve-fertility" element={<PreserveMyFertility />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9779845192771"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
