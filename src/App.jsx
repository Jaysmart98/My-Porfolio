import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/secondaryComponents/Footer/Footer'

import Home from './components/Pages/Home/Home'
import About from './components/Pages/Home/Home'
import Contact from './components/Pages/Contact/Contact'

import { Route } from 'react-router-dom'
import { BrowserRouter, Router, Routes } from 'react-router-dom'



function App() {

  return (
    <>

    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
