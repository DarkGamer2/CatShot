import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
const Navigator = () => {

  const Tab = createBottomTabNavigator();
  return (
  <NavigationContainer>
    <Tab.Navigator initalRouteName="Login">
    <Tab.Screen name="Login" component={LoginScreen}/>
  </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigator