import "../css/App.css";
import "../css/navigation.css";

import { useTranslation, } from "react-i18next";
// components

import WelcomeScreen from "../components/WelcomeScreen";
import AboutScreen from "../components/AboutScreen";
import AboutSectionTwo from "../components/AboutSectionTwo";
import AboutSectionThree from "../components/AboutSectionThree";
import Tarrifs from "../components/Tarrifs";
import ContactUs from "../components/ContactUs";

function Home() {

  const { t } = useTranslation();
  return (
    <>
      <WelcomeScreen/>

      <AboutScreen/>

      <AboutSectionTwo/>

      <AboutSectionThree/>

      <Tarrifs/>

      <ContactUs/>
    </>
  );
}

export default Home;
