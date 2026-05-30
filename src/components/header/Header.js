import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import profilePhoto from "../../assets/images/profile_photo.png";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {/* Checkbox for mobile hamburger menu */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        
        {/* Hamburger icon label */}
        <label
          className="menu-icon"
          htmlFor="menu-btn"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        {/* Profile + Name Logo */}
        <a href="/" className="logo">
          <img src={profilePhoto} className="header-profile-img" alt="Rahul Khandelwal" />
          <span className="logo-name">Rahul Khandelwal</span>
        </a>

        {/* Navigation Menu */}
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#reading">Reading</a>
          </li>
          <li>
            <a href="#youtube">YouTube</a>
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
