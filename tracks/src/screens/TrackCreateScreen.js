import '../_mockLocation';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import { Map } from '../components';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const { centerItemStyle, errorStyle } = styles;

    const { addLocation } = useContext(LocationContext);
    const [ error, setError ] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, //update once every second
                distanceInterval: 10, //update once every 10 meters
            }, (location) => {
                addLocation(location);
            });

            setError(null);
        } catch (err) {
            setError(err);
        }
    };

    useEffect (() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={ centerItemStyle }>Create a Track</Text>

            <Map style={ centerItemStyle }/>
            { error ? <Text style={ errorStyle } >Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centerItemStyle: {
        alignSelf: 'center',
        paddingTop: 15
    },
    errorStyle: {
        color: 'red',
        fontStyle: 'italic'
    }
});

export { TrackCreateScreen };