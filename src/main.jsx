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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/calibre-design" element={<CalibreDesign />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
