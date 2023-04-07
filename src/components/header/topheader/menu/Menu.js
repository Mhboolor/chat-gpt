import React from "react";
import "./Menu.css";
import LogoImage from "../../../../assets/images/GPT-3.png";

function Menu() {
  return (
    <nav className="header__navbar">
      <div className="header__logo-container">
        <img src={LogoImage} alt="Logo" className="header__logo" />
      </div>
      <ul className="header__menu">
        <a href="#" className="header-menu-icon">=</a>
        <li className="header__menu-item">
          <a href="#" className="header__menu-link">
            Home
          </a>
        </li>
        <li className="header__menu-item">
          <a href="#" className="header__menu-link">
            What is GPT?
          </a>
        </li>
        <li className="header__menu-item">
          <a href="#" className="header__menu-link">
            Open AI
          </a>
        </li>
        <li className="header__menu-item">
          <a href="#" className="header__menu-link">
            Case Studies
          </a>
        </li>
        <li className="header__menu-item">
          <a href="#" className="header__menu-link">
            Library
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
