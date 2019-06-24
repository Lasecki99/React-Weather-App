import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'
//Klucz do API
const APIKey = 'cac3624fbb6c4e09bdee97290ecf4cec'

class App extends Component {

    state = {
        value: '',
        date: '',
        city: '',
        sunrise: '',
        temp: '',
        pressure: '',
        wind: '',
        err: false,
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleCitySubmit = (e) => {
        e.preventDefault()
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error('Nie udało się')
            })
            .then(response => response.json())
            .then(data => {
                const time = new Date().toLocaleString()
                console.log(data)
                this.setState(prevState => ({
                    err: false,
                    date: time,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    city: prevState.value,
                }))
            })
            .catch(err => {
                console.log(err)
                this.setState(prevState => ({
                    err: true,
                    city: prevState.value
                }))
            })
    }

    render() {
        return (
            <div className='app'>

                <Form submit={this.handleCitySubmit} change={this.handleInputChange} text={this.state.value} />
                <Result weather={this.state} error={this.state.err} />


            </div>
        )
    }
}

export default App;
