import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left_div}>
        <ul className={style.menu}>
          <li className={style.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active item_button" : "item_button"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active item_button" : "item_button"
              }
            >
              About
            </NavLink>
          </li>
          {/* <li className={style.item}>
                        <div className={style.item_button} tabIndex="2">COMMUNITY</div>
                    </li> */}
        </ul>
      </div>
      <div className={style.right_div}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "active item_button" : "item_button"
          }
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
