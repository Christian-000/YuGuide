import React from 'react'

export default function Card({name, image, id}) {
  return (
    <div>
        <h3>{name}</h3>
        <div>
            <img src={image} alt="img not found" />
        </div>
    </div>
  )
}
