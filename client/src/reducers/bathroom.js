import {LOAD_BATHROOMS, LOAD_BATHROOMS_ERROR} from '../actions/types'

const initialState = []


export default function(state= initialState, action){
    const {type, payload} = action;
    switch(type){
        case LOAD_BATHROOMS:
            return [...state, payload];
        case LOAD_BATHROOMS_ERROR:
            return [...state, payload];
        default:
            return [...state, payload];
    }
}