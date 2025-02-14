import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Idiomas
import "./config/i18n.js";

// Context
import { StaticDataProvider } from "./context/StaticDataContext";

// Layouts
import AppLayout from "./layouts/pages/AppLayout";
import LandingLayout from "./layouts/pages/LandingLayout.jsx";

// Pages
import LandingPage from "./pages/landing/LandingPage.jsx";
import ExplorePage from "./pages/app/ExplorePage.jsx";
import SearchPage from "./pages/app/SearchPage.jsx";
import ResultsTypePage from "./pages/app/ResultsTypePage.jsx";
import RestaurantPage from "./pages/client/RestaurantPage.jsx";
import ResultsCountryPage from "./pages/app/ResultsCountryPage.jsx";
import FAQsPage from "./pages/landing/FAQsPage.jsx";
import AboutPage from "./pages/landing/AboutPage.jsx";
import TermsAndPolicyPage from "./pages/landing/TermsPage.jsx";
import NewRestaurantPage from "./pages/landing/NewRestaurant.jsx";
import RestaurantBoardPage from "./pages/dashboard/RestaurantPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StaticDataProvider>
      <BrowserRouter>
        <Routes>
          {/** Main App */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore/type/:type" element={<ResultsTypePage />} />
            <Route
              path="/explore/country/:country"
              element={<ResultsCountryPage />}
            />
          </Route>
          {/** Restaurant View */}
          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantPage />}
          />
          {/** DashBoard */}
          <Route path={"/new-restaurant"} element={<RestaurantBoardPage />} />
          {/** Landing Web */}
          <Route element={<LandingLayout />}>
            <Route path="/product" element={<LandingPage />} />
            <Route path="/new" element={<NewRestaurantPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsAndPolicyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StaticDataProvider>
  </StrictMode>
);
