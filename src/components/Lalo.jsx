import React from "react";
import {
  line,
  oneeight,
  fourth,
  people,
  location,
  bookings,
  lalologo,
  kulosa,
  tickItem,
  starhundred,
  stareighty,
  webtatu,
  foodwhite,
  drinkwhite,
  grocerieswhite,
  shopping
} from "./icons";
import "./css/Lalo.css";
import { Carousel } from "react-responsive-carousel";
import PWA from "./assets/PWA.png"
import UDL from "./assets/udl.png"
import Mini from "./assets/minidianipp.png"

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
          <div className="child" style={{ marginTop: "20px" }}>
            <p style={{textTransform:"uppercase", fontSize:"0.7em"}}>
              {lalologo}<br/>
              LALO COMMUNITIES is AN ALWAYS ON
              <br /> 24/7 INSTANT WEB3 BOOKING DAPP
              <br /> powering small communities & THEIR <br /> VISITORS 🌎.
              <br />
              <br /> Deliveries. Bookings . Anything Anytime
            </p>
          </div>
          <div className="child">
            <div className="child-container">
              <div className="child-container-child">{foodwhite} Food</div>
              <div className="child-container-child">{drinkwhite} Drinks</div>
              <div className="child-container-child">
                {grocerieswhite} Groceries
              </div>
              {/* <div className="child-container-child">{credit} Bookings</div> */}
              <div className="child-container-child">{shopping} Shopping</div>
            </div>
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
