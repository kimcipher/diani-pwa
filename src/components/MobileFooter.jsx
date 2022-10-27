import React, { useState } from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png";
import Logo from "./assets/logo.png";
import {NavLink} from "react-router-dom"
import {
  amazon,
  uber,
  bookingcom,
  justEat,
  jumialogo,
  lalologo,
} from "./icons";
import WalletConnect from "./WalletConnect";

const MobileFooter = ({ setItIsOpen }) => {
  const currentDate = new Date().getFullYear();

  const clicked = () => {
    setItIsOpen(true);
    console.log("clicked");
  };
  return (
    <div className="foot-container">
      <br/><br/><br/>
      <NavLink to="/how-it-works" className="how">
        <div className="wrap-how">
          <h4>
            HOW IT WORKS❓
          </h4>
        </div>
      </NavLink>
      <br/><br/><br/>

        <br />
        <br />
        <img src={Logo} alt="logo" height={"85px"} />
        <p
          
          style={{ color: "#fff", marginBottom:"-35px", marginLeft:"15%", marginRight:"15%", lineHeight:"15px"}}
        >
          {" "}
          DianiApp &trade; is a partner-based dApp Within &nbsp;
          <span style={{ textTransform: "uppercase", color: "#ff99ff", cursor:"pointer" }} onClick={clicked}>
            LaLo Communitites &nbsp;
          </span>
          ecosystem. <br className="dissapear"/>LaLo Communities is a Web3+Blockchain powered Bookings & Deliveries dApp for Anything. Anytime. <br/><br/> A mashup of .... <br/><br/> 
        </p>
        <br /> 

     
      <p style={{ marginBottom: "-15px" }}>
        {amazon} &nbsp; &nbsp; {uber} &nbsp; &nbsp;
        {bookingcom}&nbsp; &nbsp; {justEat}
      </p>
      <p style={{ marginBottom: "0", }}>{jumialogo}</p>

      <p >Serving small communities globally</p>
      <h4 style={{marginTop:"-15px"}}>🌎</h4><p>TRY US !</p><br/><br/>
      <p>
        <img
          src={Nai}
          alt="src alt"
          width="185px"
          style={{ marginBottom: "-10px" }}
        />
      </p><br/>

      <p>&copy; {currentDate} DianiApp. All Rights Reserved</p><br/><br/><br/><br/>
    </div>
  );
};

export default MobileFooter;
