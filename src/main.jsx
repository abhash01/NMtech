<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme/index.js";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
// import "./styles/variable.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalibreDesign from "./pages/CalibreDesign.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import EngineeringSoftwareExpertise from "./pages/EngineeringExpertise/EngineeringSoftwareExpertise.jsx";
import { ServiceInclude } from "./pages/ServiceInclude/ServiceInclude.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calibre-design" element={<CalibreDesign />} />
          <Route path="/engineering-software-expertise" element={<EngineeringSoftwareExpertise />} />
          <Route path="/service-include" element={<ServiceInclude />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme/index.js";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
// import "./styles/variable.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalibreDesign from "./pages/CalibreDesign.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calibre-design" element={<CalibreDesign />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
>>>>>>> 98775794b4e168460bd499539e6bc7da4a721d74
