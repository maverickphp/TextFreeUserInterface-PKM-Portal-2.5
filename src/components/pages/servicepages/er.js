import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { useEffect } from "react";

import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

import er from "../audios/serviceaudios/er.mp3";

import step3 from "../audios/stepsaudios/step3.mp3";

import byhandstep4 from "../audios/stepsaudios/byhandstep4.mp3";

import erstep1 from "../audios/stepsaudios/erstep1.mp3";

import erstep2audio from "../audios/stepsaudios/erstep2.mp3";

import step1 from "../../UI/ServicesImages/step1.png";

import freestep3 from "../../UI/ServicesImages/freestep3.png";

import erstep2 from "../../UI/ServicesImages/erstep2.png";

import handstep4 from "../../UI/ServicesImages/handstep4.png";

const Services = (props) => {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    padding: "50px 0px",
    justifyContent: "center",
    margin: "auto",
  };

  const textStyle = {
    padding: "10px 5px",
    borderRadius: "250px",
    backgroundColor: "orange",
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
          <h2>ملازمین کی رجسٹریشن</h2>
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
            src={er}
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
                  src={erstep1}
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
                  src={erstep2audio}
                  controls
                />
              </div>
              <img className="img-fluid" src={erstep2} alt="stepsimage" />
            </div>
            {/* </div>
          <div className="d-flex flex-row" style={{ marginTop: "25px" }}> */}
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
              <img className="img-fluid" src={freestep3} alt="stepsimage" />
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
                  src={byhandstep4}
                  controls
                />
              </div>
              <img className="img-fluid" src={handstep4} alt="stepsimage" />
            </div>
          </div>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
};
export default Services;
