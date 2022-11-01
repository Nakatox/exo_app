import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeDetailsScreen } from '../../Screen/Home/HomeDetailScreen';
import { HomeScreen } from '../../Screen/Home/HomeScreen';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="HomeDetailsScreen" component={HomeDetailsScreen} />
      </HomeStack.Navigator>
    );
  }