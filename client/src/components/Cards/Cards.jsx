import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Cards() {
  const yugiCards = useSelector((state) => state.cards);

  return (
    <div>
      {yugiCards.map((c) => {
        return (
          <Link to={`/cardDetail/${c.id}`}>
            <Card
              key={c.id}
              name={c.name}
              image={c.card_images[0].image_url_small}
            />
          </Link>
        );
      })}
    </div>
  );
}
