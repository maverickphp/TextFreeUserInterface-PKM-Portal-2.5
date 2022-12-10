import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import "../../styles/ServicesCard.css";
import cc from "./ServiceCardImages/10.png";
import ldl from "./ServiceCardImages/9.png";
import wvr from "./ServiceCardImages/8.png";
import tr from "./ServiceCardImages/7.png";
import er from "./ServiceCardImages/6.png";
import vr from "./ServiceCardImages/5.png";
import cof from "./ServiceCardImages/4.png";
import gpv from "./ServiceCardImages/3.png";
import cr from "./ServiceCardImages/2.png";
import lr from "./ServiceCardImages/1.png";

import homecc from "../pages/audios/homeaudios/homecc.mp3";
import homecof from "../pages/audios/homeaudios/homecof.mp3";
import homecr from "../pages/audios/homeaudios/homecr.mp3";
import homeer from "../pages/audios/homeaudios/homeer.mp3";
import homegpv from "../pages/audios/homeaudios/homegpv.mp3";
import homeldl from "../pages/audios/homeaudios/homeldl.mp3";
import homelr from "../pages/audios/homeaudios/homelr.mp3";
import hometr from "../pages/audios/homeaudios/hometr.mp3";
import homevr from "../pages/audios/homeaudios/homevr.mp3";
import homewvr from "../pages/audios/homeaudios/homewvr.mp3";

export default function ServicesCard() {
  const myStyle = {
    width: "18rem",
    padding: "20%",
    overflow: "automatic",
    margin: "auto",
    borderRadius: 25,
  };

  const cardStyle = {
    textDecoration: "none",
    color: "white",
    borderRadius: "5%",
    boxShadow: "20px 20px 50px 10px grey",
  };

  return (
    <div style={{ margin: "80px 0px" }}>
      <h1 className="mt-5 mb-4" style={{ fontSize: 52 }}>
        ہماری خدمات
      </h1>
      <div className="d-flex justify-content-center pb-2 pt-2">
        <Link style={cardStyle} to="services#id=a" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cc}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "blue",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              کریکٹر سرٹیفیکیٹ
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homecc}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=b" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={gpv}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "green",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              جنرل پولیس کی تصدیق
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homegpv}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=c" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={ldl}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "violet",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              لرنر ڈرائیونگ لائسنس
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homeldl}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=h" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={er}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "indigo",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              ملازمین کی رجسٹریشن
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homeer}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=n" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cof}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "orange",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              ایف آئی آر کی کاپی
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homecof}
            />
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link style={cardStyle} to="services#id=m" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={wvr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "pink",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              خواتین پر تشدد کی رپورٹ
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homewvr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=l" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={cr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "magenta",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              کرائم رپورٹ
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homecr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=k" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={lr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              نقصان کی رپورٹ
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homelr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=i" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={tr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "grey",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              کرایہ داروں کی رجسٹریشن
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={hometr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="services#id=j" className="card m-1 mx-2">
          <img
            style={myStyle}
            src={vr}
            className="card-img-top  img-thumbnail"
            alt="Cardimg1"
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                backgroundColor: "gold",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              گاڑیوں کی رجسٹریشن
            </h5>
            <ReactAudioPlayer
              style={{ width: "100%" }}
              className="mt-1"
              controls
              src={homevr}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
