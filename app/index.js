import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from "./home"
import LogInScreen from "./logInScreen"
import DetailScreen from "./details"
import SellScreen from "./sellScreen"
import WelcomeScreen from "./welcome"
import SignUpScreen from './signUpScreen';
import CategoryScreen from './categoryScreen'



const Stack = createNativeStackNavigator();



const Index = () => {
  return (
      <Stack.Navigator initialRouteName='categoryScreen'>
      
        <Stack.Screen name="welcome"  component={WelcomeScreen} options={{headerShown:false, }}/>
        <Stack.Screen name="logInScreen" component={LogInScreen} options={{headerShown:false, }}/>
        <Stack.Screen name="signUpScreen" component={SignUpScreen} options={{headerShown:false, }}/>
        <Stack.Screen name="categoryScreen" component={CategoryScreen} options={{headerShown:false, }}/>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="sellScreen" component={SellScreen} options={{headerShown:false}} />
        <Stack.Screen name="details" component={DetailScreen} options={{headerShown:false}} />

      </Stack.Navigator>
  
  );
};


export default Index;