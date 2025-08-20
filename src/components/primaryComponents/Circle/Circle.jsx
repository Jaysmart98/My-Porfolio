import React from 'react'
import './Circle.css'

const Circle = ({image, image2}) => {
  return (
    <>
      <div id='circle-container' className='circle-container'>
           <div class="circle">
            <img src={image2} class="card-img-top" id='img'/>
            <div class="card-body">
            </div>
            <img src={image} id='Inner-Img' alt="" />
            </div>
      </div>
    </>
  )
}

export default Circle
