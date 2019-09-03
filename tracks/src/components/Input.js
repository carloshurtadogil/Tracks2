import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
    const { containerStyle, inputStyle, labelStyle } = styles;

    return (
        <View style={ containerStyle }>
            <MaterialCommunityIcons 
                    name="email-outline" 
                    size={24} 
                    color="white"
                    style={{ alignSelf: 'center' }}
                />
            <Text style={ labelStyle }>{label}</Text>
            <TextInput
                autoCorrect={ false }
                onChangeText={ onChangeText }
                placeholder={ placeholder }
                secureTextEntry={ secureTextEntry }
                style={ inputStyle }
                value={ value }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: 'red',
        borderWidth: 1,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 2,
    },

    inputStyle: {
        color: '#000',
        flex: 2,
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5
    },

    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
    }
});

export { Input };