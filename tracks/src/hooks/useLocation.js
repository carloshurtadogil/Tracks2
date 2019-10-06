import { useState, useEffect } from 'react';
import { 
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

//Check the current permissions of the app to ensure that location may be tracked
export default (shouldTrack, callback) => {
    const [ error, setError ] = useState(null);

    //Enables tracking when on TrackCreate screen and disables accordingly.
    useEffect (() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000, //update once every second
                    distanceInterval: 10, //update once every 10 meters
                }, 
                    callback
                );
            } catch (err) {
                setError(err);
            }
        };

        if( shouldTrack ) {
            startWatching();
        } else {
            if( subscriber ) {//in case of a subtle bug
                subscriber.remove();//stop the watching process entirely
            }
            subscriber = null;
        }

        return () => {
            if( subscriber ) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);//compare to the last time the hook ran to determine if tracking is allowed

    return [ error ];
};