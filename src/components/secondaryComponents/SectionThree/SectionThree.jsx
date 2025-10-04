import React from 'react'
import './SectionThree.css'
import Card from '../Card/Card'
import WebDesignIcon from '../../../assets/Images/WebDesignIcon.png'
import Vector from '../../../assets/Images/Vector.png'
import AppDesignIcon from '../../../assets/Images/AppDesignIcon.png'

const SectionThree = () => {

  const cardDetails = [
    {
      image: WebDesignIcon,
      text: "Frontend",
      description: " I create visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. "
    },
    {
      image: Vector,
      text: "Backend",
      description: "I build robust and scalable server-side applications using Node.js, Express, and databases like MongoDB or SQL."
    },
    {
      image: WebDesignIcon,
      text: "Responsive Design",
      description:"I ensure that websites and applications are optimized for various devices and screen sizes, providing a seamless user experience."
    },
    {
      image: AppDesignIcon,
      text: "Database Management",
      description: "I design and manage databases to store and retrieve data efficiently, ensuring data integrity and security."
    }
  ]



  return (
    <>
    <div id='section-Three-container'>
       
       <div id='section-Three-text'>
        <h1 data-aos="zoom-in-down" >Services</h1>
        <p data-aos="zoom-out-up">
          I offer a wide range of services, including web design, web development,
          app development, and more. I am always looking for new and exciting projects to work on.
        </p>
      </div>


       <div>
        <div className='cardContainer'> {cardDetails?.map((detail, index) => (
         <Card  image={detail.image} text={detail.text} description={detail.description} key={index} width={"90px"} height={"130px"}/>))}
    </div>

       </div>
    </div>   
    </>
  )
}

export default SectionThree
