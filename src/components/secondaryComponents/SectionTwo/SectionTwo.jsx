import React from 'react'
import './SectionTwo.css'
import Circle from '../../primaryComponents/Circle/Circle.jsx'
import Smart from '../../../assets/images/Smart.Jpeg'
// import Jaysmart from '../../../assets/images/Jaysmart.png'
// import Excited from '../../../assets/images/excited.png'
import Jay from '../../../assets/images/Jay.Jpg'


const SectionTwo = () => {
  return (
    <>
    <div id='section-Two-container' className='section-one-container'>
       
          <div id='section-two'>

          <div id='section-two-circle' className='section-two-circle'>
          <Circle image={Jay}  anchortext={'Click me'} WD={"120%"} HG={"150%"} Tp={"-38px"} LF={"-15px"} />
          </div>

          <div>
          </div>
        
          </div>

        </div>
    </>
  )
}

export default SectionTwo
