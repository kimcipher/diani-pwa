import React from 'react'
import Typed from "react-typed"

function Type() {
  return (
    <>
    
    <h2 style={{ marginTop:'20px',fontSize:'30px'}}>
    <Typed
      strings={[
            "Deliveries .",
            "Bookings .",
            "Anything .",
            "Anytime .",
            "24/7 .",
            " "
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop={false}
          showCursor={true}
          style={{ lineHeight: '1.5' }}

        />
      </h2>
      <h3 style={{ color:'#e268f3', fontSize:'18px', fontWeight:'bold'}}>One Tap, One App.</h3>
      </>
  )
}

export default Type