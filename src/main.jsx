import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme/index.js";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import EngineeringSoftwareExpertise from "./pages/EngineeringExpertise/EngineeringSoftwareExpertise.jsx";
import { ServiceInclude } from "./pages/ServiceInclude/ServiceInclude.jsx";
import KochiRefineryProject from "./pages/CustomerSupport/KochiRefineryProject .jsx";
import LenzingAutria from "./pages/CustomerSupport/LenzingAutria.jsx";
import CabbGermany from "./pages/CustomerSupport/CabbGermany.jsx";
import CiplaIndore from "./pages/CustomerSupport/CiplaIndore.jsx";
import JSWVijayanagar from "./pages/CustomerSupport/JSWVijayanagar.jsx";
import EMPS from "./pages/CustomerSupport/EPMS.jsx";
import CosmosAdmin from "./pages/CustomerSupport/CosmosAdmin.jsx";
import AkerMumbai from "./pages/CustomerSupport/AkerMumbai.jsx";
import AutoWiringEIL from "./pages/CustomerSupport/AutoWiringEIL.jsx";
import SNC from "./pages/CustomerSupport/SNC.jsx";
import ServicesInNutshell from "./pages/CustomerSupport/ServicesInNutshell.jsx";
import ToyotaMumbai from "./pages/CustomerSupport/ToyotaMumbai.jsx";
import EDMS from "./pages/CustomerSupport/EDMS.jsx";
import DigitalTwin from "./pages/CustomerSupport/DigitalTwin.jsx";
import OTIntegration from "./pages/CustomerSupport/OTIntegration.jsx";
import DigitalTranx from "./pages/CustomerSupport/DigitalTranx.jsx";
import WhatComos from "./pages/CustomerSupport/WhatComos.jsx";
import ComosModule from "./pages/CustomerSupport/ComosModule.jsx";
import SiemensComos from "./pages/SiemensComos/SiemensComos.jsx";
import AssetManagement from "./pages/AssetManagement/AssetManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/engineering-software-expertise" element={<EngineeringSoftwareExpertise />} />
          <Route path="/service-include" element={<ServiceInclude />} />
          <Route path="/kochi-refinery" element={<KochiRefineryProject />} />
          <Route path="/lenzing-autria" element={<LenzingAutria />} />
          <Route path="/cabb-germany" element={<CabbGermany />} />
          <Route path="/cipla-indore" element={<CiplaIndore />} />
          <Route path="/jsw-steel-vijayanagar" element={<JSWVijayanagar />} />
          <Route path="/epms" element={<EMPS />} />
          <Route path="/cosmos-admin" element={<CosmosAdmin />} />
          <Route path="/aker-mumbai" element={<AkerMumbai />} />
          <Route path="/auto-wiring-eil" element={<AutoWiringEIL />} />
          <Route path="/snc" element={<SNC />} />
          <Route path="/toyota-mumbai" element={<ToyotaMumbai />} />
          <Route path="/edms" element={<EDMS />} />
          <Route path="/solutions-and-services" element={<ServicesInNutshell />} />
          <Route path="/digital-twin" element={<DigitalTwin />} />
          <Route path="/digital-documentation" element={<DigitalTranx />} />
          <Route path="/ot-it-integration" element={<OTIntegration />} />
          <Route path="/what-is-comos" element={<WhatComos />} />
          <Route path="/comos-modules" element={<ComosModule />} />
          <Route path="*" element={<PageNotFound />} />
          {/* New Path routes here */}
          <Route path="/siemens-comos" element={<SiemensComos />} />
          <Route path="/asset-management" element={<AssetManagement />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
