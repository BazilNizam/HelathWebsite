import React from 'react'
import Banner from './Components/Banner/Banner'
import CaseStudy from './Components/CaseStudy/CaseStudy'
import IntroBody from './Components/IntroBody/IntroBody'
import LongBody from './Components/LongBody/LongBody'
import NavBar from './Components/NavBar/NavBar'
import Places from './Components/Places/Places'
import Quote from './Components/Quote/Quote'



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
      
      
    
    </div>
  )
}

export default App