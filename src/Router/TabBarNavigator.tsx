import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './Stacks/HomeStackScreen';
import UserStackScreen from './Stacks/UserStackScreen';
import { Map } from '../Screen/Map/Map';

const Tab = createBottomTabNavigator();

export function TabBarNavigator() {
    return (
      <Tab.Navigator  
      screenOptions={({route})=>({ 
        headerShown: false,
        tabBarActiveTintColor: '#703ee5',
        tabBarInactiveTintColor: '#3c3c3c',
        })}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen
        name="UserStack" 
        component={UserStackScreen} 
        
        />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    );
  }