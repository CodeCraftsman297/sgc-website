import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <a href="#home" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Shree Ganesh Classes Logo"
          />
        </a>
      </div>

      <ul
        id="primary-navigation"
        className={menuOpen ? "nav-links active" : "nav-links"}
      >
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#courses" onClick={closeMenu}>Courses</a>
        </li>

        <li>
          <a href="#results" onClick={closeMenu}>Results</a>
        </li>

        <li>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? (
          <FaTimes aria-hidden="true" />
        ) : (
          <FaBars aria-hidden="true" />
        )}
      </button>

    </nav>
  );
}

export default Navbar;