import React from 'react'
import { iconUrlFromCode } from '../services/weatherServices'
function Forecast({item, title}) {
    console.log(item)

  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            {item.map((item) => (
                <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    04:30 PM
                </p>
                <img
                src = {iconUrlFromCode(item.icon)}
                alt =""
                className='w-12 my-1'
                />
                <p className='font-medium'>{item.temp.toFixed()}°</p>
            </div>
            ))}
        </div>
    </div>

  )
}

export default Forecast

