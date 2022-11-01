import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {

    const navigation = useNavigation();
    return (
      <View style={{ flex: 1,marginVertical:10, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={styles.title}>Uber Tinder TikTok</Text>
        <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HomeDetailsScreen')}
        >
            <Text style={styles.text}>Menu Détaillé</Text>
        </Pressable>
        <Pressable
            style={styles.modalButton}
            onPress={() => navigation.navigate('ExempleFullScreenModal')}
        >
            <Text style={styles.text}>Modal Test</Text>
        </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      marginBottom: 10,
      backgroundColor: '#703ee5',
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#000000',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,

    },
  });