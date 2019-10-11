import * as types from "./types";
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3333';

const action = (type, payload) => {
    return {
        type,
        payload
    }
}

export const fetchSmurfs = () => dispatch => {
    axios.get('/smurfs')
        .then(response => {
            dispatch(action(types.FETCH_SMURFS, response.data));
        })
        .catch(error => console.log(error))
}

export const addSmurf = (smurf) => dispatch => {
    axios.post('/smurfs', smurf)
        .then(response => {
            dispatch(action(types.ADD_SMURF, response.data));
        })
        .catch(error => console.log(error))
}

export const deleteSmurf = (id) => dispatch => {
    axios.delete(`/smurfs/${id}`)
        .then(response => {
            dispatch(action(types.DELETE_SMURF, response.data));
        })
        .catch(error => console.log(error))
}