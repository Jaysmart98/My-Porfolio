import React from 'react'
import './Circle.css'

const Circle = ({image, image2, WD, HG,Tp, LF}) => {
  return (
    <>
      <div id='circle-container' className='circle-container'>
           <div class="circle">
            <img src={image2} class="card-img-top" id='img'/>
            <div class="card-body">
            </div>
            <img src={image} id='Inner-Img' style={{width: WD, height: HG, top: Tp, left: LF}} />
            </div>
      </div>
    </>
  )
}

export default Circle
