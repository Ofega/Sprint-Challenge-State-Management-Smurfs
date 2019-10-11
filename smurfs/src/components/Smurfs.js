import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';

const Smurfs = ({ smurfs, fetchSmurfs }) => {
    
    useEffect(() => {
        fetchSmurfs();
    }, [])

    return (
        <ul>
            {
                smurfs.map(item => {
                    return (
                        <li key={item.id}>
                            <p>Name: {item.name}</p>
                            <p>Age: {item.age}</p>
                            <p>Height: {item.height}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default connect(state => state, actions)(Smurfs);