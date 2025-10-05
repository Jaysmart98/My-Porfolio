import React from 'react'
import './SectionTwo.css'
import Circle from '../../primaryComponents/Circle/Circle.jsx'
// import Smart from '../../../assets/images/Smart.Jpeg'
// import Jaysmart from '../../../assets/images/Jaysmart.png'
// import Excited from '../../../assets/images/excited.png'
import Jay from '../../../assets/images/Jay.Jpg'


const SectionTwo = () => {
  return (
    <div id='section-Two-container' className='section-one-container'>
          
          <div id='section-two' data-aos="fade-down-left" data-aos-duration="3000">
          <div id='section-two-circle' className='section-two-circle'>
          <Circle image={Jay}  anchortext={'Click me'} WD={"120%"} HG={"150%"} Tp={"-38px"} LF={"-15px"} />
          </div>


          <div id='section-two-text' className='section-two-text'>
            <h1>About me</h1>
            <p>
            I am a passionate and dedicated web developer with a knack for creating visually appealing 
            and user-friendly websites. With a strong foundation in both frontend and backend technologies, 
            I strive to deliver seamless digital experiences that captivate users and drive engagement.
            </p>

            <div id='section-two-skills'>
            <div className='skill'>
            <h5>Frontend</h5>
            <div id='lines'>
              <img src="../src/assets/images/OrangeLine.png" alt="" id='img1' />
              <img src="../src/assets/images/Pointer.png" alt=""  id='img2'/>
              <img src="../src/assets/images/WhiteLine.png" alt="" id='img3'/>
            </div>
            </div>

            <div className='skill'>
            <h5>Backend</h5>
            <div id='lines'>
              <img src="../src/assets/images/OrangeLine.png" alt="" id='img1' />
              <img src="../src/assets/images/Pointer.png" alt=""  id='img2'/>
              <img src="../src/assets/images/WhiteLine.png" alt="" id='img3'/>
            </div>
           </div> 

            <div className='skill'>
            <h5>Designing</h5>
            <div id='lines'>
              <img src="../src/assets/images/OrangeLine.png" alt="" id='img1' />
              <img src="../src/assets/images/Pointer.png" alt=""  id='img2'/>
              <img src="../src/assets/images/WhiteLine.png" alt="" id='img3'/>
            </div>
          </div>


          <div className='skill'>
            <h5>Web design</h5>
            <div id='lines'>
              <img src="../src/assets/images/OrangeLine.png" alt="" id='img1' />
              <img src="../src/assets/images/Pointer.png" alt=""  id='img2'/>
              <img src="../src/assets/images/WhiteLine.png" alt="" id='img3'/>
            </div>
          </div>


            </div>
          </div>
          </div>
        </div>
  )
}

export default SectionTwo
