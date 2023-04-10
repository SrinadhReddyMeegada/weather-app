import "./Current-Weather.css"
import React from 'react'

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather_description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather_icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.floor(data.main.temp)}ºC</p>
                <div className="details">
                    <div className="parameter_row">
                        <span className="parameter_label">Details</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">feels like</span>
                        <span className="parameter_value">{Math.floor(data.main.feels_like)}ºC</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Wind</span>
                        <span className="parameter_value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Humidity</span>
                        <span className="parameter_value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter_row">
                        <span className="parameter_label">Pressure</span>
                        <span className="parameter_value">{data.main.pressure} pha</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;
