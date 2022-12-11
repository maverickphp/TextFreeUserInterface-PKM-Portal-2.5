import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";


import cof from "../audios/serviceaudios/cof.mp3";

import step3 from "../audios/stepsaudios/step3.mp3";

import byhandstep4 from "../audios/stepsaudios/byhandstep4.mp3";


import cofstep1 from "../audios/stepsaudios/cofstep1.mp3";


import step1 from "../../UI/ServicesImages/step1.png";

import freestep3 from "../../UI/ServicesImages/freestep3.png";

import cofstep2 from "../../UI/ServicesImages/cofstep2.png";



import handstep4 from "../../UI/ServicesImages/handstep4.png";

export default function Services(props) {
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
  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={window.location.hash}
    >
      <Col sm={12}>
        <Tab.Content className="col-10" style={myStyle}>
            <h2>ایف آئی آر کی کاپی</h2>

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
              className="mt-3"
              src={cof}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-6">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  1
                </h2>
                <img className="img-fluid" src={step1} alt="stepsimage" />
                <Link
                  to="/centers"
                  type="button"
                  className="btn btn-primary"
                  style={{ marginTop: "-45px", marginRight: "20px" }}
                >
                  قریب ترین مرکز
                </Link>
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
                  className="mt-3"
                  src={cofstep1}
                  controls
                />
              </div>
              <div className="col-6" style={{ marginLeft: "20px" }}>
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  2
                </h2>
                <img className="img-fluid" src={cofstep2} alt="stepsimage" />
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
                  className="mt-3"
                  src={cof}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-6">
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  3
                </h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
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
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-6" style={{ marginLeft: "20px" }}>
                <h2 className="mb-3 mt-2 text-center" style={textStyle}>
                  4
                </h2>
                <img
                  {...props.changeProgress(100)}
                  className="img-fluid"
                  src={handstep4}
                  alt="stepsimage"
                />
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
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
}