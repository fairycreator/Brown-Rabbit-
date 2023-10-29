import React from "react";
import "./Menu.css";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
        <ul>
          <li>
            <a href="# ">About us</a>
          </li>
          <li>
            <a href="# ">Events</a>
          </li>
          <li>
            <a href="# ">Nordic roaster</a>
          </li>
          <li>
            <a href="# ">Results</a>
          </li>
          <li>
            <a href="# ">Links</a>
          </li>
          <li>
            <a href="# ">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
