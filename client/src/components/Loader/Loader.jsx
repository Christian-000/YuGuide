import React from "react";
import yugif from "../../assets/yugi.gif";
import "./Loader.module.css"

export default function Loader() {
  return (
    <div className="container">
      <h2 className="loader-title">Its time to dududuel</h2>
      <img className="loader-img" src={yugif} alt="Loading..." />
    </div>
  );
}
