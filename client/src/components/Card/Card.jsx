import React from 'react'
import style from "./Card.module.css"

export default function Card({name, image, id}) {
  return (
    <div className={style.divCard}>
        <h3 className={style.card_name}>{name}</h3>
        <div className={style.divCard}>
            <img src={image} alt="img not found" />
        </div>
    </div>
  )
}
