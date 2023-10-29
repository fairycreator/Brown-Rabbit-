import React, { useState } from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">WORLD BARISTA CUP</div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
