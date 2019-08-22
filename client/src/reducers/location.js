import {INITIAL_LOCATION, INITIAL_LOCATION_ERROR} from '../actions/types'
const initialState = []


export default function(state= initialState, action){
    const {type, payload} = action;
    switch(type){
        case INITIAL_LOCATION:
            return [...state, payload];
        case INITIAL_LOCATION_ERROR:
            return [...state, payload];
        default:
            return [...state, payload];
    }
}