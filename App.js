import React  from 'react'
//import React from 'react';
import {Text, TextInput, View, Button, Alert, TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './cc/Home'
import SignUpScreen from './cc/SignUp'
import LoginScreen from './cc/Login'
import DashScreen from './cc/DashBoard'


const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Hamza Task APP' }}
            />
            
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="DashBoard" component={DashScreen} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack