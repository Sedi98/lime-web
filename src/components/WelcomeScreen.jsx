import React from "react";
import "../css/welcomeScreen.css";
import i18next from '../i18n'

import { useTranslation } from "react-i18next";

export default function WelcomeScreen() {
  const { t,i18n } = useTranslation();
  return (
    
    <>
      <div className="container-welcome">
        <div className="container-content">
          <h1 className="welcome-header">{i18next.t('welcome-header')}</h1>
          <p className="welcome-text">{i18next.t('welcome-title')}</p>
          <div className="welcome-buttons-div">
            <a className="welcome-buttons one" href="#about">
            {i18next.t('welcome-btn-about')}
            </a>
            <a className="welcome-buttons two" href="#contact">
            {i18next.t('welcome-btn-contact')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
