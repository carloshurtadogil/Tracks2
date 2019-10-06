import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../navigationRef';

export default () => {
    const { 
        state: { locations, name },
        reset
    } = useContext(LocationContext);
    const { createTrack } = useContext(TrackContext);

    //Function to call upon the createTrack function within TrackContext
    //To be used by a button
    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();//Resets the form
        navigate('TrackList');//Return to TrackListScreen to view new entry
    };

    return [saveTrack];
};