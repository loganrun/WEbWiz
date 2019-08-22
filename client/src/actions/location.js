import {INITIAL_LOCATION, INITIAL_LOCATION_ERROR} from './types'


export const initialLocation = (position, alertType) =>dispatch=>{

    dispatch({
        type: INITIAL_LOCATION,
        payload:    {position, alertType}
    });

}

export const initialLocationError = (error, alertType) => dispatch=>{
    dispatch({
        type: INITIAL_LOCATION_ERROR,
        payload:    {error, alertType}
    })

}