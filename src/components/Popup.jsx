import React from 'react'
import "./css/popup.css"

const Popup = ({ setIsOpen }) => {
  const d = new Date();
  let hour = d.getHours();
const bookings_idx = hour + (hour*5)
  return (
    <>
    <div className="slack">
      <h5 style={{color:'#fff'}}><br/>DianiApp is now live<br/><br/> Diani Digital Warriors <br/><br/> Bookings made today : {bookings_idx}<br/><br/> </h5><div className='closer-con' onClick={() => setIsOpen(false)}><h5 className="closer" >+</h5></div>
    </div>
    </>
  )
}

export default Popup