import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
import BotIcon from "./components/BotIcon"
import "animate.css/animate.min.css";
import DefaultNav from "./components/DefaultNav";
import Lalo from "./components/Lalo"
import "@fontsource/montserrat"; // Defaults to weight 400.
import InterractiveSection from "./components/WalletConnector.jsx";
import Preloader from "./components/PreLoad/Preloader";
import {WalletProvider}  from  "./context/WalletContext"
import Signup from "./components/Wifi/Signup"
import SignIn from "./components/Wifi/SignIn"
import ReactGA from 'react-ga'
import {wifi} from "./components/icons"

const TRACKING_ID = "G-Q6E9KV4GKH";
ReactGA.initialize(TRACKING_ID);


function App() {
  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [itIsOpen, setItIsOpen]= useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])

  const setPopupOpen = () => {
    setItIsOpen(!itIsOpen);
  }

  const Redirect = () => {
    return (
      <>
      <a href="https://lalowifi.me" style={{position:"fixed", bottom:"11vh", left:"20px", borderRadius:"50%",boxShadow:" navy 0px 5px 15px"}}>
      {wifi}
      </a>
      </>
    )
  }
  

  return (
    <WalletProvider>
    {/* <ConnectButton/> */}
    {itIsOpen && <Lalo setItIsOpen={setItIsOpen}/>}
    {isLoading ? (
      <Preloader/>
    ):(
      <>
      <InterractiveSection/>
      <Redirect/>
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
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Home />} />
        <Route path="/Wellness" element={<Wellness />} />
        <Route path="/NightLife" element={<NightLife />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/VIP" element={<VIP />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/rate-us" element={<Rating />} /> */}
      </Routes>
      <MobileFooter setItIsOpen={setPopupOpen} />
    </>
    )}

    </WalletProvider>
  );
}

export default App;
