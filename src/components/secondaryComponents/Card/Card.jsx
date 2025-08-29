import React from 'react'
import './Card.css'

const Card = ({ text, description, image}) => {
  return (
    <>
    <div className='card-container'>
          <img src={image} alt="" width={100} height={100}/>
          <h2>{text}</h2>
          <p>{description}</p>
      </div>
    </>
  )
}

export default Card