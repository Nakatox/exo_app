import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBarNavigator } from './src/Router/TabBarNavigator';
import ExempleFullScreenModal from './src/Screen/Modal/ExempleFullScreenModal';

const RootStack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>

        <RootStack.Group>
          <RootStack.Screen
              name="tabBar" 
              component={TabBarNavigator} 
            />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
            <RootStack.Screen
              name="ExempleFullScreenModal" 
              component={ExempleFullScreenModal} 
            />
        </RootStack.Group>

      </RootStack.Navigator>
    </NavigationContainer>

  );
}
