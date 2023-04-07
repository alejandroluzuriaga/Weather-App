import React, { useEffect, useState} from 'react'
import { WeatherFromLocation } from '../API/API'
import LoadingData from '../components/LoadingData'
import ActualWeather from '../components/ActualWeather'

const MyCityWeather = ({isNightTime, setLocation, location}) => {
  const [data, setData] = useState()

  useEffect(() =>{
    const getActualWeather = async(coordinates) =>{
      try {
        const data = await WeatherFromLocation({ 
          lat: location.latitude, 
          lon:location.longitude
        })
        setData(data)
        setLocation(coordinates)
        isNightTime(data.date)
      } catch (error) {
        throw new Error('There was an error fetching data from API (ActualWeather)');
      }
    }
    if (location){
      getActualWeather(location)
    }
  }, [location])

  return (
  <>
  {!data ? 
    <LoadingData/> : <ActualWeather data={data}/>}
  </>
  )
}

export default MyCityWeather