import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

import { useEffect } from "react";

import cci from "../audios/serviceaudios/cci.mp3";

import step3 from "../audios/stepsaudios/step3.mp3";

import bycourierstep4 from "../audios/stepsaudios/bycourierstep4.mp3";

import ccstep1 from "../audios/stepsaudios/ccstep1.mp3";

import ccstep2audio from "../audios/stepsaudios/ccstep2.mp3";

import step1 from "../../UI/ServicesImages/step1.png";
import ccstep3 from "../../UI/ServicesImages/ccstep3.png";
import ccstep2 from "../../UI/ServicesImages/ccstep2.png";

import courierstep4 from "../../UI/ServicesImages/courierstep4.png";

const Services = (props) => {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    padding: "40px 0px",
    justifyContent: "center",
    margin: "auto",
  };

  const textStyle = {
    padding: "10px 5px",
    borderRadius: "250px",
    backgroundColor: "black",
    color: "white",
    margin: "auto",
    width: "70px",
    height: "70px",
  };
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
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={window.location.hash}
    >
      <div
        className="text-start d-flex p-2 justify-content-start"
        style={{ top: 80, left: 0, position: "absolute" }}
      >
        <Link
          to="/services"
          className="btn btn-warning text-center justify-content-center d-inline-flex p-2"
          style={{
            fontFamily: "Noto Nastaliq Urdu, serif",
            fontSize: "32px",
            marginLeft: "20px",
            paddingBottom: "20px",
          }}
        >
          &larr; واپس جائیے
        </Link>
      </div>
      <Col sm={12}>
        <Tab.Content className="col-12" style={myStyle}>
          <h2>کریکٹر سرٹیفکیٹ کا تعارف</h2>
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
            className="mt-4"
            src={cci}
            autoPlay
            loop="true"
            controls
          />

          <div className="col-3">
            <Link
              to="/centers"
              type="button"
              className="btn btn-primary"
              style={{
                marginTop: "35px",
                fontFamily: "Noto Nastaliq Urdu, serif",
                fontSize: "22px",
                padding: "10px",
              }}
            >
              قریب ترین مرکز
            </Link>
          </div>
          <div className="d-flex flex-row">
            <div className="col-3">
              <div className="d-inline-flex p-2">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  1
                </h2>
                <ReactAudioPlayer
                  style={{
                    padding: "5px",
                    marginBottom: "4px",
                    marginLeft: "5px",
                    borderRadius: "250px",
                    height: "60px",
                    width: "110px",
                    backgroundColor: "black",
                  }}
                  className="mt-3"
                  src={ccstep1}
                  controls
                />
              </div>
              <img className="img-fluid" src={step1} alt="stepsimage" />
            </div>
            <div className="col-3">
              <div className="d-inline-flex p-2">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  2
                </h2>
                <ReactAudioPlayer
                  style={{
                    padding: "5px",
                    marginBottom: "4px",
                    marginLeft: "5px",
                    borderRadius: "250px",
                    height: "60px",
                    width: "110px",
                    backgroundColor: "black",
                  }}
                  className="mt-3"
                  src={ccstep2audio}
                  controls
                />
              </div>
              <img className="img-fluid" src={ccstep2} alt="stepsimage" />
            </div>

            <div className="col-3">
              <div className="d-inline-flex p-2">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  3
                </h2>
                <ReactAudioPlayer
                  style={{
                    padding: "5px",
                    marginBottom: "4px",
                    marginLeft: "5px",
                    borderRadius: "250px",
                    height: "60px",
                    width: "110px",
                    backgroundColor: "black",
                  }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <img className="img-fluid" src={ccstep3} alt="stepsimage" />
            </div>
            <div className="col-3">
              <div className="d-inline-flex p-2">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  4
                </h2>
                <ReactAudioPlayer
                  {...props.changeProgress(100)}
                  style={{
                    padding: "5px",
                    marginBottom: "4px",
                    marginLeft: "5px",
                    borderRadius: "250px",
                    height: "60px",
                    width: "110px",
                    backgroundColor: "black",
                  }}
                  className="mt-3"
                  src={bycourierstep4}
                  controls
                />
              </div>
              <img className="img-fluid" src={courierstep4} alt="stepsimage" />
            </div>
          </div>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
};

export default Services;
