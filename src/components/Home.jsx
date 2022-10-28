import React from "react";
import "./css/home.css";
import ReactWhatsapp from "react-whatsapp";
import {
  dinner,
  taxi,
  plane,
  scooter,
  bike,
  foodgrp,
  groceries,
  packageicon,
  ksh,
  rocket,
  phone,
  battery,
  bed,
  boat,
  geek,
  fix,
  bookingicon,
  cryptobtnnew,
  shopping,
  amazonpkgo,
  bankfx,
  renta,
  simcard,
  camera,
  laptop,
  sendcrypto,
  receivecrypto,
  dress,
  tshirt,
  shoe,
  flippers
} from "./icons";

function Home() {
  const data = [
    {
      name: "Groceries 24/7",
      number: "+254115144146",
      message: "Hello DianiApp 😊 I need Groceries 🧅",
      className: "whatsapp",
      image: groceries,
      desc: "image desc",
    },
    
  ];

  return (
    <div className="container">
      <h4 style={{marginTop:"30px"}}>INSTANT GO {rocket}</h4>
      <div className="Tabs-container">
      <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Food / Drinks 🍾"}
            className="whatsapp"
          >
            <div className="Tab-item">
              <div className="">{foodgrp} </div>
              <div className="grid-right"> &nbsp;&nbsp; Food   &  Drinks 24/7</div>
            </div>
          </ReactWhatsapp>
        {data.map((item, index) => (
          <ReactWhatsapp
            key={index}
            number={item.number}
            message={item.message}
            className={item.className}
          >
            <div className="Tab-item">
              <div className="grid-left">{item.image}</div>
              <div className="grid-right">{item.name}</div>
            </div>
          </ReactWhatsapp>
        ))}
         
       {/* <h4>RENT A {rocket}</h4> */}
       <ReactWhatsapp
              number="+254115144146"
              message="Hello DianiApp 😊 I need to rent a Scooter/ E-Bike/ Car/ Taxi / a Boat ⛵"
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="flex-car-item pxl">Scooter<br/>{scooter}</div>  
            <div className="flex-car-item pxl">E-Bikes<br/>{bike}</div> 
            <div className="flex-car-item">{renta}</div> 
            <div className="flex-car-item pxl">Car/Taxi<br/>{taxi}</div> 
            <div className="flex-car-item pxl">Boat<br/>{boat}</div>    
          </div>
        </ReactWhatsapp>
        {/* {scooter}&nbsp; {bikesmall}&nbsp;&nbsp; {taxi}&nbsp; */}
        {/* <h4>HelloRE A {rocket}</h4> */}
        <ReactWhatsapp
              number="+254115144146"
              message={"Hello DianiApp 😊 I need  Parcel Delivery / Hire a Tech Guru / Hire Repair/FixIt 🛠️"}
              className="whatsapp"
            >
          <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
            <div className="pxl" ><p style={{background:"none"}}>{packageicon}<br/>Parcel <br/> Delivery </p></div> 
            <div className="pxl" ><p style={{background:"none"}}>{geek}<br/>Hire<br/>Tech Guru</p></div> 
            <div className="pxl" ><p style={{background:"none"}}>{fix}<br/>Hire<br/>Repair/FixIT</p></div> 
            {/* <div className="scooter"><p style={{background:"none"}}>Guru<br/>{geek}</p><p style={{background:"none"}}>Repair <br/>{fix}</p></div>      */}
          </div>
        </ReactWhatsapp>
      

        <h4 style={{marginTop:"30px"}}>24/7 BOOKINGS {bookingicon}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need  Accomodation 🛌"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{bed}</div>
              <div className="grid-right"> Accomodation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need a Dinner Reservation 🍽️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{dinner}</div>
              <div className="grid-right"> Dinner Reservation</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Airport Transportation ✈️"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{plane}</div>
              <div className="grid-right"> Airport Transportation</div>
            </div>
          </ReactWhatsapp>

          <h4 style={{marginTop:"30px"}}>BANKING & FX {bankfx}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need  Cash and Currency exchange 💰"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{ksh}</div>
              <div className="grid-right"> Cash. Currencies. Exchange</div>
            </div>
          </ReactWhatsapp>

        <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to spend Crypto ₿"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{cryptobtnnew}</div>
              <div className="grid-right"> Spend Crypto</div>
            </div>
          </ReactWhatsapp>
          <div className="shrink-container">
            <ReactWhatsapp
              number={"+254115144146"}
              message={"Hello DianiApp 😊 I need to send Crypto ₿"}
              className="shrink"
            >
              <div className="bg">
                <div className="shrink">{sendcrypto}</div>
                <div className="shrink"> Send Crypto</div>
              </div>
            </ReactWhatsapp>

            <ReactWhatsapp
              number={"+254115144146"}
              message={"Hello DianiApp 😊 I need to receive Crypto ₿"}
              className="shrink"
            >
              <div className="bg">
              <div className="shrink">{receivecrypto}</div>
                <div className="shrink"> Receive Crypto</div>
              </div>
            </ReactWhatsapp>
          </div>
          

          <h4 style={{marginTop:"30px"}}>FAST SHOPPING {shopping}</h4>
          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Shopping 🛒"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
              <div className="flex-car-item pxl">{dress}</div> 
              <div className="flex-car-item pxl">{tshirt}</div> 
              <div className="flex-car-item pxl">{shoe}</div> 
              <div className="flex-car-item pxl">{flippers}</div>
              <div className="flex-car-item pxl" style={{marginTop:"0", width:"95px"}}>Buy now Delivered Now</div>  
          
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Tech Gadgets 📱"}
            className="whatsapp"
          >
            <div className="Tab-item" style={{display:"flex", justifyContent:"space-around"}}>
              <div className="flex-car-item pxl">{phone}</div> 
              <div className="flex-car-item pxl">{camera}</div> 
              <div className="flex-car-item pxl">{battery}</div> 
              <div className="flex-car-item pxl">{laptop}</div> 
              <div className="flex-car-item pxl" style={{marginTop:"0", width:"95px"}}>Tech Gadgets</div>  
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need to Purchase Sim Cards 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{simcard}</div>
              <div className="grid-right">Buy sim cards</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Package Delivery(Amazon US) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON USA &#60;7 Days</div>
            </div>
          </ReactWhatsapp>

          <ReactWhatsapp
            number={"+254115144146"}
            message={"Hello DianiApp 😊 I need Package Delivery(Amazon UK/EUR) 📦"}
            className="whatsapp"
          >
            <div className="Tab-item">
            <div className="grid-left">{amazonpkgo}</div>
              <div className="grid-right"> AMAZON UK/EUR &#60;9Days</div>
            </div>
          </ReactWhatsapp>


      </div>
      
    </div>
  );
}

export default Home;
// caribean jinja diani north coast 