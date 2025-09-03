import React from 'react'
import './App.css'
import Navbar from './components/secondaryComponents/Navbar/Navbar'
import Footer from './components/secondaryComponents/Footer/Footer'
import SectionOne from './components/secondaryComponents/SectionOne/SectionOne'
import SectionTwo from './components/secondaryComponents/SectionTwo/SectionTwo'
import SectionThree from './components/secondaryComponents/SectionThree/SectionThree'
import SectionFour from './components/secondaryComponents/SectionFour/SectionFour'
import SectionFive from './components/secondaryComponents/SectionFive/SectionFive'


function App() {

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </>
  )
}

export default App
