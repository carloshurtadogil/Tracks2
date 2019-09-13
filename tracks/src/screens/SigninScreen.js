import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { AuthForm, Spacer } from '../components';
import NavLink from '../components/NavLink';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
    const { background, container, titleStyle } = styles;//Destructure styles for convenience

    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <LinearGradient
            colors={ [ '#485461', '#28313B'] }
            style={ background }
        >
            <View
                style={ container }
            >
                <NavigationEvents 
                    onWillBlur={ clearErrorMessage }
                />
                <MaterialIcons //temporary logo
                    name="gps-fixed" 
                    size={128} 
                    color="#03C8A8"
                    style={{ alignSelf: 'center' }}
                />

                <Spacer/>

                <AuthForm
                    headerText="Tracker"
                    errorMessage={ state.errorMessage }
                    onSubmit={ signin }
                    titleStyle={ titleStyle }
                    buttonText="Sign In"
                />

                <NavLink 
                    routeName="Signup"
                    text="Don't have an account? Sign up instead!"
                />
            </View>
        </LinearGradient>
    );
};

SigninScreen.navigationOptions = {
    header: null
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

export { SigninScreen };