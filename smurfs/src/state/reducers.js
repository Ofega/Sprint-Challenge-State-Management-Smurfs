import { GET_SMURFS } from "./types";


const initialSmurfList = [];
export const smurfsReducer = (state = initialSmurfList, action) => {
    switch(action.type) {
        case GET_SMURFS:
            return action.payload;
        default:
            return state;
    }
}