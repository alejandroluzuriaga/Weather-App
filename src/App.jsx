import { Routes, Route} from 'react-router-dom'
import MyCityWeather from './pages/MyCityWeather'
import MyCityWeatherWeek from './pages/MyCityWeatherWeek'
import CitiesWeather from './pages/CitiesWeather'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import './App.css'
import { useState, useEffect} from 'react'
import GeoLocalization from './components/GeoLocalization'


function App() {
  const [background, setBackground] = useState({background: "var(--day)"})
  const [location, setLocation] = useState()
  const [accepted, setAccepted] = useState()

  useEffect(() =>{
      navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        setAccepted(true)
        setLocation(coordinates)
      },
      (error) =>{
        if (error.code === error.PERMISSION_DENIED){
          setAccepted(false)
        }
      }
    ) 
  }, [])
  
  const isNightTime = (data) =>{
    const hours = data.split(',')[1].split(':')[0]
    if (hours >= 21 || hours < 6) setBackground({
      background: "var(--night)"
    })
  }

  return (
    <>
    {!accepted ? <GeoLocalization /> : (
    <div className='layout' style={background}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MyCityWeather isNightTime={isNightTime} setLocation={setLocation} location={location}/>} index/>
        <Route path="/actual-weekly" element={<MyCityWeatherWeek location={location}/>} />
        <Route path="/othercities-weekly" element={<CitiesWeather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    ) }
    </>
  )
}

export default App
