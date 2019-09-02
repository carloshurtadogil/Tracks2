import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={ () => navigation.navigate('TrackDetail') }/>
        </View>
    );
};

const styles = StyleSheet.create({});

export { TrackListScreen };