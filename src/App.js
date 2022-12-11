import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";

import Home from "./components/pages/Home";
import Centers from "./components/pages/Centers";
import Services from "./components/pages/ServicesCard";
import Service from "./components/pages/Service";

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
