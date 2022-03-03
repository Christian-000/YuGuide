import React from "react";
import yugif from "../../assets/yugi.gif";
import style from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={style.container}>
      <h2 className={style.loader_title}>Its time to dududuel</h2>
      <img className={style.loader_img} src={yugif} alt="Loading..." />
    </div>
  );
}
