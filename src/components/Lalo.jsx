import React, { useState, useEffect } from "react";
import {
  line,
  oneeight,
  fourth,
  people,
  location,
  bookings,
  shopping,
  livecon,
  lalologo,
  kulosa,
  tickItem,
  starhundred,
  stareighty,
  webtatu
} from "./icons";
import "./css/Lalo.css";
import { Carousel } from "react-responsive-carousel";
import Collapsible from "react-collapsible";
import PWA from "./assets/PWA.png"
import UDL from "./assets/udl.png"
import webthree from "./assets/Web3.png"

const Lalo = (props) => {
  const d = new Date();
  let hour = d.getHours();
  const bookings_idx = hour + hour * 5;
  console.log(props);
  // function clicked(){
  //     setItIsOpen(false)
  // }
  return (
    <div className="Lalo-main">
      <div className="child-closer" onClick={() => props.setItIsOpen(false)}>
        <div className="closest">{kulosa}</div>
      </div>
      <Carousel
      // dynamicHeight={true}
      showIndicators={false}
      className="carry"
      showStatus={false}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "150px",
              maxHeight:"50px",
              lineHeight:"2px",
              marginBottom:"20px"


            }}
          >
            {lalologo} &nbsp;{" "}
            <div style={{ textAlign: "left"}}>
              <p style={{ textAlign: "left", color: "#fff", lineHeight:"10px" }}>Lalo</p>
              <p style={{ textAlign: "left", color: "#fff", lineHeight:"10px" }}>Communities</p>
            </div>
          </div>
          <div style={{marginBottom:"20px"}}>
            <h4>
              Web3 & Blockchain based platform enabling bookings + deliveries.
            </h4>
          </div>
          <div style={{display:"block"}}>
          <div className="descriptor">
            {tickItem}
            <h6>PWA, install it to your phone as an app
      
            </h6>
          </div>
          <div className="descriptor">
            {tickItem}
            <h6>
              Order anything + anytime at the comfort of your existing apps
              (WhatsApp)
            </h6>
            </div>
            <div className="descriptor">
              {tickItem}
              <h6>
                An array of payment options including MPESA, Credit Cards,
                PayPal and Crypto.
              </h6>
            </div>
            <div className="descriptor">
              {tickItem}
              <h6>
                Connect various local and international tourists to services
                providers.
              </h6>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around" }}>
              {stareighty}
              {starhundred}
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around", width:"auto", margin:"auto", marginTop:"30px" }}>
              <div>{webtatu}<br/> Web3</div>
              <img src={UDL} style={{width:"150px"}}/>
              <img src={PWA} style={{width:"50px"}}/>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="child" onClick={() => setItIsOpen(false)}>
                    <div className="closest" onClick={() => setItIsOpen(false)}>+</div>
                </div> */}
          <div
            className="child"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-around",
              marginRight: "0.5rem",
              alignItems: "center",
            }}
          >
            <p>{line} &nbsp; LIVE Today </p>

            <div className="blink"></div>
          </div>
          <div
            className="child"
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <p>
              {oneeight}
              <br />
              {people}
            </p>
            <p style={{ marginTop: "25px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;{location}
              <br />
              {fourth}
            </p>
            <p style={{ marginTop: "25px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;{bookings}
              <br />
              <h1
                style={{
                  fontSize: "3em",
                  color: "#fff",
                  marginTop: "45px",
                  fontWeight: "bold",
                }}
              >
                {bookings_idx}
              </h1>
              <p style={{ color: "#fff", paddingTop: "20px" }}>
                Bookings
                <br /> made
              </p>
            </p>
          </div>
          <div className="child">
            <h3
              style={{
                color: "#fff",
                textAlign: "center",
                marginLeft: "-50px",
                fontWeight: "bold",
              }}
            >
              Try Us!
            </h3>
          </div>
          {/* <div className="child spec">
                    More {more}
                </div> */}
        </div>
        <div>
          {/* <div className="child" onClick={() => setItIsOpen(false)}>
                    <div className="closest" onClick={() => setItIsOpen(false)}>+</div>
                </div> */}
          <div className="child">
            <div className="child-container">
              <div className="child-container-child-spec">
                <h3 style={{ fontSize: "0.9em" }}>EAST AFRICA</h3>
                {/* <p> &nbsp; &nbsp; {livecon}&nbsp; &nbsp; KENYA</p> */}
                <details className="collapsible">
                  <summary>KE 🇰🇪 </summary>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Diani</p>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Kilifi</p>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Watamu</p>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Malindi</p>
                </details>
                <details className="collapsible">
                  <summary>UG 🇺🇬 </summary>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Jinja</p>
                </details>
                <details className="collapsible">
                  <summary>TZ 🇹🇿 </summary>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Zanzibar</p>
                </details>
              </div>
              <div className="child-container-child-spec">
                <h3 style={{ fontSize: "0.9em" }}>CARRIBEAN</h3>
                <details className="collapsible">
                  <summary>BAMA 🇧🇸</summary>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp;Goombay</p>
                </details>
                <details className="collapsible">
                  <summary>BM 🇧🇲 </summary>
                </details>
              </div>
              <div className="child-container-child-spec">
                <h3 style={{ fontSize: "0.9em" }}>AMERICAS</h3>
                <p
                  className="small"
                  style={{
                    fontSize: "0.5em",
                    textAlign: "center",
                    marginBottom: "0",
                  }}
                >
                  {" "}
                  &nbsp; &nbsp; (coming soon)
                </p>
                <details className="collapsible">
                  <summary>CR 🇨🇷</summary>
                </details>
                <details className="collapsible">
                  <summary>ELSL 🇸🇻</summary>
                </details>
              </div>
              <div className="child-container-child-spec">
                <h3 style={{ fontSize: "0.9em" }}>ASIA</h3>
                <p
                  className="small"
                  style={{
                    fontSize: "0.5em",
                    textAlign: "center",
                    marginBottom: "0",
                  }}
                >
                  {" "}
                  &nbsp; &nbsp; (coming soon)
                </p>
                <details className="collapsible">
                  <summary>IDN 🇮🇩</summary>
                </details>
                <details className="collapsible">
                  <summary>TH 🇹🇭</summary>
                </details>
              </div>
            </div>
          </div>
          {/* <div className="child spec">
                    More {more}
                </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Lalo;
