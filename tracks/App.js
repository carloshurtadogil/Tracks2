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
import { FontAwesome } from '@expo/vector-icons';

//Create Tab Options

//For TrackList View
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = () => {
  return {
    title: 'Tracks',
    tabBarIcon: <FontAwesome name='th-list' size={20} />
  };
};

//For CreateTrack View
const trackCreate = createStackNavigator({
  TrackCreate: TrackCreateScreen
});

trackCreate.navigationOptions = () => {
  return {
      title: 'Create a Track',
      tabBarIcon: <FontAwesome name='plus' size={20} />
  };
};

//For Account View
const accountManagement = createStackNavigator({
  Account: AccountScreen
});

accountManagement.navigationOptions = () => {
  return {
    title: 'Account',
    tabBarIcon: <FontAwesome name='user' size={20} />
  };
};


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
    trackListFlow,
    trackCreate,
    accountManagement
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