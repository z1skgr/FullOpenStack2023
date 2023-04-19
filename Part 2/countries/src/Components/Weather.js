import { useState, useEffect } from 'react'
import axios from 'axios'

// returns weather for a specific capital city,
// uses state to save weather,
// apiKey is given on .env,
// state is not  updated instantly,
export const GetWeather = ({ city }) => {
    const capital = city[0]
    const apiKey = process.env.REACT_APP_API_KEY
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&units=metric&APPID=' + apiKey + ''
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(url).then(response => {
                setWeather(response.data)
            })
    }, [url])
    

    // Uses Elvis operator ?:
    // if weather is undefined, component will still render and not crash.
    // const temperature = weather?.main?.temp || 'Temperature is loading...'
    const temperature = weather?.main?.temp
    const feelsLike = weather?.main?.feels_like
    const wind = weather?.wind?.speed
    const humidity = weather?.main?.humidity
    const description = weather?.weather?.[0].description
    const icon = weather?.weather?.[0].icon

    return (
        <div>
            
            <h3> The weather in {capital} right now:  {description} </h3>
            
            {icon !== undefined && <img
                src={'http://openweathermap.org/img/wn/' + icon + '@4x.png'}
                alt='weather icon.png'
            />}

            <p> Temperature: {' '}  {temperature} °C ( feels like {feelsLike} °C)</p>

            <p> Wind: {' '} {wind} m/s </p>

            <p> Humidity: {' '} {humidity} % </p>

        </div>
    )
}
