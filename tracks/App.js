import React from 'react';
import {
	createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { 
  AccountScreen,
  LoadingScreen,
  SigninScreen,
  SignupScreen,
  TrackDetailScreen,
  TrackListScreen

 } from './src/screens';
 import TrackCreateScreen from './src/screens/TrackCreateScreen';
 import { Provider as AuthProvider } from './src/context/AuthContext';
 import { Provider as LocationProvider } from './src/context/LocationContext';
 import { Provider as TrackProvider } from './src/context/TrackContext';
 import { setNavigator } from './src/navigationRef';

 const switchNavigator = createSwitchNavigator({
   Loading: LoadingScreen, //Screen that resolves authentication issues
   //First flow that handles both the login and the signup processes
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  //After user logins in or signs up, they are taken to this new navigator
  mainFlow: createBottomTabNavigator({
    //Stack navigator to allow users to view the details of the tracks they have recorded.
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
 });

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App 
            ref={ (navigator) => { 
                setNavigator(navigator) 
              } 
            }
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};