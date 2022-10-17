 import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {snorkeling, camel, quad, skydiving, skiing, sunset} from "./images"

function Activities() {
  const data = [
    {
        name: "Snorkeling",
        message: "Hi DianiApp 😊 I'm interested in Snorkeling 🛥️",
        number: "+254115144146",
        background: snorkeling,
    },
    {
      name: "Camel Rides",
      message: "Hi DianiApp 😊 I'm interested in a Camel Ride",
      number: "+254115144146",
      background: camel,
    },
    {
      name: "Quad",
      message: "Hi DianiApp 😊 I'm interested in Quad Bike rides",
      number: "+254115144146",
      background: quad,
    },
    {
      name: "Sky diving",
      message: "Hi DianiApp 😊 I'm interested in Sky Diving ",
      number: "+254115144146",
      background: skydiving,
    },
    {
      name: "Skiing ",
      message: "Hi DianiApp 😊 I'm interested in Skiing ",
      number: "+254115144146",
      background: skiing,
    },
    {
      name: "Skiing ",
      message: "Hi DianiApp 😊 I'm interested in Skiing ",
      number: "+254115144146",
      background: sunset,
    },
  ];

 
  return (
    <div className="activities">
      <h2>Activities + Tours</h2>

      <div className="act-container">
        {data.map ((item, index) => {
            let image = item.background
            return(
                <div>
                    <div className="act-item">
                        <img src={image} alt="#"/>

                    </div>
                    <ReactWhatsapp
                        key={index}
                        number={item.number}
                        message={item.message}
                        className="none"
                    >
                    <h4>Book Now</h4>
                    </ReactWhatsapp>
                </div>
            )
        })}
      </div>

    </div>
  );
}

export default Activities;
