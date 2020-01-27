import React, { useContext } from 'react';
import { WeatherContext } from '../contexts/WeatherContextProvider';

const Form = () => {

    const { handleCitySubmit, setInputValue, inputValue } = useContext(WeatherContext);

    return (
        <form onSubmit={e => handleCitySubmit(e)}>
            <input onChange={e => setInputValue(e.target.value)} placeholder="Wpisz nazwę miasta..." type="text" value={inputValue} />
            <button>Wyszukaj miejscowość</button>
        </form>
    )
}

export default Form