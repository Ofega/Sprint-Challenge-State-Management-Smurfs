import React from 'react';
import { connect } from 'react-redux';

const Smurfs = ({ smurfs }) => {
    return (
        <ul>
            {
                smurfs.map(item => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default connect(state => state)(Smurfs);