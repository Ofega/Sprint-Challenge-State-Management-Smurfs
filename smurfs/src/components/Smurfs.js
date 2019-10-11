import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../state/actions';

const Smurfs = ({ smurfs, fetchSmurfs, deleteSmurf }) => {
    
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
                            <button type="button" onClick={() => deleteSmurf(item.id)}>Delete Smurf</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default connect(state => state, actions)(Smurfs);