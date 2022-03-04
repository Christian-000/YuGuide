import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SliderComponent from "../Slider/Slider";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../../actions";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";
import Loader from "../Loader/Loader";
import { BiCoffeeTogo } from "react-icons/bi";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const isActivate = useSelector(state => state.find)
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
        <br className={style.brHome} />
        {cardsArray.length === 0 && isActivate? <h3 className={style.noResults}>No results found</h3> : null}
        {cardsArray.length === 0 ? null : <Cards />}

        <br />
        <button onClick={() => window.open("https://buymeacoffee.com/christianp1")} className={style.coffee}><BiCoffeeTogo/></button>
      </div>
    );
  }
}
