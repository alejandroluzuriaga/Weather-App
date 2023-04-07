const API_KEY = '054324d727ae389522b8dd0542802431'

export const WeatherFromLocation = async ({lat, lon}) =>{
    if (!lat || !lon) return {}

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json()
        return {
                name: data.name,
                date: new Date(data.dt * 1000).toLocaleString(),
                country: data.sys.country,
                icon: data.weather[0].icon,
                temperature: Math.round(data.main.temp),
                description: data.weather[0].description,
                feels_like: Math.round(data.main.feels_like),
                wind: data.wind?.speed,
                rain: data.rain?.['1h'],
                humidity: data.main.humidity,
                snow: data.snow?.['1h']
            };

    } catch (error) {
        throw new Error('There was an error fetching data from API');
    }
}

export const Forecast = async ({lat, lon}) =>{
    if (!lat || !lon) return {}

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('There was an error fetching data from API');
    }
}

export const cityForecast = async (city) =>{
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('There was an error fetching data from API');
    }
}
