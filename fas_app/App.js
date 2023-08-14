import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Screens
import Home from './src/BottomTab/home';
import Scanner_Cam from './src/BottomTab/scanner_cam';
import History from './src/Stack/history';
import Scanner_Results from './src/Stack/scanner_results';
import Welcome from './src/Stack/welcome';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screen names
const homeName = 'Home';
const scannerName = 'Scanner';
const historyName = 'History';
const resultsName = 'Results';
const welcomeName = 'App Guide';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()


function TabNavigator() {
  return(
    <Tab.Navigator
        initalRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color,size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
          } else if (rn === scannerName) {
              iconName = focused ? 'camera' : 'camera-outline'; 
          } else if (rn === historyName) {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          } else if (rn === welcomeName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
        })}
        
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'grey',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 90},
        }}
        
        >
          <Tab.Screen name={homeName} component={Home}/>
          <Tab.Screen name={scannerName} component={Scanner_Cam}/>
          <Tab.Screen name={historyName} component={History}/>
          <Tab.Screen name={welcomeName} component={Welcome}/>

          </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
