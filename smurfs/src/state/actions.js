import * as types from "./types";
import axios from 'axios';


export const getSmurfs = (smurfs) => {
    return {
        type: types.GET_SMURFS,
        payload: smurfs
    }
}

export const fetchSmurfs = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            dispatch(getSmurfs(response.data));
        })
}