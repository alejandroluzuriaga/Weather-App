import React from 'react'

const GeoLocalization = () => {
  
  return (
    <div className='layout'>
      <div className='city-container'>
      <div className="top">
        <div className="img-temp-container">
          <div className="weather-img">
            <img src="https://www.freeiconspng.com/thumbs/localization-icon/red-map-localization-icon-5.png" alt="Actual Weather img" />
          </div>
          <div className='temperature'>
            <h1>Ups...</h1>
          </div>
        </div>
        <div className='description'>
          <p className='weather-status'>Enable geo-localization for using the app</p>
        </div>
      </div>
      
    </div>
    </div>
    ) 
}

export default GeoLocalization