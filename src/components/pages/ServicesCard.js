import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import "../../styles/ServicesCard.css";
import cc from "../UI/ServiceCardImages/10.png";
import ldl from "../UI/ServiceCardImages/9.png";
import wvr from "../UI/ServiceCardImages/8.png";
import tr from "../UI/ServiceCardImages/7.png";
import er from "../UI/ServiceCardImages/6.png";
import vr from "../UI/ServiceCardImages/5.png";
import cof from "../UI/ServiceCardImages/4.png";
import gpv from "../UI/ServiceCardImages/3.png";
import cr from "../UI/ServiceCardImages/2.png";
import lr from "../UI/ServiceCardImages/1.png";

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

export default function serviceCard() {
  const myStyle = {
    width: "15rem",
    padding: "10% 25%",
    overflow: "automatic",
    margin: "auto",
    borderRadius: 25,
  };

  const cardStyle = {
    color: "white",
    borderRadius: "5%",
    boxShadow: "20px 30px 50px 10px grey",
  };

  return (
    <div style={{ margin: "20px 0px" }}>
      <h1 className="mt-3 mb-4" style={{ fontSize: 42 }}>
        ہماری خدمات
      </h1>
      <div className="d-flex justify-content-center pb-2 pt-2">
        <Link style={cardStyle} to="/cc" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homecc}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="/gpv" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homegpv}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=c" className="card m-1 mx-2">
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
                backgroundColor: "red",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              لرنر ڈرائیونگ لائسنس
            </h5>
            <ReactAudioPlayer
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homeldl}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=h" className="card m-1 mx-2">
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
                backgroundColor: "#E9967A",  //peach color
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              ملازمین کی رجسٹریشن
            </h5>
            <ReactAudioPlayer
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homeer}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=n" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homecof}
            />
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <Link style={cardStyle} to="service#id=m" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homewvr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=l" className="card m-1 mx-2">
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
                backgroundColor: "purple",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              کرائم رپورٹ
            </h5>
            <ReactAudioPlayer
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homecr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=k" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={homelr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=i" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
              className="mt-1"
              controls
              src={hometr}
            />
          </div>
        </Link>
        <Link style={cardStyle} to="service#id=j" className="card m-1 mx-2">
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
              style={{
                padding: "5px",
                marginBottom: "4px",
                marginRight: "5px",
                borderRadius: "250px",
                height: "60px",
                width: "110px",
                backgroundColor: "black",
              }}
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
