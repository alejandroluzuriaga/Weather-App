import React, {useEffect, useState } from 'react'
import WeekWeatherCards from '../components/WeekWeatherCards'
import {Forecast} from '../API/API'
import LoadingData from '../components/LoadingData';
import ForecastWeather from '../components/ForecastWeather';

export const getDaySummaryWeather = (list)=> {
  const days = {};
  let index = 1;
  
  for (const sample of list) {
    const date = new Date(sample.dt_txt).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
    });

    if (!days[date]) {
      days[date] = {
        date: date,
        description: sample.weather[0].description,
        temp_max: sample.main.temp_max,
        temp_min: sample.main.temp_min,
        icon: sample.weather[0].icon,
        index: index
      };
      index++
    } else {
      if (sample.main.temp_max > days[date].temp_max) {
        days[date].temp_max = sample.main.temp_max;
        days[date].description = sample.weather[0].description;
        days[date].icon = sample.weather[0].icon;

      } 
      if (sample.main.temp_min < days[date].temp_min) {
        days[date].temp_min = sample.main.temp_min;
      }
    }
  }
  const nextDays = [];
  let i = 0;
  for (const date in days) {
    if (i < 5) {
      nextDays.push({
        description: days[date].description,
        date: days[date].date,
        temp_max: days[date].temp_max,
        temp_min: days[date].temp_min,
        icon: days[date].icon,
        index: days[date].index
      });
      i++;
    } else {
      break;
    }
  }
  return nextDays;
}

const MyCityWeatherWeek = ({location}) => {
  const [data, setData] = useState('')

  useEffect(() => {
    if (location) {
      const getForeCast = async(coordinates) =>{
        try {
          const data = await Forecast({lat: location.latitude, lon: location.longitude})
          setData(data)
        } catch (error) {
          throw new Error('There was an error fetching data from API (ActualWeather)');
        }
      }
      getForeCast(location);
    }
  }, [location])


    const getDaySummaryWeather = (list)=> {
    const days = {};
    let index = 1;
    
    for (const sample of list) {
      const date = new Date(sample.dt_txt).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
      });

      if (!days[date]) {
        days[date] = {
          date: date,
          description: sample.weather[0].description,
          temp_max: sample.main.temp_max,
          temp_min: sample.main.temp_min,
          icon: sample.weather[0].icon,
          index: index
        };
        index++
      } else {
        if (sample.main.temp_max > days[date].temp_max) {
          days[date].temp_max = sample.main.temp_max;
          days[date].description = sample.weather[0].description;
          days[date].icon = sample.weather[0].icon;

        } 
        if (sample.main.temp_min < days[date].temp_min) {
          days[date].temp_min = sample.main.temp_min;
        }
      }
    }
    const nextDays = [];
    let i = 0;
    for (const date in days) {
      if (i < 5) {
        nextDays.push({
          description: days[date].description,
          date: days[date].date,
          temp_max: days[date].temp_max,
          temp_min: days[date].temp_min,
          icon: days[date].icon,
          index: days[date].index
        });
        i++;
      } else {
        break;
      }
    }
    return nextDays;
  }

  return (
    <>
    {!data ? <LoadingData/> : <ForecastWeather data={data} getDaySummaryWeather={getDaySummaryWeather} />}
    </>
  )
}

export default MyCityWeatherWeek