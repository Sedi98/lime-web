import React from "react";


import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


import { useState } from "react";
import { useEffect } from "react";

import i18next from "../i18n";
import { useTranslation } from "react-i18next";

export default function ({}) {
  const [value, setValue] = useState("");

  const [style, setStyle] = useState("list-nav collapsed");

  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "list-nav collapsed") setStyle("list-nav collapsed");
    else setStyle("list-nav removed");
};

  useEffect(() => {
    i18n.changeLanguage(value)
    
  
   
  }, [value])

  useEffect(() => {
    
    setValue(localStorage.getItem('i18nextLng'))
   
  
   
  }, [])
  

  const { t, i18n } = useTranslation();

  return (
    <>
      <nav className="navigation">
        <Link className="brand-logo" to="/lime-web/">
          {t("nav-link-brand")}
          
        </Link>
        <FaBars className="hidden-menu" onClick={changeStyle} />
        <div className={style}>
        <FaTimes className="hidden-close" onClick={changeStyle} />
          <Link className="link-a" to="/lime-web/">
            {t("nav-link-main")}
          </Link>
          <Link className="link-a" to="/lime-web/">
            {t("nav-link-about")}
          </Link>
          <Link className="link-a" to="/lime-web/services">
            {t("nav-link-services")}
          </Link>
          <Link className="link-a" to="/lime-web/tarrifs">
            {t("nav-link-tarrifs")}
          </Link>
          <Link className="link-a" to="/lime-web/contactUs">
            {t("nav-link-contact")}
          </Link>
          <select
            onChange={(event) => setValue(event.target.value)}
            defaultValue={value}
            className="nav-lang-select"
          >
            <option value="az">AZ</option>
            <option value="tr">TR</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>
    </>
  );
}
