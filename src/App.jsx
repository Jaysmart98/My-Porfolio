import React from 'react'
import './App.css'
import Navbar from './components/secondaryComponents/Navbar/Navbar'
import Footer from './components/secondaryComponents/Footer/Footer'
import SectionOne from './components/secondaryComponents/SectionOne/SectionOne'
import SectionTwo from './components/secondaryComponents/SectionTwo/SectionTwo'
import Clippath from './components/secondaryComponents/ClipPath/Clippath'


function App() {

  return (
    <>
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      {/* <Clippath/> */}
      <Footer/>
    </>
  )
}

export default App
