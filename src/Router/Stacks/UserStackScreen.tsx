
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserScreen } from '../../Screen/User/UserScreen';
import { UserDetailsScreen } from '../../Screen/User/UserDetailsScreen';

const UserStack = createNativeStackNavigator();

export default function UserStackScreen() {
    return (
        <UserStack.Navigator >
            <UserStack.Screen name="User" component={UserScreen} />
            <UserStack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
        </UserStack.Navigator>
    );
}
