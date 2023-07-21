import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Dropmenu.module.scss";

interface DropmenuProps {
  isOpen: boolean;
}

const Dropmenu: React.FC<DropmenuProps> = ({ isOpen }) => {
  return (
    <div className={`${scss.wrapper} ${isOpen ? scss.open : ""}`}>
      <div className={scss.wrapper_box}>
        <NavLink to="/" className={scss.link}>
          Home
        </NavLink>
        <hr />
        <NavLink to="/Catalog" className={scss.link}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Dropmenu;
