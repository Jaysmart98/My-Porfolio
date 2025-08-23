import React from 'react'
// import './SectionOne.css'
import Circle from '../../primaryComponents/Circle/Circle.jsx'
import Jaysmart from '../../../assets/images/Jaysmart.jpeg'
import Excited from '../../../assets/images/Excited.png'

const SectionTwo = () => {
  return (
    <>
    <div id='section-one-container' className='section-one-container'>
       
          <div id='section-one-circle' className='section-one-circle'>
          <Circle image={Excited}  anchortext={'Click me'}/>
          </div>

          <div>
            
          </div>

        </div>
    </>
  )
}

export default SectionTwo
