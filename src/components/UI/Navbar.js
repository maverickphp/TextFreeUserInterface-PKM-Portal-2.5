import React from "react";
import logo from "./logo.png";
// import ReactAudioPlayer from "react-audio-player";
import { Link, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";
import AudioButton from "./AudioButton";

export default function Navbar() {
  let location = useLocation();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#172b4d" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <AudioButton color="red" />
                {/* <ReactAudioPlayer
                  controls
                  style={{
                    height: "35px",
                    width: "200px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                  src={navbaraudio}
                /> */}
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={`btn btn-primary mx-1 my-1  ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services#id=a"
                  className={`btn btn-secondary mx-1 my-1  ${
                    location.pathname === "/services#id=a" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="centers"
                  className={`btn btn-success mx-1 my-1  ${
                    location.pathname === "/centers" ? "active" : ""
                  }`}
                >
                  Our Centers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
