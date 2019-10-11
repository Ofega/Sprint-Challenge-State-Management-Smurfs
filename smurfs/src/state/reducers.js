import { ADD_SMURF, DELETE_SMURF, FETCH_SMURFS } from "./types";


const initialSmurfList = [];
export const smurfsReducer = (state = initialSmurfList, action) => {
    switch(action.type) {
        case ADD_SMURF:
        case DELETE_SMURF:
        case FETCH_SMURFS:
            return action.payload;
        default:
            return state;
    }
}