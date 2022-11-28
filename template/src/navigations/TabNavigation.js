import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen, SettingsScreen } from '../screens/DemoScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name={'person'} size={25} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Icon name={'ios-settings'} size={25} color={color} />
                    }
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation
