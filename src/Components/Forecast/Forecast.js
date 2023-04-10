import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './Forecast.css'


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
    // console.log(forecastDays)
    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily_item'>
                                    <img alt='weather' className='small_icon' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='day'>{forecastDays[idx]}</label>
                                    <label className='description'>{item.weather[0].description}</label>
                                    <label className='min_max'>{Math.round(item.main.temp_min)}ºC / {Math.round(item.main.temp_max)}ºC</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='daily_details_grid'>
                                <div className='daily_details_grid_item'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className='daily_details_grid_item'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='daily_details_grid_item'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='daily_details_grid_item'>
                                    <label>Wind Speed :</label>
                                    <label>{item.wind.speed}m/s</label>
                                </div>
                                <div className='daily_details_grid_item'>
                                    <label>Feels Like :</label>
                                    <label>{Math.round(item.main.feels_like)}ºC</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>


        </>
    )
}

export default Forecast
