import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import logo from "../../assets/yugioh.png";
import flipCard from "../../assets/flipCardSound.mp3";

export default function LandingPage() {
  let audio = new Audio(flipCard);
  function handleSound() {
    audio.play();
  }
  return (
    <div className={style.father}>
      <div className={style.container}>
        <img src={logo} alt="not found" className={style.logo} />

        <div className={style.card}>
          <div className={style.front}></div>
          <div className={style.back}>
            <Link to="/home">
              <img
                onClick={handleSound}
                alt="not found"
                width={328}
                height={480}
                src="https://storage.googleapis.com/ygoprodeck.com/pics/10802915.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
