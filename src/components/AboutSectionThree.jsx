import React from 'react'
import aboutPhotoThree from '../media/background/img-08.png'
import '../css/aboutScreen.css'
import { useTranslation,  } from "react-i18next";

export default function AboutSectionThree() {
  const { t } = useTranslation();
  return (
    <div id="#about" className="about-container">
      <div className="center-container-three">
        <div className="about-words">
          <h2 className="title-header">{t("about-try-text-header")}</h2>
          <p className="text-header">{t("about-try-text-one")}</p>
          <p className="text-header">{t("about-try-text-two")}</p>
         
          <button className='demo-button'>{t("about-try-button-text")}</button>
        </div>
        <div className="about-photo">
          <img src={aboutPhotoThree} alt="" />
        </div>
      </div>

      
    </div>
  )
}
