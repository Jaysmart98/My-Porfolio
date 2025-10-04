import React from 'react'
import './Home.css'
import SectionOne from '../../secondaryComponents/SectionOne/SectionOne'
import SectionTwo from '../../secondaryComponents/SectionTwo/SectionTwo'
import SectionThree from '../../secondaryComponents/SectionThree/SectionThree'
import SectionFour from '../../secondaryComponents/SectionFour/SectionFour'
import SectionFive from '../../secondaryComponents/SectionFive/SectionFive'

const Home = () => {

  return (
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}

export default Home
