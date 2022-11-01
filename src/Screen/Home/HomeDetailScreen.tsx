import React from 'react';
import { View, Text, Image } from 'react-native';

export function HomeDetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SALUT C'EST FLASH</Text>
        <Image
          style={{height:800,resizeMode: 'stretch', }}
          source={require('../../../assets/flash.png')}
        />
      </View>
    );
  }