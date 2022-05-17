import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import "./stylesheet.css";
import Body from "./components/body";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>
);
