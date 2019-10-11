import { FETCH_SMURFS, GET_SMURFS, ADD_NEW_SMURF } from "./types";


const initialSmurfList = [ 
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    }
];
export const smurfsReducer = (state = initialSmurfList, action) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return state;
        case GET_SMURFS:
            return state;
        case ADD_NEW_SMURF:
            return state;
        default:
            return state;
    }
}