import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "./pic/logo_formal.jpg";

function Header() {
  let navigate = useNavigate();
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-logo">
          <a href="/">
            <img src={headerLogo} alt="logo" />
          </a>
        </div>
        <button onClick={() => navigate("/explore")}>Explore</button>
        <button onClick={() => navigate("/list-your-place")}>List Your Place</button>
        <button onClick={() => navigate("/about-us")}>About us</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </nav>
    </header>
  );
}

export default Header;
