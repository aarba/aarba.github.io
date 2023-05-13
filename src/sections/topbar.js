import React from "react";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <a href="mailto:aarbaarmenia@gmail.com">
            <i className="bi bi-envelope" />
            <span>aarbaarmenia@gmail.com</span>
          </a>

          <a href="tel: +374 44 151654" style={{ marginLeft: "20px" }}>
            <i className="bi bi-phone" />
            <span>+374 44 151654</span>
          </a>
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="https://www.facebook.com/aarba23" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.facebook.com/aarba23" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.facebook.com/aarba23" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/aarba23" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <div className="d-none d-lg-flex social-links align-items-center lang-drop_m">
            <select
              onChange={handleChange}
              className="form-select lang-selector_m"
              aria-label="Default select example"
              value={i18n.language}
            >
              <option value="arm">Հայ</option>
              {/* <option value="ru">Ру</option>
          <option value="en">Eng</option> */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
