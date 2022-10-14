import { DateTime } from 'luxon'
const API_KEY = "07b14f5db44c4799651bef7007e8f64a"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=0.1257?appid=07b14f5db44c4799651bef7007e8f64a


const getWeatherData = (infoType, searchParams) => {
    const url =  new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
    .then((res) => res.json())
}
 
const formatCurrentWeather = (data) => {
    const{
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const formatForecastWeather = (data) => {
    let { list } = data;
    let daily = list.slice(1, 6).map((d) => {
        return {
            temp: d.main.temp,
            icon: d.weather[0].icon
        }
    })
    let hourly = list.slice(7, 12).map((d) => {
        return {
            temp: d.main.temp,
            icon: d.weather[0].icon
        }
    })
    return {daily, hourly}
}
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather)

    const {lat, lon} = formattedCurrentWeather
    console.log(lat, lon)

    const formattedForecastWeather = await getWeatherData('forecast', {
        lat, lon, units: searchParams.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

// const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a") => 
// DateTime.fromSeconds(secs).setZone(zone).toFormate(format)
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData 

export { iconUrlFromCode }