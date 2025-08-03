import "./App.css";
import logo from "./logo.svg";
import Destination from "./Destination/Destination";
import Home from "./Home/Home";
import Crew from "./Crew/Crew";
import Technology from "./Technology/Technology";
import { Route, Routes, Link } from "react-router-dom";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (index) => {
    setIndex(index);
    closeMenu();
  };

  const handleOutsideClick = (event) => {
    if (
      !event.target.closest(".header-nav") &&
      !event.target.closest(".hamburger")
    ) {
      closeMenu();
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return (
    <header>
      <div
        className={`hamburger${isMenuOpen ? " open" : ""}`}
        onClick={handleMenuClick}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <img id="logo" src={logo} alt="logo" />
      <nav className={`header-nav${isMenuOpen ? " activated" : ""}`}>
        <ul>
          <li onClick={closeMenu}>
            <Link
              to="/home"
              className={index === 0 ? "activated" : ""}
              onClick={() => handleLinkClick(0)}
            >
              HOME
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/destination"
              className={index === 1 ? "activated" : ""}
              onClick={() => handleLinkClick(1)}
            >
              DESTINATION
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/crew"
              className={index === 2 ? "activated" : ""}
              onClick={() => handleLinkClick(2)}
            >
              CREW
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              to="/technology"
              className={index === 3 ? "activated" : ""}
              onClick={() => handleLinkClick(3)}
            >
              TECHNOLOGY
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route />
      </Routes>
    </header>
  );
}

export default App;
