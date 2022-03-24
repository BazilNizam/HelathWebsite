import React from 'react'
import "../Quote/Quote.css"
import borderLine from "../../Assets/rectangleborder.png"
import background from "../../Assets/quotebluerect.png"

const Quote = () => {
  return (
    <div className="Quote_container">
        <div className="border">
            <img className='border-image' src={borderLine} alt="" />
        </div>
        <div className="backgroundimgcontainer">
        <img className='backgroundimg' src={background} alt="" />
        </div>
        <div className="quotetext">
            <h1> “Health is a state of body, Wellness is a state of being”</h1>
        </div>
        <div className="byfont">
        <h3> MHG Health Group </h3>
        </div>

    </div>
  )
}

export default Quote