import { useState, useEffect } from "react";
import "./css/Nav.css";
import logo from "./assets/logo.png";
import toast from "react-hot-toast";
import {addHome, reallogo, installation} from "./icons"
import WeatherIcon from "../components/WeatherIcon"
import {NavLink} from "react-router-dom"
import { usePwa } from "react-pwa-app";

function Nav() {
  const pwa = usePwa();

  console.log(pwa.registration); // ServiceWorkerRegistration

  const [supportsPWA, setSupportsPWA] = useState(true);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const addToHomeScreen = (e) => {
    e.preventDefault();
    if (promptInstall) {
      promptInstall.prompt();
    }
    if (!supportsPWA) {
      toast.error("PWA not supported");
    }
  };
 
 
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
  
  return ( 
    <nav>
      <div className="nav-main">
        <div className="Logo-container">
          <NavLink to="/"><img src={logo} alt="logo image"/></NavLink>
        </div>
        <div className="Links-container">
          <NavLink to="/">
            <h5>⭐ Popular</h5>
          </NavLink>
          <NavLink to="/Wellness">
            <h5>Wellness</h5>
          </NavLink>
          <NavLink to="/Activities">
            <h5>Activities + Tours</h5>
          </NavLink>
          {/* <NavLink to="/Tours">
            <h5>Tours</h5>
          </NavLink> */}
          
          <NavLink to="/NightLife">
            <h5>Night Life</h5>
          </NavLink>
          <NavLink to="/VIP">
            <h5>VIP</h5>
          </NavLink>
          
        </div>
        {/* <h4><WalletConnect/></h4> */}
        <div className="pwa-con">
        {/* {supportsPWA ? ( */}
          <div className="pwa-btn">
          <button onClick={pwa.install}>install </button>
          </div>
            {/* ) : null} */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
