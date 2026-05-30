import React, { useContext } from "react";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import profilePhoto from "../../assets/images/profile_photo.jpg";

function Header() {
  const { isDark } = useContext(StyleContext);

  const closeMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      menuBtn.checked = false;
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {/* Checkbox for mobile hamburger menu */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />

        {/* Hamburger icon label */}
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        {/* Profile + Name Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
            src={profilePhoto}
            className="header-profile-img"
            alt="Rahul Khandelwal"
          />
          <span className="logo-name">Rahul Khandelwal</span>
        </NavLink>

        {/* Navigation Menu */}
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              activeClassName="active"
              onClick={closeMenu}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/reading" activeClassName="active" onClick={closeMenu}>
              Reading
            </NavLink>
          </li>
          <li>
            <NavLink to="/youtube" activeClassName="active" onClick={closeMenu}>
              YouTube
            </NavLink>
          </li>
        </ul>

        {/* Theme Switcher always top-right */}
        <div className="theme-toggle-wrapper">
          <ToggleSwitch />
        </div>
      </header>
    </Headroom>
  );
}
export default Header;
