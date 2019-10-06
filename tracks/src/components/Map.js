import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

//The map that is to be displayed in TrackCreateScreen
const Map = () => {
    const { mapStyle } = styles;

    const { state: { currentLocation, locations } } = useContext(LocationContext);

    //Shows an activity indicator during loading process
    if ( !currentLocation ) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    
    return (
        <MapView 
            style={ mapStyle }
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            {/**The user's current location shown to the user */}
            <Circle
                center={ currentLocation.coords }
                radius={ 30 }
                strokeColor="rgba( 158, 158, 255, 1.0 )"
                fillColor="rgba( 158, 158, 255, 0.3 )"
            />

            <Polyline coordinates={ locations.map(loc => loc.coords) } />
        </MapView>
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        height: 300
    }
});

export { Map };