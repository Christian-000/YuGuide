import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SliderComponent from "../Slider/Slider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../../actions";
import Cards from "../Cards/Cards";
import "./Home.module.css";
import Loader from "../Loader/Loader";
import { BiCoffeeTogo } from "react-icons/bi";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cardsArray = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(getAllCards()).then(() => setLoading(false));
  }, [dispatch]);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="containerHome">
        {/* <button>
        <Link to="/home/createDeck">create your deck</Link>
      </button> */}
        <SliderComponent />
        <br />
        <SearchBar />
        <br />
        {cardsArray.length === 0 ? null : <Cards />}
        <br />
        <button onClick={() => window.open("https://buymeacoffee.com/christianp1")} className="coffee"><BiCoffeeTogo/></button>
      </div>
    );
  }
}
