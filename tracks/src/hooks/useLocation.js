import { useState, useEffect } from 'react';
import { 
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

//Check the current permissions of the app to ensure that location may be tracked
export default (shouldTrack, callback) => {
    const [ error, setError ] = useState(null);
    const [ subscriber, setSubcriber ] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, //update once every second
                distanceInterval: 10, //update once every 10 meters
            }, 
                callback
            );

            setSubcriber(sub);
        } catch (err) {
            setError(err);
        }
    };

    //Enables tracking when on TrackCreate screen and disables accordingly.
    useEffect (() => {
        if( shouldTrack ) {
            startWatching();
        } else {
            subscriber.remove();//stop the watching process entirely
            setSubcriber(null);
        }
    }, [shouldTrack, callback]);//compare to the last time the hook ran to determine if tracking is allowed

    return [ error ];
};