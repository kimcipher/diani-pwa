import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MobileFooter from "./components/MobileFooter";
import Wellness from "./components/pages/Wellness";
import Activities from "./components/pages/Activities";
import NightLife from "./components/pages/NightLife";
import Tours from "./components/pages/Tours";
import VIP from "./components/pages/VIP";
import MobileNav from "./components/MobileNav";
import Type from "./components/Type";
import HowItWorks from "./components/pages/HowItWorks";
// import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import BotIcon from "./components/BotIcon"
import Rating from "./components/pages/RatingView"
import "animate.css/animate.min.css";
import DefaultNav from "./components/DefaultNav";
// import {AnimationOnScroll} from "react-animation-on-scroll"
import Popup from "./components/Popup"
// import {Toaster}  from  "react-hot-toast"
import Lalo from "./components/Lalo"
import "@fontsource/montserrat"; // Defaults to weight 400.
import InterractiveSection from "./components/WalletConnector.jsx";
import Preloader from "./components/PreLoad/Preloader";
import {useCookies} from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [itIsOpen, setItIsOpen]= useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [])

  const setPopupOpen = () => {
    setItIsOpen(!itIsOpen);
  }
  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //    setIsOpen(true)  
  //   }, [5000]);
  //   // I will be deleted while component is unmounting.
  //   return () => clearTimeout(timer) 
  //   }, []);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //      setIsOpen(false)  
  //     }, [20000]);
  //     // I will be deleted while component is unmounting.
  //     return () => clearTimeout(timer) 
  //     }, []);


  return (
    <>
    {/* <ConnectButton/> */}
    {itIsOpen && <Lalo setItIsOpen={setItIsOpen}/>}
    {isLoading ? (
      <Preloader/>
    ):(
      <>
      <InterractiveSection/>
      <DefaultNav/>
      <Nav />
      {/* <Marquee/> */}
      {/* <AddToHomeScreen /> */}
      <Type />
      {/* <WeatherIcon /> */}
      {/* {isOpen && <Popup setIsOpen={setIsOpen}/>} */}
      <MobileNav />
      <BotIcon/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/NightLife" element={<NightLife />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/VIP" element={<VIP />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/rate-us" element={<Rating />} />
      </Routes>
      <MobileFooter setItIsOpen={setPopupOpen} />
    </>
    )}

    </>
  );
}

export default App;
