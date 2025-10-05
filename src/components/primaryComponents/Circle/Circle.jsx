import React from 'react'
import './Circle.css'

const Circle = ({image, WD, HG,Tp, LF}) => {
  return (
      <div id='circle-container' className='circle-container'>
           <div class="circle" id='circle'>
            <img src={image} id='Inner-Img' style={{width: WD, height: HG, top: Tp, left: LF}} />
            </div>
      </div>
  )
}

export default Circle
