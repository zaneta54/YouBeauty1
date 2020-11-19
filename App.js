import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
//import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import {AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);




