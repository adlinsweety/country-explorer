import React from "react";
import { Link } from "react-router-dom";

import {
  useTheme
} from "../context/ThemeContext";

function Header() {

  const {
    darkMode,
    toggleTheme
  } = useTheme();

  return (
    <header className="header">

      <h2 className="logo">
        Country Explorer 🌍
      </h2>

      <nav className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/countries">
          Countries
        </Link>

        <Link to="/about">
          About
        </Link>
        <Link to="/contact">
  Contact
</Link>

      </nav>

      {/* THEME BUTTON */}
      <button
        className="theme-btn"
        onClick={
          toggleTheme
        }
      >
        {darkMode
          ? "☀️ Light"
          : "🌙 Dark"}
      </button>

    </header>
  );
}

export default Header;