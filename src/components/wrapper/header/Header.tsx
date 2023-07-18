import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <nav>
      <div className={scss.header}>
        <div className={scss.logo}>
          <h1>Nowy</h1>
        </div>
        <div className={scss.links}>
          <NavLink to="/" className={scss.link}>
            Home
          </NavLink>
          <NavLink to="/blog" className={scss.link}>
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
