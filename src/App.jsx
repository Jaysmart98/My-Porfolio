import React from 'react'
import './App.css'
import Navbar from './components/secondaryComponents/Navbar/Navbar'
import Footer from './components/secondaryComponents/Footer/Footer'
import SectionOne from './components/secondaryComponents/SectionOne/SectionOne'

function App() {

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <Footer/>

      <div id='container'>
      <div id='clip'></div>
      <div id='triangle'> </div>
      </div>
    </>
  )
}

export default App
