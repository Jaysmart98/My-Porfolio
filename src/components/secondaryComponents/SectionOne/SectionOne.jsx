import React from 'react'
import './SectionOne.css'
import Circle from '../../primaryComponents/Circle/Circle.jsx'
import Jaysmart from '../../../assets/images/Jaysmart.jpeg'
import 'aos/dist/aos.css';
import AOS from 'aos';

const SectionOne = () => {

  AOS.init();



  return (
    <>
      <div id='section-one-container' className='section-one-container'>
        
        <div id='section-one' className='section-one'>


         
          <div data-aos="fade-right" id='section-one-text' className='section-one-text'> 
          <h5>Hi I am</h5>
          <h3>Joshua Ogunbunmi</h3>
          <h1 id='fullstack'>Full Stack</h1>
          <h1 id='developer'>Developer</h1>
          <p id='myself'>I have passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills. Let's build something amazing together!</p>
          </div>

        </div>
       
          <div id='section-one-circle' className='section-one-circle'>
          <Circle image={Jaysmart}  anchortext={'Click me'}/> <br />
          <div id='icons'>
          <img id='logo' src="./src/assets/Images/Icons.PNG" alt=""  />
          </div>
          </div>
       
        </div>
    </>
  )
}

export default SectionOne
