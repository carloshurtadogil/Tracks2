import { useState, useEffect } from 'react';
import { 
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync
} from 'expo-location';

//Check the current permissions of the app to ensure that location may be tracked
export default (callback) => {
    const [ error, setError ] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, //update once every second
                distanceInterval: 10, //update once every 10 meters
            }, 
                callback
            );

            setError(null);
        } catch (err) {
            setError(err);
        }
    };

    useEffect (() => {
        startWatching();
    }, []);

    return [ error ];
};