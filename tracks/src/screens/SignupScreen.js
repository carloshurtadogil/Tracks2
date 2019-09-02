import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { container, errorMessage } = styles;//Destructure styles for convenience
    
    //Data held for inputs
    const { state, signup } = useContext( AuthContext ); 
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

            { state.errorMessage ? <Text style={ errorMessage }>{ state.errorMessage }</Text> : null }
            <Spacer/>
            <Button 
                title="Signup"
                onPress={ () => signup({ email, password }) }
            />

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
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    }
});

export { SignupScreen };