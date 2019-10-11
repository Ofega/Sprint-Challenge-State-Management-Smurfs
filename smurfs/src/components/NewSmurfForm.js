import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import uuid from 'uuid';

const NewSmurfForm = ({ addSmurf }) => {

    const initialFormValue = {
        name: '',
        age: '',
        height: '',
        id: uuid()
    }
    const [ inputValues, setInputValues ] = useState(initialFormValue);
    const { name, age, height } = inputValues;

    const handleChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSmurf(inputValues);
        setInputValues(initialFormValue);
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={age} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="height">Height</label>
                <input type="text" id="height" name="height" value={height} onChange={handleChange} />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default connect(state => state, actions)(NewSmurfForm);