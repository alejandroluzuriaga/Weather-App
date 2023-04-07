import React, {useEffect, useState} from 'react'

const WeekWeatherCard = ({list}) => {
  return !list ? 
  <h2>Error loading forecast 😢</h2> 
  : (
    <>
    { list.map((day) =>{
      return (
      <div className="day" key={day.index}>
        <img className="week-weather-icon" src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="Weather icon" />
        <p>{day.date}</p>
        <p className='day-card-weather-status'>
          {day.description.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </p>
        <div className="temps">
          <p>{Math.round(day.temp_max)}ºC</p>
          <p>{Math.round(day.temp_min)}ºC</p>
        </div>
      </div> 
      )
      })}
    </>
  )
}

export default WeekWeatherCard