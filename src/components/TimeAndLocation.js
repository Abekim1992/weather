import React from 'react'

function TimeAndLocation({weather}) {

  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
            Sun Aug 28 2022 | Local time: 15:34:08
            </p>
        </div>
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
                {weather.name}, {weather.country}
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation