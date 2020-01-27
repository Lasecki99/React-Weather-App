import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContextProvider';

const Result = () => {

    const { weatherData, messageErr } = useContext(WeatherContext);
    let content = null;

    if (weatherData) {
        const { city, pressure, sunset, sunrise, temp, wind, date } = weatherData;
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div className='result'>
                <h3>Wyniki wyszukiwania dla: <em>{city}</em></h3>
                <hr />
                <h4>Dane dla dnia i godziny: {date}</h4>
                <hr />
                <h4>Aktualna temperatura: {temp} °C</h4>
                <hr />
                <h4>Wschód słońca dzisiaj o: {sunriseTime}</h4>
                <hr />
                <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
                <hr />
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
                <hr />
                <h4>Aktualne ciśnienie: {pressure} hPa</h4>
                <hr />
            </div>
        )
    }

    return (
        <div className='result'>
            {messageErr ? <h5>Nie mamy w bazie {messageErr}</h5> : content}
        </div>
    )
}

export default Result