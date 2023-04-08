import React from 'react'

const LoadingData = () => {
  return (
    <div className='city-container'>
      <div className="top">
        <div className='location'>
          <p className='City'>Please, wait!</p>
        </div>
        <div className="img-temp-container">
          <div className="weather-img">
            <img src="https://res.cloudinary.com/djgkryxou/image/upload/v1680956209/Weather-App/face-png-42675_xazdb8.png" alt="Happy Face" />
          </div>
          <div className='temperature'>
            <h1>Loading</h1>
          </div>
        </div>
        <div className='description'>
          <p className='weather-status'>We are getting everything done 🚀</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoadingData