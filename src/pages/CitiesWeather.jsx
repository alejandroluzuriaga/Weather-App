import React, { useEffect, useState } from 'react'
import { cityForecast } from '../API/API'
import { cities } from '../constants/cities'
import { getDaySummaryWeather } from './MyCityWeatherWeek'
import ForecastWeather from '../components/ForecastWeather'
import LoadingData from '../components/LoadingData'

const CitiesWeather = () => {
  const [data, setData] = useState()
  const [city, setCity] = useState('Madrid')

  useEffect(() =>{ 
    const getCityForecast = async (name) =>{
      try {
        const data = await cityForecast(city)
        setData(data)
      } catch (error) {
        throw new Error('There was an error fetching data from API (CityWeather)');
      }
    }
    getCityForecast(city)
  }, [city])

  const handleCityChange = (e) =>{
    setCity(e.target.value)
  }

  return (
    <>
      <div className='week-container'>
        <div className="city-select">
          <select onChange={handleCityChange}>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!data ? <LoadingData /> : <ForecastWeather data={data} />}
    </>
  )
}

export default CitiesWeather