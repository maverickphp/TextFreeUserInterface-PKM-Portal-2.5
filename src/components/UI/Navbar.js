import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#172b4d" }}
      >
        <div
          className="container"
          style={{ margin: "auto", justifyContent: "center" }}
        >
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
