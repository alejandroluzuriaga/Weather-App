import React from 'react'
import WeekWeatherCard from './WeekWeatherCards'
import { getDaySummaryWeather } from '../pages/MyCityWeatherWeek'

const ForecastWeather = ({data}) => {
  return (
    <div className='week-container'>
        <div className='location'>
          <p className='City'>{data.city.name}, {data.city.country}</p>
        </div>
        <div className="week-weather">
          <WeekWeatherCard list={getDaySummaryWeather(data.list)}/>
        </div>
    </div>
  )
}

export default ForecastWeather