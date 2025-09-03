import React from 'react'
import './Card.css'
import Button from '../../primaryComponents/Button/Button'

const Card = ({ text, description, image, width, height, padding, BgColor, CtHeight, btnText, href}) => {
  return (
    <>
    <div className='card-container' style={{padding:padding, backgroundColor:BgColor, height:CtHeight}} >
          <img src={image}  style={{ width: width, height:height}}/>
          <div className='card-text'>
          <h2>{text}</h2>
          <p>{description}</p>
          </div>
           <Button bgcolor={"rgb(253,111,0)"} colorParams={"white"} text={btnText} action={() =>{href}}/>
      </div>
    </>
  )
}

export default Card