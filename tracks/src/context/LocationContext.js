import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location'://update the user's current location
            return { ...state, currentLocation: action.payload };
        case 'add_location'://add the new location to the locations array
            return { ...state, locations: [ ...state.locations, action.payload ] };
        case 'change_name'://update the track's name accordingly
            return { ...state, name: action.payload };
        case 'start_recording'://update the recording flag to start recording the user's movements
            return { ...state, recording: true };
        case 'stop_recording'://update the recording flag to stop recording the user's movements
            return { ...state, recording: false };
        default:
            return state;
    }
};

//Update the name of the track accordingly
const changeName = (dispatch) => (name) => {
    dispatch({ type: 'change_name', payload: name });
};

//Change the recording flag to start recording
const startRecording = (dispatch) => () => {
    dispatch({ type: 'start_recording' });
};


//Change the recording flag to stop recording
const stopRecording = (dispatch) => () => {
    dispatch({ type: 'stop_recording' });
};

//constantly update the users current location
const addLocation = (dispatch) => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location });//store the user's current location

    if( recording ) {
        dispatch({ type: 'add_location', payload: location });//add the location to the locations array for records
    }
};

export const { Context, Provider } = createDataContext (
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation },
    { name: '', recording: false, locations: [], currentLocation: null }
);