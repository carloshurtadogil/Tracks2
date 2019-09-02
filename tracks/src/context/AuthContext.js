import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

/*
    Class that handles the authentication process for Tracker
    1. Sign up
    2. Sign in
    3. Sign out
*/
const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }; // update error message
        case 'signup': 
            return { token: action.payload, errorMessage: '' };
        default:
            return state;
    }
};

//Handle the signup processs
const signup = ( dispatch ) => async ({ email, password }) => {
    try {
        //Make api request to sign up with given email and password
        const response = await trackerApi.post( '/signup', { email, password } );
        
        // if we sign up, modify our state and say that we are authenticated
        await AsyncStorage.setItem( 'token', response.data.token );
        dispatch({ type: 'signup', payload: response.data.token });
    } catch ( err ) {
        // if signing up fails, reflect an error message
        dispatch({ 
            type: 'add_error', 
            payload: 'Uh-oh! It appears that something went wrong. Ensure that you are entering a new email and password.'
        });
    }
};
 
const signin = ( dispatch ) => {
    return ({ email, password }) => {
        // try to sign in
        // handle success by updating state
        // handle failure by reflecting an error message
    };
};

const signout = ( dispatch ) => {
    return () => {
        // sign out of the application
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout }, // Methods available within the context
    { token: null, errorMessage: '' } // Current state object
);