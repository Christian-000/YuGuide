import React from "react";
import Slider from "react-slick";
import WOW from "../../assets/WOW.mp3"
import style from "./Slider.module.css"
import about from "../../assets/about.jpg"

export default function SliderComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let audio = new Audio(WOW)
  return (
    <Slider {...settings}>
      <div onClick={() => window.open("https://www.konami.com/games")} className={style.firstDiv}>
        <img
          height={500}
          width="100%"
          src="https://sm.ign.com/ign_es/screenshot/default/konami-large-header_6xk4.jpg"
          alt="Konami"
        />
      </div>
      <div>
        <img
          src="https://airwallpaper.com/wp-content/uploads/wall001/Yugioh-Desktop-Image.jpg"
          width="100%"
          height={500}
          alt="dsfsf"
        />
      </div>
      <div>
        <img
          height={500}
          width="100%"
          src="https://i.pinimg.com/originals/2a/e6/d1/2ae6d1414fe81b753d8c4d54e673c605.jpg"
          alt=""
        />
      </div>
      <div onClick={() => {audio.play(); alert("What are you doing? o.O")}}>
        <img
          height={500}
          width="100%"
          src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/11/Dark-Magician-Girl-Fifth-Feature.jpg?q=50&fit=contain&w=943&h=499&dpr=1.5"
          alt=""
        />
      </div>
      <div onClick={() => window.open("https://www.konami.com/games")}>
        <img width="100%" height={500} src={about} alt="about-me" />
      </div>
    </Slider>
  );
}
