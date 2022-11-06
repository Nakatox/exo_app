import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Props } from "../../types/Route";
import { useRoute } from '@react-navigation/native';

export function UserDetailsScreen() {

    const { params } = useRoute<Props>()
    const { user } = params
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: user.picture.large }}
            />
            <View style={styles.textContainer}>
                <Text style={{ marginBottom:20, fontSize:18 }}><Text style={{ fontWeight:'700' }}>Email : </Text>{user.email}</Text>
                <Text style={{ marginBottom:20, fontSize:18 }}><Text style={{ fontWeight:'700' }}>First name : </Text>{user.name.first}</Text>
                <Text style={{ marginBottom:20, fontSize:18 }}><Text style={{ fontWeight:'700' }}>Last name : </Text>{user.name.last}</Text>
                <Text style={{ marginBottom:20, fontSize:18 }}><Text style={{ fontWeight:'700' }}>Number : </Text>{user.phone}</Text>
                <Text style={{ marginBottom:20, fontSize:18 }}><Text style={{ fontWeight:'700' }}>Sexe : </Text>{user.sexe}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    image : {
        borderRadius: 50,
        width: 200,
        height: 200,
        borderWidth: 5,
        borderColor: '#703ee5',
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textContainer: {
        marginTop: 20,
        justifyContent: 'center',
        fontSize: 30,
    }
});


