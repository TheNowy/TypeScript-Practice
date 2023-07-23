import React from "react";
import { NavLink } from "react-router-dom";
import scss from "./Dropmenu.module.scss";

const Dropmenu: React.FC = () => {
  return (
    <div className={scss.wrapper}>
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
