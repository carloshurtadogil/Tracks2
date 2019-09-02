import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Spacer } from '../components';

const SignupScreen = ({ navigation }) => {
    const { container } = styles;//Destructure styles
    
    //Data held for inputs
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <View style={ container }>
            <Spacer/>
            <Text h3>Sign Up for Tracker</Text>

            <Spacer/>
            <Input 
                label="Email"
                value={ email }
                onChangeText={ setEmail }
                autoCapitalize="none"
                autoCorrect={ false }
            />

            <Spacer/>
            <Input 
                label="Password"
                value={ password }
                onChangeText={ setPassword }
                autoCapitalize="none"
                autoCorrect={ false }
                secureTextEntry
            />

            <Spacer/>
            <Button title="Signup"/>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        marginLeft: 20,
        marginRight: 20
    }
});

export { SignupScreen };