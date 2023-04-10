import './App.css';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/Current-Weather/Current-Weather';
import Forecast from './Components/Forecast/Forecast';
import {CURRENT_WEATHER_API_URL} from './api'
import {WEATHER_API_KEY} from './api'
import { useState } from 'react';


function App() {

  const[currentWeather,setCurrentWeather] =useState(null)
  const[forecastWeather,setForecastWeather] =useState(null)


  const handleOnSearchChange =(searchData) => {
    const [lat , lon] = searchData.value.split(" ")

    const currentWeatherFetch= fetch(`${CURRENT_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch= fetch(`${CURRENT_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch,forecastFetch])
      .then( async (Response) => {
        const weatherResponse = await Response[0].json();
        const forecastResponse = await Response[1].json();

        setCurrentWeather({city :searchData.label , ...weatherResponse})
        setForecastWeather({city :searchData.label , ...forecastResponse})

      })
  }
  console.log(currentWeather)
  console.log(forecastWeather)
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;
