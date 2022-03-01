import React from 'react'
import "./Card.module.css"

export default function Card({name, image, id}) {
  return (
    <div className='divCard'>
        <h3 className='card-name'>{name}</h3>
        <div className='divCard'>
            <img src={image} alt="img not found" />
        </div>
    </div>
  )
}
