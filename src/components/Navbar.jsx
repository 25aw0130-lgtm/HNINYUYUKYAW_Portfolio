import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    closeMenu();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  return (
    <header className="nav">
      <button className="nav__logo" onClick={() => handleNavClick("home")}>
        My Portfolio
      </button>

      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav__links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
        <button onClick={() => handleNavClick("skills")}>Skills</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
      </nav>
    </header>
  );
}