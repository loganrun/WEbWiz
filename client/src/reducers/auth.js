import {SIGN_UP_SUCCESS, SIGN_UP_FAIL} from '../actions/types'

const initialSate= {
    token: localStorage.getItem('token'),
    isAuthenticated:    null,
    loading:    true,
    user:   null
}

export default function(state=initialSate, action) {
    const {type, payload} = action;

    switch(type){
        case SIGN_UP_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:    false
            }
        case SIGN_UP_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token:  null,
                isAuthenticated: false,
                loading:    false
            }
        default:
        return state
    }
}