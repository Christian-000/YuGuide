import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCardById } from "../../actions";
import { BsCaretRightFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import style from "./CardDetail.module.css";

export default function CardDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myCard = useSelector((state) => state.cards);

  const [price, setPrice] = useState(false);

  function handlePrice(e) {
    e.preventDefault();
    setPrice(!price);
  }

  useEffect(() => {
    dispatch(getCardById(id));
  }, [dispatch, id]);
  let keys = Object.keys(myCard[0].card_prices[0]);
  return (
    <div className={style.detailContainer}>
      <div className={style.name_btn}>
        <Link to={"/home"}>
          <button className={style.home_btn}>
            <AiOutlineHome />
          </button>
        </Link>
        <h3 className={style.cardName}>{myCard[0].name}</h3>
        <img
          src={myCard[0].card_images[0].image_url}
          alt="img not found"
        />
      </div>
      {myCard[0].level ? (
        <p className={`${style.detailParagraph} ${style.basic}`}>
          Level: {myCard[0].level}
        </p>
      ) : null}
      <p className={`${style.detailParagraph} ${style.basic}`}>
        Type: {myCard[0].type}
      </p>
      {myCard[0].archetype ? (
        <p className={`${style.detailParagraph} ${style.basic}`}>
          Archetype: {myCard[0].archetype}
        </p>
      ) : null}
      <p className={`${style.detailParagraph} ${style.basic}`}>
        Description: {myCard[0].desc}
      </p>
      <button className={style.seePrice} onClick={(e) => handlePrice(e)}>
        {price ? "Hide Price" : "See Price"}
      </button>
      {price
        ? keys.map((el) => (
            <p className={`${style.detailParagraph} ${style.price}`}>
              <BsCaretRightFill />
              {`${el}: ${myCard[0].card_prices[0][el]}`}
            </p>
          ))
        : null}
    </div>
  );
}
