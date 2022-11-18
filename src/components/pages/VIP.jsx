import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";
import {Adsense} from "@ctrl/react-adsense"

function VIP() {
  const gaEventTracker = useAnalyticsEventTracker('VIP')
  const data = [
    {
      name: "Private Chef",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need a Private Chef 👨‍🍳",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "Dinner Reservation",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need a Dinner Reservation 🍽️",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Table Reservation",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need a Table Reservation 🍽️",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Luxury Transportation",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need Luxury Transportation 🚙",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Luxury Villas",
      number: "+254115144146",
      message: "Hello DianiApp 😊, I need a Luxury Villa 🏠",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    
  ];
  return (
    <div className="activities">
      <h2>VIP</h2>
        <Adsense
          client="ca-pub-3733538819337098"
          slot="4594064206"
          layout="in-article"
          format="fluid"
          data-full-width-responsive="true"
        />
      <div className="Tabs-container">
        {data.map((item, index) => {
          let tag = item.name
          return(
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
            onClick={()=>gaEventTracker({tag})}
          >
            <div className="Tab-item-wellness">
              <div>{item.name}</div>
            </div>
          </ReactWhatsapp>
          )
          }
        )}
      </div>
    </div>
  );
}

export default VIP;
