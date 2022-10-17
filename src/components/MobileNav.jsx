import React from 'react'
import "./css/footer.css"
import {NavLink} from "react-router-dom"
function MobileNav() {
  return (
    <nav>
    <div className="nav-mobile-container">
        <NavLink to="/popular" activeclassname='active'><h5>⭐ Popular</h5></NavLink>
        <NavLink to="/Wellness" activeclassname='active'><h5>Wellness</h5></NavLink>
        <NavLink to="/Activities" activeclassname='active'><h5>Activities +<br/> Tours</h5></NavLink>
        {/* <NavLink to="/Tours" activeclassname='active'><h5>Tours</h5></NavLink> */}
        <NavLink to="/NightLife" activeclassname='active'><h5>Night Life</h5></NavLink>
        <NavLink to="/VIP" activeclassname='active'><h5>VIP</h5></NavLink>
    </div>
    </nav>
  )
}

export default MobileNav