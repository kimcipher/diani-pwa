import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import {sunset, glassboat, dolphins} from "./images"
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

function Activities() {
  const gaEventTracker = useAnalyticsEventTracker('Tours')
  const data = [
    {
      name: "Sunset",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: sunset,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "GlassBoat",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: glassboat,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
    {
      name: "GlassBoat",
      message: "Hi DianiApp 😊, Im interested in Snorkeling 🛥️",
      number: "+254115144146",
      background: dolphins,
      description: "Located on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins . As you sail from the shores, you enjoy the comfort and beautiful decorations of the dhow while enjoying your favorite drinks and alcohol.",
    },
  ];

 
  return (
    <div className="activities">
      <h2>Tours</h2>

      <div className="act-container">
        {data.map ((item, index) => {
            let image = item.background
            let tag = item.name
            return(
                <div>
                    <div className="act-item">
                        <img src={image} alt={item.name} loading="lazy"/>
                    </div>
                    <ReactWhatsapp
                        key={index}
                        number={item.number}
                        message={item.message}
                        className="none"
                        onClick={()=>gaEventTracker({tag})}
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
