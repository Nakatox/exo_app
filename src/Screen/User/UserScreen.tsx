import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { User } from "../../types/User";


export function UserScreen() {

    const navigation = useNavigation();

    const [users, setUsers] = useState<Array<User>>([]);
    const [isFetching, setIsFetching] = useState(false);

    const fetchUsers = async (nbUser: Number = 5) => {
        try {
            const response = await fetch(
                `https://randomuser.me/api/?results=${nbUser}`
                );
            const json = await response.json();
            setUsers(json.results);
            
        } catch (error) {
          console.error(error);
        }
        return
    };

    useEffect(() => {
        setIsFetching(true);
        fetchUsers();
        setIsFetching(false);
      }, []);

    const addUser = async () => {
        try {
            const response = await fetch(
                'https://randomuser.me/api/?results=1'
                );
            const json = await response.json();
            setUsers([...users, json.results[0]]);
            
        } catch (error) {
            console.error(error);
        }
    }

    const removeUsers = () => {
        setUsers([]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <Button
                        title="Ajouter un nouvel utilisateur"
                        onPress={addUser}
                    />
                }
                ListEmptyComponent={
                    <Text style={{ marginTop:20, alignSelf:'center', fontSize:18 }}>Aucun utilisateur n'a été chargé.</Text>
                }
                refreshing={isFetching}
                onRefresh={()=>{fetchUsers(users.length)}}
                data={users}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('UserDetailsScreen', {
                            user: item
                        })
                    }}>
                        <View style={styles.item}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.picture.large }}
                            />
                            <Text style={styles.title}>{item.name.first}</Text>
                                
                        </View>
                    </TouchableOpacity>
                )}

                ListFooterComponent={
                    users.length > 0 && <Button
                        title="Retirer tous les utilisateurs"
                        onPress={removeUsers}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#e8e8e8',
        borderColor:'#e8e8e8',
        borderBottomColor: '#703ee5',
        borderLeftColor: '#703ee5',
        borderWidth: 2,
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth:2,
        borderColor: '#e8e8e8',
    }

});