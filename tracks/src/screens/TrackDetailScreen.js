import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import { Spacer } from '../components';

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam('_id');
    const { state } = useContext(TrackContext);

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

    const { map, textStyle } = styles;

    return (
        <>
            <Spacer>
                <Text style={ textStyle }>{ track.name }</Text>
            </Spacer>

            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={ map }
            >
                <Polyline 
                    coordinates={
                        track.locations.map(loc => loc.coords)
                    } 
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    },
    textStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30
    }
});

TrackDetailScreen.navigationOptions = ({navigation}) => {
    return {
        title: 'Track Details',
        headerStyle: {
            backgroundColor: '#485461',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18
        },
    };
};

export { TrackDetailScreen };