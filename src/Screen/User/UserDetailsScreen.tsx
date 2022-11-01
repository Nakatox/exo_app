import React from "react";
import { View, Text, Image } from "react-native";
import { Props } from "../../types/Route";
import { useRoute } from '@react-navigation/native';

export function UserDetailsScreen() {

    const { params } = useRoute<Props>()
    const { user } = params
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{user.email}</Text>
            <Text>{user.name.first}</Text>
            <Text>{user.name.last}</Text>
            <Text>{user.phone}</Text>
            <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: user.picture.large }}
            />
        </View>
    );
}

