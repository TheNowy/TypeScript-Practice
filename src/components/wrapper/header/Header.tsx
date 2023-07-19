import { NavLink } from "react-router-dom";
import { useState } from "react";
import scss from "./Header.module.scss";

export const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const [ isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }
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
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
            </div>
            {/* <NavLink to="/" className={scss.link}>
              Home
            </NavLink>
            <NavLink to="/Catalog" className={scss.link}>
              Catalog
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
