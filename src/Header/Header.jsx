import "./Header.css";
import { useState } from "react";

const Header = ({ name }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h2>{name}</h2>
      </div>
      <nav>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active mobile" : ""}`}>
          <li>Home</li>
          <li>Persons</li>
          <li>Books</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;