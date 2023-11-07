import React from "react";

// img
import aboutPhoto from "../media/background/img-06.png";
import aboutPhotoTwo from "../media/background/img-03.png";
import { useTranslation,  } from "react-i18next";

// css
import "../css/aboutScreen.css";

export default function AboutScreen({
 
}) {
  const { t } = useTranslation();
  return (
    <div id="#about" className="about-container">
      <div className="center-container">
        <div className="about-words">
          <h2 className="title-header">{t("about-one-text-header")}</h2>
          <p className="text-header">{t("about-one-text-one")}</p>
          <p className="text-header">{t("about-one-text-two")}</p>
          <p className="text-header">{t("about-one-text-three")}</p>
          <p className="text-header">{t("about-one-text-four")}</p>
        </div>
        <div className="about-photo">
          <img src={aboutPhoto} alt="" />
        </div>
      </div>

      
    </div>
  );
}
