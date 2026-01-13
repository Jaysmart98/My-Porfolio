import React from 'react';
import LandingPage from './components/Pages/LandingPage/LandingPage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App