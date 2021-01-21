/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './src/Screens/Screen';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: () => React.ReactNode = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor='red' hidden={true} />
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen}
          options={{ title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
