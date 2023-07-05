import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './Screen/home';
import DetailScreen from './Screen/detail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import {Store} from '../redux/store'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;