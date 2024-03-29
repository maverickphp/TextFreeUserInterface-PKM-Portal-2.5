import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";
import "../../styles/ServicesCard.css";
import cc from "../UI/ServiceCardImages/10.png";
import ldl from "../UI/ServiceCardImages/9.png";
import wvr from "../UI/ServiceCardImages/8.png";
import tr from "../UI/ServiceCardImages/7.png";
import er from "../UI/ServiceCardImages/6.png";
import vv from "../UI/ServiceCardImages/5.png";
import cof from "../UI/ServiceCardImages/4.png";
import gpv from "../UI/ServiceCardImages/3.png";
import cr from "../UI/ServiceCardImages/2.png";
import lr from "../UI/ServiceCardImages/1.png";

import servicecard from "../pages/audios/serviceaudios/servicecard.mp3";
// import homecof from "../pages/audios/homeaudios/homecof.mp3";
// import homecr from "../pages/audios/homeaudios/homecr.mp3";
// import homeer from "../pages/audios/homeaudios/homeer.mp3";
// import homegpv from "../pages/audios/homeaudios/homegpv.mp3";
// import homeldl from "../pages/audios/homeaudios/homeldl.mp3";
// import homelr from "../pages/audios/homeaudios/homelr.mp3";
// import hometr from "../pages/audios/homeaudios/hometr.mp3";
// import homevr from "../pages/audios/homeaudios/homevr.mp3";
// import homewvr from "../pages/audios/homeaudios/homewvr.mp3";

const ServicesCard = () => {
  // const myStyle = {
  //   width: "15rem",
  //   padding: "10% 25%",
  //   overflow: "automatic",
  //   margin: "auto",
  //   borderRadius: 25,
  // };

  // const cardStyle = {
  //   color: "white",
  //   borderRadius: "5%",
  //   boxShadow: "30px 10px 50px 10px grey",
  // };

  useEffect(() => {
    const audios = document.querySelectorAll("audio");
    function pauseOtherAudios({ target }) {
      for (const audio of audios) {
        if (audio !== target) {
          audio.pause();
        }
      }
    }
    for (const audio of audios) {
      audio.addEventListener("play", pauseOtherAudios);
    }
  }, []);

  return (
    <>
      <div>
        <div
          className="text-start d-flex p-2 justify-content-start"
          style={{ top: 80, left: 0, position: "absolute" }}
        >
          <Link
            to="/"
            className="btn btn-warning"
            style={{
              fontFamily: "Noto Nastaliq Urdu, serif",
              fontSize: "32px",
              marginLeft: "auto",
              paddingBottom: "20px",
            }}
          >
            &larr; واپس جائیے
          </Link>
        </div>
        <div
          className="text-end d-flex p-2 justify-content-end"
          style={{ top: 80, right: 0, position: "absolute" }}
        >
          <Link
            to="/centers"
            className="btn btn-danger"
            style={{
              fontFamily: "Noto Nastaliq Urdu, serif",
              fontSize: "32px",
              marginLeft: "auto",
              paddingBottom: "20px",
            }}
          >
            مراکز &rarr;
          </Link>
        </div>
        <h1 style={{ fontSize: 36, marginTop: "90px" }}>ہماری خدمات</h1>
        <ReactAudioPlayer
          style={{
            padding: "5px",
            marginBottom: "4px",
            marginTop: "25px",
            marginRight: "5px",
            borderRadius: "250px",
            height: "60px",
            width: "110px",
            backgroundColor: "black",
          }}
          loop="true"
          autoPlay
          src={servicecard}
          controls
        />
      </div>

      <section className="our-webcoderskull" style={{ marginTop: "25px" }}>
        <div className="container">
          <ul className="row">
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={cc} className="img-responsive" alt="" />
                </figure>
                <Link to="/cc">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "blue",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    کریکٹر سرٹیفیکیٹ
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={gpv} className="img-responsive" alt="" />
                </figure>
                <Link to="/gpv">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "green",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    جنرل پولیس کی تصدیق
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={ldl} className="img-responsive" alt="" />
                </figure>
                <Link to="/ldl">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "red",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    لرنر ڈرائیونگ لائسنس
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={er} className="img-responsive" alt="" />
                </figure>
                <Link to="/er">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "#E9967A",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    ملازمین کی رجسٹریشن
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={cof} className="img-responsive" alt="" />
                </figure>
                <Link to="/cof">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "orange",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    ایف آئی آر کی کاپی
                  </h3>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="our-webcoderskull">
        <div className="container">
          <ul className="row">
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={wvr} className="img-responsive" alt="" />
                </figure>
                <Link to="/wvr">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "pink",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    خواتین پر تشدد کی رپورٹ
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={cr} className="img-responsive" alt="" />
                </figure>
                <Link to="/cr">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "purple",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    کرائم رپورٹ
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={lr} className="img-responsive" alt="" />
                </figure>
                <Link to="/lr">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "black",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    نقصان کی رپورٹ
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={tr} className="img-responsive" alt="" />
                </figure>
                <Link to="/tr">
                  <h3
                    className="card-title"
                    style={{
                      fontSize: "19px",
                      backgroundColor: "grey",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    کرایہ داروں کی رجسٹریشن
                  </h3>
                </Link>
              </div>
            </li>
            <li className="col">
              <div
                className="cnt-block equal-hight"
                style={{ height: "349px;" }}
              >
                <figure>
                  <img src={vv} className="img-responsive" alt="" />
                </figure>
                <Link to="/vv">
                  <h3
                    className="card-title"
                    style={{
                      backgroundColor: "gold",
                      padding: "15px",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  >
                    گاڑیوں کی رجسٹریشن
                  </h3>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <div className="d-flex justify-content-center pb-2 pt-2">
          <Link style={cardStyle} to="/cc" className="card m-1 mx-2">
            <img
              style={myStyle}
              src={cc}
              className="card-img-top img-thumbnail"
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
            </div>
          </Link>
          <Link style={cardStyle} to="/ldl" className="card m-1 mx-2">
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
            </div>
          </Link>
          <Link style={cardStyle} to="/er" className="card m-1 mx-2">
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
                  backgroundColor: "#E9967A", //peach color
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                ملازمین کی رجسٹریشن
              </h5>
            </div>
          </Link>
          <Link style={cardStyle} to="/cof" className="card m-1 mx-2">
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
            </div>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link style={cardStyle} to="/wvr" className="card m-1 mx-2">
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
            </div>
          </Link>
          <Link style={cardStyle} to="/cr" className="card m-1 mx-2">
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
            </div>
          </Link>
          <Link style={cardStyle} to="/lr" className="card m-1 mx-2">
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
            </div>
          </Link>
          <Link style={cardStyle} to="/tr" className="card m-1 mx-2">
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
            </div>
          </Link>
          <Link style={cardStyle} to="/vv" className="card m-1 mx-2">
            <img
              style={myStyle}
              src={vv}
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
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default ServicesCard;
