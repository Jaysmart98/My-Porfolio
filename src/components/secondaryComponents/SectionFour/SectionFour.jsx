import React from 'react'
import './SectionFour.css'
import Card from '../Card/Card'
import TodoApp from '../../../assets/Images/TodoApp.png'
import SignInPage from '../../../assets/Images/SignInPage.png'
// import Portfolio from '../../../assets/Images/Portfolio.png'
import SignUpPage from '../../../assets/Images/SignUpPage.png'
import ECommerceA from '../../../assets/Images/ECommerceA.png'
import Button from '../../primaryComponents/Button/Button'


const SectionFour = () => {

    const cardDetails = [
        {
          image: ECommerceA,
          text: "E-commerce",
          description: "Ecommerce is the activity of electronically buying or selling products on online services or over the Internet."
        },
        {
          image: SignInPage,
          text: "Sign in page",
          description: "A sign-in page is a web page that allows users to access a website or application by entering their credentials."
        },
        {
          image: SignUpPage,
          text: "Login Page",
          description: "A login page is a web page that allows users to access a website or application by entering their credentials."
        },
        {
          image: TodoApp,
          text: "Todo App",
          description: "A todo app is a web application that allows users to create, manage,track their tasks and to-do lists."
        }
      ]

  return (
    <>
     <div id='section-Four-container'>
       <div id='section-Four-text'>
        <h1>My Projects</h1>
        <p>
            Here are some of my projects that I've worked on recently. Want to see more? <span>Visit my GitHub profile.</span>
        </p>
      </div>


       <div className='section-Four-categories'>
        <div>
            <h3>ALL</h3>
        </div>

        <div>
            <h3>UI/UX</h3>
        </div>

        <div id='active-category'>
            <h3>WEB DESIGN</h3>
        </div>

        <div>
            <h3>APP DESIGN</h3>
        </div>

        <div>
            <h3>GRAPHICS</h3>
        </div>
       </div>

        <div id='cardContainer'> {cardDetails?.map((detail, index) => (
         <Card  image={detail.image} text={detail.text} description={detail.description} key={index} width={"100%"} padding={"10px"}  height={"100%"} BgColor={"rgb(255,235,219)"} btnText={"View"} />
         ))}
       </div>

    </div> 
    </>
  )
}

export default SectionFour
