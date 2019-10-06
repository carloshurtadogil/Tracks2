import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => () => {};

/**
 * Function to make a request to api. Will create and store track information
 * to MongoDB for future reference
 * @param name The name of the track
 * @param locations Array of all location coordinates the user has traveled 
 *                  throughout recording
 */
const createTrack = (dispatch) => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);