import React from 'react';
import { View, StyleSheet } from 'react-native';

/*
    Assistant component that adds spacing between elements in a view
 */
const Spacer = ({ children }) => {
    return (
        <View style={ styles.spacer }>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export { Spacer };