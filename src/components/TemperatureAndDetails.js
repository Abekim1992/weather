import React from 'react'
import {UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { iconUrlFromCode } from '../services/weatherServices';
function TemperatureAndDetails({weather}) {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>
                {weather.details}
            </p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img
                src ={iconUrlFromCode(weather.icon)}
                alt =""
                className="w-20"
            />
            <p className="text-5xl">{weather.temp.toFixed()}°</p>
            <div className = "flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTemperature size={18} className="mr-1"/>
                    Real Feel: 
                    <span className="font-medium ml-1">{weather.feels_like.toFixed()}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilWind size={18} className="mr-1"/>
                    Wind: 
                    <span className="font-medium ml-1">{weather.speed.toFixed()} mph</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <UilTear size={18} className="mr-1"/>
                    Humidty: 
                    <span className="font-medium ml-1">{weather.humidity}%</span>
                </div>
            </div>
        </div>
        <div className = "flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun/>
            <p className="font-light">
                Rise: <span className="font-medium ml-1">{weather.sunrise}</span>
            </p>
            <p className="font-light"></p>
            <UilSunset/>
            <p className="font-light">
                Set: <span className="font-medium ml-1">{weather.sunset}</span>
            </p>
            <p className="font-light"></p>
            <UilSun/>
            <p className="font-light">
                High: <span className="font-medium ml-1">{weather.temp_max.toFixed()}°</span>
            </p>
            <p className="font-light"></p>
            <UilSun/>
            <p className="font-light">
                Low: <span className="font-medium ml-1">{weather.temp_min.toFixed()}°</span>
            </p>
            <p className="font-light"></p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails