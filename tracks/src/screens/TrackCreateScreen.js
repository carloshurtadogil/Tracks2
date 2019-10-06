import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Map } from '../components';
import { Context as LocationContext } from '../context/LocationContext';
import  useLocation  from '../hooks/useLocation';

const TrackCreateScreen = () => {
    const { centerItemStyle, errorStyle } = styles;

    const { addLocation } = useContext(LocationContext);

    //Ensures that the application has permission to use the user's current location
    const [ error ] = useLocation( addLocation );

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