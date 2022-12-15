import React from "react";
import "../../styles/HeroSection.css";
import { Link } from "react-router-dom";

import homeaudio from "../pages/audios/homeaudios/homehero.mp3";

import ReactAudioPlayer from "react-audio-player";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <div className="content">
            <ReactAudioPlayer
              src={homeaudio}
              autoPlay
              controls
              loop="true"
              style={{
                padding: "5px",
                marginLeft: "80px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                marginTop:"170px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
            />
            <Link
              to="/services"
              type="button"
              style={{
                padding: "15px 0px",
                width: "250px",
                fontSize: "36px",
                fontFamily: "Noto Nastaliq Urdu, serif",
              }}
              className="btn btn-warning my-2"
            >
              خدمات
            </Link>
            <Link
              to="/centers"
              type="button"
              style={{
                padding: "15px 0px",
                width: "250px",
                fontSize: "36px",
                fontFamily: "Noto Nastaliq Urdu, serif",
              }}
              className="btn btn-danger my-2"
            >
              مراکز
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
