import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import uuid from 'uuid';
import styled from 'styled-components';

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
        addSmurf({
            name: inputValues.name,
            age: Number(inputValues.age),
            height: inputValues.height + 'cm',
            id: inputValues.id
        });
        setInputValues(initialFormValue);
    }

    return (
        <StyledForm>
            <div className="form-group">
                <div className="input-fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                </div>
                <div className="input-fields">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" value={age} onChange={handleChange} />
                </div>
                <div className="input-fields">
                    <label htmlFor="height">Height</label>
                    <input type="text" id="height" name="height" value={height} onChange={handleChange} />
                </div>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </StyledForm>
    )
}

export default connect(state => state, actions)(NewSmurfForm);

const StyledForm = styled.form`
    display: flex;
    margin-top: 3rem;
    align-items: flex-end;

    @media (max-width: 768px) {
        display: block;
    }

    .form-group {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 120px);
        margin-right: 20px;

        @media (max-width: 768px) {
            width: 100%;
        }

        @media (max-width: 600px) {
            display: block;
        }

        div.input-fields {
            display: flex;
            flex-direction: column;
            width: calc(33.33% - 15px);

            @media (max-width: 600px) {
                width: 100%;
                margin-bottom: 1rem;
            }
    
            label {
                margin-bottom: .5rem;
            }
    
            input {
                height: 40px;
                padding: 0 1rem;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
        }
    }

    button {
        min-width: 120px;
        height: 40px;
        font-size: 1rem;
        border: none;
        outline: none;
        background: #ddd;
        border-radius: 5px;

        &:hover {
            background: rgba(0, 0, 0, .5);
        }

        @media (max-width: 768px) {
            margin-top: 1.5rem;
        }
    }
`