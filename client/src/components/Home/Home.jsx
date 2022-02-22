import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SliderComponent from "../Slider/Slider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../../actions";
import Cards from "../Cards/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const cardsArray = useSelector((state) => state.cards);
  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);
  console.log(cardsArray);
  return (
    <div>
      <button>
        <Link to="/home/createDeck">create your deck</Link>
      </button>
      <br />
      <SliderComponent />
      <br />
      <h1>find your letter</h1>
      <SearchBar />
      <br />
      {cardsArray.length === 0? <h1>NINGUNA CARTA</h1> : <Cards/>}
    </div>
  );
}
