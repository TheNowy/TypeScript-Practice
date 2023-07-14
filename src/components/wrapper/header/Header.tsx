import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header = () => {
  const activeLink = (isActive) => {
    return {
      border: isActive ? "solid 1px white" : "none",
    };
  };

  return (
    <nav>
      <div className={scss.header}>
        <NavLink
          to="/"
          className={`${scss.link} ${scss.activeLinks}`}
          style={activeLink(true)}
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={scss.link}
          style={activeLink(false)}
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};
