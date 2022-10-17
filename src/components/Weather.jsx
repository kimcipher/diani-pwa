import React from 'react';
import ReactWeather, {useOpenWeather} from 'react-open-weather'
import "./css/weather-body.css"

const WEATHER_API_KEY="0bff0698379b96eaf19daa753dfa7f0d"

const lattitude =  4.2798
const longitude = 39.5947


const Weather = ({setIsOpen}) => {
  const {data, isLoading, errorMessage} = useOpenWeather({
    key: WEATHER_API_KEY,
    lat: lattitude,
    lon: longitude,
    lang: 'en',
    unit: 'metric',
  });
  return (
  <>
  <div className="weather-main-container">
    <div className="close"  onClick={() => setIsOpen(false)}>
    <h1>&#735;</h1>
    </div>
    <div className='weather-component'>
     <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      onClick={!setIsOpen}
      data={data}
      lang="en"
      locationLabel="Diani"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast={false}
     ></ReactWeather>
     </div>
     </div>
  </>
  )
}

export default Weather