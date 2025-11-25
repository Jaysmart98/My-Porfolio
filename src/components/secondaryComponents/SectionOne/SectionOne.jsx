import React from 'react'
import './SectionOne.css'
import Circle from '../../primaryComponents/Circle/Circle.jsx'
import Jaysmart from '../../../assets/images/Jaysmart.jpeg'
import 'aos/dist/aos.css';
import AOS from 'aos';

const SectionOne = () => {

  AOS.init();


  // data-aos="fade-right" data-aos-offset="350" data-aos-easing="ease-in-sine" 



  return (
      <div id='section-one-container' className='section-one-container'>
        
        <div id='section-one' className='section-one'>
          <div data-aos="fade-right" data-aos-duration="3000" id='section-one-text' className='section-one-text'> 
          <h1>Full Stack</h1>
          <h1 id='developer'>Developer</h1>
          <p id='description'>I have passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills. Let's build something amazing together!</p>
         <button>Contact me</button>
          </div>
        </div>

       
        <div data-aos="fade-down-left" data-aos-duration="3000" id='section-one-circle' className='section-one-circle'>
          <Circle image={Jaysmart}  anchortext={'Click me'}/>
        </div>

    </div>
  )
}

export default SectionOne
