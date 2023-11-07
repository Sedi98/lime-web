import React from "react";
import { useTranslation } from "react-i18next";


// css
import "../css/contactus.css";
export default function ContactUs({
 
}) {

  // functions must be here
  const contactCheck=()=>{
    alert('Mesajiniz ugurla gonderildi')
  }

  const { t, i18n } = useTranslation();
  return (
    <div className="div-contact">
      <div className="container-contact">
        <h2 className="headerText">{t("contact-text-header")}</h2>
        <p>{t("contact-text-header-paragraph")}</p>
        <label className="inputLabel" htmlFor="">
          {t("contact-text-nameInput")}
        </label>
        <input
          className="input"
          type="text"
          name=""
          id=""
          placeholder={t("contact-placeholder-nameInput")}
        />

        <label className="inputLabel" htmlFor="">
          {t("contact-text-mailInput")}
        </label>
        <input
          className="input"
          type="text"
          name=""
          id=""
          placeholder={t("contact-placeholder-mailInput")}
        />

        <label className="inputLabel" htmlFor="">
          {t("contact-text-textArea")}
        </label>
        <textarea
          className="input"
          name=""
          id=""
          cols="30"
          rows="20"
          placeholder={t("contact-placeholder-textArea")}
        ></textarea>
        <input type="button" value={t("contact-text-buttonSend")} onClick={contactCheck} />
      </div>
    </div>
  );
}
