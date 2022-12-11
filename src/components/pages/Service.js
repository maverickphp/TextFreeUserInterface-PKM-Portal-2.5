import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";

import cci from "./audios/serviceaudios/cci.mp3";
import gpv from "./audios/serviceaudios/gpv.mp3";
import cr from "./audios/serviceaudios/cr.mp3";
import er from "./audios/serviceaudios/er.mp3";
import tr from "./audios/serviceaudios/tr.mp3";
import lr from "./audios/serviceaudios/lr.mp3";
import vv from "./audios/serviceaudios/vv.mp3";
import ldl from "./audios/serviceaudios/ldl.mp3";
import wvr from "./audios/serviceaudios/wvr.mp3";
import cof from "./audios/serviceaudios/cof.mp3";

import step3 from "./audios/stepsaudios/step3.mp3";

import byhandstep4 from "./audios/stepsaudios/byhandstep4.mp3";
import bycourierstep4 from "./audios/stepsaudios/bycourierstep4.mp3";

import ccstep1 from "./audios/stepsaudios/ccstep1.mp3";
import cofstep1 from "./audios/stepsaudios/cofstep1.mp3";
import crstep1 from "./audios/stepsaudios/crstep1.mp3";
import erstep1 from "./audios/stepsaudios/erstep1.mp3";
import gpvstep1 from "./audios/stepsaudios/gpvstep1.mp3";
import ldlstep1 from "./audios/stepsaudios/ldlstep1.mp3";
import lrstep1 from "./audios/stepsaudios/lrstep1.mp3";
import trstep1 from "./audios/stepsaudios/trstep1.mp3";
import vvstep1 from "./audios/stepsaudios/vvstep1.mp3";
import wvrstep1 from "./audios/stepsaudios/wvrstep1.mp3";

import step1 from "../UI/ServicesImages/step1.png";

import ccstep3 from "../UI/ServicesImages/ccstep3.png";
import gpvstep3 from "../UI/ServicesImages/gpvstep3.png";
import ldlstep3 from "../UI/ServicesImages/ldlstep3.png";
import vvstep3 from "../UI/ServicesImages/vvstep3.png";
import freestep3 from "../UI/ServicesImages/freestep3.png";

import ccstep2 from "../UI/ServicesImages/ccstep2.png";
import cofstep2 from "../UI/ServicesImages/cofstep2.png";
import crstep2 from "../UI/ServicesImages/crstep2.png";
import erstep2 from "../UI/ServicesImages/erstep2.png";
import gpvstep2 from "../UI/ServicesImages/gpvstep2.png";
import ldlstep2 from "../UI/ServicesImages/ldlstep2.png";
import lrstep2 from "../UI/ServicesImages/lrstep2.png";
import trstep2 from "../UI/ServicesImages/trstep2.png";
import vvstep2 from "../UI/ServicesImages/vvstep2.png";
import wvrstep2 from "../UI/ServicesImages/wvrstep2.png";

import courierstep4 from "../UI/ServicesImages/courierstep4.png";
import handstep4 from "../UI/ServicesImages/handstep4.png";

export default function Services(props) {
  document.title = "PKM Punjab - Our Services";
  const myStyle = {
    padding: "50px 0px",
    justifyContent: "center",
    margin: "auto",
  };

  return (
    <Tab.Container
      {...props.changeProgress(20)}
      id="list-group-tabs"
      defaultActiveKey={window.location.hash}
    >
      <Col sm={12}>
        <Tab.Content className="col-12" style={myStyle}>
          <Tab.Pane eventKey="#id=a">
            <h2>کریکٹر سرٹیفکیٹ کا تعارف</h2>
            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-4"
              src={cci}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={ccstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={ccstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={ccstep1}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={ccstep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img
                  className="img-fluid"
                  src={courierstep4}
                  alt="stepsimage"
                />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={bycourierstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=b">
            <h2>جنرل پولیس کی تصدیق</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={gpv}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={gpvstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={gpvstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={gpvstep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img
                  className="img-fluid"
                  src={courierstep4}
                  alt="stepsimage"
                />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={bycourierstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane {...props.changeProgress(70)} eventKey="#id=c">
            <h2>لرنر ڈرائیونگ لائسنس کا تعارف</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={ldl}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={ldlstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={ldlstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={ldlstep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>

          <Tab.Pane eventKey="#id=h">
            <h2>ملازمین کی رجسٹریشن</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={er}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={erstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={erstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=i">
            <h2>کرایہ داروں کی رجسٹریشن</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={tr}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={trstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={trstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=j">
            <h2>گاڑی کی تصدیق</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={vv}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={vvstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={vvstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={vvstep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=k">
            <h2>نقصان کی رپورٹ</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={lr}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={lrstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={lrstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=l">
            <h2>کرائم رپورٹ کا تعارف</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={cr}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={crstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={crstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=m">
            <h2>خواتین پر تشدد کی رپورٹ</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={wvr}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={wvrstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={wvrstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img className="img-fluid" src={handstep4} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="#id=n">
            <h2>ایف آئی آر کی کاپی</h2>

            <ReactAudioPlayer
              style={{ width: "30%" }}
              className="mt-3"
              src={cof}
              controls
            />
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 1:</h2>
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
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cofstep1}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 2:</h2>
                <img className="img-fluid" src={cofstep2} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={cci}
                  controls
                />
              </div>
            </div>
            <div className="d-flex flex-row" style={{ marginTop: "25px" }}>
              <div className="col-5">
                <h2 className="text-start">Step 3:</h2>
                <img className="img-fluid" src={freestep3} alt="stepsimage" />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={step3}
                  controls
                />
              </div>
              <div className="col-5" style={{ marginLeft: "20px" }}>
                <h2 className="text-start">Step 4:</h2>
                <img
                  {...props.changeProgress(100)}
                  className="img-fluid"
                  src={handstep4}
                  alt="stepsimage"
                />
                <ReactAudioPlayer
                  style={{ width: "60%" }}
                  className="mt-3"
                  src={byhandstep4}
                  controls
                />
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Tab.Container>
  );
}
