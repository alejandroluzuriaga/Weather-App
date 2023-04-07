import React from 'react'

const ActualWeather = ({data}) => {
  return (
    <div className='city-container'>
    <div className="top">
      <div className='location'>
        <p className='City'>{data.name}, {data.country}</p>
      </div>
      <div className="time">
        <p>{data.date}</p>
      </div>
      <div className="img-temp-container">
        <div className="weather-img">
          <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="Actual Weather img" />
        </div>
        <div className='temperature'>
          <h1>{data.temperature}ºC</h1>
        </div>
      </div>
      <div className='description'>
        <p className='weather-status'>{data.description}</p>
      </div>
    </div>
    <div className="bottom">
      <div className="feels">
        <div className="feels-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="10" y1="9" x2="14" y2="9" />
          </svg>
          <h2>Feels like:</h2>
        </div>
        <p>{data.feels_like}ºC</p>
      </div>
      <div className="humidity">
        <div className="humidity-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
          </svg>
          <h2>Humidity:</h2>
        </div>
        <p>{data.humidity}%</p>
      </div>
      <div className="wind">
        <div className="wind-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
          </svg>
          <h2>Wind:</h2>
        </div>
        <p>{data.wind} MP/H</p>
      </div>
      <div className="rain-forecast">
        <div className="rain-forecast-container">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-rain" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
          <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
        </svg>
          <h2>Rain:</h2>
        </div>
        {data.rain ? <p>{data.rain}%</p>: <p>0%</p>}
        </div>
        <div className="snow">
          <div className="snow-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-snowflake" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
              <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
            </svg>
            <h2>Snow:</h2>
          </div>
          {data.snow ? <p>{data.snow}mm</p>: <p>0 mm</p>} 
        </div>          
    </div>
  </div>
  )
}

export default ActualWeather