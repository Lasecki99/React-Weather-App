import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.submit} action="">
            <input onChange={props.change} placeholder="Wpisz nazwę miasta..." type="text" value={props.text} />
            <button>Wyszukaj miejscowość</button>
        </form>
    )
}

export default Form