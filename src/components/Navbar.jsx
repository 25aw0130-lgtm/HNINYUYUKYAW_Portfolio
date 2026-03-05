import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav">
      <a className="nav__logo" href="#home" onClick={closeMenu}>
        My Portfolio
      </a>

      {/* hamburger */}
      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav__links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}