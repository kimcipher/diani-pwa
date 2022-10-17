import React from 'react'
import "./css/popup.css"

const Popup = ({ setIsOpen }) => {
  const d = new Date();
  let hour = d.getHours();
  function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
const rand = randomNumber(1, 10)
const bookings_idx = rand + (hour*5)
  return (
    <>
    <div className="slack">
      <h5 style={{color:'#fff'}}><br/>DianiApp is now live<br/><br/> Diani Digital Warriors <br/><br/> Bookings made today : {bookings_idx}<br/><br/> </h5><div className='closer-con' onClick={() => setIsOpen(false)}><h5 className="closer" >+</h5></div>
    </div>
    </>
  )
}

export default Popup