import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Map } from '../components';
import { Context as LocationContext } from '../context/LocationContext';
import  useLocation  from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { centerItemStyle, errorStyle } = styles;
    const { state, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);

    //Ensures that the application has permission to use the user's current location
    const [ error ] = useLocation( isFocused || state.recording, callback );

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={ centerItemStyle }>Create a Track</Text>

            <Map style={ centerItemStyle }/>

            { error ? <Text style={ errorStyle } >Please enable location services</Text> : null}

            <TrackForm/>
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

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Create a Track',
        tabBarIcon: <FontAwesome name='plus' size={20} />
    };
};

export default withNavigationFocus(TrackCreateScreen);