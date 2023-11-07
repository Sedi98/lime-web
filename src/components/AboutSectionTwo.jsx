import React from "react";
import "../css/aboutScreen.css";

// img

import aboutPhotoTwo from "../media/background/img-03.png";
import { useTranslation } from "react-i18next";

// css
import "../css/aboutScreen.css";

export default function AboutSectionTwo() {
  const { t } = useTranslation();
  return (
    <div id="#aboutTwo" className="about-container-two">
      <div className="center-container-reverse">
        <div className="about-photo">
          <img src={aboutPhotoTwo} alt="" />
        </div>
        <div className="about-words">
          <h2 className="title-header">{t("about-two-text-header")}</h2>
          <p className="text-header">{t("about-two-text-one")}</p>
          <p className="text-header">{t("about-two-text-two")}</p>
          <p className="text-header">{t("about-two-text-three")}</p>
          
        </div>
      </div>
    </div>
  );
}
