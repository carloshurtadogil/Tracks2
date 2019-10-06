import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';

export default () => {
    const { 
        state: { locations, name } 
    } = useContext(LocationContext);
    const { createTrack } = useContext(TrackContext);

    //Function to call upon the createTrack function within TrackContext
    //To be used by a button
    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack];
};