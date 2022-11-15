import React from "react";
import "../css/home.css";
import ReactWhatsapp from "react-whatsapp";
import { drink, dinner, fx, food } from "../icons";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

function Wellness() {
  const gaEventTracker = useAnalyticsEventTracker('Wellness')
  const data = [
    {
      name: "On site Massage",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need onsite Massage 💆",
      className: "whatsapp",
      image: dinner,
      desc: "image desc",
    },
    {
      name: "On Site Hair & Make up",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need onsite Hair and Make up 💇",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "Schedule a Yoga Class",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need to schedule a Yoga Class🧘",
      className: "whatsapp",
      image: fx,
      desc: "image desc",
    },
    {
      name: "On Site Nail Service",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need onsite Nail Service 💅",
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

export default Wellness;
