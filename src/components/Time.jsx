import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./css/time-weather.css"
// import WeatherIcon from './WeatherIcon'

function Time() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return <div className="time-weather">{currentTime} <WeatherIcon/></div>;
}

export default Time;
