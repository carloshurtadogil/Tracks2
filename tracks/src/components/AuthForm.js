import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Spacer } from './Spacer';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText, titleStyle, isSignUp }) => {
    const {  boxShadow } = styles;//Destructure styles for convenience

    //Data held for inputs
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cpassword, setCPassword ] = useState('');

    return (
        <View>
            <Text h3 style={ titleStyle }>{ headerText }</Text>

            <Spacer/>
            <Fumi
                label={'Email'}
                iconClass={FontAwesomeIcon}
                iconName={'envelope'}
                iconColor={ '#485461' }
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                style={ boxShadow }
                value={ email }
                onChangeText={ setEmail }
                autoCapitalize="none"
                autoCorrect={ false }
            />

            <Spacer/>
            <Fumi
                label={ 'Password' }
                iconClass={ FontAwesomeIcon }
                iconName={ 'key' }
                iconColor={ '#485461' }
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                style={ boxShadow }
                value={ password }
                onChangeText={ setPassword }
                autoCapitalize="none"
                autoCorrect={ false }
                secureTextEntry
            />

            { isSignUp ? 
                <>
                    <Spacer/>
                    <Fumi
                        label={ 'Confirm Password' }
                        iconClass={ FontAwesomeIcon }
                        iconName={ 'key' }
                        iconColor={ '#485461' }
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={ boxShadow }
                        value={ cpassword }
                        onChangeText={ setCPassword }
                        autoCapitalize="none"
                        autoCorrect={ false }
                        secureTextEntry
                    />
                </>
                : null }

            { errorMessage ? <Text style={ styles.errorMessage }>{ errorMessage }</Text> : null }
            <Spacer/>

            <Button 
                title={ buttonText }
                raised={ true }
                onPress={ () => onSubmit({email, password}) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxShadow: {
        shadowOffset:{  width: 100,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0
    },
    errorMessage: {
        color: 'red',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5
    }
});

export { AuthForm };