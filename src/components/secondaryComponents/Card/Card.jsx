import React from 'react'
import './Card.css'

const Card = ({ text, description, image, width, height, padding, BgColor, CtHeight}) => {
  return (
    <>
    <div className='card-container' style={{padding:padding, backgroundColor:BgColor, height:CtHeight}} >
          <img src={image}  style={{ width: width, height:height}}/>
          <h2>{text}</h2>
          <p>{description}</p>
      </div>
    </>
  )
}

export default Card