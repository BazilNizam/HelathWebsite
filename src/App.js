import React from 'react'
import Banner from './Components/Banner/Banner'
import IntroBody from './Components/IntroBody/IntroBody'
import LongBody from './Components/LongBody/LongBody'
import NavBar from './Components/NavBar/NavBar'
import Quote from './Components/Quote/Quote'



const App = () => {
  return (
    <div>
      
      <Banner/>
      <NavBar />
      <IntroBody />
      <LongBody />
      <Quote />
      
      
    
    </div>
  )
}

export default App