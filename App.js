// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Main, Register, Welcome } from './Screens';
import { StackRouter } from 'react-navigation'
import UITab from './navigation/UITab';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UITab" component={UITab} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
