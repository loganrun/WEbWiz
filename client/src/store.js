import {createStore, applyMiddleware, compose} from 'redux';
//import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import firebase from './firebase/firebase'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'

const initialState = {}



const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
const rrfconfig ={
    userProfile: 'users',
    useFirestoreForProfile: true
}

const store =createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        reactReduxFirebase(firebase, rrfconfig),
        reduxFirestore(firebase),
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})))
)

export default store