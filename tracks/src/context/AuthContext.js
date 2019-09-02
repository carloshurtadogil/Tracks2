import createDataContext from './createDataContext';

/*
    Class that handles the authentication process for Tracker
    1. Sign up
    2. Sign in
    3. Sign out
*/
const authReducer = ( state, action ) => {
    switch ( action.type ) {
        default:
            return state;
    }
};

//Handle the signup processs
const signup = ( dispatch ) => {
    return ({ email, password }) => {
        //Make api request to sign up with given email and password

        // if we sign up, modify our state and say that we are authenticated

        // if signing up fails, reflext an error message
    };
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
    { signup, signin, signout },
    { signedIn: false }
);