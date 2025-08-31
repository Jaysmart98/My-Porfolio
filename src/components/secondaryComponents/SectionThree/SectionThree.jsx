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
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      image: Vector,
      text: "Backend",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      image: WebDesignIcon,
      text: "Responsive Design",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      image: AppDesignIcon,
      text: "App Development",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    }
  ]



  return (
    <>
    <div id='section-Three-container'>
       
       <div id='section-Three-text'>
        <h1>Services</h1>
        <p>
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
