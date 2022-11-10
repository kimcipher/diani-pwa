 import React from "react";
import "../css/act.css";
import ReactWhatsapp from "react-whatsapp";
import snorkeling from "../assets/snorkeling.png"
import camel from "../assets/camel.png"
import quad from "../assets/quad.png"
import skydiving from "../assets/skydiving.png"
import skiing from "../assets/skiing.jpg"
import sunset from "../assets/activities/Sunset.webp"
import glassboat from "../assets/glassboat.png"


function Activities() {
  const data = [
    {
        name: "Snorkeling",
        message: "Hi DianiApp 😊 I'm interested in Snorkeling 🤿",
        number: "+254115144146",
        background: snorkeling,
        price:"1500 Ksh \n pp",
        description:"This is an underwater activity that is much easier to do and is safe to try even for kids from 10 years and above, you will have an opportunity to explore the underwater environment",
        duration:"Duration: 24hr"
    },
    {
      name: "Camel Rides",
      message: "Hi DianiApp 😊 I'm interested in a Camel Ride 🐫",
      number: "+254115144146",
      background: camel,
      price:"2000 Ksh \n pp",
      description:"Camel riding along Diani Beach is loads of fun and can also be a great way to get the different beach restaurants along the coastline.",
      duration:"Duration: 24hr"
    },
    {
      name: "Quad",
      message: "Hi DianiApp 😊 I'm interested in Quad Bike ride 🏍️",
      number: "+254115144146",
      background: quad,
      price:"60 - 180 EUR",
      description:"Get to drive around Diani on a guided trip on dirt roads through small villages and beautiful scenery that is rarely seen and visited by tourists. All trips are available for anyone who holds a valid driving license",
      duration:"Duration: 24hr"
    },
    {
      name: "Sky diving",
      message: "Hi DianiApp 😊 I'm interested in Sky Diving 🪂",
      number: "+254115144146",
      background: skydiving,
      price:"35000 Ksh",
      description:"Diani Beach offers some of the finest scenery in the world and skydiving onto the beach has become a large attraction amongst tourists who want to see the landscape froma birds-eye view 12,000 ft",
      duration:"Duration: 24hr"
    },
    {
      name: "Skiing ",
      message: "Hi DianiApp 😊 I'm interested in Jet Skiing 🚤",
      number: "+254115144146",
      background: skiing,
      price:"3500 Ksh",
      description:"Diani beach is one of the greatest water sports destinations in East Africa. Experience the beautiful view of Diani from the open sea and get to know other fascinating parts of the coast.",
      duration:"Duration: 24hr"
    },
    {
      name: "Sunset",
      message: "Hi DianiApp 😊 I'm interested in watching sunset Sunset/ Sunrise 🌇",
      number: "+254115144146",
      background: glassboat,
      price:"1000 Ksh",
      description:"LOcated on the south coast of Kenya, Experience the beauty of nature while sailing towards the magical sunset/sunrise while enjoying the peace and beauty of the ocean. During the season you might occasionally see dolphins. As you sail from the shores, you enjoy the comfort and beautiful decorations os the show while enjoying your favourite drinks and alcohol",
      duration:"Duration: 24hr"
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
                        <div className="act-main-image" style={{backgroundImage:{image}}}>
                          <img src={image}/>
                        </div>
                        <div className="images-sub">
                            <div className="price-per">
                                <h5>{item.price}</h5>
                            </div>
                            <div className="act-per">
                              <img src={image} style={{width:"100%", height:"100%"}}/>
                            </div>
                            <div className="act-per">
                              <img src={image} style={{width:"100%", height:"100%"}}/>
                            </div>
                        </div>
                        <div className="text">
                            <h5 style={{textAlign:"left", padding:"20px", color:"#ff66ff", fontSize:"1.2em", textTransform:"uppercase"}}>{item.name} &nbsp;<span style={{fontSize:"0.5em"}}>{item.duration}</span></h5>
                            <p style={{padding:"20px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique quae eveniet odio ipsa repudiandae, nihil voluptatum recusandae. Sequi fugit explicabo accusamus reiciendis nostrum cum odit molestiae distinctio dolorem! Est.</p>
                        </div>
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
