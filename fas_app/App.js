import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/BottomTab/home';
import Scanner_Cam from './src/BottomTab/scanner_cam';
import History from './src/Stack/history';
import Scanner_Results from './src/Stack/scanner_results';
import Welcome from './src/Stack/welcome';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function TabNavigator() {
  return(
    <Tab.Navigator>
      < Tab.Screen name='Home' component={StackNavigator} />
      < Tab.Screen name='Scanner_Cam' component={Scanner_Cam} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={Home} />
      <Stack.Screen name='History' component={History} />      
      <Stack.Screen name='Scanner_Results' component={Scanner_Results} />      
      <Stack.Screen name='Welcome' component={Welcome} />      
    </Stack.Navigator>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeScreen' component={Home} />
      <Drawer.Screen name='History' component={History} />      
      <Drawer.Screen name='Scanner_Results' component={Scanner_Results} />      
      <Drawer.Screen name='Welcome' component={Welcome} />      
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    // <Home />
    // <Welcome />
  );
}
