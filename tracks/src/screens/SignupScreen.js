import React, { useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
    const { background, container, errorMessage, title } = styles;//Destructure styles for convenience
    
    //Data held for inputs
    const { state, signup } = useContext( AuthContext ); 
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <LinearGradient
            colors={ [ '#485461', '#28313B'] }
            style={ background }
        >
            <View
                style={ container }
            >
                <MaterialIcons //temporary logo
                    name="gps-fixed" 
                    size={128} 
                    color="#03C8A8"
                    style={{ alignSelf: 'center' }}
                />

                <Spacer/>
                <Text h3 style={ title }>Tracker</Text>

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

                <TouchableOpacity
                    onPress={ () => navigation.navigate('Signin') }
                >
                    <Text>Already have an account? Sign in instead</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150,
        marginLeft: 20,
        marginRight: 20
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15
    }, 
    title: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'GillSans-Light'
    }
});

export { SignupScreen };