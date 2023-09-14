import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Dropmenu from "./dropmenu/Dropmenu";
import scss from "./Header.module.scss";

import DownloadIcon from "@mui/icons-material/Download";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";

export const Header: React.FC = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    -window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div
        className={
          headerScroll
            ? `${scss.header} ${scss.active}`
            : `${scss.header}`
        }>
        <div className={scss.header_wrapper}>
          <NavLink to="/" className={scss.logo}>
            <img src="../../../../../Logo&White.png" alt="" />
            <h3 className={scss.logo_text}>nova</h3>
            <span>БЕТА 1.16.5</span>
          </NavLink>
          <div className={scss.links}>
            <NavLink to="/" className={scss.linksD}>
              <SupportAgentIcon /> Поддержка
            </NavLink>
            <NavLink to="/" className={scss.linksD}>
              <DownloadIcon /> Скачать
            </NavLink>
            <NavLink to="/" className={scss.linksD}>
              <LocalMallIcon /> Купить
            </NavLink>
            <NavLink to="/" className={scss.cabinet}>
              <LoginIcon />
              Авторизация
            </NavLink>
            <div
              className={`${scss.burger} ${isOpen ? scss.open : ""}`}
              onClick={() => {
                setOpenProfile((prev) => !prev);
                toggleMenu();
              }}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {openProfile && <Dropmenu />}
    </nav>
  );
};
