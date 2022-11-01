import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './Stacks/HomeStackScreen';
import UserStackScreen from './Stacks/UserStackScreen';
import { Map } from '../Screen/Map/Map';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export function TabBarNavigator() {
    return (
      <Tab.Navigator  
      screenOptions={({route})=>({ 
        headerShown: false,
        tabBarActiveTintColor: '#703ee5',
        tabBarInactiveTintColor: '#3c3c3c',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'default';

          if (route.name === 'HomeStack') {
            iconName = "home";
          } else if (route.name === 'UserStack') {
            iconName = "user";
          } else if (route.name === 'Map') {
            iconName = "map";
          }

          return (
          <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
            <Feather style={focused ? styles.iconFocused : styles.icon} name={iconName} size={24} color={focused ? "#703ee5" : "black"} />
          </View>
          )
        },
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

  const styles = StyleSheet.create({
    iconContainer: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderBottomWidth: 1,
      borderRadius: 50,
      width: 50,
      height: 50,
      padding: 5,
    },
    iconContainerFocused: {
      backgroundColor: 'white',
      borderColor: 'white',
      borderTopWidth: 1,
      borderRadius: 50,
      width: 60,
      height: 60,
      padding: 5,
    },
    icon: {
      alignSelf: 'center',
    },
    iconFocused: {
      alignSelf: 'center',
      transform: [{ scale: 1.2 }],
    },
  });