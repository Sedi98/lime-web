import React from "react";
import { FaChevronRight} from "react-icons/fa";
import { useTranslation,  } from "react-i18next";


// img

import aboutPhotoTwo from "../media/background/img-07.png";

// css
import "../css/aboutScreen.css";
import "../css/tarrifs.css";


export default function Tarrifs() {
  const { t } = useTranslation();
  return (
    <div id="#aboutTwo" className="about-container-two">
      <div className="center-container-reverse">
        <div className="about-photo">
          <img src={aboutPhotoTwo} alt="" />
        </div>
        <div className="about-words">
          <h2 className="title-header">{t("tarrif-text-header")}</h2>

          <h1 className="title-header">{t("tarrif-text-title-demo")}</h1>
          <p className="text-header">{t("tarrif-text-demo")}</p>
          

          <h1 className="title-header">{t("tarrif-text-title-monthly")}</h1>
          <p className="text-header">{t("tarrif-text-monthly")}</p>
          

          <h1 className="title-header">{t("tarrif-text-title-halfYear")}</h1>
          <p className="text-header">{t("tarrif-text-halfYear")}</p>
          

          <h1 className="title-header">{t("tarrif-text-title-yearly")}</h1>
          <p className="text-header">{t("tarrif-text-yearly")}</p>
          <button>{t("tarrif-text-button")} </button>
        </div>
      </div>
    </div>
  );
}
