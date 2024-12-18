import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling

import Home from './pages/Home';

import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
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
import IVFInformationPage from './pages/IVFinformationpage';
import ICSIInformationPage from './pages/ICSIInformationPage';
import IUIInformationPage from './pages/IUIInformationPage';
import LAHInformationPage from './pages/LAHInformationPage';
import EggFreezingPage from './pages/EggFreezingPage';
import BecomeDonorPage from './pages/BecomeDonorPage';


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
          <Route path="/ivf" element={<IVFInformationPage />} />
          <Route path="/icsi" element={<ICSIInformationPage />} />
          <Route path="/iui" element={<IUIInformationPage />} />
          <Route path="/lah" element={<LAHInformationPage />} />
          <Route path="/egg-freezing" element={<EggFreezingPage />} />
          <Route path="/become-donor" element={<BecomeDonorPage />} />

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
