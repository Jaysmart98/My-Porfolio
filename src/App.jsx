import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <br/>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a simple portfolio page built with React.</p>
      <p>Feel free to explore and learn more about my projects and skills.</p>
      <p>Thank you for visiting!</p>
      <br/>
      <Footer/>
    </>
  )
}

export default App
