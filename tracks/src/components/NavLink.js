import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, routeName, text }) => {
    const { buttonText } = styles;

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate(routeName) }
        >
            <Text style={ buttonText } >
                { text }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        paddingTop: 15
    }
});

export default withNavigation(NavLink);