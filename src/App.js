import React from 'react'
import Appointment from './Components/appointment/Appointment'
import Banner from './Components/Banner/Banner'
import CaseStudy from './Components/CaseStudy/CaseStudy'
import IntroBody from './Components/IntroBody/IntroBody'
import LongBody from './Components/LongBody/LongBody'
import NavBar from './Components/NavBar/NavBar'
import Places from './Components/Places/Places'
import Quote from './Components/Quote/Quote'
import Testimony from './Components/Testimony/Testimony'



const App = () => {
  return (
    <div>
      
      <Banner/>
      <NavBar />
      <IntroBody />
      <LongBody />
      <Quote />
      <Places />
      <CaseStudy />
      <Testimony />
      <Appointment />
      
      
    
    </div>
  )
}

export default App