import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import styled from 'styled-components';

const Smurfs = ({ smurfs, fetchSmurfs, deleteSmurf }) => {
    
    useEffect(() => {
        fetchSmurfs();
    }, [])

    return (
        <StyledList>
            {
                smurfs.map(item => {
                    return (
                        <li key={item.id}>
                            <p>Name: {item.name}</p>
                            <p>Age: {item.age}</p>
                            <p>Height: {item.height}</p>
                            <button type="button" onClick={() => deleteSmurf(item.id)}>Delete Smurf</button>
                        </li>
                    )
                })
            }
        </StyledList>
    )
}

export default connect(state => state, actions)(Smurfs);

const StyledList = styled.ul`
    list-style-type: none;
    margin-top: 3rem;

    li {
        background: #f9f9f9;
        padding: 1rem;
        border: 1px solid #ddd;
        margin-bottom: 2rem;
        border-radius: 5px;

        p {
            margin: 0;
            padding-bottom: 1rem;
        }

        button {
            background: rgba(255, 0, 0, .8);
            color: #fff;
            border: none;
            outline: none;
            height: 35px;
            font-sie: 1.2rem;
            border-radius: 5px;
            min-width: 100px;

            &:hover {
                background: red;
            }
        }
    }
`