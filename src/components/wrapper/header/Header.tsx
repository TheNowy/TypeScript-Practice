import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header = () => {
  return (
    <nav>
      <div className={scss.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};
