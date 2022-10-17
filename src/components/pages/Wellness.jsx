import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";

function Wellness() {
  const data = [
    {
      name: "On site Massage",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need Massage 💆",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need on site hair & make up 💇",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Schedule a Yoga Class",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need to sohedule a yoga class🧘",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "On Site Nail Service",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need on site nail service 💅",
      className: "whatsapp",
      image: drink,
      desc: "image desc",
    },
    {
      name: "Today's Special",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need Today's special 😜",
      className: "whatsapp",
      image: food,
      desc: "image desc",
    },
    
  ];

  return (
    <div className="container">
      <h2>Wellness</h2>
      <div className="Tabs-container">
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <div className="Tab-item-wellness">
              <div>{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
      </div>
    </div>
  );
}

export default Wellness;
