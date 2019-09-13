import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { AuthForm, Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { background, container, errorMessage, titleStyle } = styles;//Destructure styles for convenience
    
    //Data held for inputs
    const { state, signup, clearErrorMessage } = useContext( AuthContext ); 
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

                <NavigationEvents
                    onWillBlur={ clearErrorMessage }
                />

                <AuthForm
                    headerText="Tracker"
                    errorMessage={ state.errorMessage }
                    onSubmit={ signup }
                    titleStyle={ titleStyle }
                    buttonText="Sign Up"
                />

                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in instead!"
                />
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
    titleStyle: {
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'GillSans-Light'
    }
});

export { SignupScreen };