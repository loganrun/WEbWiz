import {SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from '../actions/types'

const initialSate= {
    error: null,
    loading: true,
    verifyEmail: {
      error: null,
      loading: false,
    },
    recoverPassword: {
      error: null,
      loading: false,
    },
    profileEdit: {
      error: null,
      loading: false,
    },
    deleteUser: {
      loading: false,
      error: null,
    },
}

export default function(state=initialSate, action) {
    const {type, payload} = action;

    switch(type){
        case SIGN_UP_SUCCESS:
        case SIGN_IN_SUCCESS:
        
            return{
                ...state,
                ...payload,
                loading:    false
            }
        case SIGN_UP_FAIL:
        case SIGN_IN_FAIL:
            return{
                ...state,
                loading:    false
            }
        default:
        return state
    }
}