import React from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
import WeatherContextProvider from '../contexts/WeatherContextProvider';

const App = () => {
  return (
    <div className="app">
      <WeatherContextProvider>
        <Form />
        <Result />
      </WeatherContextProvider>
    </div>
  );
};

export default App;
