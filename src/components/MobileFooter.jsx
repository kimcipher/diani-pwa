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
        <img src={Logo} alt="logo" height={"15px"} /> DianiApp &trade; is a partner-based <br />
        <p
          onClick={clicked}
          style={{ color: "#fff", marginBottom:"-35px"}}
        >
          {" "}
          <span style={{ color: "#fff" }}> dApp Within </span>{" "}
          <span style={{ textTransform: "uppercase", color: "#ff99ff", cursor:"pointer" }}>
            LaLo Communitites
          </span>
        </p>
        <br /> 
        <span style={{ color: "#fff" }}> ecosystem and is powered by </span>{" "}
        <br />
        Web3+Blockchain
        <br />
        Bookings + Deliveries
        <br />
        for Anything. Anytime.
        <br /> A mashup of ...
        <br />
        <br />
      <p style={{ marginBottom: "-15px", marginTop: "-15px" }}>{jumialogo}</p>
      <p style={{ marginBottom: "0" }}>
        {amazon} &nbsp; &nbsp; {uber} &nbsp; &nbsp;
        {bookingcom}&nbsp; &nbsp; {justEat}
      </p>

      <p style={{textTransform:"uppercase"}}>Serving small<br/> communities </p>
      <h4 style={{marginTop:"-15px"}}>🌎</h4><br></br>
      <p>
        <img
          src={Nai}
          alt="src alt"
          width="185px"
          style={{ marginBottom: "-10px" }}
        />
      </p>

      <p>&copy; {currentDate} DianiApp. All Rights Reserved</p>
    </div>
  );
};

export default MobileFooter;
