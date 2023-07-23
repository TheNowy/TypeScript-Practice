import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropmenu from "./dropmenu/Dropmenu";
import scss from "./Header.module.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={scss.header}>
        <div className={scss.header_wrapper}>
          <NavLink to="/" className={scss.logo}>
            Nowy
          </NavLink>
          <div className={scss.links}>
            <div
              className={`${scss.burger} ${isOpen ? scss.open : ""}`}
              onClick={() => {
                setOpenProfile((prev) => !prev);
                toggleMenu();
              }}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {openProfile && <Dropmenu/>}
    </nav>
  );
};
