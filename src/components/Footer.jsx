import React from "react";
import { useState, useEffect } from "react";
import "../css/footer.css";

import { useTranslation, } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  const [year, setYear] = useState();

  useEffect(() => {
    let date = new Date();
    setYear(date.getFullYear());
    
  }, []);
  return (
    <footer>
      <div className="footer-container">
        <p>
          2022-{year}
          {t("footer-text-rights")}
        </p>
        <div className="creator-text-division">
          {" "}
          <a href="http://smemmedov.lovestoblog.com/" target="_blank">
            {t("footer-text-developer")}
          </a>
          -<p>{t("footer-text-devInfo")}</p>
        </div>
      </div>
    </footer>
  );
}
