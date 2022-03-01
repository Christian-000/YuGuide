import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import "./Cards.module.css"

export default function Cards() {
  const yugiCards = useSelector((state) => state.cards);

  return (
    <div className="divCards">
      {yugiCards.map((c) => {
        return (
          <Link to={`/cardDetail/${c.id}`}>
            <Card
              key={c.id}
              name={c.name}
              image={c.card_images[0].image_url}
            />
            <hr />
          </Link>
        );
      })}
    </div>
  );
}
