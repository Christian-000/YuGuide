import React from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.module.css"
import logo from "../../assets/yugioh.png"
import flipCard from "../../assets/flipCardSound.mp3"

export default function LandingPage() {
  let audio = new Audio(flipCard)
  function handleSound(){
    audio.play();
  } 
  return (
    <div className="container">
      <img src={logo} className="logo"/>

      <div className="card">
    <div className="front"></div>
    <div className="back">
      <Link to="/home"><img onClick={handleSound} width={328} height={480} src="https://storage.googleapis.com/ygoprodeck.com/pics/10802915.jpg"/></Link>
    </div>
  </div>
    </div>
  )
}
