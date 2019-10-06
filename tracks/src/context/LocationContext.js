import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location'://update the user's current location
            return { ...state, currentLocation: action.payload };
        case 'change_name':
            return { ...state, name: action.payload };
        default:
            return state;
    }
};

//Update the name of the track accordingly
const changeName = (dispatch) => (name) => {
    dispatch({ type: 'change_name', payload: name });
};

//Change the recording flag to start recording
const startRecording = (dispatch) => () => {};


//Change the recording flag to stop recording
const stopRecording = (dispatch) => () => {};

//constantly update the users current location
const addLocation = (dispatch) => (location) => {
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext (
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation },
    { name: '', recording: false, locations: [], currentLocation: null }
);