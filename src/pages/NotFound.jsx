import React from 'react'

const NotFound = () => {
  return (
    <div className='city-container'>
      <div className="top">
        <div className='location'>
          <p className='City'>Error 404.</p>
        </div>
        <div className="img-temp-container">
          <div className="weather-img">
            <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1680956280/Weather-App/sad-logo-black-and-white_gockhk.png" alt="Sad face" />
          </div>
          <div className='temperature'>
            <h1>Ups...</h1>
          </div>
        </div>
        <div className='description'>
          <p className='weather-status'>This URL does not exists.</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound