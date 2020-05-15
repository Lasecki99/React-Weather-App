import React, { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type WeatherContext = {
  weatherData:
    | {
        city: string;
        pressure: string;
        sunset: number;
        sunrise: number;
        temp: string;
        wind: string;
        date: string;
      }
    | any;
  setWeatherData: (obj: object) => void;
  handleCitySubmit: (e: React.FormEvent) => void;
  inputValue: string;
  setInputValue: (val: string) => void;
  messageErr: string;
};

export const WeatherContext = createContext({} as WeatherContext);

const WeatherContextProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [messageErr, setMessageErr] = useState('');

  const handleCitySubmit = (e: React.FormEvent) => {
    if (inputValue) {
      e.preventDefault();
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${process.env.REACT_APP_API}&units=metric`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            setMessageErr('');
            return response;
          }
          throw Error('Nie udało się');
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          const obj = {
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: inputValue,
          };
          setWeatherData(obj);
        })
        .catch(() => {
          setMessageErr(inputValue);
        });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        handleCitySubmit,
        inputValue,
        setInputValue,
        messageErr,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
