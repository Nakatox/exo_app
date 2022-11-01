import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableHighlight  } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState, useRef } from 'react';

export function Map() {
  const DATA = [
    {
      title: 'Paris',
      region: {
        latitude: 48.856614,
        longitude: 2.3522219,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Merseille',
      region: {
        latitude: 43.296482,
        longitude: 5.36978,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Lyon',
      region: {
        latitude: 45.764043,
        longitude: 4.835659,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Toulouse',
      region: {
        latitude: 43.604652,
        longitude: 1.444209,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Nice',
      region: {
        latitude: 43.70313,
        longitude: 7.26608,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Nantes',
      region: {
        latitude: 47.218371,
        longitude: -1.553621,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Strasbourg',
      region: {
        latitude: 48.573405,
        longitude: 7.752111,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
    {
      title: 'Montpellier',
      region: {
        latitude: 43.610769,
        longitude: 3.876716,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    },
  ];

  const [userLocation, setUserLocation] = useState({});
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status == 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }
        );
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        ref={mapRef} 
        provider="google" 
        showsBuildings={true} 
        showsUserLocation={true}
        >
      </MapView>
      <View style={styles.listContainer}>
        <TouchableHighlight style={styles.button2} onPress={()=>{
          mapRef && mapRef.current.animateToRegion(userLocation, 1000);
          }}>
          <View>
            <Text style={{color:'white'}}>You</Text>
          </View>
        </TouchableHighlight>
        <FlatList
          ListHeaderComponent={<Text style={styles.title}>List of cities</Text>}
          data={DATA}
          numColumns={3}
          renderItem={
            ({ item }) => 
              <TouchableHighlight style={styles.button} onPress={()=>{
                mapRef.current.animateToRegion(item.region, 1000)
              }}>
                <View>
                  <Text style={{color:'white'}}>{item.title}</Text>
                </View>
              </TouchableHighlight>
          }
          keyExtractor={(item) => item.title}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => <Text>No data</Text>}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
  },
  listContainer: {
    position: 'absolute',
    flex:1,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    backgroundColor: 'white',
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#703ee5',
    margin: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: 60,
    height: 25,
    backgroundColor: 'black',
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
