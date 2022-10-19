import React, { useState } from "react";
import "./css/footer.css";
import Nai from "./assets/nAIROBI-ART.png";
import Logo from "./assets/logosmall.png";
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
      <NavLink to="/how-it-works" className="how">
        <div className="wrap-how">
          <h4>
            HOW IT WORKS❓
          </h4>
        </div>
      </NavLink>
      {/* <p>
        <WalletConnect />
      </p> */}

        <br />
        <br />
        <img src={Logo} alt="logo" height={"25px"} /> <br />
        <p
          
          style={{ color: "#fff", marginBottom:"-35px", marginLeft:"15%", marginRight:"15%", lineHeight:"20px"}}
        >
          {" "}
          DianiApp &trade; is a partner-based dApp Within &nbsp;
          <span style={{ textTransform: "uppercase", color: "#ff99ff", cursor:"pointer" }} onClick={clicked}>
            LaLo Communitites &nbsp;
          </span>
          ecosystem. LaLo Communities is a Web3+Blockchain powered Bookings & Deliveries dApp for Anything. Anytime. <br/><br/><br/>A mashup of .... <br/><br/><br/>
        </p>
        <br /> 

     
      <p style={{ marginBottom: "-15px" }}>
        {amazon} &nbsp; &nbsp; {uber} &nbsp; &nbsp;
        {bookingcom}&nbsp; &nbsp; {justEat}
      </p>
      <p style={{ marginBottom: "0", }}>{jumialogo}</p><br/><br/>

      <p >Serving small communities </p>
      <h4 style={{marginTop:"-15px"}}>🌎</h4><p>TRY US !</p>
      <p>
        <img
          src={Nai}
          alt="src alt"
          width="185px"
          style={{ marginBottom: "-10px" }}
        />
      </p>

      <p>&copy; {currentDate} DianiApp. All Rights Reserved</p><br/><br/><br/><br/>
    </div>
  );
};

export default MobileFooter;
