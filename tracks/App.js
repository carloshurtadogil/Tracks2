import React from 'react';
import {
	createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { 
  AccountScreen,
  SigninScreen,
  SignupScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen

 } from './src/screens';

 const switchNavigator = createSwitchNavigator({
   //First flow that handles both the login and the signup processes
  loginFlow: createStackNavigator({
    SignUp: SignupScreen,
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

 export default createAppContainer(switchNavigator);