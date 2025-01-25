import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Context
import { StaticDataProvider } from "./context/StaticDataContext";

// Layouts
import AppLayout from "./layouts/pages/AppLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import SearchPage from "./pages/SearchPage";
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

          <Route element={<AppLayout />}>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/explore/type/:type" element={<ResultsTypePage />} />
            <Route
              path="/explore/country/:country"
              element={<ResultsCountryPage />}
            />
          </Route>

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
