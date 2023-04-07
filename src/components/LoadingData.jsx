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
            <img src="https://www.freeiconspng.com/uploads/blue-smiley-face-png-31.png" alt="Actual Weather img" />
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