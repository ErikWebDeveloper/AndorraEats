import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Context
import { StaticDataProvider } from "./context/StaticDataContext";

// Pages
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import ResultsTypePage from "./pages/ResultsTypePage";
import RestaurantPage from "./pages/RestaurantPage";
import ResultsCountryPage from "./pages/ResultsCountryPage";
import FAQsPage from "./pages/FAQsPage";
import AboutPage from "./pages/AboutPage";
import TermsAndPolicyPage from "./pages/TermsPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StaticDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/type/:type" element={<ResultsTypePage />} />
          <Route
            path="/explore/country/:country"
            element={<ResultsCountryPage />}
          />

          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantPage />}
          />

          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsAndPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </StaticDataProvider>
  </StrictMode>
);
