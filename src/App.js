import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

import Home from "./components/pages/Home";
import Centers from "./components/pages/Centers";
import Services from "./components/pages/ServicesCard";
import Service from "./components/pages/Service";
import CC from "./components/pages/servicepages/cc";
import GPV from "./components/pages/servicepages/gpv";
import COF from "./components/pages/servicepages/cof";
import ER from "./components/pages/servicepages/er";
import CR from "./components/pages/servicepages/cr";
import LDL from "./components/pages/servicepages/ldl";
import LR from "./components/pages/servicepages/lr";
import TR from "./components/pages/servicepages/tr";
import VV from "./components/pages/servicepages/vv";
import WVR from "./components/pages/servicepages/wvr";

import LoadingBar from "react-top-loading-bar";
import PageNotFound from "./components/pages/Error404";

export default function App() {

  useEffect(() => {
    changeProgress();
  }, []);

  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(0);
  const sendLink = (event) => {
    setLink(event.target.href);
  };
  const changeProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar onClick={sendLink} />
        <div className="content-wrap">
          <Routes>
            <Route
              path="/"
              element={<Home changeProgress={changeProgress} />}
            />
            <Route
              path="services"
              element={<Services changeProgress={changeProgress} link={link} />}
            />
            <Route
              path="cc"
              element={<CC changeProgress={changeProgress} link={link} />}
            />
            <Route
              path="gpv"
              element={<GPV changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="cof"
              element={<COF changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="cr"
              element={<CR changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="er"
              element={<ER changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="ldl"
              element={<LDL changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="lr"
              element={<LR changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="tr"
              element={<TR changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="vv"
              element={<VV changeProgress={changeProgress} link={link} />}
            />
             <Route
              path="wvr"
              element={<WVR changeProgress={changeProgress} link={link} />}
            />
            <Route
              path="services/service"
              element={<Service changeProgress={changeProgress} link={link} />}
            />
            <Route
              path="centers"
              element={<Centers changeProgress={changeProgress} />}
            />
            <Route
              path="*"
              element={<PageNotFound changeProgress={changeProgress} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
