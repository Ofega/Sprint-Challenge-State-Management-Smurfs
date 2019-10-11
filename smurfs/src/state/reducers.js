import { GET_SMURFS, ADD_NEW_SMURF } from "./types";


const initialSmurfList = [];

export const smurfsReducer = (state = initialSmurfList, action) => {
    switch(action.type) {
        case GET_SMURFS:
            return action.payload;
        case ADD_NEW_SMURF:
            return state;
        default:
            return state;
    }
}