import React from "react";
import { Routes, Route } from "react-router-dom";

// multilanguage support
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// components
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Tarrifs from "./components/Tarrifs";
import ContactUs from "./components/ContactUs";
import AboutSectionThree from "./components/AboutSectionThree";
import Footer from "./components/footer";

// CSS
import "./css/App.css";
import "./css/navigation.css";

function App() {

  const { t } = useTranslation();
  return (
    <div>
      <Navigation/>

      <Routes>
        <Route path="/lime-web/" element={<Home />} />
        <Route
          path="/lime-web/tarrifs"
          element={
            <Tarrifs
             
            />
          }
        />
        <Route
          path="/lime-web/contactUs"
          element={
            <ContactUs
             
            />
          }
        />
        <Route
          path="/lime-web/services"
          element={
            <AboutSectionThree
             
            />
          }
        />
        <Route path="/lime-web" />
      </Routes>

      <Footer
        footerRightsText=" "
        creatorName=""
        creatorInfo=""
      />
    </div>
  );
}

export default App;
