import {BUSINESS_SIGN_UP_SUCCESS, BUSINESS_SIGN_UP_FAIL,  BUSINESS_SIGN_IN_SUCCESS, BUSINESS_SIGN_IN_FAIL} from '../actions/types'

const initialSate= {
    token: localStorage.getItem('token'),
    isAuthenticated:    null,
    loading:    true,
    user:   null
}

export default function(state=initialSate, action) {
    const {type, payload} = action;

    switch(type){
        case BUSINESS_SIGN_UP_SUCCESS:
        case BUSINESS_SIGN_IN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:    false
            }
        case BUSINESS_SIGN_UP_FAIL:
        case BUSINESS_SIGN_IN_FAIL:
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