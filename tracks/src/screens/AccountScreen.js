import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
 
const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Spacer>
                <Button 
                    title="Sign Out"
                    onPress={ signout }
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: <FontAwesome name='gear' size={20} />
    };
};

AccountScreen.navigationOptions = () => {
    return {
      title: 'Account Properties',
      headerStyle: {
        backgroundColor: '#485461',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18
      }
    };
  };

export { AccountScreen };